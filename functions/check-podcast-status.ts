import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const PLAYAI_API_KEY = process.env.PLAYAI_API_KEY;
const PLAYAI_USER_ID = process.env.PLAYAI_USER_ID;

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get podcast ID from query parameters
    const podcastId = event.queryStringParameters?.podcastId;
    
    if (!podcastId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'podcastId parameter required' })
      };
    }

    // Get podcast record from database
    const { data: podcast, error: podcastError } = await supabase
      .from('ai_podcasts')
      .select('*')
      .eq('id', podcastId)
      .single();

    if (podcastError || !podcast) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Podcast not found' })
      };
    }

    let playaiStatus = null;
    let playaiResult = null;

    // If we have a playnote_id, check PlayAI status
    if (podcast.playnote_id && PLAYAI_API_KEY && PLAYAI_USER_ID) {
      try {
        const playaiResponse = await fetch(`https://api.play.ai/api/v1/playnotes/${podcast.playnote_id}`, {
          headers: {
            'AUTHORIZATION': PLAYAI_API_KEY,
            'X-USER-ID': PLAYAI_USER_ID,
            'accept': 'application/json'
          }
        });

        if (playaiResponse.ok) {
          playaiResult = await playaiResponse.json();
          playaiStatus = playaiResult.status;

          // If PlayAI shows completed but our DB doesn't, update it
          if (playaiResult.status === 'completed' && podcast.status !== 'completed') {
            await supabase
              .from('ai_podcasts')
              .update({
                status: 'completed',
                audio_url: playaiResult.audioUrl,
                duration: playaiResult.duration
              })
              .eq('id', podcastId);
          }
        }
      } catch (playaiError) {
        console.error('Error checking PlayAI status:', playaiError);
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        podcastId: podcast.id,
        title: podcast.title,
        status: podcast.status,
        playnoteId: podcast.playnote_id,
        audioUrl: podcast.audio_url,
        duration: podcast.duration,
        errorMessage: podcast.error_message,
        createdAt: podcast.created_at,
        playaiStatus,
        playaiResult: playaiResult ? {
          status: playaiResult.status,
          audioUrl: playaiResult.audioUrl,
          duration: playaiResult.duration,
          progress: playaiResult.progress
        } : null
      })
    };

  } catch (error) {
    console.error('Error checking podcast status:', error);
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