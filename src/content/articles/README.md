# Articles Directory Structure

This directory contains all blog articles organized by category. Each subdirectory represents a different article category.

## Directory Structure

```
articles/
├── backend/           # Backend development articles
├── life/              # Personal and career articles
├── tech/              # General technology and programming articles
└── [other-categories]/ # Additional categories as needed
```

## Organization Rules

1. **No articles in root**: All articles must be placed in category subdirectories
2. **Category naming**: Directory names become category slugs (e.g., `machine-learning` → "Machine Learning")
3. **File formats**: Both `.md` and `.mdx` files are supported
4. **Unique slugs**: Article slugs are automatically prefixed with category (e.g., `tech/react-patterns`)

## Adding New Articles

1. Choose or create an appropriate category directory
2. Create your article file with front matter:

```markdown
---
title: "Your Article Title"
description: "Brief description of the article"
date: "2024-12-25"
readTime: "8 min read"
category: "Custom Category" # Optional, defaults to directory name
tags: ["tag1", "tag2"]
featured: true # Optional
author: "Your Name"
---

# Your Article Content
```

3. Run the generation script:
```bash
npm run generate-articles
# or
node scripts/generate-articles-data.js
```

## Category Guidelines

- **backend**: Server-side development, APIs, databases, architecture
- **tech**: Frontend frameworks, programming languages, tools, general tech topics
- **life**: Career advice, personal experiences, industry insights
- **Add new categories** as needed following kebab-case naming

## Generated Output

The script generates `articles-data.json` with:
- All articles with category-prefixed slugs
- Category metadata and statistics
- Full content for static generation
- Validation warnings for misplaced files

## Best Practices

1. Keep category names concise but descriptive
2. Use consistent naming conventions within categories
3. Include proper front matter for all articles
4. Test the generation script after adding new content
5. Check for validation warnings and address them
