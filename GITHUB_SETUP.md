# GitHub Repository Setup Instructions

## Option 1: Using GitHub Web Interface (Recommended)

1. **Go to GitHub.com** and sign in to your account

2. **Create a new repository:**
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Repository name: `portfolio`
   - Description: `Personal portfolio website showcasing my work as a Full-Stack Developer`
   - Make it **Public**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Push your code:**
   ```bash
   # Run the deployment script
   ./deploy-to-github.sh
   
   # Then add the remote and push
   git remote add origin https://github.com/shubham-mohole/portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Option 2: Using GitHub CLI (if you have it installed)

```bash
# Create repository and push in one command
gh repo create portfolio --public --source=. --remote=origin --push
```

## Option 3: Manual Commands

```bash
# Stage all files
git add .

# Commit with a descriptive message
git commit -m "feat: Complete portfolio website with professional structure"

# Add remote origin (replace with your GitHub username)
git remote add origin https://github.com/shubham-mohole/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## After Pushing

1. **Enable GitHub Pages** (optional):
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main / root
   - Your site will be available at: `https://shubham-mohole.github.io/portfolio`

2. **Add repository topics** for better discoverability:
   - Go to your repository main page
   - Click the gear icon next to "About"
   - Add topics: `portfolio`, `react`, `typescript`, `tailwindcss`, `express`, `fullstack`

## Repository Features

✅ Professional README with setup instructions
✅ MIT License
✅ Contributing guidelines
✅ Changelog for version tracking
✅ GitHub Actions workflow for CI/CD
✅ Environment variables example
✅ Clean project structure
✅ No AI-related references or files

Your repository is now ready for professional presentation!