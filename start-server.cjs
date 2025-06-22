require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Import the Flowise function directly
const flowiseHandler = require('./functions/flowise-fixed.js').handler;

// Create Express route that calls the Netlify function
app.post('/api/flowise/chat', async (req, res) => {
  console.log('Direct Express route called');
  
  // Create event object similar to Netlify
  const event = {
    httpMethod: 'POST',
    headers: req.headers,
    body: JSON.stringify(req.body),
    path: '/api/flowise/chat'
  };
  
  try {
    // Call the function directly without Netlify CLI timeout
    const result = await flowiseHandler(event, {});
    
    // Set headers from the function result
    if (result.headers) {
      Object.keys(result.headers).forEach(key => {
        res.set(key, result.headers[key]);
      });
    }
    
    // Send the response
    res.status(result.statusCode || 200);
    
    if (result.body) {
      const body = typeof result.body === 'string' ? JSON.parse(result.body) : result.body;
      res.json(body);
    } else {
      res.end();
    }
    
  } catch (error) {
    console.error('Direct function call error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 8889;
app.listen(PORT, () => {
  console.log(`🚀 Direct Flowise server running on port ${PORT}`);
  console.log(`✅ No Netlify CLI timeout constraints`);
  console.log(`🔗 Use http://localhost:${PORT}/api/flowise/chat`);
});