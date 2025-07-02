import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';
import FormData from 'form-data';
import fetch from 'node-fetch';

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const PLAYAI_API_KEY = process.env.PLAYAI_API_KEY;
const PLAYAI_USER_ID = process.env.PLAYAI_USER_ID;

const MEDICAL_VOICES = {
  voice1: 's3://voice-cloning-zero-shot/baf1ef41-36b6-428c-9bdf-50ba54682bd8/original/manifest.json',
  voice1Name: 'Dr. Sarah Chen',
  voice2: 's3://voice-cloning-zero-shot/e040bd1b-f190-4bdb-83f0-75ef85b18f84/original/manifest.json',
  voice2Name: 'Dr. Michael Rodriguez'
};

export const handler: Handler = async (event) => {
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
    const { podcastId } = JSON.parse(event.body || '{}');
    
    if (!podcastId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'podcastId required' })
      };
    }

    // Get podcast record
    const { data: podcast, error: podcastError } = await supabase
      .from('ai_podcasts')
      .select('*, source_documents')
      .eq('id', podcastId)
      .single();

    if (podcastError || !podcast) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Podcast not found' })
      };
    }

    if (podcast.status === 'completed') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Podcast already completed' })
      };
    }

    // Get document content
    const documentId = podcast.source_documents[0]?.id;
    if (!documentId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'No source document found' })
      };
    }

    const { data: document, error: docError } = await supabase
      .from('user_documents')
      .select('file_name, file_type, description, openai_metadata')
      .eq('id', documentId)
      .single();

    if (docError || !document) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Source document not found' })
      };
    }

    // Prepare content for PlayAI
    let fileBuffer: Buffer;
    let fileName = document.file_name;
    let fileType = document.file_type;

    // Try to get file from Supabase storage first
    const supabaseFilePath = document.openai_metadata?.supabase_file_path;
    
    if (supabaseFilePath) {
      const { data: fileData, error: downloadError } = await supabase.storage
        .from('user-uploads')
        .download(supabaseFilePath);
      
      if (!downloadError && fileData) {
        fileBuffer = Buffer.from(await fileData.arrayBuffer());
        console.log('✅ Downloaded original file:', fileName);
      }
    }
    
    // Fallback to description content
    if (!fileBuffer) {
      if (!document.description || document.description.length < 50) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'No accessible content for podcast generation' })
        };
      }
      
      fileBuffer = Buffer.from(document.description, 'utf-8');
      fileName = `${fileName.replace(/\.[^/.]+$/, '')}.txt`;
      fileType = 'text/plain';
      console.log('✅ Using description content as text');
    }

    // Call PlayAI API
    const formData = new FormData();
    formData.append('file', fileBuffer, {
      filename: fileName,
      contentType: fileType
    });
    formData.append('synthesisStyle', podcast.synthesis_style || 'podcast');
    formData.append('voice1', MEDICAL_VOICES.voice1);
    formData.append('voice1Name', MEDICAL_VOICES.voice1Name);
    formData.append('voice2', MEDICAL_VOICES.voice2);
    formData.append('voice2Name', MEDICAL_VOICES.voice2Name);

    console.log('🚀 Retrying PlayAI generation for podcast:', podcastId);

    const playaiResponse = await fetch('https://api.play.ai/api/v1/playnotes', {
      method: 'POST',
      headers: {
        'AUTHORIZATION': PLAYAI_API_KEY!,
        'X-USER-ID': PLAYAI_USER_ID!,
        'accept': 'application/json',
        ...formData.getHeaders()
      },
      body: formData
    });

    const playaiResult = await playaiResponse.json();

    if (!playaiResponse.ok) {
      console.error('PlayAI API error:', playaiResult);
      
      // Update podcast status to failed
      await supabase
        .from('ai_podcasts')
        .update({
          status: 'failed',
          error_message: playaiResult.errorMessage || playaiResult.message || `PlayAI API error: ${playaiResponse.status}`
        })
        .eq('id', podcastId);

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'PlayAI generation failed',
          details: playaiResult.errorMessage || playaiResult.message
        })
      };
    }

    // Update podcast with playnote ID
    await supabase
      .from('ai_podcasts')
      .update({
        playnote_id: playaiResult.id,
        status: 'generating',
        error_message: null
      })
      .eq('id', podcastId);

    console.log('✅ PlayAI generation started:', playaiResult.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        podcastId,
        playnoteId: playaiResult.id,
        status: 'generating',
        message: 'Podcast generation restarted successfully'
      })
    };

  } catch (error) {
    console.error('Error retrying podcast:', error);
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