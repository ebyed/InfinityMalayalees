/*
  # Admin Users Table and Authentication

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password_hash` (text)
      - `created_at` (timestamp)
      - `last_login` (timestamp)
      - `is_active` (boolean, default true)

  2. Security
    - Enable RLS on admin_users table
    - Add policies for authenticated access
    - Create admin login verification function

  3. Default Data
    - Insert default admin user (username: admin, password: admin)
*/

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz,
  is_active boolean DEFAULT true
);

-- Enable RLS only if not already enabled
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'admin_users' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Drop existing policies if they exist, then recreate them
DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow authenticated read access on admin_users" ON admin_users;
  DROP POLICY IF EXISTS "Allow authenticated update on admin_users" ON admin_users;
  
  -- Create new policies
  CREATE POLICY "Allow authenticated read access on admin_users"
    ON admin_users
    FOR SELECT
    TO authenticated
    USING (true);

  CREATE POLICY "Allow authenticated update on admin_users"
    ON admin_users
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);
END $$;

-- Create index for username lookup if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'idx_admin_users_username'
  ) THEN
    CREATE INDEX idx_admin_users_username ON admin_users(username);
  END IF;
END $$;

-- Insert default admin user if it doesn't exist
INSERT INTO admin_users (username, password_hash) 
VALUES ('admin', 'admin')
ON CONFLICT (username) DO NOTHING;

-- Drop existing function if it exists, then recreate it
DROP FUNCTION IF EXISTS verify_admin_login(text, text);

CREATE OR REPLACE FUNCTION verify_admin_login(input_username text, input_password text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- For demo purposes, simple password check
  -- In production, use proper bcrypt verification
  IF EXISTS (
    SELECT 1 FROM admin_users 
    WHERE username = input_username 
    AND password_hash = input_password 
    AND is_active = true
  ) THEN
    -- Update last login
    UPDATE admin_users 
    SET last_login = now() 
    WHERE username = input_username AND is_active = true;
    
    RETURN true;
  END IF;
  
  RETURN false;
END;
$$;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION verify_admin_login(text, text) TO public;