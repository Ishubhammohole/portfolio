# Content Source Documentation

## Single Source of Truth

All portfolio content is centralized in a single file:

**`src/content/profile.ts`**

This file contains all the canonical information including:
- Personal information (name, headline, contact details)
- Education history
- Work experience
- Projects
- Certifications
- Skills

## Updating Content

To update any content on the portfolio website:

1. **Edit only** `src/content/profile.ts`
2. All UI components automatically read from this file
3. No need to edit individual section components

## Why This Approach?

- **Consistency**: Prevents content mismatches across sections
- **Maintainability**: Single file to update instead of multiple components
- **Accuracy**: Ensures all information comes from the same canonical source
- **Efficiency**: Quick updates without hunting through multiple files

## Important Notes

- Do NOT edit hardcoded strings in component files
- All content should be factual and match resume/LinkedIn exactly
- Contact links only appear if URLs are provided in the profile file