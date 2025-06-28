/*
  # Initial Schema for Infinity Malayalees Onam 2025

  1. New Tables
    - `malayalee_registrations`
      - `id` (bigint, primary key)
      - `full_name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `flat_number` (text)
      - `native_place` (text, optional)
      - `family_members` (integer, optional)
      - `special_skills` (text, optional)
      - `volunteer_interest` (boolean, default false)
      - `created_at` (timestamptz)

    - `sadya_registrations`
      - `id` (bigint, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `flat_number` (text)
      - `sadya_count` (integer)
      - `total_amount` (integer)
      - `upi_id` (text, optional)
      - `transaction_id` (text, optional)
      - `registration_id` (text, unique)
      - `created_at` (timestamptz)

    - `thiruvathira_registrations`
      - `id` (bigint, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `flat_number` (text)
      - `age` (text, optional)
      - `experience` (text, optional)
      - `special_requirements` (text, optional)
      - `emergency_contact` (text, optional)
      - `emergency_phone` (text, optional)
      - `created_at` (timestamptz)

    - `cultural_registrations`
      - `id` (bigint, primary key)
      - `participant_name` (text)
      - `email` (text)
      - `phone` (text)
      - `flat_number` (text)
      - `event_category` (text)
      - `event_title` (text)
      - `participant_count` (integer)
      - `description` (text)
      - `special_requirements` (text, optional)
      - `created_at` (timestamptz)

    - `donations`
      - `id` (bigint, primary key)
      - `donor_name` (text)
      - `email` (text)
      - `phone` (text)
      - `flat_number` (text, optional)
      - `donation_type` (text)
      - `donation_amount` (integer)
      - `upi_id` (text, optional)
      - `transaction_id` (text, optional)
      - `message` (text, optional)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read/write access (since this is a community registration system)
*/

-- Malayalee Registrations Table
CREATE TABLE IF NOT EXISTS malayalee_registrations (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  flat_number text NOT NULL,
  native_place text,
  family_members integer,
  special_skills text,
  volunteer_interest boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE malayalee_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on malayalee_registrations"
  ON malayalee_registrations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert on malayalee_registrations"
  ON malayalee_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Sadya Registrations Table
CREATE TABLE IF NOT EXISTS sadya_registrations (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  flat_number text NOT NULL,
  sadya_count integer NOT NULL CHECK (sadya_count > 0),
  total_amount integer NOT NULL CHECK (total_amount > 0),
  upi_id text,
  transaction_id text,
  registration_id text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sadya_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on sadya_registrations"
  ON sadya_registrations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert on sadya_registrations"
  ON sadya_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Thiruvathira Registrations Table
CREATE TABLE IF NOT EXISTS thiruvathira_registrations (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  flat_number text NOT NULL,
  age text,
  experience text,
  special_requirements text,
  emergency_contact text,
  emergency_phone text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE thiruvathira_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on thiruvathira_registrations"
  ON thiruvathira_registrations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert on thiruvathira_registrations"
  ON thiruvathira_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Cultural Registrations Table
CREATE TABLE IF NOT EXISTS cultural_registrations (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  participant_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  flat_number text NOT NULL,
  event_category text NOT NULL,
  event_title text NOT NULL,
  participant_count integer NOT NULL CHECK (participant_count > 0),
  description text NOT NULL,
  special_requirements text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE cultural_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on cultural_registrations"
  ON cultural_registrations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert on cultural_registrations"
  ON cultural_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Donations Table
CREATE TABLE IF NOT EXISTS donations (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  donor_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  flat_number text,
  donation_type text NOT NULL,
  donation_amount integer NOT NULL CHECK (donation_amount > 0),
  upi_id text,
  transaction_id text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on donations"
  ON donations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert on donations"
  ON donations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_malayalee_registrations_email ON malayalee_registrations(email);
CREATE INDEX IF NOT EXISTS idx_malayalee_registrations_created_at ON malayalee_registrations(created_at);

CREATE INDEX IF NOT EXISTS idx_sadya_registrations_registration_id ON sadya_registrations(registration_id);
CREATE INDEX IF NOT EXISTS idx_sadya_registrations_created_at ON sadya_registrations(created_at);

CREATE INDEX IF NOT EXISTS idx_thiruvathira_registrations_email ON thiruvathira_registrations(email);
CREATE INDEX IF NOT EXISTS idx_thiruvathira_registrations_created_at ON thiruvathira_registrations(created_at);

CREATE INDEX IF NOT EXISTS idx_cultural_registrations_category ON cultural_registrations(event_category);
CREATE INDEX IF NOT EXISTS idx_cultural_registrations_created_at ON cultural_registrations(created_at);

CREATE INDEX IF NOT EXISTS idx_donations_type ON donations(donation_type);
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at);