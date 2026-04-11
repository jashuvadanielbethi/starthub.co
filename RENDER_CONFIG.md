# Render Configuration

This file contains the settings needed to deploy to Render.

## Render Deploy Settings

Use these exact settings in Render dashboard:

### Build & Deploy
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 20 (set in Environment)

### Environment Variables
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_VERSION=20
```

### Root Directory
Leave empty (uses root of repository)

### Port Binding
The app automatically uses the PORT environment variable provided by Render (default 3000).

## How Deployment Works

1. Render runs: `npm install && npm run build`
2. This creates optimized build in `frontend/dist/`
3. Render then runs: `npm start`
4. This starts Node.js server (server.js) that:
   - Listens on PORT environment variable (0.0.0.0)
   - Serves production build from `frontend/dist/`
   - Handles SPA routing (all routes → index.html)

## If Deployment Fails

### Check Render Logs
1. Go to Render dashboard
2. Click your service → "Logs"
3. Look for error messages

### Common Issues

**Port binding error**: 
→ Make sure Node version is 20+

**Build fails**:
→ Check environment variables are set in Render dashboard

**App shows 404**:
→ Verify frontend/dist exists and has files

## Local Testing

To test the production setup locally:

```bash
npm run build
npm start
# Then visit http://localhost:3000
```
