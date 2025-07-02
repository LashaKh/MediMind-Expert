import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
    const queryParams = event.queryStringParameters || {};
    const { userId } = queryParams;

    if (!userId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing userId parameter' })
      };
    }

    // Get user's queue status
    const { data: userQueue } = await supabase
      .from('podcast_queue')
      .select(`
        *,
        ai_podcasts (
          id,
          title,
          status
        )
      `)
      .eq('user_id', userId)
      .in('status', ['waiting', 'processing'])
      .order('position')
      .single();

    // Get overall queue status
    const { data: queueStats } = await supabase
      .from('podcast_queue')
      .select('status')
      .in('status', ['waiting', 'processing']);

    const waitingCount = queueStats?.filter(item => item.status === 'waiting').length || 0;
    const processingCount = queueStats?.filter(item => item.status === 'processing').length || 0;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        userQueue: userQueue ? {
          id: userQueue.id,
          position: userQueue.position,
          status: userQueue.status,
          podcast: userQueue.ai_podcasts,
          estimatedWaitTime: userQueue.position * 5 // 5 minutes per item
        } : null,
        queueStats: {
          waiting: waitingCount,
          processing: processingCount,
          total: waitingCount + processingCount
        }
      })
    };

  } catch (error) {
    console.error('Queue status error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};