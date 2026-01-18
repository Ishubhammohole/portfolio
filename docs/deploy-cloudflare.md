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

## Fixing NXDOMAIN Error

**What is NXDOMAIN?**
`DNS_PROBE_FINISHED_NXDOMAIN` means DNS has no record for your domain. This happens when:
- Domain isn't added to Cloudflare yet
- Nameservers aren't updated at your registrar
- DNS hasn't propagated yet

## Custom Domain Setup

### Option 1: Full DNS on Cloudflare (RECOMMENDED)

This is the easiest and most reliable method.

#### Step 1: Add Domain to Cloudflare
1. Go to **Cloudflare Dashboard** → **Add a Site**
2. Enter `shubhammohole.io`
3. Choose **Free** plan
4. Cloudflare will scan existing DNS records
5. Click **Continue** and **Confirm**

#### Step 2: Update Nameservers at Your Registrar
1. Cloudflare will show 2 nameservers (e.g., `ns1.cloudflare.com`, `ns2.cloudflare.com`)
2. Go to your domain registrar (where you bought shubhammohole.io):
   - **Namecheap**: Domain List → Manage → Nameservers → Custom DNS
   - **GoDaddy**: My Products → Domains → DNS → Nameservers
   - **Google Domains**: My domains → DNS → Name servers
3. Replace existing nameservers with Cloudflare's nameservers
4. Save changes

#### Step 3: Wait for Activation
1. Return to Cloudflare Dashboard
2. Wait for status to change from "Pending" to **"Active"** (can take 5 minutes to 24 hours)
3. You'll receive an email when it's active

#### Step 4: Add Custom Domains in Cloudflare Pages
1. Go to **Cloudflare Pages** → Your Project → **Custom domains**
2. Click **Set up a custom domain**
3. Add `shubhammohole.io` → **Continue**
4. Add `www.shubhammohole.io` → **Continue**

#### Step 5: Verify DNS Records
1. Go to **Cloudflare Dashboard** → **DNS** → **Records**
2. You should see:
   - `CNAME` record: `www` → `<your-project>.pages.dev` (Proxied/Orange cloud)
   - Cloudflare Pages automatically handles the apex domain

### Option 2: Keep DNS at Registrar (Advanced)

Only use this if you can't change nameservers.

1. In **Cloudflare Pages** → Custom domains, add your domains
2. Cloudflare will show exact DNS records needed
3. Add these records at your domain registrar:
   - Usually: `CNAME www <your-project>.pages.dev`
   - And: `A @ <IP-address>` or `CNAME @ <target>`
4. Wait for DNS propagation (up to 48 hours)

## WWW to Apex Redirect (301)

### Method 1: Automatic (Preferred)
When adding custom domains, Cloudflare Pages may offer "Redirect www to apex domain" - **enable this**.

### Method 2: Manual Redirect Rule
If automatic redirect isn't available:

1. Go to **Cloudflare Dashboard** → **Rules** → **Redirect Rules**
2. Click **Create rule**
3. **Rule name**: "WWW to Apex Redirect"
4. **When incoming requests match**:
   - Field: `Hostname`
   - Operator: `equals`
   - Value: `www.shubhammohole.io`
5. **Then**:
   - Type: `Dynamic`
   - Expression: `concat("https://shubhammohole.io", http.request.uri.path)`
   - Status code: `301`
6. **Save**

## SPA Routing
The `public/_redirects` file ensures client-side routing works:
```
/* /index.html 200
```

This prevents 404 errors when refreshing routes like `/about` or `/projects`.

## Troubleshooting

### Check Domain Status
1. **Cloudflare Dashboard** → verify domain shows **"Active"**
2. **Cloudflare Pages** → Custom domains → verify both domains show **"Active"**

### Test DNS Propagation
```bash
# Check apex domain
dig shubhammohole.io

# Check www subdomain  
dig www.shubhammohole.io

# Check from different locations
nslookup shubhammohole.io 8.8.8.8
```

### Common Issues
- **Still NXDOMAIN**: Nameservers not updated or DNS not propagated yet
- **Wrong nameservers**: Double-check you used Cloudflare's exact nameservers
- **Propagation delay**: Can take 5 minutes to 24 hours, sometimes longer
- **Registrar cache**: Some registrars cache DNS for up to 48 hours

### Build Issues
- Ensure Node.js 20 is used (check `.nvmrc`)
- Verify `npm run build` works locally
- Check build logs in Cloudflare Pages dashboard

### 404 Errors on Routes
- Ensure `_redirects` file is in `public/` directory
- Verify it gets copied to `dist/` during build
- Check Cloudflare Pages Functions tab for redirect rules

## Verification Checklist

After deployment and DNS propagation:

- [ ] `https://shubhammohole.io` loads the portfolio
- [ ] `https://www.shubhammohole.io` redirects to apex domain (301)
- [ ] `https://shubhammohole.io/shubham_mohole_resume.pdf` downloads the resume
- [ ] Refreshing any route (e.g., direct to `/about`) doesn't show 404
- [ ] All sections scroll properly from navigation
- [ ] Contact form opens email client
- [ ] All certification links work (Oracle + McKinsey)

## Performance
- Cloudflare automatically provides CDN caching
- Static assets are cached globally
- No additional configuration needed for optimal performance

## Quick Fix for NXDOMAIN

**If you're seeing NXDOMAIN right now:**

1. **Add domain to Cloudflare** (Dashboard → Add a Site → shubhammohole.io)
2. **Update nameservers** at your registrar to Cloudflare's nameservers
3. **Wait 30 minutes to 24 hours** for DNS propagation
4. **Then add custom domains** in Cloudflare Pages

The error will resolve once DNS propagates!