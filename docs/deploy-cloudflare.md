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

### Step 2: Domain Registrar Setup (CRITICAL - Do this FIRST)
**The DNS_PROBE_FINISHED_NXDOMAIN error means the domain isn't properly configured.**

You need to either:

**Option A: Use Cloudflare Nameservers (Recommended)**
1. **Add site to Cloudflare:**
   - Go to Cloudflare Dashboard → Add a Site
   - Enter `shubhammohole.io`
   - Choose Free plan
   - Cloudflare will scan existing DNS records

2. **Update Nameservers at your registrar:**
   - Cloudflare will provide 2 nameservers (e.g., `ns1.cloudflare.com`, `ns2.cloudflare.com`)
   - Go to your domain registrar (where you bought shubhammohole.io)
   - Find DNS/Nameserver settings
   - Replace existing nameservers with Cloudflare's nameservers
   - **Wait 24-48 hours for DNS propagation**

**Option B: Keep existing nameservers and add DNS records**
If you prefer to keep your current nameservers, add these records at your registrar:
- `A` record: `@` → `<Cloudflare Pages IP>` (provided by Cloudflare)
- `CNAME` record: `www` → `<your-pages-project>.pages.dev`

### Step 3: DNS Configuration (After nameservers are updated)
Once nameservers are propagated, configure in Cloudflare DNS:

**For Apex Domain (shubhammohole.io):**
- Type: `CNAME`
- Name: `@`
- Target: `<your-pages-project>.pages.dev`
- Proxy status: Proxied (orange cloud)

**For WWW Subdomain (www.shubhammohole.io):**
- Type: `CNAME`
- Name: `www`
- Target: `<your-pages-project>.pages.dev`
- Proxy status: Proxied (orange cloud)

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
- [ ] `https://shubhammohole.io/shubham_mohole_resume.pdf` downloads the resume
- [ ] Refreshing any route (e.g., `/about`) doesn't show 404
- [ ] All sections scroll properly from navigation
- [ ] Contact form opens email client
- [ ] All certification links work (Oracle + McKinsey)

## Troubleshooting

### DNS_PROBE_FINISHED_NXDOMAIN Error
This error means the domain doesn't exist in DNS. To fix:

1. **Check nameservers**: Verify your domain registrar is using Cloudflare nameservers
2. **Wait for propagation**: DNS changes can take 24-48 hours
3. **Test DNS**: Use `dig shubhammohole.io` or online DNS checkers
4. **Verify domain status**: Ensure domain isn't expired at registrar

### Build Failures
- Ensure Node.js 20 is used (check `.nvmrc`)
- Verify `npm run build` works locally
- Check build logs in Cloudflare Pages dashboard

### DNS Issues
- Use `dig shubhammohole.io` to check DNS propagation
- Verify nameservers are correctly set at registrar
- Allow 24-48 hours for full propagation
- Check domain isn't expired or suspended

### 404 Errors on Routes
- Ensure `_redirects` file is in `public/` directory
- Verify it gets copied to `dist/` during build
- Check Cloudflare Pages Functions tab for redirect rules

## Performance
- Cloudflare automatically provides CDN caching
- Static assets are cached globally
- No additional configuration needed for optimal performance