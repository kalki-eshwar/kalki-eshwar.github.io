#!/bin/sh
# Deploy Next.js static export to gh-pages branch for GitHub Pages user site
set -e

# Build and export
npx next build && npx next export

# Go to out directory
cd out

git init

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"
git add .
git commit -m "Deploy static site"
git branch -M gh-pages
git remote add origin https://github.com/kalkieshward/kalkieshward.github.io.git
git push -f origin gh-pages
