# How to Write and Add Articles to Your Website

This guide explains how to create new articles for your website using Markdown files.

## Quick Start

1. Create a new `.md` file in `src/content/articles/`
2. Add frontmatter with article metadata
3. Write your content in Markdown
4. The article will automatically appear on your website

## Step-by-Step Guide

### 1. Create a New Article File

Navigate to `src/content/articles/` and create a new file with a descriptive name:

```bash
# Example filename (use kebab-case)
your-article-title.md
```

### 2. Add Frontmatter

Every article must start with frontmatter (metadata) between `---` markers:

```markdown
---
title: "Your Article Title"
description: "A brief description of your article that appears in previews"
date: "2024-12-15"
readTime: "5 min read"
category: "Technology"
tags: ["React", "JavaScript", "Tutorial"]
featured: true
author: "Kalki Eshwar D"
---
```

#### Frontmatter Fields Explained:

- **title**: The main title of your article
- **description**: Short summary for article previews and SEO
- **date**: Publication date in YYYY-MM-DD format
- **readTime**: Estimated reading time (or leave it - will be auto-calculated)
- **category**: Main category (Software Development, Career, Technology, etc.)
- **tags**: Array of relevant tags for the article
- **featured**: Set to `true` to feature the article on the homepage
- **author**: Your name

### 3. Write Your Content

After the frontmatter, write your article in Markdown:

```markdown
# Your Article Title

This is the introduction paragraph of your article.

## Section 1

Here's some content with **bold text** and *italic text*.

### Subsection

You can create lists:

- Item 1
- Item 2
- Item 3

And numbered lists:

1. First step
2. Second step
3. Third step

## Code Examples

You can include code blocks:

```javascript
function hello() {
  console.log("Hello, World!");
}
```

## Links and Images

[Link to external site](https://example.com)

You can also include blockquotes:

> This is a blockquote that stands out from regular text.

## Conclusion

Wrap up your article with key takeaways.
```

### 4. Advanced Markdown Features

Your website supports:

- **Headers** (H1-H6)
- **Lists** (ordered and unordered)
- **Code blocks** with syntax highlighting
- **Links** (internal and external)
- **Images**
- **Blockquotes**
- **Tables**
- **Bold and italic text**

### 5. Example Article Structure

```markdown
---
title: "Getting Started with Next.js"
description: "Learn how to build modern web applications with Next.js framework"
date: "2024-12-15"
readTime: "7 min read"
category: "Web Development"
tags: ["Next.js", "React", "JavaScript", "Tutorial"]
featured: false
author: "Kalki Eshwar D"
---

# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier and more efficient.

## What is Next.js?

Next.js is a React framework that provides:
- Server-side rendering
- Static site generation
- Built-in routing
- API routes

## Getting Started

First, create a new Next.js project:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

## Key Features

### 1. File-based Routing

Next.js uses file-based routing, which means:
- Create files in the `pages` directory
- The file structure becomes your URL structure

### 2. API Routes

You can create API endpoints by adding files to `pages/api/`:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World' });
}
```

## Conclusion

Next.js is an excellent choice for modern web development, offering powerful features out of the box.

---

*For more web development tips, check out my other articles or connect with me on [LinkedIn](https://linkedin.com/in/kalkieshward).*
```

## Categories Available

Use these categories for consistency:

- Software Development
- Web Development
- Mobile Development
- Machine Learning
- Security
- Career
- Technology Trends
- Tutorial
- Personal Growth

## Best Practices

### Content Guidelines

1. **Clear Structure**: Use headers to organize content
2. **Code Examples**: Include practical examples when applicable
3. **Personal Touch**: Share your experiences and insights
4. **Call to Action**: End with engagement opportunities

### SEO Optimization

1. **Good Titles**: Make them descriptive and engaging
2. **Meta Descriptions**: Write compelling descriptions
3. **Relevant Tags**: Use tags that people might search for
4. **Internal Links**: Link to your other articles when relevant

### Technical Tips

1. **File Naming**: Use kebab-case (lowercase with hyphens)
2. **Image Optimization**: Keep images reasonably sized
3. **Reading Time**: Aim for 5-15 minute reads for best engagement
4. **Consistent Style**: Follow the same writing style across articles

## Publishing Process

1. **Create** your `.md` file in `src/content/articles/`
2. **Add frontmatter** with all required fields
3. **Write content** in Markdown
4. **Save the file**
5. **Build and deploy** your website

The article will automatically:
- Appear in the articles listing
- Generate a dedicated page at `/articles/your-slug`
- Show in featured articles if `featured: true`
- Be categorized and tagged appropriately

## Troubleshooting

### Common Issues

**Article not showing up?**
- Check that the file is in `src/content/articles/`
- Verify frontmatter syntax is correct
- Ensure the file extension is `.md`

**Formatting looks wrong?**
- Check Markdown syntax
- Ensure proper spacing around headers
- Verify code block formatting

**Build errors?**
- Check for proper YAML frontmatter format
- Ensure all required fields are present
- Look for special characters that need escaping

## Next Steps

1. Write your first article following this guide
2. Test it locally with `npm run dev`
3. Review the generated page
4. Deploy your changes

Happy writing! 🚀