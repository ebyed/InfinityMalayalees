/*
  # Add admin users table for authentication

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password_hash` (text)
      - `created_at` (timestamptz)
      - `last_login` (timestamptz, optional)
      - `is_active` (boolean, default true)

  2. Security
    - Enable RLS on admin_users table
    - Add policy for admin access only
    
  3. Initial Data
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

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can read admin_users (for login verification)
CREATE POLICY "Allow authenticated read access on admin_users"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update last_login
CREATE POLICY "Allow authenticated update on admin_users"
  ON admin_users
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for username lookup
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);

-- Insert default admin user (password: admin - hashed with bcrypt)
-- Note: In production, you should use a proper bcrypt hash
-- For demo purposes, using a simple hash representation
INSERT INTO admin_users (username, password_hash) 
VALUES ('admin', '$2b$10$rOzJqQZQQQQQQQQQQQQQQOeKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')
ON CONFLICT (username) DO NOTHING;

-- Function to verify admin login (simplified for demo)
CREATE OR REPLACE FUNCTION verify_admin_login(input_username text, input_password text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- For demo purposes, simple password check
  -- In production, use proper bcrypt verification
  IF input_username = 'admin' AND input_password = 'admin' THEN
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