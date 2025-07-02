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
    console.log('🚀 Starting queue processor...');

    // First, clean up any old processing items (older than 10 minutes)
    const { data: expiredItems } = await supabase
      .from('podcast_queue')
      .update({ status: 'failed' })
      .eq('status', 'processing')
      .lt('created_at', new Date(Date.now() - 10 * 60 * 1000).toISOString())
      .select();

    if (expiredItems && expiredItems.length > 0) {
      console.log(`⏰ Cleaned up ${expiredItems.length} expired processing items`);
      
      // Update corresponding podcasts to failed
      for (const item of expiredItems) {
        await supabase
          .from('ai_podcasts')
          .update({
            status: 'failed',
            error_message: 'Generation timeout - please try again'
          })
          .eq('id', item.podcast_id);
      }
    }

    // Get the next waiting item in queue
    const { data: nextItem, error: queueError } = await supabase
      .from('podcast_queue')
      .select(`
        *,
        ai_podcasts (*)
      `)
      .eq('status', 'waiting')
      .order('position')
      .limit(1)
      .single();

    if (queueError || !nextItem) {
      console.log('📭 No items in queue to process');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: 'No items in queue',
          processed: 0 
        })
      };
    }

    console.log(`🎯 Processing queue item: ${nextItem.id} for podcast: ${nextItem.podcast_id}`);

    // Update queue item to processing
    await supabase
      .from('podcast_queue')
      .update({ status: 'processing' })
      .eq('id', nextItem.id);

    // Update podcast status to generating
    await supabase
      .from('ai_podcasts')
      .update({ status: 'generating' })
      .eq('id', nextItem.podcast_id);

    // Prepare PlayAI request
    const settings = nextItem.generation_settings;
    const documentUrls = nextItem.document_urls;

    if (!documentUrls || documentUrls.length === 0) {
      throw new Error('No document URLs found for generation');
    }

    // Get document content from Supabase instead of OpenAI URL
    const documentId = nextItem.ai_podcasts.source_documents[0]?.id;
    if (!documentId) {
      throw new Error('No document ID found');
    }

    // Get document content from user_documents table
    const { data: document, error: docError } = await supabase
      .from('user_documents')
      .select('description, file_name')
      .eq('id', documentId)
      .single();

    if (docError || !document?.description) {
      throw new Error('Document content not found');
    }

    console.log(`📄 Using document: ${document.file_name}`);

    // Create a temporary URL for the document content
    console.log('📄 Creating public URL for document content...');
    const tempFileName = `temp-documents/queue-${Date.now()}-${document.file_name}`;
    const textContent = Buffer.from(document.description, 'utf-8');
    
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
    console.log('🔗 Document URL created:', sourceFileUrl);

    // Use the exact approach that worked in our test
    const formData = new FormData();
    formData.append('sourceFileUrl', sourceFileUrl);
    formData.append('synthesisStyle', settings.synthesisStyle || 'podcast');
    formData.append('voice1', settings.voices?.voice1 || MEDICAL_VOICES.voice1);
    formData.append('voice1Name', settings.voices?.voice1Name || MEDICAL_VOICES.voice1Name);
    formData.append('voice2', settings.voices?.voice2 || MEDICAL_VOICES.voice2);
    formData.append('voice2Name', settings.voices?.voice2Name || MEDICAL_VOICES.voice2Name);

    console.log('🎬 Calling PlayAI API with document URL...');
    console.log('Request parameters:', {
      sourceFileUrl,
      synthesisStyle: settings.synthesisStyle || 'podcast',
      voice1: settings.voices?.voice1 || MEDICAL_VOICES.voice1,
      voice1Name: settings.voices?.voice1Name || MEDICAL_VOICES.voice1Name,
      voice2: settings.voices?.voice2 || MEDICAL_VOICES.voice2,
      voice2Name: settings.voices?.voice2Name || MEDICAL_VOICES.voice2Name
    });

    // Call PlayAI API exactly like the working test
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

    const playaiResult = await playaiResponse.json() as any;

    if (!playaiResponse.ok) {
      console.error('PlayAI API error details:', playaiResult);
      console.error('Request data:', {
        sourceFileUrl,
        synthesisStyle: settings.synthesisStyle || 'podcast',
        voice1: settings.voices?.voice1 || MEDICAL_VOICES.voice1,
        voice1Name: settings.voices?.voice1Name || MEDICAL_VOICES.voice1Name
      });
      throw new Error(playaiResult.errorMessage || playaiResult.message || 'PlayAI generation failed');
    }

    console.log(`✅ PlayAI generation started with ID: ${playaiResult.id}`);

    // DON'T clean up temporary file yet! PlayAI will download it later during processing
    console.log(`📁 Temp file preserved for PlayAI download: ${tempFileName}`);

    // Update podcast with PlayNote ID and temp file path for later cleanup
    await supabase
      .from('ai_podcasts')
      .update({
        playnote_id: playaiResult.id,
        status: 'generating',
        temp_file_path: tempFileName // Store for cleanup after completion
      })
      .eq('id', nextItem.podcast_id);

    // Keep queue item as processing (will be completed by status checker)
    
    console.log('🎉 Queue processing completed successfully');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Queue item processed successfully',
        processed: 1,
        podcastId: nextItem.podcast_id,
        playnoteId: playaiResult.id
      })
    };

  } catch (error) {
    console.error('❌ Queue processing error:', error);

    // If we have a queue item that failed, mark it as failed
    try {
      const { data: processingItems } = await supabase
        .from('podcast_queue')
        .select('*')
        .eq('status', 'processing')
        .order('created_at', { ascending: false })
        .limit(1);

      if (processingItems && processingItems.length > 0) {
        const failedItem = processingItems[0];
        
        await supabase
          .from('podcast_queue')
          .update({ status: 'failed' })
          .eq('id', failedItem.id);

        await supabase
          .from('ai_podcasts')
          .update({
            status: 'failed',
            error_message: error instanceof Error ? error.message : 'Generation failed'
          })
          .eq('id', failedItem.podcast_id);

        console.log(`💥 Marked failed item: ${failedItem.id}`);
      }
    } catch (cleanupError) {
      console.error('🧹 Cleanup error:', cleanupError);
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Queue processing failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};