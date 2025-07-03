// Simple podcast document upload - no Netlify functions needed
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface PodcastUploadRequest {
  file: File;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
}

interface PodcastUploadResponse {
  documentId: string;
  publicUrl: string;
  message: string;
}

// Supported file types for podcasts
const SUPPORTED_FILE_TYPES = {
  'application/pdf': { ext: 'pdf', maxSize: 50 * 1024 * 1024 }, // 50MB
  'application/msword': { ext: 'doc', maxSize: 25 * 1024 * 1024 }, // 25MB
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { ext: 'docx', maxSize: 25 * 1024 * 1024 },
  'text/plain': { ext: 'txt', maxSize: 10 * 1024 * 1024 }, // 10MB
  'text/markdown': { ext: 'md', maxSize: 10 * 1024 * 1024 },
};

export async function uploadDocumentForPodcast(
  request: PodcastUploadRequest
): Promise<PodcastUploadResponse> {
  const { file, title, description, category = 'podcast_temp', tags = [] } = request;

  try {
    // Get current user
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }

    const userId = session.user.id;

    // Validate file type
    if (!SUPPORTED_FILE_TYPES[file.type as keyof typeof SUPPORTED_FILE_TYPES]) {
      throw new Error(`Unsupported file type: ${file.type}. Supported types: ${Object.keys(SUPPORTED_FILE_TYPES).join(', ')}`);
    }

    // Validate file size
    const maxSize = SUPPORTED_FILE_TYPES[file.type as keyof typeof SUPPORTED_FILE_TYPES].maxSize;
    if (file.size > maxSize) {
      throw new Error(`File size (${Math.round(file.size / 1024 / 1024)}MB) exceeds maximum allowed size (${Math.round(maxSize / 1024 / 1024)}MB) for ${file.type}`);
    }

    // Generate unique document ID and file path
    const documentId = crypto.randomUUID();
    const timestamp = Date.now();
    const fileExtension = SUPPORTED_FILE_TYPES[file.type as keyof typeof SUPPORTED_FILE_TYPES].ext;
    const fileName = `podcasts/${userId}/${timestamp}-${documentId}.${fileExtension}`;

    console.log('📤 Uploading file to Supabase storage:', {
      fileName,
      fileSize: file.size,
      fileType: file.type
    });

    // Upload file to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from('user-uploads')
      .upload(fileName, file, {
        contentType: file.type,
        upsert: false
      });

    if (uploadError) {
      console.error('❌ Failed to upload to Supabase storage:', uploadError);
      throw new Error(`Failed to upload file: ${uploadError.message}`);
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('user-uploads')
      .getPublicUrl(fileName);

    console.log('✅ File uploaded successfully:', {
      fileName,
      publicUrl,
      fileSize: file.size
    });

    // Extract text content from file for description if it's a text file
    let documentDescription = description || '';
    
    if (file.type === 'text/plain' || file.type === 'text/markdown') {
      try {
        const textContent = await file.text();
        documentDescription = textContent.substring(0, 10000); // Limit to 10KB
      } catch (error) {
        console.warn('Could not extract text content:', error);
      }
    }

    // If no description, create a basic one
    if (!documentDescription || documentDescription.trim().length < 50) {
      documentDescription = `MEDICAL DOCUMENT FOR PODCAST GENERATION
=======================================

Document Title: ${title.trim()}
Original Filename: ${file.name}
File Type: ${file.type}
File Size: ${Math.round(file.size / 1024)} KB
Category: ${category}
Upload Date: ${new Date().toISOString()}
Tags: ${tags.join(', ') || 'None'}

CONTENT SUMMARY:
This is a ${file.type === 'application/pdf' ? 'PDF document' : 'medical document'} uploaded for podcast generation. The document contains medical information that will be processed by PlayAI to create a professional podcast.

${description?.trim() ? `User Description: ${description.trim()}` : ''}

PODCAST GENERATION NOTES:
- This document is intended for AI-powered podcast generation
- Content should be discussed with medical accuracy and professionalism
- Target audience: Healthcare professionals
- Maintain medical terminology while ensuring accessibility
- Include relevant clinical context and practical applications

This document is ready for AI-powered podcast generation with medical accuracy and professional context.`;
    }

    // Create document record in podcast_documents table
    console.log('💾 Creating podcast document record...');
    const { data: documentRecord, error: documentError } = await supabase
      .from('podcast_documents')
      .insert({
        id: documentId,
        user_id: userId,
        title: title.trim(),
        description: documentDescription,
        file_name: file.name,
        file_type: file.type,
        file_size: file.size,
        supabase_file_path: fileName,
        supabase_public_url: publicUrl,
        tags: tags,
        upload_status: 'completed',
        is_processed: false
      })
      .select()
      .single();

    if (documentError) {
      console.error('❌ Failed to create document record:', documentError);
      
      // Clean up uploaded file
      await supabase.storage
        .from('user-uploads')
        .remove([fileName]);
      
      throw new Error(`Failed to create document record: ${documentError.message}`);
    }

    console.log('✅ Document record created successfully:', {
      documentId: documentRecord.id,
      title: documentRecord.title,
      filename: documentRecord.file_name,
      publicUrl
    });

    return {
      documentId: documentRecord.id,
      publicUrl,
      message: 'Document uploaded successfully and ready for podcast generation'
    };

  } catch (error) {
    console.error('❌ Error uploading document for podcast:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to upload document');
  }
}

// Generate podcast using Supabase Edge Function
export async function generatePodcast(request: {
  userId: string;
  documentIds: string[];
  title: string;
  description?: string;
  synthesisStyle: 'podcast' | 'executive-briefing' | 'debate';
  specialty: string;
}) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }

    console.log('🎵 Calling Supabase Edge Function for podcast generation...');

    // Call Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('generate-podcast', {
      body: request,
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      }
    });

    if (error) {
      console.error('❌ Supabase Edge Function error:', error);
      throw new Error(error.message || 'Failed to generate podcast');
    }

    console.log('✅ Podcast generation started:', data);
    return data;

  } catch (error) {
    console.error('❌ Error generating podcast:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to generate podcast');
  }
}

// Clean up podcast documents after generation (optional)
export async function cleanupPodcastDocument(documentId: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }

    // Get document info first
    const { data: document } = await supabase
      .from('podcast_documents')
      .select('supabase_file_path')
      .eq('id', documentId)
      .eq('user_id', session.user.id)
      .single();

    if (document?.supabase_file_path) {
      // Delete file from storage
      await supabase.storage
        .from('user-uploads')
        .remove([document.supabase_file_path]);
    }

    // Delete document record
    await supabase
      .from('podcast_documents')
      .delete()
      .eq('id', documentId)
      .eq('user_id', session.user.id);

    console.log('✅ Cleaned up podcast document:', documentId);
  } catch (error) {
    console.error('❌ Error cleaning up podcast document:', error);
    // Don't throw - cleanup failures shouldn't break the flow
  }
}