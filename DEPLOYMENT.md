# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub repository connected to Vercel
- Supabase project created

## Step 1: Configure Environment Variables in Vercel

Go to your Vercel project dashboard:
1. Navigate to **Settings** → **Environment Variables**
2. Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Where to find these values:**
- Login to [Supabase Dashboard](https://supabase.com/dashboard)
- Select your project
- Go to **Settings** → **API**
- Copy `Project URL` and `anon/public` key

## Step 2: Deploy

### Option A: Automatic Deployment (Recommended)
Vercel automatically deploys when you push to `main` branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Option B: Manual Deployment via Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option C: Redeploy from Vercel Dashboard
1. Go to your Vercel project
2. Click **Deployments**
3. Click **⋯** on the latest deployment
4. Click **Redeploy**

## Step 3: Verify Deployment

After deployment, check:
- ✅ Site loads: `https://your-site.vercel.app`
- ✅ No build errors in Vercel logs
- ✅ Environment variables are set
- ✅ Supabase connection works (admin login)

## Common Issues

### Build Fails
**Problem:** Missing environment variables
**Solution:** Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel settings

### Changes Not Showing
**Problem:** Vercel not auto-deploying
**Solution:** 
1. Check Vercel dashboard → Settings → Git
2. Ensure "Production Branch" is set to `main`
3. Manually trigger redeploy

### 404 Errors
**Problem:** Trailing slash configuration
**Solution:** Already configured in `next.config.ts` with `trailingSlash: true`

## Manual Tasks After Deployment

### Rename Image Folders (Important!)
In your `public/` directory, rename these folders to lowercase:
```
Camry → camry
Staria → staria
Starax → starax
GMC → gmc
Hiace → hiace
Coaster → coaster
```

Then commit and push:
```bash
git add public/
git commit -m "Fix: rename image folders to lowercase"
git push origin main
```

## SEO Post-Deployment

1. **Submit Sitemap to Google Search Console**
   - URL: `https://sauditaxi.cab/sitemap.xml`

2. **Verify Security Headers**
   - Test at: https://securityheaders.com

3. **Test Performance**
   - Test at: https://pagespeed.web.dev

## Support

If deployment fails, check:
1. Vercel deployment logs
2. Build output for errors
3. Environment variables are correctly set
4. GitHub repository is connected

---

**Last Updated:** January 2026
