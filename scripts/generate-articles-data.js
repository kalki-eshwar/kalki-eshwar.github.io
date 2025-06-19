/**
 * Articles Data Generator
 * 
 * This script processes articles from subdirectories within the articles folder.
 * Each subdirectory represents a category, and the directory name becomes the category slug.
 * 
 * Structure:
 * src/content/articles/
 * ├── tech/           -> "Tech" category
 * └── life/           -> "Life" category
 * 
 * Features:
 * - Processes both .md and .mdx files
 * - Generates unique slugs with category prefix (e.g., "tech/article-name")
 * - Auto-formats category names from directory names
 * - Provides comprehensive statistics and category information
 * - Validates that no articles exist in the root articles directory
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
const outputPath = path.join(process.cwd(), 'src/content/articles-data.json');

// Helper function to capitalize and format category names
function formatCategoryName(dirName) {
  return dirName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateArticlesData() {
  try {
    console.log('Generating articles data...');
    
    if (!fs.existsSync(articlesDirectory)) {
      console.warn('Articles directory does not exist:', articlesDirectory);
      return;
    }

    const directoryItems = fs.readdirSync(articlesDirectory, { withFileTypes: true });
    const articles = [];
    let rootFilesFound = 0;

    // Files to ignore in root directory (documentation, etc.)
    const ignoredFiles = ['README.md', '.gitkeep', '.DS_Store'];
    
    // Check for files in root directory and warn about them
    for (const item of directoryItems) {
      if (!item.isDirectory() && !ignoredFiles.includes(item.name)) {
        console.warn(`⚠️  Warning: Found file in root articles directory: ${item.name}`);
        console.warn(`   Articles should be organized in subdirectories. Consider moving this file to an appropriate category.`);
        rootFilesFound++;
      }
    }

    if (rootFilesFound > 0) {
      console.warn(`\n⚠️  Found ${rootFilesFound} file(s) in root directory. Articles should be organized in category subdirectories.\n`);
    }

    // Process only directories (no files in root)
    const categoryDirectories = directoryItems.filter(item => item.isDirectory());
    
    if (categoryDirectories.length === 0) {
      console.warn('No category directories found in articles folder.');
      return;
    }

    for (const item of categoryDirectories) {
      const categoryDir = item.name;
      const categoryPath = path.join(articlesDirectory, categoryDir);
      const categoryName = formatCategoryName(categoryDir);
      
      console.log(`\n📁 Processing category: ${categoryName} (${categoryDir})`);

      if (!fs.existsSync(categoryPath)) {
        console.warn(`  ⚠️  Category directory not found: ${categoryPath}`);
        continue;
      }

      const fileNames = fs.readdirSync(categoryPath);
      let categoryArticleCount = 0;
      
      for (const fileName of fileNames) {
        // Support both .md and .mdx files
        if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) {
          console.log(`  ⏭️  Skipping non-markdown file: ${fileName}`);
          continue;
        }

        const slug = fileName.replace(/\.(md|mdx)$/, '');
        const fullPath = path.join(categoryPath, fileName);
        
        if (!fs.existsSync(fullPath)) {
          console.warn(`  ⚠️  Article file not found: ${fullPath}`);
          continue;
        }

        try {
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          
          articles.push({
            slug: `${categoryDir}/${slug}`, // Include category in slug for uniqueness
            content,
            title: data.title || '',
            description: data.description || '',
            date: data.date || '',
            readTime: data.readTime || '',
            category: categoryName, // Use directory name as category (no fallback to frontmatter)
            tags: data.tags || [],
            featured: data.featured || false,
            author: data.author || '',
            categoryDir: categoryDir, // Store original directory name
          });

          categoryArticleCount++;
          console.log(`  ✓ Processed article: ${slug}`);
        } catch (error) {
          console.error(`  ✗ Error processing article ${slug}:`, error.message);
        }
      }
      
      if (categoryArticleCount === 0) {
        console.warn(`  ⚠️  No articles found in category: ${categoryName}`);
      }
    }

    // Calculate category statistics
    const categoryStats = articles.reduce((stats, article) => {
      const category = article.categoryDir;
      stats[category] = (stats[category] || 0) + 1;
      return stats;
    }, {});

    const articlesData = {
      articles,
      generated: new Date().toISOString(),
      count: articles.length,
      categories: Object.keys(categoryStats).map(category => ({
        name: formatCategoryName(category),
        slug: category,
        count: categoryStats[category]
      })),
      stats: {
        totalArticles: articles.length,
        totalCategories: Object.keys(categoryStats).length,
        categoryCounts: categoryStats
      }
    };

    // Ensure the directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(articlesData, null, 2));
    
    console.log(`\n📊 Generation Summary:`);
    console.log(`✓ Total articles processed: ${articles.length}`);
    console.log(`✓ Categories found: ${Object.keys(categoryStats).length}`);
    Object.entries(categoryStats).forEach(([category, count]) => {
      console.log(`  - ${formatCategoryName(category)}: ${count} article${count !== 1 ? 's' : ''}`);
    });
    console.log(`✓ Output written to: ${outputPath}`);
    
  } catch (error) {
    console.error('Error generating articles data:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateArticlesData();
}

module.exports = generateArticlesData;