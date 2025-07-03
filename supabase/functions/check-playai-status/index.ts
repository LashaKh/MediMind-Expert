import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0';

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
};

console.log('Edge function `check-playai-status` initializing...');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request (CORS preflight)');
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Get environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const playaiApiKey = Deno.env.get('PLAYAI_API_KEY');
    const playaiUserId = Deno.env.get('PLAYAI_USER_ID');

    if (!supabaseUrl || !supabaseServiceKey || !playaiApiKey || !playaiUserId) {
      console.error('CRITICAL: Required environment variables not set.');
      return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get user from authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Authorization header required.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      console.error('Authentication failed:', userError);
      return new Response(JSON.stringify({ error: 'Authentication failed.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405,
      });
    }

    // Parse request body
    const body = await req.json();
    const { playnoteId } = body;

    if (!playnoteId) {
      return new Response(JSON.stringify({ error: 'playnoteId is required.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    console.log('🔍 Checking PlayAI status for:', playnoteId);
    console.log('📋 Request details:', {
      url: `https://api.play.ai/api/v1/playnotes/${playnoteId}`,
      headers: {
        'Authorization': `Bearer ${playaiApiKey}`,
        'X-USER-ID': playaiUserId
      }
    });

    const playaiResponse = await fetch(`https://api.play.ai/api/v1/playnotes/${playnoteId}`, {
      headers: {
        'Authorization': `Bearer ${playaiApiKey}`,
        'X-USER-ID': playaiUserId
      }
    });

    if (!playaiResponse.ok) {
      console.error('❌ PlayAI API request failed:', {
        status: playaiResponse.status,
        statusText: playaiResponse.statusText,
        url: playaiResponse.url
      });
      throw new Error(`PlayAI API error: ${playaiResponse.status} ${playaiResponse.statusText}`);
    }

    const playaiResult = await playaiResponse.json();
    
    // ENHANCED LOGGING: Log complete raw response
    console.log('📋 Complete PlayAI response:', JSON.stringify(playaiResult, null, 2));
    
    // Check for additional error fields
    const possibleErrorFields = [
      'error', 'error_message', 'error_code', 'failure_reason', 
      'processing_error', 'generation_error', 'details', 'message'
    ];
    
    console.log('🔍 Checking for error fields:');
    possibleErrorFields.forEach(field => {
      if (playaiResult[field]) {
        console.log(`  ${field}:`, playaiResult[field]);
      }
    });

    // Map PlayAI status to our status format
    let mappedStatus: 'generating' | 'completed' | 'failed';
    let audioUrl: string | undefined;
    let duration: number | undefined;
    let progress: number | undefined;
    let detailedError: string | undefined;

    if (playaiResult.status === 'completed' && playaiResult.audioUrl) {
      mappedStatus = 'completed';
      audioUrl = playaiResult.audioUrl;
      duration = playaiResult.duration;
      console.log('✅ PlayAI generation completed successfully');
    } else if (playaiResult.status === 'failed' || playaiResult.status === 'error') {
      mappedStatus = 'failed';
      
      // ENHANCED ERROR EXTRACTION: Check multiple possible error sources
      const errorSources = [
        playaiResult.error,
        playaiResult.error_message,
        playaiResult.failure_reason,
        playaiResult.processing_error,
        playaiResult.generation_error,
        playaiResult.details,
        playaiResult.message
      ].filter(Boolean);
      
      if (errorSources.length > 0) {
        detailedError = `PlayAI generation failed: ${errorSources.join(', ')}`;
      } else {
        detailedError = `PlayAI generation failed with status: ${playaiResult.status}`;
      }
      
      console.error('❌ PlayAI generation failed:', {
        status: playaiResult.status,
        originalError: playaiResult.error,
        errorMessage: playaiResult.error_message,
        failureReason: playaiResult.failure_reason,
        processingError: playaiResult.processing_error,
        generationError: playaiResult.generation_error,
        details: playaiResult.details,
        message: playaiResult.message,
        extractedError: detailedError,
        fullResponse: playaiResult
      });
    } else {
      mappedStatus = 'generating';
      progress = playaiResult.progress;
      console.log('⏳ PlayAI generation in progress:', {
        status: playaiResult.status,
        progress: progress
      });
    }

    return new Response(JSON.stringify({
      status: mappedStatus,
      audioUrl,
      duration,
      progress,
      error: mappedStatus === 'failed' ? detailedError : undefined,
      playaiStatus: playaiResult.status,
      playaiResult: playaiResult
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Error in check-playai-status function:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Internal server error.'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

console.log('Edge function `check-playai-status` is ready to serve requests.');