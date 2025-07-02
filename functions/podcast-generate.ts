import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';
import FormData from 'form-data';
import fetch from 'node-fetch';

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// PlayAI credentials
const PLAYAI_API_KEY = process.env.PLAYAI_API_KEY;
const PLAYAI_USER_ID = process.env.PLAYAI_USER_ID;

// Medical professional voices
const MEDICAL_VOICES = {
  voice1: 's3://voice-cloning-zero-shot/baf1ef41-36b6-428c-9bdf-50ba54682bd8/original/manifest.json',
  voice1Name: 'Dr. Sarah Chen',
  voice2: 's3://voice-cloning-zero-shot/e040bd1b-f190-4bdb-83f0-75ef85b18f84/original/manifest.json',
  voice2Name: 'Dr. Michael Rodriguez'
};

interface GenerationRequest {
  userId: string;
  documentIds: string[];
  title: string;
  description?: string;
  synthesisStyle: 'podcast' | 'executive-briefing' | 'debate';
  specialty: string;
}

export const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    console.log('🚀 Podcast generation request received');
    console.log('📋 Environment check:', {
      hasPlayAIKey: !!PLAYAI_API_KEY,
      hasPlayAIUserId: !!PLAYAI_USER_ID,
      hasSupabaseURL: !!(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL),
      hasSupabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
    });

    // Validate PlayAI credentials first
    if (!PLAYAI_API_KEY || !PLAYAI_USER_ID) {
      console.error('❌ Missing PlayAI credentials:', {
        hasKey: !!PLAYAI_API_KEY,
        hasUserId: !!PLAYAI_USER_ID
      });
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'PlayAI service not configured' })
      };
    }

    const request: GenerationRequest = JSON.parse(event.body || '{}');
    console.log('📝 Request body:', {
      hasUserId: !!request.userId,
      documentCount: request.documentIds?.length || 0,
      hasTitle: !!request.title,
      synthesisStyle: request.synthesisStyle,
      specialty: request.specialty
    });
    
    const { userId, documentIds, title, description, synthesisStyle, specialty } = request;

    // Validate required fields
    if (!userId || !documentIds?.length || !title) {
      console.error('❌ Missing required fields:', {
        userId,
        documentIds,
        title
      });
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Verify user authentication
    console.log('🔐 Verifying user authentication for:', userId);
    const { data: user, error: userError } = await supabase.auth.admin.getUserById(userId);
    if (userError || !user) {
      console.error('❌ User authentication failed:', {
        userId,
        error: userError?.message || 'User not found'
      });
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Unauthorized' })
      };
    }
    console.log('✅ User authenticated successfully');

    // Get documents from user's vector store
    console.log('📄 Fetching documents:', documentIds);
    const { data: documents, error: docError } = await supabase
      .from('user_documents')
      .select('id, title, file_name, openai_file_id')
      .in('id', documentIds)
      .eq('user_id', userId)
      .eq('processing_status', 'completed');

    if (docError || !documents?.length) {
      console.error('❌ Document fetch failed:', {
        error: docError?.message || 'No documents found',
        documentIds,
        userId,
        documentsFound: documents?.length || 0
      });
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Documents not found or not accessible' })
      };
    }
    console.log('✅ Documents fetched:', documents.length);

    // Create podcast record
    console.log('💾 Creating podcast record...');
    const { data: podcast, error: podcastError } = await supabase
      .from('ai_podcasts')
      .insert({
        user_id: userId,
        title,
        description,
        synthesis_style: synthesisStyle,
        specialty,
        source_documents: documents,
        voice_settings: MEDICAL_VOICES,
        status: 'pending'
      })
      .select()
      .single();

    if (podcastError || !podcast) {
      console.error('❌ Failed to create podcast record:', {
        error: podcastError?.message || 'No podcast returned',
        code: podcastError?.code,
        details: podcastError?.details
      });
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to create podcast record' })
      };
    }
    console.log('✅ Podcast record created:', podcast.id);

    // Check if there's an active generation
    const { data: activeQueue } = await supabase
      .from('podcast_queue')
      .select('id')
      .eq('status', 'processing')
      .single();

    if (activeQueue) {
      // Add to queue
      const { data: nextPosition } = await supabase.rpc('get_next_queue_position');
      
      const { data: queueItem, error: queueError } = await supabase
        .from('podcast_queue')
        .insert({
          user_id: userId,
          podcast_id: podcast.id,
          position: nextPosition,
          status: 'waiting',
          document_urls: documents.map(doc => `https://api.openai.com/v1/files/${doc.openai_file_id}/content`),
          generation_settings: {
            synthesisStyle,
            voices: MEDICAL_VOICES
          }
        })
        .select()
        .single();

      if (queueError) {
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: 'Failed to add to queue' })
        };
      }

      return {
        statusCode: 202,
        headers,
        body: JSON.stringify({
          status: 'queued',
          podcastId: podcast.id,
          queuePosition: nextPosition,
          estimatedWaitTime: nextPosition * 5, // 5 minutes per generation
          message: `You're #${nextPosition} in the queue. Estimated wait time: ${nextPosition * 5} minutes.`
        })
      };
    }

    // Process immediately if no active generation
    try {
      // Get document with content and metadata
      const { data: fullDocument, error: fullDocError } = await supabase
        .from('user_documents')
        .select('openai_file_id, file_name, file_type, description, openai_metadata')
        .eq('id', documents[0].id)
        .single();

      if (fullDocError || !fullDocument) {
        console.error('❌ Failed to get document content:', {
          documentId: documents[0].id,
          error: fullDocError?.message || 'Document not found',
          fullDocError
        });
        throw new Error('Document not found');
      }
      
      console.log('✅ Document content retrieved:', {
        documentId: documents[0].id,
        filename: fullDocument.file_name,
        contentLength: fullDocument.description?.length || 0,
        hasOpenAIFile: !!fullDocument.openai_file_id
      });
      
      // Create queue item as processing
      const { data: queueItem } = await supabase
        .from('podcast_queue')
        .insert({
          user_id: userId,
          podcast_id: podcast.id,
          position: 1,
          status: 'processing',
          document_urls: [], // Not needed anymore
          generation_settings: {
            synthesisStyle,
            voices: MEDICAL_VOICES
          }
        })
        .select()
        .single();

      // Download the file from Supabase storage for PlayAI
      let fileBuffer: Buffer | undefined;
      let fileName: string = fullDocument.file_name;
      let fileType: string = fullDocument.file_type;
      
      // Get the Supabase file path from metadata
      const supabaseFilePath = fullDocument.openai_metadata?.supabase_file_path;
      
      if (supabaseFilePath) {
        console.log('📥 Downloading file from Supabase storage:', {
          filePath: supabaseFilePath,
          filename: fileName,
          fileType: fileType
        });
        
        // Download the file from Supabase storage
        const { data: fileData, error: downloadError } = await supabase.storage
          .from('user-uploads')
          .download(supabaseFilePath);
        
        if (downloadError || !fileData) {
          console.error('❌ Failed to download file from Supabase storage:', {
            filePath: supabaseFilePath,
            error: downloadError?.message || 'No file data returned'
          });
          throw new Error(`Failed to download file: ${downloadError?.message || 'File not found'}`);
        }
        
        // Convert file data to Buffer
        fileBuffer = Buffer.from(await fileData.arrayBuffer());
        
        console.log('✅ File downloaded successfully:', {
          filename: fileName,
          fileType: fileType,
          fileSize: fileBuffer.length,
          sizeKB: Math.round(fileBuffer.length / 1024)
        });
      }
      
      // If no file buffer yet (no Supabase file path), use document description as text content
      if (!fileBuffer) {
        console.log('📝 No Supabase file available, using document description as text content:', {
          documentId: documents[0].id,
          filename: fileName,
          hasDescription: !!fullDocument.description,
          contentLength: fullDocument.description?.length || 0,
          hasMetadata: !!fullDocument.openai_metadata
        });
        
        if (!fullDocument.description || fullDocument.description.trim().length < 50) {
          throw new Error('Document has no accessible content for podcast generation. Please re-upload the document.');
        }
        
        // Create a text file from the document description
        fileBuffer = Buffer.from(fullDocument.description, 'utf-8');
        fileName = `${fileName.replace(/\.[^/.]+$/, '')}.txt`; // Change extension to .txt
        fileType = 'text/plain';
        
        console.log('✅ Text content prepared from description:', {
          filename: fileName,
          fileType: fileType,
          contentLength: fileBuffer.length,
          preview: fullDocument.description.substring(0, 200) + '...'
        });
      }

      // Prepare JSON payload for PlayAI API (not multipart form data)
      const playaiPayload = {
        sourceFileUrl: fullDocument.openai_metadata?.supabase_public_url || '', // Use public URL if available
        synthesisStyle: synthesisStyle,
        voice1: MEDICAL_VOICES.voice1,
        voice1Name: MEDICAL_VOICES.voice1Name,
        voice2: MEDICAL_VOICES.voice2,
        voice2Name: MEDICAL_VOICES.voice2Name
      };
      
      // If we don't have a public URL, we need to create a temporary one or upload text content
      if (!playaiPayload.sourceFileUrl && fileBuffer) {
        // For text content, we'll need to create a temp file URL or handle differently
        // For now, let's throw an error and require public URLs
        throw new Error('PlayAI requires a publicly accessible file URL. Please re-upload the document to generate a public URL.');
      }

      // Update voice names to match PlayAI documentation examples
      const finalPayload = {
        sourceFileUrl: playaiPayload.sourceFileUrl,
        synthesisStyle: playaiPayload.synthesisStyle,
        voice1: playaiPayload.voice1,
        voice1Name: 'Angelo', // Using PlayAI documentation example names
        voice2: playaiPayload.voice2,
        voice2Name: 'Deedee'  // Using PlayAI documentation example names
      };

      console.log('📝 PlayAI Request Details:', {
        url: 'https://api.play.ai/api/v1/playnotes',
        method: 'POST',
        format: 'application/json', // Fixed: Using JSON format like JavaScript documentation
        payload: finalPayload,
        authHeaderFormat: 'Bearer [API_KEY]',
        hasApiKey: !!PLAYAI_API_KEY,
        hasUserId: !!PLAYAI_USER_ID
      });

      const playaiResponse = await fetch('https://api.play.ai/api/v1/playnotes', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${PLAYAI_API_KEY}`,
          'X-USER-ID': PLAYAI_USER_ID!,
          'Content-Type': 'application/json', // Fixed: Using JSON content type
          'accept': 'application/json'
        },
        body: JSON.stringify(finalPayload) // Fixed: Using JSON.stringify like documentation
      });

      let playaiResult;
      try {
        playaiResult = await playaiResponse.json();
      } catch (jsonError) {
        console.error('PlayAI response parsing error:', jsonError);
        throw new Error(`PlayAI API returned invalid response: ${playaiResponse.status} ${playaiResponse.statusText}`);
      }

      if (!playaiResponse.ok) {
        console.error('PlayAI API error:', {
          status: playaiResponse.status,
          statusText: playaiResponse.statusText,
          response: playaiResult,
          requestPayload: finalPayload, // Fixed: Use correct variable name
          authFormat: 'Bearer [API_KEY]' // Added for debugging
        });
        throw new Error(playaiResult.errorMessage || playaiResult.message || `PlayAI API error: ${playaiResponse.status}`);
      }

      console.log(`✅ PlayAI generation started with ID: ${playaiResult.id}`);

      // Update podcast with PlayNote ID
      await supabase
        .from('ai_podcasts')
        .update({
          playnote_id: playaiResult.id,
          status: 'generating'
          // Keep temp_file_path if it was set earlier
        })
        .eq('id', podcast.id);

      console.log('✅ Podcast generation started successfully');

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: 'generating',
          podcastId: podcast.id,
          playnoteId: playaiResult.id,
          message: 'Podcast generation started successfully'
        })
      };

    } catch (error) {
      console.error('❌ PlayAI API error during generation:', {
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      // Update podcast status to failed
      await supabase
        .from('ai_podcasts')
        .update({
          status: 'failed',
          error_message: error instanceof Error ? error.message : 'Unknown error'
        })
        .eq('id', podcast.id);

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Failed to start generation',
          details: error instanceof Error ? error.message : 'Unknown error'
        })
      };
    }

  } catch (error) {
    console.error('❌ Podcast generation error:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.constructor.name : typeof error
    });
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};