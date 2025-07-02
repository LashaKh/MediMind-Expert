# Netlify Deployment Steps for Podcast Fix

## 🚀 Quick Steps

1. **Go to Netlify Dashboard**
   - Your changes have been pushed to GitHub
   - Netlify should auto-deploy within a few minutes

2. **Verify Environment Variables**
   Go to Site Settings → Environment Variables and confirm:
   - `PLAYAI_API_KEY` - Your PlayAI API key
   - `PLAYAI_USER_ID` - Your PlayAI user ID  
   - `SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` - Service role key (not anon key)

3. **Monitor Deployment**
   - Check Deploy status in Netlify dashboard
   - Look for "Published" status

4. **Test in Production**
   - Open your app
   - Go to Podcast Studio
   - Select a document
   - Enter a title
   - Click Generate
   - Should see "Queued" or "Generating" status

5. **Monitor Function Logs**
   - Go to Functions tab in Netlify
   - Click on `podcast-generate`
   - Watch real-time logs
   - Look for these success indicators:
     - `✅ User authenticated successfully`
     - `✅ Documents fetched`
     - `✅ Podcast record created`
     - `📄 Created temporary text file`
     - `✅ PlayAI generation started`

## 🔍 What Was Fixed

1. **API Format**: Changed from JSON to multipart/form-data (PlayAI requirement)
2. **File Access**: Create temporary public files in Supabase storage
3. **Error Logging**: Added detailed logging throughout

## ⚠️ If Issues Persist

Check function logs for specific errors:
- `❌ Missing PlayAI credentials` → Check env vars
- `❌ User authentication failed` → Check user ID
- `❌ Document fetch failed` → Check document exists
- `415 Unsupported Media Type` → Should not happen with fix
- `403 User already has active generation` → Wait and retry

## ✅ Success Indicators

- Function returns 200 or 202 status
- Response includes `podcastId` 
- Status shows as "queued" or "generating"
- No 500 errors in browser console