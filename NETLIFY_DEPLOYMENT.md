# SecureGate: Netlify + Supabase

Netlify hosts the frontend and the protected serverless API. Supabase stores the PostgreSQL data. AWS Secrets Manager, Amplify, API Gateway, and Lambda are not used for this deployment.

## 1. Prepare Supabase

In Supabase SQL Editor, run `supabase/migrations/20260713170000_securegate_schema.sql`. For an existing installation, also run `supabase/migrations/20260715140000_outward_pod_tokens.sql`.

Copy the Supabase **Transaction Pooler** connection string. Replace the password placeholder with the real database password. If the password contains reserved URL characters, URL-encode it.

## 2. Configure Netlify environment variables

Open **Netlify > Site configuration > Environment variables** and add:

- `SUPABASE_DB_URL`: complete Supabase Transaction Pooler connection string
- `BOOTSTRAP_ADMIN_USERNAME`: `admin`
- `BOOTSTRAP_ADMIN_PASSWORD`: a strong password of 12–128 characters using at least three character groups
- `BOOTSTRAP_ADMIN_NAME`: `Administrator`

Make the variables available to **Functions** (or all scopes) and the **Production** deploy context. Do not place real values in `.env.example`, `netlify.toml`, or GitHub.

## 3. Deploy

Push the files to the root of the GitHub repository. In Netlify, use:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Node.js: `20`

After adding or changing environment variables, use **Deploys > Trigger deploy > Clear cache and deploy site**. Updated variables only apply to a new deploy.

## 4. Diagnose login

Open **Netlify > Logs & Metrics > Functions > api** and retry login. The latest function now returns a safe, specific message for missing configuration, database authentication, hostname, timeout, TLS, or migration errors.
