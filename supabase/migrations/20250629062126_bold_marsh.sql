-- Fix admin login function and ensure proper setup

-- Ensure admin_users table exists with correct structure
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz,
  is_active boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Allow authenticated read access on admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow authenticated update on admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow public read access on admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow public insert on admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow public update on admin_users" ON admin_users;

-- Create policies for public access (needed for the RPC function to work)
CREATE POLICY "Allow public read access on admin_users"
  ON admin_users
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert on admin_users"
  ON admin_users
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update on admin_users"
  ON admin_users
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Create index for username lookup
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);

-- Clear existing admin users and insert fresh default admin
DELETE FROM admin_users WHERE username = 'admin';
INSERT INTO admin_users (username, password_hash, is_active) 
VALUES ('admin', 'admin', true);

-- Drop and recreate the login verification function
DROP FUNCTION IF EXISTS verify_admin_login(text, text);

CREATE OR REPLACE FUNCTION verify_admin_login(input_username text, input_password text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_exists boolean := false;
BEGIN
  -- Log the attempt for debugging
  RAISE NOTICE 'Login attempt for username: %', input_username;
  
  -- Check if user exists and password matches
  SELECT EXISTS(
    SELECT 1 FROM admin_users 
    WHERE username = input_username 
    AND password_hash = input_password 
    AND is_active = true
  ) INTO user_exists;
  
  RAISE NOTICE 'User exists and password matches: %', user_exists;
  
  IF user_exists THEN
    -- Update last login timestamp
    UPDATE admin_users 
    SET last_login = now() 
    WHERE username = input_username AND is_active = true;
    
    RAISE NOTICE 'Login successful for user: %', input_username;
    RETURN true;
  END IF;
  
  RAISE NOTICE 'Login failed for user: %', input_username;
  RETURN false;
END;
$$;

-- Grant execute permission on the function to public
GRANT EXECUTE ON FUNCTION verify_admin_login(text, text) TO public;

-- Verify the setup by checking if admin user exists
DO $$
DECLARE
  admin_count integer;
BEGIN
  SELECT COUNT(*) INTO admin_count FROM admin_users WHERE username = 'admin';
  RAISE NOTICE 'Admin users count: %', admin_count;
  
  IF admin_count = 0 THEN
    RAISE EXCEPTION 'Admin user was not created properly';
  END IF;
END $$;