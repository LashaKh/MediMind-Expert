exports.handler = async (event, context) => {
  console.log('Test auth function called');
  console.log('Event:', JSON.stringify(event, null, 2));
  console.log('Headers:', event.headers);
  
  const authHeader = event.headers.authorization || event.headers.Authorization;
  console.log('Auth header:', authHeader);
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Test successful',
      hasAuth: !!authHeader,
      method: event.httpMethod,
      path: event.path
    })
  };
};