/*
  # Create Contact Submissions Table

  ## Summary
  Creates a table to store contact form submissions from the marketing agency website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text) - Full name of the person submitting
    - `email` (text) - Email address for contact
    - `phone` (text, nullable) - Optional phone number
    - `company` (text, nullable) - Optional company name
    - `subject` (text) - Subject of the inquiry
    - `message` (text) - Detailed message content
    - `created_at` (timestamptz) - Timestamp of submission

  ## Security
  - Enable RLS on `contact_submissions` table
  - Add policy for anyone to insert contact submissions (public form)
  - Add policy for authenticated admins to view all submissions

  ## Notes
  - This table allows public submissions without authentication
  - Data is stored securely with timestamp tracking
  - Admin access would require authentication setup in future
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);