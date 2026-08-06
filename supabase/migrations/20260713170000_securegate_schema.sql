CREATE TABLE public.locations (
  id UUID PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  name_key VARCHAR(120) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.app_users (
  id UUID PRIMARY KEY,
  username VARCHAR(60) NOT NULL UNIQUE,
  full_name VARCHAR(120) NOT NULL,
  role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'user')),
  location_id UUID REFERENCES public.locations(id) ON DELETE RESTRICT,
  password_hash TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK ((role = 'admin' AND location_id IS NULL) OR (role = 'user' AND location_id IS NOT NULL))
);

CREATE TABLE public.sessions (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.app_users(id) ON DELETE CASCADE,
  token_hash CHAR(64) NOT NULL UNIQUE,
  csrf_hash CHAR(64) NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX sessions_token_hash_idx ON public.sessions(token_hash);
CREATE INDEX sessions_expiry_idx ON public.sessions(expires_at);

CREATE TABLE public.login_attempts (
  attempt_key CHAR(64) PRIMARY KEY,
  failures INTEGER NOT NULL DEFAULT 0,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  locked_until TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.parties (
  id UUID PRIMARY KEY,
  kind VARCHAR(10) NOT NULL CHECK (kind IN ('vendor', 'customer')),
  name VARCHAR(160) NOT NULL,
  name_key VARCHAR(160) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(kind, name_key)
);

CREATE SEQUENCE public.inward_token_sequence START WITH 1;
CREATE SEQUENCE public.outward_token_sequence START WITH 1;

CREATE TABLE public.entries (
  id UUID PRIMARY KEY,
  direction VARCHAR(10) NOT NULL CHECK (direction IN ('inward', 'outward')),
  entry_type VARCHAR(10) NOT NULL CHECK (entry_type IN ('visitor', 'material')),
  location_id UUID NOT NULL REFERENCES public.locations(id) ON DELETE RESTRICT,
  party_id UUID REFERENCES public.parties(id) ON DELETE RESTRICT,
  visitor_name VARCHAR(160), visitor_company VARCHAR(160), host_name VARCHAR(160),
  document_number VARCHAR(160), invoice_number TEXT, invoice_key TEXT, grn_number VARCHAR(160),
  boxes INTEGER, vehicle_number VARCHAR(80), driver_name VARCHAR(160), driver_mobile CHAR(10), remarks VARCHAR(1000),
  token_number BIGINT UNIQUE, outward_token_number BIGINT UNIQUE, pod_received BOOLEAN, status VARCHAR(30),
  unloading_started_at TIMESTAMPTZ, unloaded_at TIMESTAMPTZ, grn_done_at TIMESTAMPTZ,
  created_by UUID NOT NULL REFERENCES public.app_users(id) ON DELETE RESTRICT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK ((entry_type = 'material' AND party_id IS NOT NULL AND invoice_number IS NOT NULL AND invoice_key IS NOT NULL AND boxes > 0 AND vehicle_number IS NOT NULL AND driver_name IS NOT NULL AND driver_mobile IS NOT NULL) OR entry_type = 'visitor'),
  CHECK ((direction = 'inward' AND entry_type = 'material' AND token_number IS NOT NULL AND status IN ('Pending','Unloading in Progress','Unloaded','GRN Done')) OR NOT (direction = 'inward' AND entry_type = 'material')),
  CHECK ((direction = 'outward' AND entry_type = 'material' AND outward_token_number IS NOT NULL AND pod_received IS NOT NULL AND status IN ('POD Pending','POD Received')) OR NOT (direction = 'outward' AND entry_type = 'material')),
  CHECK ((direction = 'outward' AND entry_type = 'visitor' AND outward_token_number IS NOT NULL AND status = 'Completed') OR NOT (direction = 'outward' AND entry_type = 'visitor')),
  CHECK ((status = 'GRN Done' AND NULLIF(BTRIM(grn_number), '') IS NOT NULL) OR status IS DISTINCT FROM 'GRN Done')
);
CREATE UNIQUE INDEX entries_material_invoice_unique ON public.entries(direction, invoice_key) WHERE entry_type = 'material';
CREATE INDEX entries_location_created_idx ON public.entries(location_id, created_at DESC);

ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.login_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.entries ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.locations, public.app_users, public.sessions, public.login_attempts, public.parties, public.entries FROM anon, authenticated;
REVOKE ALL ON SEQUENCE public.inward_token_sequence, public.outward_token_sequence FROM anon, authenticated;
