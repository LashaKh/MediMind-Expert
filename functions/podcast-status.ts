import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const PLAYAI_API_KEY = process.env.PLAYAI_API_KEY;
const PLAYAI_USER_ID = process.env.PLAYAI_USER_ID;

interface StatusRequest {
  podcastId: string;
  userId: string;
}

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET' && event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    let podcastId: string;
    let userId: string;

    if (event.httpMethod === 'GET') {
      // GET method - extract from query parameters
      podcastId = event.queryStringParameters?.podcastId || '';
      userId = event.queryStringParameters?.userId || '';
    } else {
      // POST method - extract from body
      const body: StatusRequest = JSON.parse(event.body || '{}');
      podcastId = body.podcastId;
      userId = body.userId;
    }

    if (!podcastId || !userId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Get podcast and queue info
    const { data: podcast, error: podcastError } = await supabase
      .from('ai_podcasts')
      .select(`
        *,
        podcast_queue (
          id,
          position,
          status
        )
      `)
      .eq('id', podcastId)
      .eq('user_id', userId)
      .single();

    if (podcastError || !podcast) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Podcast not found' })
      };
    }

    // If podcast is still in queue
    if (podcast.podcast_queue?.length > 0) {
      const queueItem = podcast.podcast_queue[0];
      
      if (queueItem.status === 'waiting') {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            podcast: {
              id: podcast.id,
              title: podcast.title,
              status: podcast.status,
              playnote_id: podcast.playnote_id,
              error_message: podcast.error_message
            },
            queue: {
              id: queueItem.id,
              position: queueItem.position,
              status: queueItem.status
            }
          })
        };
      }

      if (queueItem.status === 'processing') {
        // Check PlayAI status if we have a playnote_id
        if (podcast.playnote_id) {
          try {
            const playaiResponse = await fetch(
              `https://api.play.ai/api/v1/playnotes/${encodeURIComponent(podcast.playnote_id)}`,
              {
                headers: {
                  'Authorization': `Bearer ${PLAYAI_API_KEY}`, // Fixed: Added Bearer prefix
                  'X-USER-ID': PLAYAI_USER_ID!,
                  'accept': 'application/json'
                }
              }
            );

            if (playaiResponse.ok) {
              const playaiResult = await playaiResponse.json();
              
              if (playaiResult.status === 'completed') {
                // Clean up temporary file now that generation is complete
                if (podcast.temp_file_path) {
                  try {
                    await supabase.storage
                      .from('user-uploads')
                      .remove([podcast.temp_file_path]);
                    console.log(`🧹 Cleaned up temp file: ${podcast.temp_file_path}`);
                  } catch (cleanupError) {
                    console.warn('Failed to cleanup temp file:', cleanupError);
                  }
                }

                // Update database with completed status and audio URL
                await supabase
                  .from('ai_podcasts')
                  .update({
                    status: 'completed',
                    audio_url: playaiResult.audioUrl,
                    duration: playaiResult.duration,
                    transcript: playaiResult.transcript || null,
                    temp_file_path: null // Clear the temp file path
                  })
                  .eq('id', podcastId);

                // Update queue status
                await supabase
                  .from('podcast_queue')
                  .update({ status: 'completed' })
                  .eq('podcast_id', podcastId);

                // Start next item in queue
                await processNextInQueue();

                return {
                  statusCode: 200,
                  headers,
                  body: JSON.stringify({
                    podcast: {
                      id: podcast.id,
                      title: podcast.title,
                      status: 'completed',
                      playnote_id: podcast.playnote_id,
                      audio_url: playaiResult.audioUrl,
                      duration: playaiResult.duration,
                      transcript: playaiResult.transcript,
                      error_message: null
                    },
                    queue: {
                      id: queueItem.id,
                      position: queueItem.position,
                      status: 'completed'
                    }
                  })
                };
              }

              if (playaiResult.status === 'failed') {
                // Log the complete PlayAI response for debugging
                console.error('🚨 PlayAI Generation Failed - Full Response:', JSON.stringify(playaiResult, null, 2));
                console.error('📋 PlayAI Response Details:', {
                  id: playaiResult.id,
                  status: playaiResult.status,
                  sourceFileUrl: playaiResult.sourceFileUrl,
                  synthesisStyle: playaiResult.synthesisStyle,
                  requestedAt: playaiResult.requestedAt,
                  availableProperties: Object.keys(playaiResult)
                });

                // Extract any possible error information
                const errorMessage = playaiResult.error || 
                                   playaiResult.errorMessage || 
                                   playaiResult.message || 
                                   playaiResult.reason ||
                                   playaiResult.details ||
                                   'PlayAI generation failed - no error details provided';

                // Check if source file URL might be the issue
                let detailedError = errorMessage;
                if (playaiResult.sourceFileUrl) {
                  if (playaiResult.sourceFileUrl.includes('ehab364%20copy.pdf')) {
                    detailedError += ' | Possible issue: Document may be corrupted, too large, or contain unsupported content';
                  }
                  detailedError += ` | Source: ${playaiResult.sourceFileUrl}`;
                }

                console.error('💬 Final error message:', detailedError);

                // Clean up temporary file now that generation failed
                if (podcast.temp_file_path) {
                  try {
                    await supabase.storage
                      .from('user-uploads')
                      .remove([podcast.temp_file_path]);
                    console.log(`🧹 Cleaned up temp file after failure: ${podcast.temp_file_path}`);
                  } catch (cleanupError) {
                    console.warn('Failed to cleanup temp file after failure:', cleanupError);
                  }
                }

                // Update database with failed status and detailed error
                await supabase
                  .from('ai_podcasts')
                  .update({
                    status: 'failed',
                    error_message: detailedError,
                    temp_file_path: null // Clear the temp file path
                  })
                  .eq('id', podcastId);

                await supabase
                  .from('podcast_queue')
                  .update({ status: 'failed' })
                  .eq('podcast_id', podcastId);

                // Start next item in queue
                await processNextInQueue();

                return {
                  statusCode: 200,
                  headers,
                  body: JSON.stringify({
                    podcast: {
                      id: podcast.id,
                      title: podcast.title,
                      status: 'failed',
                      playnote_id: podcast.playnote_id,
                      audio_url: null,
                      duration: null,
                      transcript: null,
                      error_message: detailedError
                    },
                    queue: {
                      id: queueItem.id,
                      position: queueItem.position,
                      status: 'failed'
                    }
                  })
                };
              }

              // Still generating
              return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                  podcast: {
                    id: podcast.id,
                    title: podcast.title,
                    status: 'generating',
                    playnote_id: podcast.playnote_id,
                    audio_url: null,
                    duration: null,
                    transcript: null,
                    error_message: null
                  },
                  queue: {
                    id: queueItem.id,
                    position: queueItem.position,
                    status: 'processing'
                  }
                })
              };
            }
          } catch (error) {
            console.error('Error checking PlayAI status:', error);
          }
        }

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            podcast: {
              id: podcast.id,
              title: podcast.title,
              status: 'generating',
              playnote_id: podcast.playnote_id,
              audio_url: null,
              duration: null,
              transcript: null,
              error_message: null
            },
            queue: {
              id: queueItem.id,
              position: queueItem.position,
              status: 'processing'
            }
          })
        };
      }
    }

    // Return current podcast status with complete data
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        podcast: {
          id: podcast.id,
          title: podcast.title,
          status: podcast.status,
          playnote_id: podcast.playnote_id,
          audio_url: podcast.audio_url,
          duration: podcast.duration,
          transcript: podcast.transcript,
          error_message: podcast.error_message,
          created_at: podcast.created_at
        },
        queue: podcast.podcast_queue?.length > 0 ? {
          id: podcast.podcast_queue[0].id,
          position: podcast.podcast_queue[0].position,
          status: podcast.podcast_queue[0].status
        } : null
      })
    };

  } catch (error) {
    console.error('Status check error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

// Function to process next item in queue
async function processNextInQueue() {
  const { data: nextItem } = await supabase
    .from('podcast_queue')
    .select(`
      *,
      ai_podcasts (*)
    `)
    .eq('status', 'waiting')
    .order('position')
    .limit(1)
    .single();

  if (nextItem) {
    try {
      // Update status to processing
      await supabase
        .from('podcast_queue')
        .update({ status: 'processing' })
        .eq('id', nextItem.id);

      // Call PlayAI API
      const settings = nextItem.generation_settings;
      const formData = new FormData();
      formData.append('sourceFileUrl', nextItem.document_urls[0]);
      formData.append('synthesisStyle', settings.synthesisStyle);
      formData.append('voice1', settings.voices.voice1);
      formData.append('voice1Name', settings.voices.voice1Name);
      formData.append('voice2', settings.voices.voice2);
      formData.append('voice2Name', settings.voices.voice2Name);

      const playaiResponse = await fetch('https://api.play.ai/api/v1/playnotes', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${PLAYAI_API_KEY}`, // Fixed: Added Bearer prefix
          'X-USER-ID': PLAYAI_USER_ID!,
          'accept': 'application/json'
        },
        body: formData
      });

      const playaiResult = await playaiResponse.json();

      if (playaiResponse.ok) {
        // Update podcast with PlayNote ID
        await supabase
          .from('ai_podcasts')
          .update({
            playnote_id: playaiResult.id,
            status: 'generating'
          })
          .eq('id', nextItem.podcast_id);
      } else {
        throw new Error(playaiResult.message || 'PlayAI generation failed');
      }

    } catch (error) {
      console.error('Failed to process next queue item:', error);
      
      // Mark as failed and continue
      await supabase
        .from('podcast_queue')
        .update({ status: 'failed' })
        .eq('id', nextItem.id);

      await supabase
        .from('ai_podcasts')
        .update({
          status: 'failed',
          error_message: error instanceof Error ? error.message : 'Unknown error'
        })
        .eq('id', nextItem.podcast_id);

      // Try next item
      await processNextInQueue();
    }
  }
}