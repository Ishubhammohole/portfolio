# Cloudflare Pages Deployment Guide

## Overview
This portfolio is deployed to Cloudflare Pages using the **free `.pages.dev` domain**.

**Your portfolio will be accessible at: `https://shubhammohole.pages.dev`**

No domain purchase required - completely free deployment!

## Cloudflare Pages Settings

### Build Configuration
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (repository root)
- **Node.js version**: 20

### Environment Variables
None required for this static site.

## Deployment Steps

### Step 1: Create Cloudflare Account
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. **Sign up** for a free Cloudflare account (if you don't have one)
3. **Verify your email** address

### Step 2: Connect GitHub Repository
1. Click **Create a project**
2. Select **Connect to Git**
3. **Authorize Cloudflare** to access your GitHub account
4. **Select your portfolio repository** from the list
5. Click **Begin setup**

### Step 3: Configure Build Settings
1. **Project name**: Enter `shubhammohole` (this becomes your subdomain)
2. **Production branch**: `main`
3. **Framework preset**: Select **Vite**
4. **Build command**: `npm run build`
5. **Build output directory**: `dist`
6. **Root directory**: Leave empty (uses repository root)
7. Click **Save and Deploy**

### Step 4: Wait for Deployment
1. **Cloudflare will build and deploy** your site automatically
2. **First deployment takes 2-5 minutes**
3. **You'll see build logs** in real-time
4. **Success message** will show your live URL

### Step 5: Access Your Live Portfolio
Your portfolio will be available at:
**`https://shubhammohole.pages.dev`**

## Automatic Deployments

- **Every push to `main` branch** triggers automatic deployment
- **No manual deployment needed** after initial setup
- **Build logs available** in Cloudflare Pages dashboard
- **Rollback available** if needed

## SPA Routing (Already Configured)

The `public/_redirects` file ensures client-side routing works:
```
/* /index.html 200
```

This prevents 404 errors when refreshing routes like `/about` or `/projects`.

## Resume Download (Already Configured)

- **Resume file**: `public/shubham_mohole_resume.pdf`
- **Download URL**: `https://shubhammohole.pages.dev/shubham_mohole_resume.pdf`
- **Button works automatically** - no additional setup needed

## Verification Checklist

After deployment completes, verify:

- [ ] `https://shubhammohole.pages.dev` loads the portfolio
- [ ] `https://shubhammohole.pages.dev/shubham_mohole_resume.pdf` downloads the resume
- [ ] Refreshing any route (e.g., `/about`) doesn't show 404
- [ ] All sections scroll properly from navigation
- [ ] Contact form opens email client
- [ ] All certification links work (Oracle + McKinsey)

## Troubleshooting

### Build Failures
1. **Check build logs** in Cloudflare Pages dashboard
2. **Verify `npm run build` works locally**
3. **Ensure Node.js 20** is specified in `.nvmrc`
4. **Check for missing dependencies** in `package.json`

### 404 Errors on Routes
- **`_redirects` file should be in `public/` directory** ✓
- **File gets copied to `dist/` during build** ✓
- **If still 404**: Check Functions tab in Cloudflare Pages

### Resume Download Issues
- **File should be at `public/shubham_mohole_resume.pdf`** ✓
- **Gets copied to `dist/` during build** ✓
- **Accessible at `/shubham_mohole_resume.pdf`** ✓

### Deployment Not Triggering
1. **Check GitHub integration** in Cloudflare Pages
2. **Verify branch is `main`**
3. **Manual deployment**: Click "Create deployment" in dashboard

## Performance & Features

### Included Free Features
- **Global CDN** - Fast loading worldwide
- **HTTPS certificate** - Automatic SSL
- **Unlimited bandwidth** - No traffic limits
- **Automatic deployments** - Push to deploy
- **Build logs** - Debug deployment issues
- **Rollback capability** - Revert if needed

### No Setup Required
- ✅ **SPA routing** - Already configured
- ✅ **Resume downloads** - Already working
- ✅ **Build optimization** - Vite handles it
- ✅ **Asset caching** - Cloudflare handles it

## Adding Custom Domain Later (Optional)

If you decide to purchase a custom domain later:

1. **Buy domain** from any registrar (Namecheap, GoDaddy, etc.)
2. **Cloudflare Pages** → **Custom domains** → **Set up a custom domain**
3. **Follow DNS setup instructions** (will be provided by Cloudflare)
4. **Your `.pages.dev` URL will still work** alongside custom domain

**For now, the free `.pages.dev` domain is perfect for showcasing your portfolio!**

## Next Steps After Deployment

1. **Share your portfolio**: `https://shubhammohole.pages.dev`
2. **Update resume/projects** by pushing to GitHub
3. **Monitor analytics** in Cloudflare Pages dashboard
4. **Consider custom domain** when ready (optional)