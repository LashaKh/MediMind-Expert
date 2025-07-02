// Test script to verify the FormData fix for Netlify Functions
// This script simulates the exact same approach now used in the fixed functions

import FormData from 'form-data';
import fetch from 'node-fetch';

const PLAYAI_API_KEY = 'ak-db1e311950bd41c0b8da58499cac832b';
const PLAYAI_USER_ID = 'oq9xWA5ju0cCAGijjjB34WAI08X2';

const MEDICAL_VOICES = {
  voice1: 's3://voice-cloning-zero-shot/baf1ef41-36b6-428c-9bdf-50ba54682bd8/original/manifest.json',
  voice1Name: 'Dr. Sarah Chen',
  voice2: 's3://voice-cloning-zero-shot/e040bd1b-f190-4bdb-83f0-75ef85b18f84/original/manifest.json',
  voice2Name: 'Dr. Michael Rodriguez'
};

async function testNetlifyFix() {
  console.log('🧪 Testing Netlify Functions FormData fix...');
  
  const sourceFileUrl = 'https://venturebeat.com/wp-content/uploads/2010/09/amzn_shareholder-letter-20072.pdf';
  const synthesisStyle = 'podcast';
  
  // Use the exact approach now used in fixed Netlify Functions
  const formData = new FormData();
  formData.append('sourceFileUrl', sourceFileUrl);
  formData.append('synthesisStyle', synthesisStyle);
  formData.append('voice1', MEDICAL_VOICES.voice1);
  formData.append('voice1Name', MEDICAL_VOICES.voice1Name);
  formData.append('voice2', MEDICAL_VOICES.voice2);
  formData.append('voice2Name', MEDICAL_VOICES.voice2Name);

  console.log('📝 Request Parameters:', {
    sourceFileUrl,
    synthesisStyle,
    voice1: MEDICAL_VOICES.voice1,
    voice1Name: MEDICAL_VOICES.voice1Name,
    voice2: MEDICAL_VOICES.voice2,
    voice2Name: MEDICAL_VOICES.voice2Name
  });

  try {
    const playaiResponse = await fetch('https://api.play.ai/api/v1/playnotes', {
      method: 'POST',
      headers: {
        'AUTHORIZATION': PLAYAI_API_KEY,
        'X-USER-ID': PLAYAI_USER_ID,
        'accept': 'application/json',
        ...formData.getHeaders()
      },
      body: formData
    });

    const playaiResult = await playaiResponse.json();

    console.log('📊 Response Status:', playaiResponse.status);
    console.log('📊 Response Headers:', playaiResponse.headers.raw());
    
    if (playaiResponse.ok) {
      console.log('✅ SUCCESS! FormData transmission fixed!');
      console.log('🎧 PlayNote ID:', playaiResult.id);
      console.log('📋 Full Response:', JSON.stringify(playaiResult, null, 2));
    } else {
      console.log('❌ FAILED - API Error:', playaiResult.errorMessage || playaiResult.message);
      console.log('📋 Error Details:', JSON.stringify(playaiResult, null, 2));
    }
  } catch (error) {
    console.error('❌ FAILED - Network Error:', error.message);
  }
}

testNetlifyFix();