# Portfolio Content Source

## Single Source of Truth

All portfolio content comes from **`src/content/profile.ts`**.

This file contains:
- Personal information (name, contact, location)
- Resume download URL
- Education details with coursework
- Work experience and projects
- Skills and certifications
- All links and metadata

## Updating Content

To update any content on the portfolio:

1. **Edit only** `src/content/profile.ts`
2. **Do not edit** individual section components
3. **Run** `npm run build` to verify changes
4. **Push to GitHub** - deployment happens automatically

## Content Structure

The profile object contains these sections:
- `displayName` - Name shown throughout the site
- `resume.url` - Path to resume PDF file
- `contact` - Email, phone, LinkedIn, GitHub
- `education` - Degrees with coursework by semester
- `experience` - Work history and internships
- `projects` - Featured and open source projects
- `skills` - Technical skills by category
- `certifications` - Professional certifications with links

## Why This Approach?

- **Consistency**: All components read from the same data
- **Maintainability**: Update once, changes everywhere
- **Type Safety**: TypeScript ensures data structure integrity
- **No Duplication**: Eliminates copy-paste errors

## Adding New Content

When adding new sections or fields:
1. Update the profile object in `src/content/profile.ts`
2. Update the component that displays that content
3. Ensure TypeScript types are correct
4. Test locally with `npm run dev`
5. Build and deploy with `npm run build`

**Remember**: Never hardcode content in components - always use the profile data!