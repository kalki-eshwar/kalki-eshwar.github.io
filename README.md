# KalkiEshwar Portfolio Website

A sophisticated, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, responsive layout, and component-based architecture for easy maintenance and content management.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Component Architecture**: Reusable, maintainable React components
- **Article System**: MDX support for rich content creation
- **GitHub Pages Ready**: Automated deployment with GitHub Actions
- **Static Export**: Compatible with GitHub Pages hosting
- **Performance First**: Optimized images, fonts, and bundle sizes

## 🏗️ Technology Stack

### Core Framework
- **Next.js 14+** - React framework with TypeScript support
- **TypeScript** - Type-safe development
- **React 18** - Component-based UI library

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Inter & JetBrains Mono** - Professional typography

### Content Management
- **MDX** - Markdown with JSX for articles
- **Gray-matter** - Frontmatter parsing
- **Remark/Rehype** - Markdown processing pipeline
- **Reading Time** - Automatic reading time calculation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **TypeScript** - Static type checking

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline
- **Custom Domain** - kalkieshward.me

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── images/
│   │   ├── home_background.jpg
│   │   └── profile.png
│   ├── documents/
│   │   └── Resume.pdf
│   ├── resume/
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── ArticlesSection.tsx
│   ├── content/
│   │   ├── articles/          # Markdown article files
│   │   │   ├── *.md
│   │   │   ├── software/      # Software development articles
│   │   │   └── life/          # Career and life articles
│   │   ├── articles-data.json # Generated article metadata
│   │   └── projects/
│   │       └── projects.json
│   ├── pages/
│   │   ├── articles/
│   │   │   ├── index.tsx      # Articles listing page
│   │   │   └── [slug].tsx     # Dynamic article pages
│   │   ├── index.tsx          # Home page
│   │   ├── work.tsx           # Work experience
│   │   ├── projects.tsx       # Projects showcase
│   │   ├── contact.tsx        # Contact information
│   │   ├── education.tsx      # Education background
│   │   ├── _app.tsx           # App wrapper
│   │   └── _document.tsx      # Document structure
│   ├── styles/
│   │   └── globals.css        # Global styles
│   ├── types/
│   │   ├── index.ts           # General type definitions
│   │   └── articles-data.ts   # Article-related types
│   └── utils/
│       └── articles.ts        # Article processing utilities
├── scripts/
│   └── generate-articles-data.js  # Build-time article processor
├── Configuration files
└── Documentation
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed on your machine
- Git for version control
- A GitHub account for deployment

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KalkiEshwarD/KalkiEshwarD.github.io.git
   cd KalkiEshwarD.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your website

### Development Scripts

```bash
# Development server
npm run dev

# Build for production (includes article data generation)
npm run build

# Export static files for GitHub Pages
npm run export

# Type checking
npm run type-check

# Linting
npm run lint

# Code formatting
npm run format
```

## 🎨 Customization

### Personal Information

1. **Update site metadata** in [`src/components/layout/Layout.tsx`](src/components/layout/Layout.tsx)
2. **Modify hero section** in [`src/components/sections/HeroSection.tsx`](src/components/sections/HeroSection.tsx)
3. **Update social links** in [`src/components/layout/Footer.tsx`](src/components/layout/Footer.tsx)
4. **Add your projects** in [`src/content/projects-data.json`](src/content/projects-data.json)
5. **Write articles** in [`src/content/articles/`](src/content/articles/)

### Styling

- **Colors**: Use the centralized color system in [`src/presets/`](src/presets/) for consistent theming
- **Typography**: Update fonts in [`src/pages/_app.tsx`](src/pages/_app.tsx)
- **Components**: Customize component styles in [`src/styles/globals.css`](src/styles/globals.css)

### Color System

The website uses a centralized color system located in [`src/presets/`](src/presets/) for consistent theming:

```typescript
import { COLORS, SEMANTIC_COLORS, COLOR_COMBINATIONS } from '@/presets';

// Use predefined color constants
const primaryColor = COLORS.primary[600];
const cardBackground = SEMANTIC_COLORS.neutral.background.primary;

// Use Tailwind class combinations
const featuredCard = COLOR_COMBINATIONS.featured.default;
```

**Key features:**
- 🎨 **Centralized colors** - All colors defined in one place
- 🔧 **Utility functions** - Helper functions for dynamic color usage
- 📱 **Component presets** - Pre-defined color combinations for UI components
- 🎯 **Type safety** - Full TypeScript support for color constants
- 🔄 **Easy migration** - Supports both Tailwind classes and inline styles

See [`src/presets/README.md`](src/presets/README.md) for detailed documentation.

## ✍️ Content Management

### Adding Articles

Create new Markdown files in [`src/content/articles/`](src/content/articles/):

```markdown
---
title: "Your Article Title"
description: "Brief description for SEO and previews"
date: "2025-01-15"
readTime: "5 min read"
category: "Technology"
tags: ["react", "typescript", "tutorial"]
featured: true
author: "Kalki Eshwar"
---

# Your Article Title

Your article content here using Markdown syntax...

## Section Headers

- Use **bold** and *italic* text
- Include code blocks with syntax highlighting
- Add links and images
- Create lists and tables

```javascript
// Code examples with syntax highlighting
function hello() {
  console.log("Hello, World!");
}
```

> Blockquotes for important information

## Conclusion

Wrap up with key takeaways and call-to-action.
```

#### Article Categories

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

### Adding Projects

Update [`src/content/projects-data.json`](src/content/projects-data.json):

```json
{
  "id": "project-id",
  "title": "Project Name",
  "description": "Brief description",
  "technologies": ["React", "TypeScript", "Tailwind CSS"],
  "githubUrl": "https://github.com/username/repo",
  "liveUrl": "https://project-demo.com",
  "featured": true
}
```

### Articles System Architecture

The website uses a static article system optimized for GitHub Pages:

1. **Build-time Processing**: [`scripts/generate-articles-data.js`](scripts/generate-articles-data.js) runs before each build
2. **Static Data Generation**: Processes all `.md` files and generates [`src/content/articles-data.json`](src/content/articles-data.json)
3. **Client-side Rendering**: [`src/utils/articles.ts`](src/utils/articles.ts) imports the static JSON data

This approach ensures:
- ✅ GitHub Pages compatibility
- ✅ Fast build times
- ✅ No server-side dependencies
- ✅ Type safety with TypeScript

## � Analytics

- This site includes a privacy-first analytics integration (default: PostHog) using a thin abstraction at `src/utils/analytics.ts`.
- Events collected: `nav_click`, `resume_download`, `cta_click`, `filter_clicked`, `project_card_click`, `project_link_click`, `achievement_click`, `scroll_depth`.
- No user-identifying data is captured by default. The analytics are initialized only if `NEXT_PUBLIC_POSTHOG_KEY` is provided.

**Environment variables**
- `NEXT_PUBLIC_POSTHOG_KEY` — (optional) PostHog project key
- `NEXT_PUBLIC_POSTHOG_HOST` — (optional) PostHog host (defaults to https://app.posthog.com)

If you're on Next.js 15.3+ and using the App Router, you can also use `src/utils/instrumentation-client.js` for a lightweight client initialization compatible with PostHog's recommended instrumentation approach. The repo includes `src/utils/instrumentation-client.js` (autocapture and pageview capture are opt-in via env flags to preserve privacy).

### Continuous verification (recommended)
To ensure analytics remain functional after each deployment, add the following repository secret(s):
- `POSTHOG_KEY` — your PostHog project key (required)
- `POSTHOG_HOST` — optional, e.g., `https://us.i.posthog.com`

This repository includes a post-deploy smoke test in `.github/workflows/deploy.yml` that will run `node scripts/send-posthog-smoke-batch.js` after successful Pages deployment using the above secrets. If the smoke test fails, the workflow will fail so you can investigate.

> Important: Do not commit your PostHog keys to the repo. Use GitHub repository secrets as described above.

### Use a custom domain (kalkieshward.me)
To ensure your site publishes as `kalkieshward.me` (instead of `kalkieshward.github.io`):

1. Ensure the repo contains a `CNAME` file at the repository root with only the domain name. This repo already has `CNAME` containing `kalkieshward.me`.
2. The deployment workflow now copies that `CNAME` into the exported `out/` folder before upload, so GitHub Pages will pick it up automatically.
3. Add DNS records for your domain (in your DNS provider):
   - For an apex domain (kalkieshward.me): add these A records to point to GitHub Pages:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or, if using a subdomain (www.kalkieshward.me), create a CNAME record pointing to `kalkieshward.github.io`.
4. In your repository settings → Pages, verify the custom domain is `kalkieshward.me` and **enforce HTTPS** if the certificate is available.

If you'd like, I can also add a simple GitHub Action step to verify DNS propagation for the custom domain after deploy and fail the workflow if it's not resolving to GitHub Pages IPs.
## �🚀 Deployment

### Automatic Deployment (Recommended)

1. **Push to GitHub**: The workflow automatically deploys on push to `main` branch
2. **Enable GitHub Pages**: Go to repository Settings > Pages > Source: GitHub Actions
3. **Custom Domain**: Update [`CNAME`](CNAME) file with your domain

### Manual Deployment

```bash
# Build and export
npm run build
npm run export

# The `out` folder contains your static site
# Upload contents to your hosting provider
```

### GitHub Actions Workflow

The deployment is automated with GitHub Actions:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
      
      - name: Export static files
        run: npm run export
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: kalkieshward.me
```

## 📊 Performance Optimization

### Build Optimization
- **Static Site Generation**: Pre-render all pages at build time
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic bundle splitting per page
- **Tree Shaking**: Remove unused code from bundles
- **Minification**: Compress CSS, JS, and HTML

### Runtime Performance
- **Lazy Loading**: Images and components load on demand
- **Prefetching**: Critical resources loaded in advance
- **Caching**: Aggressive browser and CDN caching

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s

## 🔧 Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-section
   ```

2. **Make Changes**
   - Edit components in [`src/components/`](src/components/)
   - Add content in [`src/content/`](src/content/)
   - Update styles as needed

3. **Test Locally**
   ```bash
   npm run dev
   npm run type-check
   npm run lint
   ```

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add new section"
   git push origin feature/new-section
   ```

5. **Create Pull Request** and merge to main for automatic deployment

## 🔍 SEO Strategy

### Technical SEO
- **Meta Tags**: Comprehensive meta tag management
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive image alternative text
- **Schema Markup**: JSON-LD structured data
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions

### Social Media Integration
- **Open Graph**: Rich social media previews
- **Twitter Cards**: Enhanced Twitter sharing
- **LinkedIn Articles**: Professional content sharing

## 🐛 Troubleshooting

### Common Issues

**TypeScript Errors**: Run `npm install` to ensure all dependencies are installed

**Build Errors**: 
- Check that all imports are correct and files exist
- Verify article frontmatter syntax is correct
- Ensure the prebuild script generates [`articles-data.json`](src/content/articles-data.json)

**Styling Issues**: Ensure Tailwind classes are valid and PostCSS is configured

**Deployment Issues**: Verify GitHub Actions workflow permissions are set correctly

**Articles Not Showing**: 
- Check that files are in [`src/content/articles/`](src/content/articles/)
- Verify frontmatter syntax is correct
- Ensure file extension is `.md`
- Run `npm run build` to regenerate article data

### Getting Help

- Review component examples in [`src/components/`](src/components/)
- Check the Next.js and Tailwind CSS documentation
- Examine existing articles for proper formatting examples

## 🎯 Success Metrics

### Technical Metrics
- **Page Load Speed**: < 3 seconds on 3G
- **Lighthouse Score**: > 95 across all categories
- **Uptime**: > 99.9% availability
- **Mobile Performance**: Excellent mobile experience

### Business Metrics
- **Contact Form Conversions**: Track professional inquiries
- **Resume Downloads**: Monitor hiring interest
- **Article Engagement**: Reading time and shares
- **Project Clicks**: Interest in specific work

## 🔄 Maintenance

### Regular Updates
- **Content Refresh**: Monthly article publishing
- **Project Updates**: Quarterly project showcase updates
- **Dependency Updates**: Weekly security and feature updates
- **Performance Audits**: Monthly performance reviews

### Content Strategy
- **Software Articles**: Technical deep-dives, tutorials, insights
- **Life Articles**: Career growth, industry observations
- **Project Showcases**: Detailed case studies
- **Professional Updates**: Skills, experience, achievements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js** for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **GitHub Pages** for reliable hosting
- **Vercel** for development tools and inspiration

---

Built with ❤️ by [KalkiEshwar](https://github.com/KalkiEshwarD)

*For questions or collaboration opportunities, feel free to reach out through the contact page or connect on [LinkedIn](https://linkedin.com/in/kalkieshward).*