# Deploying StartHub to Render

Complete step-by-step guide for deploying the StartHub project to Render.

## Prerequisites

- GitHub account with the StartHub repository
- Render account (https://render.com)
- Supabase project configured and credentials ready

## Step 1: Push to GitHub ✅

Your code is already pushed to GitHub! Verify at:
```
https://github.com/jashuvadanielbeths/starthub
```

## Step 2: Connect Repository to Render

### 2.1 Create New Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New +** → **Web Service**
3. Click **Connect a repository**
4. Search for **starthub** and select it
5. Click **Connect**

### 2.2 Configure Build Settings

Fill in the following configuration:

| Field | Value |
|-------|-------|
| **Name** | starthub |
| **Environment** | Node |
| **Region** | Choose closest to you |
| **Branch** | main |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview` |
| **Root Directory** | (leave empty) |

### 2.3 Add Environment Variables

1. Click **Environment** tab
2. Add the following variables:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Where to find these:**
- Go to [Supabase Dashboard](https://supabase.com)
- Select your project
- Go to **Project Settings → API**
- Copy: **Project URL** and **Anon Public Key**

### 2.4 Deploy

1. Click **Create Web Service**
2. Render will start building and deploying
3. Wait for build to complete (5-10 minutes)
4. Your app will be live at: `https://starthub-xxxx.onrender.com`

## Step 3: Configure Post-Deployment

### 3.1 Update Supabase CORS Settings

1. Go to Supabase project settings
2. Go to **Authentication → URL Configuration**
3. Add your Render URL to **Redirect URLs**:
   ```
   https://starthub-xxxx.onrender.com/
   https://starthub-xxxx.onrender.com/login
   https://starthub-xxxx.onrender.com/signup
   ```

### 3.2 Test Your Deployment

1. Visit your Render URL
2. Test all features:
   - ✅ Landing page loads
   - ✅ Can navigate pages
   - ✅ Authentication works
   - ✅ Database connectivity works

## Step 4: Set Up Auto-Deploy (Optional)

Render automatically deploys when you push to GitHub main branch!

### To disable auto-deploy:
1. Go to service settings
2. Scroll to **Deploy Hook**
3. Leave blank if no auto-deploy wanted

## Useful Render Commands

### View Logs
```
Click "Logs" tab in your service dashboard
```

### Redeploy
```
Click "Manual Deploy" → "Deploy latest commit"
```

### View Environment Variables
```
Go to "Environment" tab
Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are present
```

## Troubleshooting

### Build Fails

**Check logs:**
1. Go to Render dashboard
2. Click your service
3. Go to **Logs** tab
4. Look for error messages

**Common issues:**
- Missing environment variables → Add in Environment tab
- Node version mismatch → Specify `NODE_VERSION=20` in Environment
- Port issues → Check if service is binding to $PORT

### App Shows 404

- Make sure `vercel.json` is configured correctly
- Check build output directory is `frontend/dist`
- Verify all routes are configured in `frontend/src/app/routes.tsx`

### Supabase Connection Fails

1. Verify environment variables are set
2. Check Supabase project is active
3. Ensure CORS URLs are added to Supabase
4. Test with curl:
   ```
   curl -H "Authorization: Bearer YOUR_ANON_KEY" https://your-project.supabase.co/rest/v1/
   ```

## Deployment Checklist

- ✅ All code pushed to GitHub
- ✅ `.env.example` file present
- ✅ `package.json` has build and preview scripts
- ✅ `vite.config.ts` configured correctly
- ✅ `vercel.json` configured for SPA
- ✅ Supabase project created
- ✅ Supabase credentials ready
- ✅ Render account created
- ✅ Repository connected to Render

## Post-Deployment Maintenance

### Daily Checks
- Monitor Render logs for errors
- Check Supabase database usage

### Weekly Tasks
- Review error logs
- Update dependencies (`npm update`)
- Test all features

### Monthly Tasks
- Review performance metrics
- Update security patches
- Backup database (Supabase handles this)

## Support

For issues:
- Render Docs: https://render.com/docs
- Supabase Docs: https://supabase.com/docs
- GitHub Issues: Create in your repository

---

**Happy Deploying! 🚀**
