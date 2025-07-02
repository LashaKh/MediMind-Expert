# Podcast Generation Fix - Deployment Checklist

## 🔧 What Was Fixed

### Issue
Frontend was getting 500 errors when calling the podcast generation API, even though direct API calls worked.

### Root Causes Found
1. **Wrong API Format**: PlayAI requires multipart/form-data, NOT JSON (despite confusing docs)
2. **File Access Issue**: OpenAI file URLs require authentication that PlayAI can't provide
3. **Insufficient Error Logging**: Couldn't diagnose the exact failure point

### Changes Made
1. **Fixed API Format**:
   - Kept `form-data` import for multipart/form-data format
   - PlayAI returns 415 error for JSON, requires multipart format
   - Properly set headers with `...formData.getHeaders()`

2. **Fixed File Access**:
   - Created temporary text file in Supabase storage from document content
   - Use public Supabase URLs that PlayAI can access
   - Store temp file path for later cleanup

2. **Enhanced Error Logging**:
   - Added environment variable checks at startup
   - Added detailed logging for each step (auth, documents, podcast creation)
   - Improved error messages with specific details

3. **Fixed PlayAI API Headers**:
   - Confirmed `AUTHORIZATION` header (no "Bearer" prefix)
   - Added proper `Content-Type` header
   - Kept `accept: application/json` header

## 📋 Deployment Steps

### 1. Verify Environment Variables on Netlify
Ensure these are set in Netlify dashboard:
- [ ] `PLAYAI_API_KEY` - Your PlayAI API key
- [ ] `PLAYAI_USER_ID` - Your PlayAI user ID
- [ ] `SUPABASE_URL` - Supabase project URL
- [ ] `SUPABASE_SERVICE_ROLE_KEY` - Service role key (not anon key)

### 2. Deploy the Updated Function
```bash
# Commit the changes
git add functions/podcast-generate.ts
git commit -m "fix: Fix podcast generation API format and add detailed logging"
git push origin main
```

### 3. Monitor Netlify Function Logs
1. Go to Netlify Dashboard → Functions → podcast-generate
2. Watch real-time logs for any errors
3. Look for the new console.log outputs:
   - `🚀 Podcast generation request received`
   - `📋 Environment check`
   - `🔐 Verifying user authentication`
   - `📄 Fetching documents`
   - `💾 Creating podcast record`
   - `📝 PlayAI Request Details`

### 4. Test After Deployment
1. Try generating a podcast from the UI
2. Check function logs for the flow
3. If it fails, the enhanced logging will show exactly where

## 🧪 Testing Guide

### Local Testing
```bash
# Start dev server with functions
npm run dev:netlify

# In another terminal, run the test script
node test-podcast-local.js
```

### Production Testing
1. Use the UI to select a document
2. Set a title and synthesis style
3. Click generate
4. Monitor browser console and network tab

## 🚨 Troubleshooting

### If Still Getting 500 Errors
1. **Check Function Logs First** - The new logging will show the exact failure point
2. **Common Issues**:
   - Missing environment variables (check logs for "Missing PlayAI credentials")
   - User authentication failing (check for "User authentication failed")
   - Document not found (check for "Document fetch failed")
   - PlayAI API errors (check for "PlayAI API error")

### PlayAI Specific Errors
- **403 "User already has an active generation"**: Wait a few minutes and try again
- **400 Bad Request**: Check the JSON format in logs
- **401 Unauthorized**: Verify PLAYAI_API_KEY and PLAYAI_USER_ID

## 📝 Key Code Changes

### Before (Wrong - JSON format)
```typescript
// This DOES NOT work - returns 415 error
const requestBody = {
  sourceFileUrl: sourceFileUrl,
  synthesisStyle: synthesisStyle,
  // ... other fields
};

headers: {
  'AUTHORIZATION': PLAYAI_API_KEY!,
  'X-USER-ID': PLAYAI_USER_ID!,
  'Content-Type': 'application/json',
  'accept': 'application/json'
}
body: JSON.stringify(requestBody)  // WRONG - PlayAI requires multipart!
```

### After (Fixed - multipart/form-data)
```typescript
// This WORKS - returns 201 success
const formData = new FormData();
formData.append('sourceFileUrl', sourceFileUrl);
formData.append('synthesisStyle', synthesisStyle);
// ... more appends

headers: {
  'AUTHORIZATION': PLAYAI_API_KEY!,  // No Bearer prefix
  'X-USER-ID': PLAYAI_USER_ID!,
  'accept': 'application/json',
  ...formData.getHeaders()  // CORRECT - includes multipart boundary
}
body: formData  // CORRECT format
```

### File Access Solution
```typescript
// Create temporary public file from document content
const tempFileName = `temp-podcast/${podcast.id}/${fullDocument.file_name}.txt`;
const { error } = await supabase.storage
  .from('user-uploads')
  .upload(tempFileName, fullDocument.description, {
    contentType: 'text/plain',
    upsert: true
  });

// Get public URL
const { data: { publicUrl } } = supabase.storage
  .from('user-uploads')
  .getPublicUrl(tempFileName);
  
// Use this public URL for PlayAI
formData.append('sourceFileUrl', publicUrl);
```

## ✅ Success Indicators
- Function returns 200 or 202 status code
- Response includes `podcastId` and `status`
- Logs show successful flow through all steps
- UI displays success message or queue position