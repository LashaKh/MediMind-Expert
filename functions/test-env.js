exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      hasPlayAIKey: !!process.env.PLAYAI_API_KEY,
      hasPlayAIUserId: !!process.env.PLAYAI_USER_ID,
      hasSupabaseUrl: !!process.env.SUPABASE_URL,
      hasViteSupabaseUrl: !!process.env.VITE_SUPABASE_URL,
      hasSupabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      nodeEnv: process.env.NODE_ENV
    })
  };
}; 