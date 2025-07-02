import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface ListRequest {
  userId: string;
  specialty?: string;
  status?: string;
  page?: number;
  limit?: number;
}

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
    const {
      userId,
      specialty,
      status,
      page = '1',
      limit = '10'
    } = queryParams;

    if (!userId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing userId parameter' })
      };
    }

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;

    // Build query
    let query = supabase
      .from('ai_podcasts')
      .select(`
        *,
        podcast_favorites (
          id
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    // Apply filters
    if (specialty) {
      query = query.eq('specialty', specialty);
    }

    if (status) {
      query = query.eq('status', status);
    }

    // Apply pagination
    query = query.range(offset, offset + limitNum - 1);

    const { data: podcasts, error, count } = await query;

    if (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to fetch podcasts' })
      };
    }

    // Get total count for pagination
    const { count: totalCount } = await supabase
      .from('ai_podcasts')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', userId);

    const totalPages = Math.ceil((totalCount || 0) / limitNum);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        podcasts: podcasts || [],
        pagination: {
          currentPage: pageNum,
          totalPages,
          totalCount: totalCount || 0,
          hasNextPage: pageNum < totalPages,
          hasPreviousPage: pageNum > 1
        }
      })
    };

  } catch (error) {
    console.error('List podcasts error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};