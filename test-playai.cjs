const FormData = require('form-data');
const fetch = require('node-fetch');

// Test PlayAI API call with the exact format from your working example
async function testPlayAI() {
  const PLAYAI_API_KEY = 'ak-db1e311950bd41c0b8da58499cac832b';
  const PLAYAI_USER_ID = 'oq9xWA5ju0cCAGijjjB34WAI08X2';
  
  const sourceFileUrl = 'https://venturebeat.com/wp-content/uploads/2010/09/amzn_shareholder-letter-20072.pdf';
  
  console.log('Testing PlayAI API with your working example...');
  
  const formData = new FormData();
  formData.append('sourceFileUrl', sourceFileUrl);
  formData.append('synthesisStyle', 'podcast');
  formData.append('voice1', 's3://voice-cloning-zero-shot/baf1ef41-36b6-428c-9bdf-50ba54682bd8/original/manifest.json');
  formData.append('voice1Name', 'Dr. Sarah Chen');
  formData.append('voice2', 's3://voice-cloning-zero-shot/e040bd1b-f190-4bdb-83f0-75ef85b18f84/original/manifest.json');
  formData.append('voice2Name', 'Dr. Michael Rodriguez');
  
  try {
    const response = await fetch('https://api.play.ai/api/v1/playnotes', {
      method: 'POST',
      headers: {
        'AUTHORIZATION': PLAYAI_API_KEY,
        'X-USER-ID': PLAYAI_USER_ID,
        'accept': 'application/json',
        ...formData.getHeaders()
      },
      body: formData
    });
    
    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
    
    if (response.ok) {
      console.log('✅ SUCCESS! PlayNote ID:', result.id);
    } else {
      console.log('❌ FAILED:', result.errorMessage || result.message);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testPlayAI();