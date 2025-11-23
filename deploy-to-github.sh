#!/bin/bash

echo "🚀 Preparing to deploy portfolio to GitHub..."

# Add all files to git
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "feat: Complete portfolio website with professional structure

- Modern responsive design with cyber-themed aesthetics
- React + TypeScript frontend with Tailwind CSS
- Express.js backend with PostgreSQL integration
- Comprehensive project showcase and experience timeline
- Professional certifications and skills display
- Contact form with validation
- Smooth animations using Framer Motion
- Production-ready build configuration
- Complete documentation and contribution guidelines"

# Check if remote origin exists
if git remote get-url origin >/dev/null 2>&1; then
    echo "📡 Remote origin already exists, pushing to existing repository..."
    git push origin main
else
    echo "🔗 No remote origin found."
    echo "Please create a GitHub repository named 'portfolio' and run:"
    echo ""
    echo "git remote add origin https://github.com/shubham-mohole/portfolio.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    echo ""
    echo "Or if you want to create it via GitHub CLI:"
    echo "gh repo create portfolio --public --source=. --remote=origin --push"
fi

echo "✅ Deployment script completed!"