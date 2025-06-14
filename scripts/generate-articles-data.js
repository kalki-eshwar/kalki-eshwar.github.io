const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
const outputPath = path.join(process.cwd(), 'src/content/articles-data.json');

function generateArticlesData() {
  try {
    console.log('Generating articles data...');
    
    if (!fs.existsSync(articlesDirectory)) {
      console.warn('Articles directory does not exist:', articlesDirectory);
      return;
    }

    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = [];

    for (const fileName of fileNames) {
      if (!fileName.endsWith('.md')) {
        continue;
      }

      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      
      if (!fs.existsSync(fullPath)) {
        console.warn(`Article file not found: ${fullPath}`);
        continue;
      }

      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        articles.push({
          slug,
          content,
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          readTime: data.readTime || '',
          category: data.category || '',
          tags: data.tags || [],
          featured: data.featured || false,
          author: data.author || '',
        });

        console.log(`✓ Processed article: ${slug}`);
      } catch (error) {
        console.error(`Error processing article ${slug}:`, error.message);
      }
    }

    const articlesData = {
      articles,
      generated: new Date().toISOString(),
      count: articles.length
    };

    // Ensure the directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(articlesData, null, 2));
    
    console.log(`✓ Generated articles data: ${articles.length} articles`);
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