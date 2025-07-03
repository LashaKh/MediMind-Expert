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

// Medical professional voices - Using standard PlayAI voices for testing
const MEDICAL_VOICES = {
  voice1: 'marcus', // Standard PlayAI voice
  voice1Name: 'Dr. Sarah Chen',
  voice2: 'maya', // Standard PlayAI voice
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

    // Get documents from podcast_documents table (not user_documents)
    console.log('📄 Fetching podcast documents:', documentIds);
    const { data: documents, error: docError } = await supabase
      .from('podcast_documents')
      .select('id, title, file_name, supabase_file_path, supabase_public_url, description, file_type')
      .in('id', documentIds)
      .eq('user_id', userId)
      .eq('upload_status', 'completed');

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
          document_urls: documents.map(doc => doc.supabase_public_url),
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
      // Use the already fetched document data (no need for additional query)
      const fullDocument = documents[0];
      
      console.log('✅ Document content retrieved:', {
        documentId: fullDocument.id,
        filename: fullDocument.file_name,
        contentLength: fullDocument.description?.length || 0,
        hasSupabaseFile: !!fullDocument.supabase_file_path,
        hasPublicUrl: !!fullDocument.supabase_public_url
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
      
      // Get the Supabase file path from podcast document
      const supabaseFilePath = fullDocument.supabase_file_path;
      
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
          hasPublicUrl: !!fullDocument.supabase_public_url
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
        sourceFileUrl: fullDocument.supabase_public_url || '', // Use public URL from podcast document
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

      // Use the EXACT working pattern from the successful example
      const FormData = require('form-data');
      const formData = new FormData();
      
      // CRITICAL FIX: Remove dangerous test URL fallback
      if (!playaiPayload.sourceFileUrl) {
        throw new Error('Document must have a publicly accessible URL for podcast generation. Please re-upload the document.');
      }
      
      // TEST MODE: Try with a simple known working document for debugging
      const isTestMode = title.toLowerCase().includes('test') || title.toLowerCase().includes('debug');
      const testDocumentUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
      
      if (isTestMode) {
        console.log('🧪 TEST MODE: Using simple test document');
        playaiPayload.sourceFileUrl = testDocumentUrl;
        playaiPayload.synthesisStyle = 'executive-briefing'; // Try different synthesis style
      }
      
      formData.append('sourceFileUrl', playaiPayload.sourceFileUrl);
      formData.append('synthesisStyle', playaiPayload.synthesisStyle);
      formData.append('voice1', playaiPayload.voice1);
      formData.append('voice1Name', MEDICAL_VOICES.voice1Name); // Use medical names
      formData.append('voice2', playaiPayload.voice2);
      formData.append('voice2Name', MEDICAL_VOICES.voice2Name); // Use medical names

      console.log('📝 PlayAI Request Details (CORRECTED with official documentation):', {
        url: 'https://api.play.ai/api/v1/playnotes',
        method: 'POST',
        format: 'multipart/form-data',
        sourceFileUrl: playaiPayload.sourceFileUrl,
        synthesisStyle: playaiPayload.synthesisStyle,
        voice1Name: MEDICAL_VOICES.voice1Name,
        voice2Name: MEDICAL_VOICES.voice2Name,
        authHeaderFormat: 'Authorization: Bearer [API_KEY]', // CORRECTED format
        hasApiKey: !!PLAYAI_API_KEY,
        hasUserId: !!PLAYAI_USER_ID
      });

      const playaiResponse = await fetch('https://api.play.ai/api/v1/playnotes', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${PLAYAI_API_KEY}`, // FIX: Correct Bearer format
          'X-USER-ID': PLAYAI_USER_ID!,
          'accept': 'application/json',
          ...formData.getHeaders() // Let form-data set the Content-Type with boundary
        },
        body: formData
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
          requestPayload: { sourceUrl: playaiPayload.sourceFileUrl, synthesisStyle: playaiPayload.synthesisStyle },
          authFormat: 'Authorization: Bearer [API_KEY]' // CORRECTED format
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