# Release Checklist

Before deploying or releasing updates to the portfolio, verify these items:

## Content Verification

- [ ] **Name spelling**: "Shubham Mohole" (not "Mohale" or other variants)
- [ ] **Projects list**: Includes exactly 5 canonical projects:
  - Rate Limiter (Featured)
  - DevSync AI (Featured) 
  - Text-to-Image Generator (Featured)
  - Ripple (Featured)
  - DjangoCRM (Open Source)
- [ ] **Contact information**: Email, phone, LinkedIn, GitHub all correct
- [ ] **Resume file**: `public/shubham_mohole_resume.pdf` exists and is current

## Technical Verification

- [ ] **Build passes**: `npm run build` completes without errors
- [ ] **TypeScript check**: `npm run check` passes (if available)
- [ ] **No placeholder links**: All links either work or are hidden if URL missing
- [ ] **Resume download**: Button links to `/shubham_mohole_resume.pdf`
- [ ] **SPA routing**: `public/_redirects` file exists for client-side routing

## Content Source Integrity

- [ ] **Single source**: All content comes from `src/content/profile.ts`
- [ ] **No hardcoded content**: Components read from profile object
- [ ] **Consistent data**: No conflicting information across sections

## Deployment Readiness

- [ ] **Build output**: `dist/` directory contains all necessary files
- [ ] **Static assets**: Images, resume PDF copied to `dist/`
- [ ] **Environment**: No development-only code in production build

## Post-Deployment Verification

After deploying to Cloudflare Pages (use your actual assigned URL):

- [ ] **Site loads**: Your assigned `.pages.dev` URL is accessible
- [ ] **Resume download**: PDF downloads correctly from `<YOUR_URL>/shubham_mohole_resume.pdf`
- [ ] **Navigation**: All navbar links scroll to correct sections
- [ ] **Contact form**: Opens email client with correct recipient
- [ ] **Certification links**: Oracle and McKinsey links work
- [ ] **Mobile responsive**: Site works on mobile devices
- [ ] **Performance**: Site loads quickly (< 3 seconds)

## Git Workflow

Before pushing changes:

```bash
# Pull latest changes
git pull origin main --rebase

# Verify build works
npm run build

# Stage and commit changes
git add .
git commit -m "descriptive commit message"

# Pull again to avoid conflicts
git pull origin main --rebase

# Push to trigger deployment
git push origin main
```

## Rollback Plan

If issues are found after deployment:

1. **Identify last working commit**: Check git history
2. **Revert changes**: `git revert <commit-hash>`
3. **Push revert**: Triggers automatic redeployment
4. **Verify fix**: Check live site works correctly

## Notes

- Cloudflare Pages automatically deploys on every push to `main`
- Build logs available in Cloudflare Pages dashboard
- No manual deployment steps required after initial setup
- `.pages.dev` domain is free and permanent