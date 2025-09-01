/*
  # Create cafe reservations system

  1. New Tables
    - `cafe_reservations`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `email` (text, customer email)
      - `phone` (text, customer phone)
      - `reservation_date` (date, reservation date)
      - `reservation_time` (text, reservation time)
      - `guests` (integer, number of guests)
      - `status` (text, reservation status)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `cafe_reservations` table
    - Add policy for public to insert reservations
    - Add policy for authenticated admin to view all reservations
    - Add policy for authenticated admin to update reservations
*/

CREATE TABLE IF NOT EXISTS cafe_reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  reservation_date date NOT NULL,
  reservation_time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cafe_reservations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create reservations (public form submissions)
CREATE POLICY "Anyone can create reservations"
  ON cafe_reservations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to view all reservations (admin access)
CREATE POLICY "Authenticated users can view all reservations"
  ON cafe_reservations
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update reservations (admin management)
CREATE POLICY "Authenticated users can update reservations"
  ON cafe_reservations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users to delete reservations (admin management)
CREATE POLICY "Authenticated users can delete reservations"
  ON cafe_reservations
  FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cafe_reservations_updated_at
  BEFORE UPDATE ON cafe_reservations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();