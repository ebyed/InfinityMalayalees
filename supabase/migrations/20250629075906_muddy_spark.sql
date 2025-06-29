/*
  # Add verification status to sadya registrations and donations

  1. Changes
    - Add `verified` boolean column to sadya_registrations table
    - Add `verified` boolean column to donations table
    - Add `verified_at` timestamp column to both tables
    - Add `verified_by` text column to track who verified
    - Set default values and update existing records

  2. Security
    - Maintain existing RLS policies
    - Add indexes for better performance
*/

-- Add verification columns to sadya_registrations
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'sadya_registrations' AND column_name = 'verified'
  ) THEN
    ALTER TABLE sadya_registrations ADD COLUMN verified boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'sadya_registrations' AND column_name = 'verified_at'
  ) THEN
    ALTER TABLE sadya_registrations ADD COLUMN verified_at timestamptz;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'sadya_registrations' AND column_name = 'verified_by'
  ) THEN
    ALTER TABLE sadya_registrations ADD COLUMN verified_by text;
  END IF;
END $$;

-- Add verification columns to donations
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'donations' AND column_name = 'verified'
  ) THEN
    ALTER TABLE donations ADD COLUMN verified boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'donations' AND column_name = 'verified_at'
  ) THEN
    ALTER TABLE donations ADD COLUMN verified_at timestamptz;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'donations' AND column_name = 'verified_by'
  ) THEN
    ALTER TABLE donations ADD COLUMN verified_by text;
  END IF;
END $$;

-- Create indexes for verification status
CREATE INDEX IF NOT EXISTS idx_sadya_registrations_verified ON sadya_registrations(verified);
CREATE INDEX IF NOT EXISTS idx_donations_verified ON donations(verified);

-- Create function to verify sadya registration
CREATE OR REPLACE FUNCTION verify_sadya_registration(
  registration_id_param text,
  verified_by_param text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE sadya_registrations 
  SET 
    verified = true,
    verified_at = now(),
    verified_by = verified_by_param
  WHERE registration_id = registration_id_param;
  
  RETURN FOUND;
END;
$$;

-- Create function to verify donation
CREATE OR REPLACE FUNCTION verify_donation(
  donation_id_param bigint,
  verified_by_param text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE donations 
  SET 
    verified = true,
    verified_at = now(),
    verified_by = verified_by_param
  WHERE id = donation_id_param;
  
  RETURN FOUND;
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION verify_sadya_registration(text, text) TO public;
GRANT EXECUTE ON FUNCTION verify_donation(bigint, text) TO public;