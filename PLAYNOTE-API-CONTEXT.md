# PlayNote API Complete Context Guide

## Overview
PlayNote is PlayAI's API for transforming documents, PDFs, and other content into engaging multi-speaker podcasts using AI.

## API Endpoint
- **URL**: `https://api.play.ai/api/v1/playnotes`
- **Method**: POST
- **Success Response**: 201 Created

## Authentication Headers
```
AUTHORIZATION: {API_KEY}    // No "Bearer" prefix!
X-USER-ID: {USER_ID}
accept: application/json
```

## Request Format Discrepancy in Documentation

### Python Example (multipart/form-data):
```python
files = {
    'sourceFileUrl': (None, SOURCE_FILE_URL),
    'synthesisStyle': (None, 'podcast'),
    'voice1': (None, 's3://voice-cloning-zero-shot/.../manifest.json'),
    'voice1Name': (None, 'Angelo'),
    'voice2': (None, 's3://voice-cloning-zero-shot/.../manifest.json'),
    'voice2Name': (None, 'Deedee'),
}
response = requests.post(url, headers=headers, files=files)
```

### JavaScript/Go/Dart/Swift Examples (JSON):
```javascript
const files = {
  sourceFileUrl: SOURCE_FILE_URL,
  synthesisStyle: 'podcast',
  voice1: 's3://voice-cloning-zero-shot/.../manifest.json',
  voice1Name: 'Angelo',
  voice2: 's3://voice-cloning-zero-shot/.../manifest.json',
  voice2Name: 'Deedee'
};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(files)
})
```

## Required Parameters
- `sourceFileUrl`: Public URL to PDF/document
- `synthesisStyle`: Type of synthesis ('podcast', 'executive-briefing', 'debate')
- `voice1`: S3 URL to voice manifest
- `voice1Name`: Display name for voice 1
- `voice2`: S3 URL to voice manifest  
- `voice2Name`: Display name for voice 2

## Voice URLs (Medical Voices)
```javascript
const MEDICAL_VOICES = {
  voice1: 's3://voice-cloning-zero-shot/baf1ef41-36b6-428c-9bdf-50ba54682bd8/original/manifest.json',
  voice1Name: 'Dr. Sarah Chen',
  voice2: 's3://voice-cloning-zero-shot/e040bd1b-f190-4bdb-83f0-75ef85b18f84/original/manifest.json',
  voice2Name: 'Dr. Michael Rodriguez'
};
```

## Response Format
### Success (201):
```json
{
  "id": "playnote_id_here"
}
```

### Error Responses:
- **403**: `{"errorMessage":"User already has an active generation","errorId":"UNAUTHORIZED"}`
- **400**: Bad request (invalid parameters)
- **401**: Authentication failed

## Important Notes
1. **One Active Generation**: Only one PlayNote can be generated at a time per user
2. **Processing Time**: Typically 5-10 minutes depending on PDF size
3. **File Access**: sourceFileUrl must be publicly accessible
4. **OpenAI Files**: Can use OpenAI file URLs like `https://api.openai.com/v1/files/{file_id}/content`

## Status Polling
After creation, poll the status endpoint:
- **URL**: `https://api.play.ai/api/v1/playnotes/{playnote_id}`
- **Method**: GET
- **Headers**: Same as creation

### Status Values:
- `generating`: Still processing
- `completed`: Ready with audioUrl
- `failed`: Generation failed

## Current Implementation Issue
The function was using FormData (multipart) format, but based on the JavaScript documentation examples, it should use JSON format with `Content-Type: application/json`.

## Key Differences from TTS API
- PlayNote API: No "Bearer" prefix in AUTHORIZATION
- TTS API: Uses "Bearer {token}" format
- Different endpoints and parameters

## Testing Approach
1. Local test with JSON format
2. Monitor function logs for detailed error messages
3. Check for authentication issues first
4. Verify document accessibility
5. Confirm no active generation blocking new requests