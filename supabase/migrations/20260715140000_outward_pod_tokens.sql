BEGIN;

CREATE SEQUENCE IF NOT EXISTS public.outward_token_sequence START WITH 1;

ALTER TABLE public.entries
  ADD COLUMN IF NOT EXISTS outward_token_number BIGINT,
  ADD COLUMN IF NOT EXISTS pod_received BOOLEAN;

ALTER TABLE public.entries
  ALTER COLUMN invoice_number TYPE TEXT USING invoice_number::TEXT,
  ALTER COLUMN invoice_key TYPE TEXT USING invoice_key::TEXT;

UPDATE public.entries
SET outward_token_number = nextval('public.outward_token_sequence')
WHERE direction = 'outward' AND outward_token_number IS NULL;

UPDATE public.entries
SET pod_received = FALSE,
    status = 'POD Pending'
WHERE direction = 'outward' AND entry_type = 'material' AND pod_received IS NULL;

UPDATE public.entries
SET status = 'Completed'
WHERE direction = 'outward' AND entry_type = 'visitor' AND status IS DISTINCT FROM 'Completed';

CREATE UNIQUE INDEX IF NOT EXISTS entries_outward_token_unique
  ON public.entries(outward_token_number)
  WHERE outward_token_number IS NOT NULL;

ALTER TABLE public.entries DROP CONSTRAINT IF EXISTS entries_outward_material_rule;
ALTER TABLE public.entries ADD CONSTRAINT entries_outward_material_rule CHECK (
  (direction = 'outward' AND entry_type = 'material' AND outward_token_number IS NOT NULL AND pod_received IS NOT NULL AND status IN ('POD Pending', 'POD Received'))
  OR NOT (direction = 'outward' AND entry_type = 'material')
);

ALTER TABLE public.entries DROP CONSTRAINT IF EXISTS entries_outward_visitor_rule;
ALTER TABLE public.entries ADD CONSTRAINT entries_outward_visitor_rule CHECK (
  (direction = 'outward' AND entry_type = 'visitor' AND outward_token_number IS NOT NULL AND status = 'Completed')
  OR NOT (direction = 'outward' AND entry_type = 'visitor')
);

SELECT setval(
  'public.outward_token_sequence',
  COALESCE((SELECT MAX(outward_token_number) FROM public.entries), 0) + 1,
  FALSE
);

REVOKE ALL ON SEQUENCE public.outward_token_sequence FROM anon, authenticated;

COMMIT;
