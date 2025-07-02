import { supabase } from '../supabase';

export interface DocumentUploadRequest {
  file: {
    name: string;
    type: string;
    data: string; // base64 data URL
  };
  metadata: {
    title: string;
    description?: string;
    category?: string;
    tags?: string[];
    isPrivate?: boolean;
  };
}

export interface DocumentUploadResponse {
  documentId: string;
  title: string;
  fileName: string;
  fileSize: number;
  category: string;
  uploadStatus: string;
  processingStatus: string;
  storagePath: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  statusCode: number;
}

/**
 * Upload a document to the knowledge base
 */
export async function uploadDocument(
  request: DocumentUploadRequest
): Promise<DocumentUploadResponse> {
  try {
    // Get the current session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      throw new Error(`Authentication error: ${sessionError.message}`);
    }
    
    if (!session?.access_token) {
      throw new Error('No authentication token available');
    }

    // Make the API call to our Netlify Function
    const response = await fetch('/.netlify/functions/document-upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(request),
    });

    const result: ApiResponse<DocumentUploadResponse> = await response.json();

    if (!response.ok) {
      throw new Error(result.error || `HTTP error! status: ${response.status}`);
    }

    if (!result.success || !result.data) {
      throw new Error(result.error || 'Upload failed');
    }

    return result.data;
  } catch (error) {
    console.error('Document upload error:', error);
    throw error instanceof Error ? error : new Error('Unknown upload error');
  }
}

/**
 * Get upload status for a document
 */
export async function getDocumentStatus(documentId: string): Promise<{
  uploadStatus: string;
  processingStatus: string;
  errorMessage?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('user_documents')
      .select('upload_status, processing_status, error_message')
      .eq('id', documentId)
      .single();

    if (error) {
      throw new Error(`Failed to get document status: ${error.message}`);
    }

    return {
      uploadStatus: data.upload_status,
      processingStatus: data.processing_status,
      errorMessage: data.error_message || undefined,
    };
  } catch (error) {
    console.error('Get document status error:', error);
    throw error instanceof Error ? error : new Error('Unknown error getting document status');
  }
}

/**
 * List user's documents with optional filtering
 */
export async function listDocuments(options?: {
  category?: string;
  limit?: number;
  offset?: number;
}): Promise<{
  documents: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    fileName: string;
    fileSize: number;
    uploadStatus: string;
    processingStatus: string;
    createdAt: string;
    updatedAt: string;
  }>;
  total: number;
}> {
  try {
    let query = supabase
      .from('user_documents')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (options?.category) {
      query = query.eq('category', options.category);
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    if (options?.offset) {
      query = query.range(options.offset, (options.offset + (options.limit || 10)) - 1);
    }

    const { data, error, count } = await query;

    if (error) {
      throw new Error(`Failed to list documents: ${error.message}`);
    }

    return {
      documents: data?.map(doc => ({
        id: doc.id,
        title: doc.title,
        description: doc.description,
        category: doc.category,
        tags: doc.tags,
        fileName: doc.file_name,
        fileSize: doc.file_size,
        uploadStatus: doc.upload_status,
        processingStatus: doc.processing_status,
        createdAt: doc.created_at,
        updatedAt: doc.updated_at,
      })) || [],
      total: count || 0,
    };
  } catch (error) {
    console.error('List documents error:', error);
    throw error instanceof Error ? error : new Error('Unknown error listing documents');
  }
}

/**
 * Delete a document
 */
export async function deleteDocument(documentId: string): Promise<void> {
  try {
    // First get the document to find the storage path
    const { data: document, error: fetchError } = await supabase
      .from('user_documents')
      .select('file_path')
      .eq('id', documentId)
      .single();

    if (fetchError) {
      throw new Error(`Failed to find document: ${fetchError.message}`);
    }

    // Delete from storage
    if (document.file_path) {
      const { error: storageError } = await supabase.storage
        .from('user-uploads')
        .remove([document.file_path]);

      if (storageError) {
        console.warn('Failed to delete file from storage:', storageError.message);
        // Continue with database deletion even if storage deletion fails
      }
    }

    // Delete from database
    const { error: deleteError } = await supabase
      .from('user_documents')
      .delete()
      .eq('id', documentId);

    if (deleteError) {
      throw new Error(`Failed to delete document: ${deleteError.message}`);
    }
  } catch (error) {
    console.error('Delete document error:', error);
    throw error instanceof Error ? error : new Error('Unknown error deleting document');
  }
} 