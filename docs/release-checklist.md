# Release Checklist

Before deploying or sharing the portfolio, verify the following:

## Content Verification

- [ ] **Name spelling**: Ensure "Shubham Mohole" appears correctly throughout
- [ ] **Projects list**: Verify all 5 canonical projects are present:
  - [ ] Distributed Rate Limiter
  - [ ] DevSync AI
  - [ ] LLM-Powered Text-to-Image System
  - [ ] DjangoCRM (Open Source Contribution)
  - [ ] Ripple Policy Simulator

## Technical Checks

- [ ] **Build passes**: `npm run build` completes without errors
- [ ] **Dev server runs**: `npm run dev` starts successfully
- [ ] **No broken links**: Only show contact/project links if URLs are present in profile.ts

## Content Quality

- [ ] **No placeholder content**: All sections show real information from profile.ts
- [ ] **Consistent styling**: All sections use the modern premium dark theme
- [ ] **Responsive design**: Test on mobile and desktop viewports

## Final Steps

- [ ] **Git status clean**: No uncommitted changes
- [ ] **Deployed successfully**: If using hosting service, verify deployment works
- [ ] **Cross-browser test**: Check in Chrome, Firefox, Safari if possible

## Notes

- All content should match the canonical facts in `src/content/profile.ts`
- Contact buttons should only appear if corresponding URLs exist
- Project links should only show if GitHub/demo URLs are provided