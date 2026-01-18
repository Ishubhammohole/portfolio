# Cloudflare Pages Deployment Guide

## Overview
This portfolio is deployed to Cloudflare Pages with custom domain `shubhammohole.io`.

## Cloudflare Pages Settings

### Build Configuration
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (repository root)
- **Node.js version**: 20

### Environment Variables
None required for this static site.

## GitHub Integration

1. Connect GitHub repository to Cloudflare Pages
2. Select the main branch for automatic deployments
3. Cloudflare will automatically deploy on every push to main

## Custom Domain Setup

### Step 1: Add Custom Domains in Cloudflare Pages
1. Go to Cloudflare Pages → Your Project → Custom domains
2. Add these domains:
   - `shubhammohole.io` (apex domain)
   - `www.shubhammohole.io` (www subdomain)

### Step 2: DNS Configuration
Cloudflare will provide DNS records. Configure these in Cloudflare DNS:

**For Apex Domain (shubhammohole.io):**
- Type: `CNAME` or `A` (as instructed by Cloudflare)
- Name: `@` or `shubhammohole.io`
- Target: `<your-pages-project>.pages.dev`

**For WWW Subdomain (www.shubhammohole.io):**
- Type: `CNAME`
- Name: `www`
- Target: `<your-pages-project>.pages.dev`

### Step 3: Domain Registrar Setup
If using external registrar (not Cloudflare Registrar):

1. **Add site to Cloudflare:**
   - Go to Cloudflare Dashboard → Add a Site
   - Enter `shubhammohole.io`
   - Choose Free plan

2. **Update Nameservers:**
   - Cloudflare will provide 2 nameservers (e.g., `ns1.cloudflare.com`, `ns2.cloudflare.com`)
   - Go to your domain registrar (Namecheap/GoDaddy/etc.)
   - Update nameservers to Cloudflare's provided nameservers
   - Wait 24-48 hours for DNS propagation

### Step 4: WWW Redirect Rule
Create a redirect rule in Cloudflare:
- **When incoming requests match**: `www.shubhammohole.io/*`
- **Then**: Redirect to `https://shubhammohole.io/$1`
- **Status code**: 301 (Permanent Redirect)

## SPA Routing
The `public/_redirects` file ensures client-side routing works:
```
/* /index.html 200
```

This prevents 404 errors when refreshing routes like `/about` or `/projects`.

## Verification Checklist

After deployment, verify:

- [ ] `https://shubhammohole.io` loads the portfolio
- [ ] `https://www.shubhammohole.io` redirects to apex domain
- [ ] `https://shubhammohole.io/resume.pdf` downloads the resume
- [ ] `https://shubhammohole.io/shubham_mohole_resume.pdf` downloads the resume
- [ ] Refreshing any route (e.g., `/about`) doesn't show 404
- [ ] All sections scroll properly from navigation
- [ ] Contact form opens email client
- [ ] All certification links work (Oracle + McKinsey)

## Troubleshooting

### Build Failures
- Ensure Node.js 20 is used (check `.nvmrc`)
- Verify `npm run build` works locally
- Check build logs in Cloudflare Pages dashboard

### DNS Issues
- Use `dig shubhammohole.io` to check DNS propagation
- Verify nameservers are correctly set at registrar
- Allow 24-48 hours for full propagation

### 404 Errors on Routes
- Ensure `_redirects` file is in `public/` directory
- Verify it gets copied to `dist/` during build
- Check Cloudflare Pages Functions tab for redirect rules

## Performance
- Cloudflare automatically provides CDN caching
- Static assets are cached globally
- No additional configuration needed for optimal performance