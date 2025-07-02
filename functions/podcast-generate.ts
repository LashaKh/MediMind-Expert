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
    // Validate PlayAI credentials first
    if (!PLAYAI_API_KEY || !PLAYAI_USER_ID) {
      console.error('Missing PlayAI credentials');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'PlayAI service not configured' })
      };
    }

    const request: GenerationRequest = JSON.parse(event.body || '{}');
    const { userId, documentIds, title, description, synthesisStyle, specialty } = request;

    // Validate required fields
    if (!userId || !documentIds?.length || !title) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Verify user authentication
    const { data: user } = await supabase.auth.admin.getUserById(userId);
    if (!user) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Unauthorized' })
      };
    }

    // Get documents from user's vector store
    const { data: documents, error: docError } = await supabase
      .from('user_documents')
      .select('id, title, file_name, openai_file_id')
      .in('id', documentIds)
      .eq('user_id', userId)
      .eq('processing_status', 'completed');

    if (docError || !documents?.length) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Documents not found or not accessible' })
      };
    }

    // Create podcast record
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
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to create podcast record' })
      };
    }

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
      // Get document content from user_documents table
      const { data: fullDocument, error: fullDocError } = await supabase
        .from('user_documents')
        .select('description, file_name')
        .eq('id', documents[0].id)
        .single();

      if (fullDocError || !fullDocument?.description) {
        throw new Error('Document content not found');
      }
      
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

      // Create a temporary URL for the document content
      // Upload the document content to Supabase storage to get a public URL
      const tempFileName = `temp-documents/${Date.now()}-${fullDocument.file_name}`;
      const textContent = Buffer.from(fullDocument.description, 'utf-8');
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('user-uploads')
        .upload(tempFileName, textContent, {
          contentType: 'text/plain',
          upsert: true
        });

      if (uploadError) {
        throw new Error(`Failed to create document URL: ${uploadError.message}`);
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('user-uploads')
        .getPublicUrl(tempFileName);

      const sourceFileUrl = urlData.publicUrl;

      // Call PlayAI API exactly like the working test
      const formData = new FormData();
      formData.append('sourceFileUrl', sourceFileUrl);
      formData.append('synthesisStyle', synthesisStyle);
      formData.append('voice1', MEDICAL_VOICES.voice1);
      formData.append('voice1Name', MEDICAL_VOICES.voice1Name);
      formData.append('voice2', MEDICAL_VOICES.voice2);
      formData.append('voice2Name', MEDICAL_VOICES.voice2Name);

      console.log('📝 PlayAI Request Details:', {
        sourceFileUrl,
        synthesisStyle,
        voice1: MEDICAL_VOICES.voice1,
        voice1Name: MEDICAL_VOICES.voice1Name,
        voice2: MEDICAL_VOICES.voice2,
        voice2Name: MEDICAL_VOICES.voice2Name
      });

      const playaiResponse = await fetch('https://api.play.ai/api/v1/playnotes', {
        method: 'POST',
        headers: {
          'AUTHORIZATION': PLAYAI_API_KEY!, // Note: AUTHORIZATION not Authorization: Bearer
          'X-USER-ID': PLAYAI_USER_ID!,
          'accept': 'application/json',
          ...formData.getHeaders()
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
        console.error('PlayAI API error:', playaiResult);
        console.error('Request data:', {
          sourceFileUrl,
          synthesisStyle,
          voice1: MEDICAL_VOICES.voice1,
          voice1Name: MEDICAL_VOICES.voice1Name
        });
        throw new Error(playaiResult.errorMessage || playaiResult.message || `PlayAI API error: ${playaiResponse.status}`);
      }

      console.log(`✅ PlayAI generation started with ID: ${playaiResult.id}`);

      // Update podcast with PlayNote ID and temp file path for later cleanup
      await supabase
        .from('ai_podcasts')
        .update({
          playnote_id: playaiResult.id,
          status: 'generating',
          temp_file_path: tempFileName // Store for cleanup after completion
        })
        .eq('id', podcast.id);

      // DON'T clean up temporary file yet! PlayAI will download it later during processing
      console.log(`📁 Temp file preserved for PlayAI download: ${tempFileName}`);

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
        body: JSON.stringify({ error: 'Failed to start generation' })
      };
    }

  } catch (error) {
    console.error('Podcast generation error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};