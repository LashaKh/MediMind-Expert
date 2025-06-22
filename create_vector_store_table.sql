-- Create user_vector_stores table for OpenAI Vector Store management
CREATE TABLE IF NOT EXISTS public.user_vector_stores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  openai_vector_store_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  status TEXT DEFAULT 'active',
  document_count INTEGER DEFAULT 0,
  total_size_bytes BIGINT DEFAULT 0,
  openai_metadata JSONB DEFAULT '{}',
  openai_error TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_accessed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_vector_stores ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Users can view own vector stores" ON public.user_vector_stores;
DROP POLICY IF EXISTS "Users can manage own vector stores" ON public.user_vector_stores;

CREATE POLICY "Users can view own vector stores" ON public.user_vector_stores
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own vector stores" ON public.user_vector_stores
  FOR ALL USING (auth.uid() = user_id);

-- Create user_documents table for document management
CREATE TABLE IF NOT EXISTS public.user_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  vector_store_id UUID REFERENCES public.user_vector_stores(id) ON DELETE CASCADE,
  openai_file_id TEXT,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  file_name TEXT NOT NULL,
  file_size BIGINT DEFAULT 0,
  file_type TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  tags TEXT[] DEFAULT '{}',
  upload_status TEXT DEFAULT 'pending',
  is_private BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for user_documents
ALTER TABLE public.user_documents ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_documents
DROP POLICY IF EXISTS "Users can view own documents" ON public.user_documents;
DROP POLICY IF EXISTS "Users can manage own documents" ON public.user_documents;

CREATE POLICY "Users can view own documents" ON public.user_documents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own documents" ON public.user_documents
  FOR ALL USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_vector_stores_user_id ON public.user_vector_stores(user_id);
CREATE INDEX IF NOT EXISTS idx_user_vector_stores_openai_id ON public.user_vector_stores(openai_vector_store_id);
CREATE INDEX IF NOT EXISTS idx_user_documents_user_id ON public.user_documents(user_id);
CREATE INDEX IF NOT EXISTS idx_user_documents_vector_store_id ON public.user_documents(vector_store_id);