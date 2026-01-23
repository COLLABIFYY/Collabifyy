-- Creators Table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS creators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Profile Data
    niches JSONB NOT NULL DEFAULT '[]',
    platforms JSONB NOT NULL DEFAULT '[]',
    platform_handles JSONB NOT NULL DEFAULT '{}',
    platform_stats JSONB NOT NULL DEFAULT '{}',
    
    -- Personal Details
    name TEXT NOT NULL,
    dob DATE,
    gender TEXT,
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(user_id)
);

-- Brands Table
CREATE TABLE IF NOT EXISTS brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Contact Info
    name TEXT NOT NULL,
    job_title TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    
    -- Company Info
    company_name TEXT NOT NULL,
    industry TEXT NOT NULL,
    about_company TEXT,
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(user_id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE creators ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Creators
CREATE POLICY "Users can view their own creator profile"
    ON creators FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own creator profile"
    ON creators FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own creator profile"
    ON creators FOR UPDATE
    USING (auth.uid() = user_id);

-- RLS Policies for Brands
CREATE POLICY "Users can view their own brand profile"
    ON brands FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own brand profile"
    ON brands FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own brand profile"
    ON brands FOR UPDATE
    USING (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX idx_creators_user_id ON creators(user_id);
CREATE INDEX idx_brands_user_id ON brands(user_id);
