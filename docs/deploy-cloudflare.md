# Cloudflare Pages Deployment Guide

## Overview
This portfolio deploys to Cloudflare Pages using the **free `.pages.dev` domain**.

**Your live URL will be shown in the Cloudflare Pages dashboard after the first successful deploy.**

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

## Free Deployment Checklist

Follow these exact UI steps in Cloudflare:

### Step 1: Create Cloudflare Account
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. **Sign up** for a free Cloudflare account (if you don't have one)
3. **Verify your email** address

### Step 2: Create Pages Project
1. **Cloudflare Dashboard** → **Workers & Pages** → **Create application** → **Pages**
2. **Connect to Git**
3. **Choose GitHub account** + **select repo**: `Ishubhammohole/portfolio`
4. Click **Begin setup**

### Step 3: Configure Build Settings
1. **Framework preset**: Select **Vite**
2. **Build command**: `npm run build`
3. **Build output directory**: `dist`
4. **Root directory**: Leave empty (uses repository root)
5. Click **Save and Deploy**

### Step 4: Get Your Live URL
1. **Wait for deployment** (2-5 minutes)
2. **After successful deploy**, your URL will be shown at the top of the dashboard
3. **Copy the assigned URL** - it will look like `https://<project>.pages.dev`

**Note**: If `shubhammohole` is not available, Cloudflare will assign a different subdomain. Use the one shown in the dashboard.

## Understanding NXDOMAIN Errors

If you get `NXDOMAIN` for a `.pages.dev` URL, it means:
- The Pages project hasn't been created/deployed yet, OR
- The project name is different/not available, OR  
- You're using a URL that doesn't match the actual assigned subdomain

**Solution**: Deploy first, then use the actual URL shown in your Cloudflare Pages dashboard.

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

**Verification**: After `npm run build`, confirm `dist/_redirects` exists with the above content.

## Resume Configuration (Already Configured)

- **Resume file**: `public/shubham_mohole_resume.pdf`
- **Profile configuration**: `src/content/profile.ts` uses `resume.url: "/shubham_mohole_resume.pdf"`
- **Download URL**: `<YOUR_PAGES_URL>/shubham_mohole_resume.pdf`
- **Button works automatically** - no additional setup needed

**Verification**: After `npm run build`, confirm `dist/shubham_mohole_resume.pdf` exists.

## Verification Checklist

After deployment completes, verify using your actual Pages URL:

- [ ] Your assigned `.pages.dev` URL loads the portfolio
- [ ] `<YOUR_PAGES_URL>/shubham_mohole_resume.pdf` downloads the resume
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

## Local Development Notes

This repository's `npm run dev` starts an Express server on port 5000 and can conflict with other services.

**If port 5000 is in use:**
```bash
# Kill existing process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use a different port
PORT=3000 npm run dev
```

**Important**: Running locally does NOT make your site live on the internet. Only Cloudflare Pages deployment makes it publicly accessible.

## Performance & Features
### Included Free Features
- **Global CDN** - Fast loading worldwide
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

1. **Share your portfolio**: Use the URL from your Cloudflare Pages dashboard
2. **Update resume/projects** by pushing to GitHub
3. **Monitor analytics** in Cloudflare Pages dashboard
4. **Consider custom domain** when ready (optional)