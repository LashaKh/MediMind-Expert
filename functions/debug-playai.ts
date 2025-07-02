import { Handler } from '@netlify/functions';

const PLAYAI_API_KEY = process.env.PLAYAI_API_KEY;
const PLAYAI_USER_ID = process.env.PLAYAI_USER_ID;

interface DebugRequest {
  playnoteId: string;
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
    let playnoteId: string;

    if (event.httpMethod === 'GET') {
      playnoteId = event.queryStringParameters?.playnoteId || '';
    } else {
      const body: DebugRequest = JSON.parse(event.body || '{}');
      playnoteId = body.playnoteId;
    }

    if (!playnoteId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing playnoteId parameter' })
      };
    }

    if (!PLAYAI_API_KEY || !PLAYAI_USER_ID) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'PlayAI credentials not configured' })
      };
    }

    console.log(`🔍 Debug: Checking PlayAI status for PlayNote ID: ${playnoteId}`);

    // Query PlayAI API
    const playaiResponse = await fetch(
      `https://api.play.ai/api/v1/playnotes/${encodeURIComponent(playnoteId)}`,
      {
        headers: {
          'AUTHORIZATION': PLAYAI_API_KEY,
          'X-USER-ID': PLAYAI_USER_ID,
          'accept': 'application/json'
        }
      }
    );

    console.log(`📊 PlayAI Response Status: ${playaiResponse.status} ${playaiResponse.statusText}`);

    let playaiResult;
    try {
      playaiResult = await playaiResponse.json();
    } catch (jsonError) {
      console.error('❌ JSON parsing error:', jsonError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Failed to parse PlayAI response',
          httpStatus: playaiResponse.status,
          statusText: playaiResponse.statusText
        })
      };
    }

    console.log('📋 PlayAI Full Response:', JSON.stringify(playaiResult, null, 2));

    // Analyze the response
    const analysis = {
      playnoteId,
      httpStatus: playaiResponse.status,
      playaiStatus: playaiResult.status,
      allProperties: Object.keys(playaiResult),
      
      // Check all possible error fields
      errorFields: {
        error: playaiResult.error,
        errorMessage: playaiResult.errorMessage,
        message: playaiResult.message,
        reason: playaiResult.reason,
        details: playaiResult.details,
        code: playaiResult.code
      },
      
      // Success fields
      successFields: {
        audioUrl: playaiResult.audioUrl,
        duration: playaiResult.duration,
        transcript: playaiResult.transcript,
        progress: playaiResult.progress
      },
      
      // Metadata
      metadata: {
        sourceFileUrl: playaiResult.sourceFileUrl,
        synthesisStyle: playaiResult.synthesisStyle,
        voice1: playaiResult.voice1,
        voice2: playaiResult.voice2,
        requestedAt: playaiResult.requestedAt,
        completedAt: playaiResult.completedAt
      }
    };

    // Determine the best error message
    let bestErrorMessage = 'No error details provided';
    if (playaiResult.status === 'failed') {
      const errorSources = [
        playaiResult.error,
        playaiResult.errorMessage,
        playaiResult.message,
        playaiResult.reason,
        playaiResult.details
      ].filter(Boolean);
      
      if (errorSources.length > 0) {
        bestErrorMessage = errorSources.join(' | ');
      } else {
        bestErrorMessage = 'PlayAI failed without providing error details';
        
        // Try to infer issues from the source file
        if (playaiResult.sourceFileUrl) {
          if (playaiResult.sourceFileUrl.includes('copy.pdf')) {
            bestErrorMessage += ' | Possible issue: Document filename suggests it might be a copy/duplicate';
          }
          if (playaiResult.sourceFileUrl.length > 200) {
            bestErrorMessage += ' | Possible issue: Very long source URL might indicate processing problems';
          }
        }
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        debug: true,
        timestamp: new Date().toISOString(),
        playnoteId,
        
        // Main status info
        status: playaiResult.status,
        httpStatus: playaiResponse.status,
        bestErrorMessage,
        
        // Complete analysis
        analysis,
        
        // Raw response
        rawResponse: playaiResult
      }, null, 2)
    };

  } catch (error) {
    console.error('❌ Debug endpoint error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Debug endpoint failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 