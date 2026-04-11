# Quick Deploy Checklist

## ✅ Before Deploying to Render

### Environment Setup
- [ ] GitHub repository with all code pushed
- [ ] Supabase project created
- [ ] Supabase credentials ready (URL and Anon Key)

### Code Verification
- [ ] `npm run build` works locally
- [ ] No TypeScript errors
- [ ] No missing environment variables

## 🚀 Deploy to Render (5 Steps)

### Step 1: Create Web Service
```
1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Click "Connect a repository"
4. Select "starthub"
5. Click "Connect"
```

### Step 2: Configure Service
```
Name:              starthub
Environment:       Node
Region:            Choose closest
Branch:            main
Build Command:     npm install && npm run build
Start Command:     npm run preview
Root Directory:    (empty)
```

### Step 3: Add Environment Variables
```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Step 4: Deploy
```
Click "Create Web Service"
Wait 5-10 minutes for deployment
```

### Step 5: Configure Supabase CORS
In Supabase project settings → Authentication → URL Configuration:
```
Add: https://starthub-xxxx.onrender.com/
Add: https://starthub-xxxx.onrender.com/login
Add: https://starthub-xxxx.onrender.com/signup
```

## ✅ After Deployment

- [ ] Visit your Render URL
- [ ] Test landing page loads
- [ ] Test authentication (signup/login)
- [ ] Test navigation
- [ ] Check browser console for errors

## 🔗 Your Deployment URL

Once deployed, your app will be at:
```
https://starthub-[random-id].onrender.com
```

## 📝 GitHub Commands (Already Done!)

All changes are already pushed to GitHub:

```bash
# Status check (shows clean)
git status

# Your commits are already pushed to:
# https://github.com/jashuvadanielbeths/starthub
```

## 🆘 Troubleshooting

**Build fails?**
→ Check Render logs in dashboard

**App not loading?**
→ Verify environment variables are set

**Database connection fails?**
→ Check Supabase credentials are correct

---

For detailed guide, see: [DEPLOY_RENDER.md](./DEPLOY_RENDER.md)
