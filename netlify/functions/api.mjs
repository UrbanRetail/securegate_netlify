import pg from 'pg';
import { createHash, randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const { Pool } = pg;
const scrypt = promisify(scryptCallback);
const SESSION_SECONDS = 8 * 60 * 60;
const STATUS_FLOW = ['Pending', 'Unloading in Progress', 'Unloaded', 'GRN Done'];
let pool;

export const config = { path: '/api/*', rateLimit: { action: 'rate_limit', aggregateBy: 'ip', windowSize: 60, windowLimit: 120 } };

class ApiError extends Error { constructor(status, message) { super(message); this.status = status; } }
const clean = (value, max = 160) => String(value ?? '').trim().slice(0, max);
const nameKey = (value) => clean(value).replace(/\s+/g, ' ').toLocaleLowerCase('en-US');
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const token = () => randomBytes(32).toString('base64url');
const validUsername = (value) => /^[a-z0-9][a-z0-9._-]{2,59}$/.test(value);
function parsePodReceived(value) {
  if (value === true || String(value).toLowerCase() === 'yes') return true;
  if (value === false || String(value).toLowerCase() === 'no') return false;
  throw new ApiError(400, 'Choose Yes or No for POD.');
}

function db() {
  if (!process.env.SUPABASE_DB_URL) throw new Error('SUPABASE_DB_URL is not configured.');
  // Supabase's shared Transaction Pooler uses a certificate chain that is not
  // included in Netlify's Lambda trust store. `false` retains TLS encryption
  // while allowing the serverless function to use the pooler connection.
  if (!pool) pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL, max: 1, idleTimeoutMillis: 10000, connectionTimeoutMillis: 5000, ssl: { rejectUnauthorized: false } });
  const sql = async (parts, ...values) => {
    const text = parts.reduce((result, part, index) => result + part + (index < values.length ? `$${index + 1}` : ''), '');
    return (await pool.query({ text, values })).rows;
  };
  return { sql, pool };
}

function response(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store, max-age=0', ...headers } });
}
function empty(headers = {}) { return new Response(null, { status: 204, headers: { 'cache-control': 'no-store, max-age=0', ...headers } }); }
function operationalErrorMessage(error) {
  const code = String(error?.code || '');
  const message = String(error?.message || '');
  if (message.includes('SUPABASE_DB_URL is not configured')) return 'Database connection is not configured in Netlify. Add SUPABASE_DB_URL with Functions scope, then redeploy.';
  if (code === '28P01' || /password authentication failed/i.test(message)) return 'Supabase database authentication failed. Check the database password in SUPABASE_DB_URL, then redeploy.';
  if (code === '3D000') return 'The database named in SUPABASE_DB_URL does not exist.';
  if (['ENOTFOUND', 'EAI_AGAIN'].includes(code)) return 'The Supabase database host could not be found. Check the Transaction Pooler hostname in SUPABASE_DB_URL.';
  if (['ECONNREFUSED', 'ETIMEDOUT', '57P01'].includes(code)) return 'The Supabase database could not be reached. Check the Transaction Pooler connection string and database availability.';
  if (code === 'SELF_SIGNED_CERT_IN_CHAIN') return 'The database TLS connection was rejected. Deploy the latest SecureGate Netlify function.';
  return '';
}
function cookies(request) {
  return Object.fromEntries((request.headers.get('cookie') || '').split(';').map((part) => {
    const index = part.indexOf('='); return index < 0 ? [] : [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())];
  }).filter(([key]) => key));
}
function sessionCookie(value, request, expires = SESSION_SECONDS) {
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return `sg_session=${encodeURIComponent(value)}; Path=/; Max-Age=${expires}; HttpOnly; SameSite=Strict${secure}`;
}
async function body(request) {
  if (!request.headers.get('content-type')?.includes('application/json')) throw new ApiError(415, 'Use application/json.');
  if (Number(request.headers.get('content-length') || 0) > 65536) throw new ApiError(413, 'Request is too large.');
  try { return await request.json(); } catch { throw new ApiError(400, 'Request body must be valid JSON.'); }
}
function sameOrigin(request) {
  if (request.headers.get('origin') !== new URL(request.url).origin) throw new ApiError(403, 'Request origin is not allowed.');
}
function equals(left, right) {
  const a = Buffer.from(String(left)), b = Buffer.from(String(right));
  return a.length === b.length && timingSafeEqual(a, b);
}
function assertPassword(value) {
  if (typeof value !== 'string' || value.length < 12 || value.length > 128) throw new ApiError(400, 'Password must contain 12 to 128 characters.');
  if ([/[a-z]/.test(value), /[A-Z]/.test(value), /\d/.test(value), /[^A-Za-z0-9]/.test(value)].filter(Boolean).length < 3) throw new ApiError(400, 'Password must use at least three character groups.');
}
async function hashPassword(value) {
  assertPassword(value);
  const salt = randomBytes(16).toString('hex');
  const derived = await scrypt(value, salt, 64, { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 });
  return `scrypt$16384$8$1$${salt}$${Buffer.from(derived).toString('hex')}`;
}
async function passwordMatches(value, encoded) {
  const [kind, n, r, p, salt, stored] = String(encoded || '').split('$');
  if (kind !== 'scrypt' || !salt || !stored || typeof value !== 'string') return false;
  const expected = Buffer.from(stored, 'hex');
  const derived = Buffer.from(await scrypt(value, salt, expected.length, { N: Number(n), r: Number(r), p: Number(p), maxmem: 64 * 1024 * 1024 }));
  return expected.length === derived.length && timingSafeEqual(expected, derived);
}
function userDto(row) { return { id: row.id, username: row.username, name: row.full_name, role: row.role, locationId: row.location_id, location: row.location_name || null }; }
function entryDto(row) {
  const material = row.entry_type === 'material';
  const displayName = material ? (row.document_number || `Material ${row.direction} entry`) : row.visitor_name;
  return {
    id: row.id, direction: row.direction, type: row.entry_type, token: row.token_number === null ? null : Number(row.token_number),
    locationId: row.location_id, location: row.location_name, partyId: row.party_id, partyName: row.party_name || '',
    name: displayName, sub: material ? (row.party_name || '') : (row.visitor_company || ''),
    host: material ? `${row.direction === 'inward' ? 'Purchase invoice' : 'Sale invoice'}: ${row.invoice_number || ''}` : (row.host_name || ''),
    reference: row.document_number || row.vehicle_number || '—', vehicle: row.vehicle_number || '—', documentNumber: row.document_number || '',
    purchaseInvoiceNumber: row.invoice_number || '', saleInvoiceNumber: row.invoice_number || '', grnNumber: row.grn_number || '', quantity: row.boxes === null ? null : String(row.boxes),
    driverName: row.driver_name || '', driverMobile: row.driver_mobile || '', remarks: row.remarks || '',
    outwardToken: row.outward_token_number == null ? null : Number(row.outward_token_number), podReceived: row.pod_received == null ? null : Boolean(row.pod_received),
    status: row.status || (row.direction === 'outward' ? 'Completed' : 'Inside'), unloadingStartedAt: row.unloading_started_at,
    unloadedAt: row.unloaded_at, grnDoneAt: row.grn_done_at, createdAt: row.created_at,
    time: new Date(row.created_at).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }),
    initials: clean(displayName, 30).split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase()
  };
}

async function seedAdmin() {
  const count = await db().sql`SELECT COUNT(*)::int AS count FROM app_users`;
  if (Number(count[0].count) > 0) return;
  const username = clean(process.env.BOOTSTRAP_ADMIN_USERNAME, 60).toLowerCase();
  const password = process.env.BOOTSTRAP_ADMIN_PASSWORD;
  if (!validUsername(username) || !password) return;
  try {
    await db().sql`INSERT INTO app_users (id, username, full_name, role, password_hash) VALUES (${randomUUID()}, ${username}, ${clean(process.env.BOOTSTRAP_ADMIN_NAME || 'Administrator', 120)}, ${'admin'}, ${await hashPassword(password)})`;
  } catch (error) { if (error?.code !== '23505') throw error; }
}
async function authenticate(request) {
  const raw = cookies(request).sg_session;
  if (!raw) throw new ApiError(401, 'Sign in is required.');
  const rows = await db().sql`
    SELECT s.id AS session_id, s.csrf_hash, u.id, u.username, u.full_name, u.role, u.location_id, l.name AS location_name
    FROM sessions s JOIN app_users u ON u.id = s.user_id LEFT JOIN locations l ON l.id = u.location_id
    WHERE s.token_hash = ${sha256(raw)} AND s.expires_at > NOW() AND u.is_active = TRUE
  `;
  if (!rows[0]) throw new ApiError(401, 'Sign in is required.');
  return { sessionId: rows[0].session_id, csrfHash: rows[0].csrf_hash, user: userDto(rows[0]) };
}
function requireAdmin(session) { if (session.user.role !== 'admin') throw new ApiError(403, 'Administrator access is required.'); }
function requireLocation(session, id) { if (session.user.role !== 'admin' && session.user.locationId !== id) throw new ApiError(403, 'This location is not assigned to you.'); }
function requireCsrf(request, session) {
  sameOrigin(request);
  const value = request.headers.get('x-csrf-token') || '';
  if (!value || !equals(sha256(value), session.csrfHash)) throw new ApiError(403, 'Security token is invalid. Refresh and try again.');
}
async function rotateCsrf(session) {
  const value = token(); await db().sql`UPDATE sessions SET csrf_hash = ${sha256(value)}, last_seen_at = NOW() WHERE id = ${session.sessionId}`; return value;
}
async function queryEntries(session) {
  const rows = await db().sql`
    SELECT e.*, l.name AS location_name, p.name AS party_name FROM entries e
    JOIN locations l ON l.id = e.location_id LEFT JOIN parties p ON p.id = e.party_id
    WHERE (${session.user.role} = 'admin' OR e.location_id = ${session.user.locationId}) ORDER BY e.created_at DESC
  `;
  return rows.map(entryDto);
}
async function bootstrap(session) {
  const database = db();
  const [locations, vendors, customers, users, entries] = await Promise.all([
    database.sql`SELECT id, name FROM locations ORDER BY name`,
    database.sql`SELECT id, name FROM parties WHERE kind = 'vendor' ORDER BY name`,
    database.sql`SELECT id, name FROM parties WHERE kind = 'customer' ORDER BY name`,
    session.user.role === 'admin' ? database.sql`SELECT u.id, u.username, u.full_name, u.role, u.location_id, l.name AS location_name FROM app_users u LEFT JOIN locations l ON l.id = u.location_id ORDER BY u.role DESC, u.full_name` : Promise.resolve([]),
    queryEntries(session)
  ]);
  return { user: session.user, csrfToken: await rotateCsrf(session), locations, vendors, customers, users: users.map(userDto), entries };
}

async function recordFailure(key) {
  const resetAt = new Date(Date.now() - 15 * 60 * 1000), lockedUntil = new Date(Date.now() + 15 * 60 * 1000);
  await db().sql`
    INSERT INTO login_attempts (attempt_key, failures) VALUES (${key}, 1)
    ON CONFLICT (attempt_key) DO UPDATE SET
      failures = CASE WHEN login_attempts.window_started_at < ${resetAt} THEN 1 ELSE login_attempts.failures + 1 END,
      window_started_at = CASE WHEN login_attempts.window_started_at < ${resetAt} THEN NOW() ELSE login_attempts.window_started_at END,
      locked_until = CASE WHEN (CASE WHEN login_attempts.window_started_at < ${resetAt} THEN 1 ELSE login_attempts.failures + 1 END) >= 5 THEN ${lockedUntil} ELSE NULL END,
      updated_at = NOW()
  `;
}
async function login(request, context) {
  sameOrigin(request); const payload = await body(request);
  const username = clean(payload.username, 60).toLowerCase(), password = String(payload.password || ''), attempt = sha256(`${context.ip || 'unknown'}:${username}`);
  const throttle = await db().sql`SELECT locked_until FROM login_attempts WHERE attempt_key = ${attempt}`;
  if (throttle[0]?.locked_until && new Date(throttle[0].locked_until) > new Date()) throw new ApiError(429, 'Too many attempts. Wait 15 minutes and try again.');
  const rows = validUsername(username) ? await db().sql`SELECT u.*, l.name AS location_name FROM app_users u LEFT JOIN locations l ON l.id = u.location_id WHERE u.username = ${username}` : [];
  if (!rows[0]?.is_active || !await passwordMatches(password, rows[0]?.password_hash)) { await recordFailure(attempt); throw new ApiError(401, 'Invalid login ID or password.'); }
  await db().sql`DELETE FROM login_attempts WHERE attempt_key = ${attempt}`;
  const sessionValue = token(), csrf = token(), expires = new Date(Date.now() + SESSION_SECONDS * 1000);
  await db().sql`DELETE FROM sessions WHERE expires_at <= NOW()`;
  await db().sql`INSERT INTO sessions (id, user_id, token_hash, csrf_hash, expires_at) VALUES (${randomUUID()}, ${rows[0].id}, ${sha256(sessionValue)}, ${sha256(csrf)}, ${expires})`;
  return response({ user: userDto(rows[0]), csrfToken: csrf }, 200, { 'set-cookie': sessionCookie(sessionValue, request) });
}
async function createLocation(session, request) {
  requireAdmin(session); requireCsrf(request, session); const name = clean((await body(request)).name, 120); if (name.length < 2) throw new ApiError(400, 'Location name is required.');
  try { const rows = await db().sql`INSERT INTO locations (id, name, name_key) VALUES (${randomUUID()}, ${name}, ${nameKey(name)}) RETURNING id, name`; return response({ location: rows[0] }, 201); }
  catch (error) { if (error?.code === '23505') throw new ApiError(409, 'That location already exists.'); throw error; }
}
async function deleteLocation(session, request, id) {
  requireAdmin(session); requireCsrf(request, session);
  try { const rows = await db().sql`DELETE FROM locations WHERE id = ${id} RETURNING id`; if (!rows[0]) throw new ApiError(404, 'Location not found.'); return empty(); }
  catch (error) { if (error?.code === '23503') throw new ApiError(409, 'This location is in use and cannot be removed.'); throw error; }
}
async function createParty(session, request) {
  requireAdmin(session); requireCsrf(request, session); const payload = await body(request), kind = clean(payload.kind, 10).toLowerCase(), name = clean(payload.name, 160);
  if (!['vendor', 'customer'].includes(kind) || name.length < 2) throw new ApiError(400, 'Provide a valid vendor or customer name.');
  try { const rows = await db().sql`INSERT INTO parties (id, kind, name, name_key) VALUES (${randomUUID()}, ${kind}, ${name}, ${nameKey(name)}) RETURNING id, kind, name`; return response({ party: rows[0] }, 201); }
  catch (error) { if (error?.code === '23505') throw new ApiError(409, 'That name already exists.'); throw error; }
}
async function deleteParty(session, request, id) {
  requireAdmin(session); requireCsrf(request, session);
  try { const rows = await db().sql`DELETE FROM parties WHERE id = ${id} RETURNING id`; if (!rows[0]) throw new ApiError(404, 'Name not found.'); return empty(); }
  catch (error) { if (error?.code === '23503') throw new ApiError(409, 'This name is already used in an entry.'); throw error; }
}
async function createUser(session, request) {
  requireAdmin(session); requireCsrf(request, session); const payload = await body(request), username = clean(payload.username, 60).toLowerCase(), name = clean(payload.name, 120), locationId = clean(payload.locationId, 36);
  if (!validUsername(username) || name.length < 2 || !locationId) throw new ApiError(400, 'Provide a valid name, login ID, and location.');
  if (!(await db().sql`SELECT id FROM locations WHERE id = ${locationId}`)[0]) throw new ApiError(400, 'Choose an existing location.');
  try { const id = randomUUID(); await db().sql`INSERT INTO app_users (id, username, full_name, role, location_id, password_hash) VALUES (${id}, ${username}, ${name}, ${'user'}, ${locationId}, ${await hashPassword(payload.password)})`; return response({ user: { id, username, name, role: 'user', locationId } }, 201); }
  catch (error) { if (error?.code === '23505') throw new ApiError(409, 'That login ID already exists.'); throw error; }
}
async function updateUser(session, request, id) {
  requireAdmin(session); requireCsrf(request, session); const payload = await body(request), username = clean(payload.username, 60).toLowerCase(), name = clean(payload.name, 120), locationId = clean(payload.locationId, 36);
  if (!validUsername(username) || name.length < 2 || !locationId) throw new ApiError(400, 'Provide a valid name, login ID, and location.');
  if (!(await db().sql`SELECT id FROM locations WHERE id = ${locationId}`)[0]) throw new ApiError(400, 'Choose an existing location.');
  const existing = await db().sql`SELECT role FROM app_users WHERE id = ${id}`;
  if (!existing[0]) throw new ApiError(404, 'User not found.');
  if (existing[0].role !== 'user') throw new ApiError(400, 'Use the password reset control for the administrator account.');
  try { const rows = await db().sql`UPDATE app_users SET username = ${username}, full_name = ${name}, location_id = ${locationId}, updated_at = NOW() WHERE id = ${id} RETURNING id, username, full_name, role, location_id`; return response({ user: { id: rows[0].id, username: rows[0].username, name: rows[0].full_name, role: rows[0].role, locationId: rows[0].location_id } }); }
  catch (error) { if (error?.code === '23505') throw new ApiError(409, 'That login ID already exists.'); throw error; }
}
async function resetPassword(session, request, id) {
  requireAdmin(session); requireCsrf(request, session); const passwordHash = await hashPassword((await body(request)).password);
  const rows = await db().sql`UPDATE app_users SET password_hash = ${passwordHash}, updated_at = NOW() WHERE id = ${id} RETURNING id`; if (!rows[0]) throw new ApiError(404, 'User not found.');
  await db().sql`DELETE FROM sessions WHERE user_id = ${id}`; return empty({ ...(id === session.user.id ? { 'set-cookie': sessionCookie('', request, 0) } : {}) });
}
async function deleteEntry(session, request, id) {
  requireAdmin(session); requireCsrf(request, session);
  const rows = await db().sql`DELETE FROM entries WHERE id = ${id} RETURNING id`;
  if (!rows[0]) throw new ApiError(404, 'Entry not found.');
  return empty();
}
async function oneEntry(session, id) {
  const rows = await db().sql`SELECT e.*, l.name AS location_name, p.name AS party_name FROM entries e JOIN locations l ON l.id = e.location_id LEFT JOIN parties p ON p.id = e.party_id WHERE e.id = ${id}`;
  if (!rows[0]) throw new ApiError(404, 'Entry not found.'); requireLocation(session, rows[0].location_id); return entryDto(rows[0]);
}
async function requireOutwardSchema() {
  const rows = await db().sql`
    SELECT
      to_regclass('public.outward_token_sequence') IS NOT NULL AS sequence_ready,
      EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'entries' AND column_name = 'outward_token_number') AS token_column_ready,
      EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'entries' AND column_name = 'pod_received') AS pod_column_ready
  `;
  const ready = rows[0];
  if (!ready?.sequence_ready || !ready?.token_column_ready || !ready?.pod_column_ready) throw new ApiError(503, 'Outward database setup is incomplete. In Supabase SQL Editor, run supabase/migrations/20260715140000_outward_pod_tokens.sql, then try again.');
}
async function createEntry(session, request) {
  requireCsrf(request, session); const payload = await body(request), direction = clean(payload.direction, 10).toLowerCase(), entryType = clean(payload.entryType, 10).toLowerCase();
  if (!['inward', 'outward'].includes(direction) || !['visitor', 'material'].includes(entryType)) throw new ApiError(400, 'Invalid entry type.');
  const locationId = session.user.role === 'admin' ? clean(payload.locationId, 36) : session.user.locationId; requireLocation(session, locationId);
  if (!(await db().sql`SELECT id FROM locations WHERE id = ${locationId}`)[0]) throw new ApiError(400, 'Choose an existing location.');
  if (direction === 'outward') await requireOutwardSchema();
  const id = randomUUID();
  if (entryType === 'visitor') {
    const name = clean(payload.visitorName, 160); if (!name) throw new ApiError(400, 'Visitor name is required.');
    if (direction === 'outward') await db().sql`INSERT INTO entries (id, direction, entry_type, location_id, visitor_name, visitor_company, host_name, vehicle_number, outward_token_number, status, created_by) VALUES (${id}, ${direction}, ${'visitor'}, ${locationId}, ${name}, ${clean(payload.company, 160) || null}, ${clean(payload.host, 160) || null}, ${clean(payload.vehicleNumber, 80) || null}, nextval('public.outward_token_sequence'), ${'Completed'}, ${session.user.id})`;
    else await db().sql`INSERT INTO entries (id, direction, entry_type, location_id, visitor_name, visitor_company, host_name, vehicle_number, status, created_by) VALUES (${id}, ${direction}, ${'visitor'}, ${locationId}, ${name}, ${clean(payload.company, 160) || null}, ${clean(payload.host, 160) || null}, ${clean(payload.vehicleNumber, 80) || null}, ${'Inside'}, ${session.user.id})`;
    return response({ entry: await oneEntry(session, id) }, 201);
  }
  const partyId = clean(payload.partyId, 36), invoice = clean(payload.invoiceNumber, 160), document = clean(payload.documentNumber, 160), boxesString = String(payload.boxes ?? ''), boxes = /^\d+$/.test(boxesString) ? Number(boxesString) : NaN, vehicle = clean(payload.vehicleNumber, 80), driver = clean(payload.driverName, 160), mobile = String(payload.driverMobile || '').replace(/\D/g, ''), podReceived = direction === 'outward' ? parsePodReceived(payload.podReceived) : null;
  if (!partyId || !invoice || /\s/.test(invoice) || !Number.isSafeInteger(boxes) || boxes < 1 || boxes > 1000000 || !vehicle || !driver || !/^\d{10}$/.test(mobile)) throw new ApiError(400, 'Complete required material fields. Invoice cannot contain spaces and driver mobile must be 10 digits.');
  const partyKind = direction === 'inward' ? 'vendor' : 'customer'; if (!(await db().sql`SELECT id FROM parties WHERE id = ${partyId} AND kind = ${partyKind}`)[0]) throw new ApiError(400, `Choose an existing ${partyKind}.`);
  try {
    if (direction === 'inward') await db().sql`INSERT INTO entries (id, direction, entry_type, location_id, party_id, document_number, invoice_number, invoice_key, grn_number, boxes, vehicle_number, driver_name, driver_mobile, remarks, token_number, status, created_by) VALUES (${id}, ${direction}, ${'material'}, ${locationId}, ${partyId}, ${document || null}, ${invoice}, ${invoice.toLowerCase()}, ${document || null}, ${boxes}, ${vehicle}, ${driver}, ${mobile}, ${clean(payload.remarks, 1000) || null}, nextval('public.inward_token_sequence'), ${'Pending'}, ${session.user.id})`;
    else await db().sql`INSERT INTO entries (id, direction, entry_type, location_id, party_id, document_number, invoice_number, invoice_key, boxes, vehicle_number, driver_name, driver_mobile, remarks, outward_token_number, pod_received, status, created_by) VALUES (${id}, ${direction}, ${'material'}, ${locationId}, ${partyId}, ${document || null}, ${invoice}, ${invoice.toLowerCase()}, ${boxes}, ${vehicle}, ${driver}, ${mobile}, ${clean(payload.remarks, 1000) || null}, nextval('public.outward_token_sequence'), ${podReceived}, ${podReceived ? 'POD Received' : 'POD Pending'}, ${session.user.id})`;
  } catch (error) { if (error?.code === '23505') throw new ApiError(409, `This ${direction === 'inward' ? 'purchase invoice' : 'sale invoice'} number already exists.`); throw error; }
  return response({ entry: await oneEntry(session, id) }, 201);
}
async function updateOutward(session, id, payload) {
  if (Object.keys(payload).length !== 1 || !Object.hasOwn(payload, 'podReceived')) throw new ApiError(400, 'Only the POD value can be changed.');
  const rows = await db().sql`SELECT id, location_id FROM entries WHERE id = ${id} AND direction = ${'outward'} AND entry_type = ${'material'}`;
  if (!rows[0]) throw new ApiError(404, 'Material outward entry not found.'); requireLocation(session, rows[0].location_id);
  const podReceived = parsePodReceived(payload.podReceived);
  await db().sql`UPDATE entries SET pod_received = ${podReceived}, status = ${podReceived ? 'POD Received' : 'POD Pending'}, updated_at = NOW() WHERE id = ${id}`;
  return response({ entry: await oneEntry(session, id) });
}
async function adminEditEntry(session, id, payload) {
  requireAdmin(session);
  const rows = await db().sql`SELECT * FROM entries WHERE id = ${id}`;
  const entry = rows[0]; if (!entry) throw new ApiError(404, 'Entry not found.');
  const locationId = clean(payload.locationId, 36);
  if (!(await db().sql`SELECT id FROM locations WHERE id = ${locationId}`)[0]) throw new ApiError(400, 'Choose an existing location.');
  if (entry.entry_type === 'visitor') {
    const name = clean(payload.visitorName, 160); if (!name) throw new ApiError(400, 'Visitor name is required.');
    await db().sql`UPDATE entries SET location_id = ${locationId}, visitor_name = ${name}, visitor_company = ${clean(payload.company, 160) || null}, host_name = ${clean(payload.host, 160) || null}, vehicle_number = ${clean(payload.vehicleNumber, 80) || null}, updated_at = NOW() WHERE id = ${id}`;
    return response({ entry: await oneEntry(session, id) });
  }
  const partyId = clean(payload.partyId, 36), invoice = clean(payload.invoiceNumber, 160), document = clean(payload.documentNumber, 160), boxesString = String(payload.boxes ?? ''), boxes = /^\d+$/.test(boxesString) ? Number(boxesString) : NaN, vehicle = clean(payload.vehicleNumber, 80), driver = clean(payload.driverName, 160), mobile = String(payload.driverMobile || '').replace(/\D/g, '');
  if (!partyId || !invoice || /\s/.test(invoice) || !Number.isSafeInteger(boxes) || boxes < 1 || boxes > 1000000 || !vehicle || !driver || !/^\d{10}$/.test(mobile)) throw new ApiError(400, 'Complete required material fields. Invoice cannot contain spaces and driver mobile must be 10 digits.');
  const partyKind = entry.direction === 'inward' ? 'vendor' : 'customer';
  if (!(await db().sql`SELECT id FROM parties WHERE id = ${partyId} AND kind = ${partyKind}`)[0]) throw new ApiError(400, `Choose an existing ${partyKind}.`);
  try {
    if (entry.direction === 'inward') {
      const grn = document || null; if (entry.status === 'GRN Done' && !grn) throw new ApiError(400, 'GRN number is required for a GRN Done entry.');
      await db().sql`UPDATE entries SET location_id = ${locationId}, party_id = ${partyId}, document_number = ${document || null}, invoice_number = ${invoice}, invoice_key = ${invoice.toLowerCase()}, grn_number = ${grn}, boxes = ${boxes}, vehicle_number = ${vehicle}, driver_name = ${driver}, driver_mobile = ${mobile}, remarks = ${clean(payload.remarks, 1000) || null}, updated_at = NOW() WHERE id = ${id}`;
    } else {
      const podReceived = parsePodReceived(payload.podReceived);
      await db().sql`UPDATE entries SET location_id = ${locationId}, party_id = ${partyId}, document_number = ${document || null}, invoice_number = ${invoice}, invoice_key = ${invoice.toLowerCase()}, boxes = ${boxes}, vehicle_number = ${vehicle}, driver_name = ${driver}, driver_mobile = ${mobile}, remarks = ${clean(payload.remarks, 1000) || null}, pod_received = ${podReceived}, status = ${podReceived ? 'POD Received' : 'POD Pending'}, updated_at = NOW() WHERE id = ${id}`;
    }
  } catch (error) { if (error instanceof ApiError) throw error; if (error?.code === '23505') throw new ApiError(409, `This ${entry.direction === 'inward' ? 'purchase invoice' : 'sale invoice'} number already exists.`); throw error; }
  return response({ entry: await oneEntry(session, id) });
}
async function updateInward(session, request, id) {
  requireCsrf(request, session); const payload = await body(request);
  if (payload.adminEdit === true) return adminEditEntry(session, id, payload);
  if (Object.hasOwn(payload, 'podReceived')) return updateOutward(session, id, payload);
  if (!Object.keys(payload).length || Object.keys(payload).some((key) => !['status', 'grnNumber'].includes(key))) throw new ApiError(400, 'Only status and GRN number can be changed.');
  const client = await db().pool.connect();
  try {
    await client.query('BEGIN'); const { rows } = await client.query(`SELECT * FROM entries WHERE id = $1 AND direction = 'inward' AND entry_type = 'material' FOR UPDATE`, [id]); const entry = rows[0];
    if (!entry) throw new ApiError(404, 'Material inward entry not found.'); requireLocation(session, entry.location_id); if (entry.status === 'GRN Done') throw new ApiError(409, 'This entry is locked after GRN Done.');
    const grn = Object.hasOwn(payload, 'grnNumber') ? clean(payload.grnNumber, 160) : entry.grn_number; let status = entry.status, started = entry.unloading_started_at, unloaded = entry.unloaded_at, done = entry.grn_done_at;
    if (Object.hasOwn(payload, 'status')) {
      const next = clean(payload.status, 30); if (STATUS_FLOW.indexOf(next) !== STATUS_FLOW.indexOf(status) + 1) throw new ApiError(400, 'Follow the required status sequence.');
      if (next === 'GRN Done' && !grn) throw new ApiError(400, 'GRN number is required before GRN Done.'); status = next;
      if (next === 'Unloading in Progress' && !started) started = new Date(); if (next === 'Unloaded' && !unloaded) unloaded = new Date(); if (next === 'GRN Done' && !done) done = new Date();
    }
    await client.query('UPDATE entries SET grn_number = $1, status = $2, unloading_started_at = $3, unloaded_at = $4, grn_done_at = $5, updated_at = NOW() WHERE id = $6', [grn || null, status, started, unloaded, done, id]);
    // Use this transaction's connection for the reload. Calling oneEntry()
    // here would request a second pool connection while this one is still held.
    const updated = await client.query('SELECT e.*, l.name AS location_name, p.name AS party_name FROM entries e JOIN locations l ON l.id = e.location_id LEFT JOIN parties p ON p.id = e.party_id WHERE e.id = $1', [id]);
    await client.query('COMMIT'); return response({ entry: entryDto(updated.rows[0]) });
  } catch (error) { await client.query('ROLLBACK'); throw error; } finally { client.release(); }
}

export default async function handler(request, context) {
  if (request.method === 'OPTIONS') return empty({ Allow: 'GET, POST, PATCH, DELETE, OPTIONS' });
  try {
    await seedAdmin(); const path = new URL(request.url).pathname;
    if (path === '/api/auth/login' && request.method === 'POST') return login(request, context);
    const session = await authenticate(request);
    if (path === '/api/bootstrap' && request.method === 'GET') return response(await bootstrap(session));
    if (path === '/api/auth/logout' && request.method === 'POST') { requireCsrf(request, session); await db().sql`DELETE FROM sessions WHERE id = ${session.sessionId}`; return empty({ 'set-cookie': sessionCookie('', request, 0) }); }
    if (path === '/api/locations' && request.method === 'POST') return createLocation(session, request);
    if (path.startsWith('/api/locations/') && request.method === 'DELETE') return deleteLocation(session, request, path.split('/').at(-1));
    if (path === '/api/parties' && request.method === 'POST') return createParty(session, request);
    if (path.startsWith('/api/parties/') && request.method === 'DELETE') return deleteParty(session, request, path.split('/').at(-1));
    if (path === '/api/users' && request.method === 'POST') return createUser(session, request);
    if (/^\/api\/users\/[^/]+$/.test(path) && request.method === 'PATCH') return updateUser(session, request, path.split('/').at(-1));
    if (/^\/api\/users\/[^/]+\/password$/.test(path) && request.method === 'PATCH') return resetPassword(session, request, path.split('/')[3]);
    if (path === '/api/entries' && request.method === 'POST') return createEntry(session, request);
    if (path.startsWith('/api/entries/') && request.method === 'DELETE') return deleteEntry(session, request, path.split('/').at(-1));
    if (path.startsWith('/api/entries/') && request.method === 'PATCH') return updateInward(session, request, path.split('/').at(-1));
    throw new ApiError(404, 'API route not found.');
  } catch (error) {
    if (error instanceof ApiError) return response({ error: error.message }, error.status);
    console.error('SecureGate API error', error);
    if (error?.code === '42703' || error?.code === '42P01' || error?.code === '23514') return response({ error: 'Database upgrade required. Run the latest Supabase migration, then try again.' }, 503);
    const operationalMessage = operationalErrorMessage(error);
    if (operationalMessage) return response({ error: operationalMessage }, 503);
    return response({ error: 'The server could not complete this request.' }, 500);
  }
}
