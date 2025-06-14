# KalkiEshwar Portfolio Website

A sophisticated, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, responsive layout, and component-based architecture for easy maintenance and content management.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Component Architecture**: Reusable, maintainable React components
- **Article System**: MDX support for rich content creation
- **GitHub Pages Ready**: Automated deployment with GitHub Actions
- **Dark Mode Support**: Built-in theme switching capabilities
- **Performance First**: Optimized images, fonts, and bundle sizes

## 📁 Project Structure

```
portfolio-website/
├── .github/workflows/     # GitHub Actions for deployment
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (Header, Footer, etc.)
│   │   ├── sections/     # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── content/         # Content files (articles, projects, etc.)
│   ├── lib/             # Utility functions
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── website-architecture.md  # Detailed architecture documentation
└── Configuration files
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

# Build for production
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

1. **Update site metadata** in `src/components/layout/Layout.tsx`
2. **Modify hero section** in `src/components/sections/HeroSection.tsx`
3. **Update social links** in `src/components/layout/Footer.tsx`
4. **Add your projects** in `src/content/projects/`
5. **Write articles** in `src/content/articles/`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Update fonts in `src/pages/_app.tsx`
- **Components**: Customize component styles in `src/styles/globals.css`

### Content Management

#### Adding Articles
Create new MDX files in `src/content/articles/`:

```markdown
---
title: "Your Article Title"
description: "Brief description"
date: "2025-01-15"
category: "software"
tags: ["react", "typescript"]
featured: true
---

Your article content here...
```

#### Adding Projects
Update `src/content/projects/projects.json`:

```json
{
  "id": "project-id",
  "title": "Project Name",
  "description": "Brief description",
  "technologies": ["React", "TypeScript"],
  "githubUrl": "https://github.com/username/repo",
  "liveUrl": "https://project-demo.com",
  "featured": true
}
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. **Push to GitHub**: The workflow automatically deploys on push to `main` branch
2. **Enable GitHub Pages**: Go to repository Settings > Pages > Source: GitHub Actions
3. **Custom Domain**: Update `CNAME` file with your domain

### Manual Deployment

```bash
# Build and export
npm run build
npm run export

# The `out` folder contains your static site
# Upload contents to your hosting provider
```

## 📊 Performance Optimization

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Bundle Analysis**: Run `npm run build` to see bundle sizes
- **Lighthouse Scores**: Aim for 90+ scores across all categories
- **Core Web Vitals**: Monitor LCP, FID, and CLS metrics

## 🔧 Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-section
   ```

2. **Make Changes**
   - Edit components in `src/components/`
   - Add content in `src/content/`
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

## 📚 Architecture Documentation

For detailed architecture information, see [`website-architecture.md`](./website-architecture.md) which includes:

- Complete technology stack details
- Component architecture patterns
- Content management system
- SEO and performance strategies
- Deployment configurations

## 🎯 Roadmap

- [ ] Dark mode toggle implementation
- [ ] Blog search and filtering
- [ ] Project filtering by technology
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] RSS feed generation
- [ ] Progressive Web App features

## 🐛 Troubleshooting

### Common Issues

**TypeScript Errors**: Run `npm install` to ensure all dependencies are installed

**Build Errors**: Check that all imports are correct and files exist

**Styling Issues**: Ensure Tailwind classes are valid and PostCSS is configured

**Deployment Issues**: Verify GitHub Actions workflow permissions are set correctly

### Getting Help

- Check the [architecture documentation](./website-architecture.md)
- Review component examples in `src/components/`
- Examine the Next.js and Tailwind CSS documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js** for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vercel** for hosting and deployment solutions

---

Built with ❤️ by [KalkiEshwar](https://github.com/KalkiEshwarD)