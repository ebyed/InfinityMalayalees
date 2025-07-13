/*
  # Add age and gender columns to cultural_registrations table

  1. Schema Changes
    - Add `age` column (integer, nullable) to store participant age
    - Add `gender` column (text, nullable) to store participant gender
    
  2. Data Migration
    - Existing records will have NULL values for these new columns
    - New registrations will populate these fields
    
  3. Indexes
    - Add indexes on age and gender for better query performance
    
  This migration is safe and backwards compatible.
*/

-- Add age column (integer, nullable)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'cultural_registrations' AND column_name = 'age'
  ) THEN
    ALTER TABLE cultural_registrations ADD COLUMN age integer;
  END IF;
END $$;

-- Add gender column (text, nullable)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'cultural_registrations' AND column_name = 'gender'
  ) THEN
    ALTER TABLE cultural_registrations ADD COLUMN gender text;
  END IF;
END $$;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cultural_registrations_age ON cultural_registrations(age);
CREATE INDEX IF NOT EXISTS idx_cultural_registrations_gender ON cultural_registrations(gender);

-- Add comments for documentation
COMMENT ON COLUMN cultural_registrations.age IS 'Participant age in years';
COMMENT ON COLUMN cultural_registrations.gender IS 'Participant gender (Male, Female, Other, Prefer not to say)';