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

## Understanding NXDOMAIN Error

**What NXDOMAIN means:**
`DNS_PROBE_FINISHED_NXDOMAIN` means:
- DNS record is missing for the domain/subdomain
- Domain isn't properly delegated to DNS servers
- Nameservers aren't configured correctly

**NXDOMAIN does NOT mean the domain is unregistered.**

## Check Domain Ownership

Before fixing DNS, verify you own the domain:

### Step 1: Confirm Domain Registration
1. **Log into your domain registrar dashboard** (Namecheap, GoDaddy, Google Domains, etc.)
2. **Check "My Domains" section**
3. **Verify `shubhammohole.io` appears in your domain list**
4. **Confirm domain status**:
   - Not expired
   - Not suspended
   - Shows active/registered status
5. **Note current nameservers** (you'll need this info)

**This is the source of truth for domain ownership - not whois or DNS lookups.**

## Custom Domain Setup - Two Options

### Option A: Move DNS to Cloudflare (RECOMMENDED)

This method changes your domain's nameservers to Cloudflare.

#### Step 1: Add Domain to Cloudflare
1. Go to **Cloudflare Dashboard** → **Add a Site**
2. Enter `shubhammohole.io`
3. Choose **Free** plan
4. Click **Continue**
5. Cloudflare will scan existing DNS records
6. Review and **Continue**

#### Step 2: Update Nameservers at Registrar
1. **Cloudflare will show 2 nameservers** (e.g., `ns1.cloudflare.com`, `ns2.cloudflare.com`)
2. **Copy these nameservers exactly**
3. **Go to your domain registrar dashboard**
4. **Find your domain** → **Manage** → **Nameservers** or **DNS**
5. **Change from default to "Custom Nameservers"**
6. **Replace existing nameservers** with Cloudflare's nameservers
7. **Save changes**

#### Step 3: Wait for Nameserver Delegation
1. **Return to Cloudflare Dashboard**
2. **Wait for status to change** from "Pending" to **"Active"**
3. **This can take 5 minutes to 24 hours**
4. **Until delegation completes, NXDOMAIN will remain**

#### Step 4: Add Custom Domains in Cloudflare Pages
1. Go to **Cloudflare Pages** → **Your Project** → **Custom domains**
2. Click **Set up a custom domain**
3. Enter `shubhammohole.io` → **Continue**
4. Click **Set up a custom domain** again
5. Enter `www.shubhammohole.io` → **Continue**

#### Step 5: Verify DNS Records
1. Go to **Cloudflare Dashboard** → **DNS** → **Records**
2. **Cloudflare Pages will automatically create required records**
3. You should see records like:
   - `CNAME www <your-project>.pages.dev` (Proxied)
   - Apex domain record (automatically handled)

### Option B: Keep DNS at Registrar

This method keeps your current nameservers and adds DNS records manually.

#### Step 1: Add Custom Domains in Cloudflare Pages
1. Go to **Cloudflare Pages** → **Your Project** → **Custom domains**
2. Click **Set up a custom domain**
3. Enter `shubhammohole.io` → **Continue**
4. **Cloudflare will show exact DNS records needed**
5. **Copy these records exactly**

#### Step 2: Add DNS Records at Registrar
1. **Go to your registrar's DNS management panel**
2. **Add the exact records Cloudflare Pages showed**:
   - Usually: `A @ <IP-address>` for apex domain
   - Usually: `CNAME www <your-project>.pages.dev` for www
3. **Save DNS changes**
4. **Repeat for www.shubhammohole.io**

#### Step 3: Wait for DNS Propagation
- **DNS changes take 5 minutes to 48 hours to propagate**
- **NXDOMAIN will persist until propagation completes**

## WWW Record Requirement

**NXDOMAIN on `www.shubhammohole.io` means no www record exists.**

### Required WWW Record
Add one of these at your DNS provider:
- `CNAME www <your-project>.pages.dev`
- Or whatever Cloudflare Pages specifically instructs

### WWW to Apex Redirect (301)

#### Method 1: Automatic (Preferred)
When adding custom domains, Cloudflare Pages may offer **"Redirect www to apex domain"** - enable this.

#### Method 2: Manual Redirect Rule
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

## Troubleshooting DNS

### Test DNS Resolution
Use these commands to check DNS status:

```bash
# Check apex domain
dig shubhammohole.io A

# Check www subdomain
dig www.shubhammohole.io CNAME

# Alternative lookup
nslookup shubhammohole.io
```

### Expected "Good" Results
**Working DNS should show:**
```
;; ANSWER SECTION:
shubhammohole.io.    300    IN    A    104.21.x.x
```

**NXDOMAIN means:**
```
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN
```

### Common Issues and Fixes

#### Still Getting NXDOMAIN
1. **Check nameserver delegation**: Verify registrar is using correct nameservers
2. **Wait longer**: DNS propagation can take up to 48 hours
3. **Clear DNS cache**: `sudo dscacheutil -flushcache` (macOS)
4. **Test from different location**: Use online DNS checkers

#### Domain Shows "Pending" in Cloudflare
- **Nameservers not updated yet** at registrar
- **Propagation still in progress**
- **Double-check nameservers match exactly**

#### Wrong DNS Records
- **Cloudflare Pages will show exact records needed**
- **Copy them exactly as shown**
- **Don't guess - use Cloudflare's instructions**

## SPA Routing
The `public/_redirects` file ensures client-side routing works:
```
/* /index.html 200
```

This prevents 404 errors when refreshing routes like `/about` or `/projects`.

## Verification Checklist

After DNS propagation completes:

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