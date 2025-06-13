-- Supabase Setup: Handle new user creation (SAFE VERSION)
-- This version safely handles existing policies and triggers

-- Step 1: Create a function to handle new user creation
-- This function will be triggered whenever a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert a new row into public.users table when a user signs up
  -- Maps auth.users.id to public.users.user_id
  -- Maps auth.users.email to public.users.email  
  -- Maps metadata from auth.users.raw_user_meta_data to public.users fields
  INSERT INTO public.users (
    user_id, 
    email, 
    full_name, 
    created_at, 
    updated_at
  )
  VALUES (
    NEW.id, 
    NEW.email, 
    NEW.raw_user_meta_data->>'full_name',
    NOW(),
    NOW()
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 2: Create the trigger that fires the function (safe version)
-- This trigger will run after each new user is inserted into auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW 
  EXECUTE FUNCTION public.handle_new_user();

-- Step 3: Enable Row Level Security on the users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop existing policies and recreate them (safe approach)
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.users;

-- Create RLS policies for the users table
-- Allow users to view their own profile
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = user_id);

-- Allow users to update their own profile  
CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = user_id);

-- Allow authenticated users to insert their own profile (for the trigger)
CREATE POLICY "Enable insert for authenticated users" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Step 5: Handle personal_knowledge_base_documents table (safe version)
ALTER TABLE public.personal_knowledge_base_documents ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own documents" ON public.personal_knowledge_base_documents;
CREATE POLICY "Users can view own documents" ON public.personal_knowledge_base_documents
  FOR ALL USING (auth.uid() = user_id);

-- Step 6: Add profile_picture_url column to users table (TASK 10 UPDATE)
-- Add profile_picture_url column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'users' 
    AND column_name = 'profile_picture_url'
  ) THEN
    ALTER TABLE public.users ADD COLUMN profile_picture_url TEXT;
  END IF;
END $$; 