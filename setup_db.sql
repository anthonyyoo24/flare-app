-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Pitches table
CREATE TABLE pitches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Header
  company_name TEXT,
  user_name TEXT,
  
  -- Media
  video_url TEXT NOT NULL,
  resume_url TEXT,
  
  -- Content
  bio TEXT,
  
  -- Contact
  email TEXT NOT NULL,
  calendly_link TEXT,
  
  -- Social Links (JSON object)
  social_links JSONB DEFAULT '{}',
  
  -- Tech Stack (array of strings)
  tech_stack TEXT[],
  
  -- Portfolio & Experience (JSON arrays)
  portfolio JSONB DEFAULT '[]',
  work_experience JSONB DEFAULT '[]',
  
  -- Metadata
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE pitches ENABLE ROW LEVEL SECURITY;

-- Users can CRUD their own pitches
CREATE POLICY "Users can manage own pitches"
  ON pitches FOR ALL
  USING (auth.uid() = user_id);

-- Anyone can view published pitches
CREATE POLICY "Public can view published"
  ON pitches FOR SELECT
  USING (status = 'published');

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_pitches_updated_at
  BEFORE UPDATE ON pitches
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
