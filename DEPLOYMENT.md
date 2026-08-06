# Deploy SecureGate: Supabase + Netlify

## Supabase database

1. Create a Supabase project.
2. Open **SQL Editor** and run `supabase/migrations/20260713170000_securegate_schema.sql`.
   For an existing deployment, run the newer migration `supabase/migrations/20260715140000_outward_pod_tokens.sql` once to add outward POD fields and unique tokens.
3. In **Connect**, copy the **Transaction Pooler** connection string (port 6543) and add `sslmode=require` if it is not already present.

## Netlify site

1. Upload this full source folder to a private GitHub repository.
2. In Netlify choose **Add new project → Import an existing project → GitHub**, then select that repository.
3. Keep the settings in `netlify.toml`: `npm run build`, publish directory `dist`, functions directory `netlify/functions`.
4. In Netlify environment variables, with **Functions** scope, add:

   - `SUPABASE_DB_URL` — the Supabase Transaction Pooler connection string
   - `BOOTSTRAP_ADMIN_USERNAME` — first admin login ID
   - `BOOTSTRAP_ADMIN_PASSWORD` — 12+ characters and three character groups
   - `BOOTSTRAP_ADMIN_NAME` — first admin display name

5. Deploy. The first request creates the administrator with an scrypt password hash. The password and connection string stay only in Netlify environment variables.
