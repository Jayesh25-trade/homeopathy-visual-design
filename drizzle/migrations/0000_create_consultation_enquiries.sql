CREATE TABLE public.consultation_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  condition text NOT NULL CHECK (char_length(condition) BETWEEN 1 AND 120),
  branch text NOT NULL CHECK (char_length(branch) BETWEEN 1 AND 100),
  preferred_date date,
  time_preference text CHECK (time_preference IS NULL OR time_preference IN ('Morning', 'Afternoon', 'Evening')),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  source text NOT NULL DEFAULT 'website' CHECK (source = 'website'),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'confirmed', 'closed')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.consultation_enquiries TO anon, authenticated;
GRANT ALL ON public.consultation_enquiries TO service_role;
ALTER TABLE public.consultation_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit consultation enquiries"
ON public.consultation_enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  source = 'website'
  AND status = 'new'
  AND char_length(name) BETWEEN 2 AND 100
  AND char_length(phone) BETWEEN 7 AND 20
  AND char_length(condition) BETWEEN 1 AND 120
  AND char_length(branch) BETWEEN 1 AND 100
  AND (message IS NULL OR char_length(message) <= 1000)
);
CREATE INDEX consultation_enquiries_created_at_idx ON public.consultation_enquiries (created_at DESC);
CREATE INDEX consultation_enquiries_status_idx ON public.consultation_enquiries (status);