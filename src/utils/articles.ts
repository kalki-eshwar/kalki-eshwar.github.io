import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';

// Import pre-generated article data
import articlesDataFile from '@/content/articles-data.json';
import type { ArticlesDataFile, ArticleData } from '@/types/articles-data';

const articlesData = articlesDataFile as ArticlesDataFile;

export interface ArticleMatter {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  author: string;
  slug?: string;
}

export interface Article extends ArticleMatter {
  slug: string;
  content: string;
  categoryDir?: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export interface SerializedArticle extends ArticleMatter {
  slug: string;
  source: unknown;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export function getArticleSlugs(): string[] {
  try {
    return articlesData.articles.map((article: ArticleData) => article.slug);
  } catch (error) {
    console.error('Error reading articles data:', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const articleData = articlesData.articles.find((article: ArticleData) => article.slug === slug);
    
    if (!articleData) {
      console.warn(`Article not found: ${slug}`);
      return null;
    }

    const readingTimeResult = readingTime(articleData.content);

    return {
      slug: articleData.slug,
      content: articleData.content,
      readingTime: readingTimeResult,
      title: articleData.title,
      description: articleData.description,
      date: articleData.date,
      readTime: articleData.readTime,
      category: articleData.category,
      tags: articleData.tags,
      featured: articleData.featured,
      author: articleData.author,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export async function getSerializedArticle(slug: string): Promise<SerializedArticle | null> {
  try {
    const article = getArticleBySlug(slug);
    
    if (!article) {
      return null;
    }

    const mdxSource = await serialize(article.content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
        ],
      },
    });

    return {
      slug: article.slug,
      source: mdxSource,
      readingTime: article.readingTime,
      title: article.title,
      description: article.description,
      date: article.date,
      readTime: article.readTime,
      category: article.category,
      tags: article.tags,
      featured: article.featured,
      author: article.author,
    };
  } catch (error) {
    console.error(`Error serializing article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): Article[] {
  try {
    const articles = articlesData.articles
      .map((articleData: ArticleData) => {
        const readingTimeResult = readingTime(articleData.content);
        return {
          slug: articleData.slug,
          content: articleData.content,
          readingTime: readingTimeResult,
          title: articleData.title,
          description: articleData.description,
          date: articleData.date,
          readTime: articleData.readTime,
          category: articleData.category,
          tags: articleData.tags,
          featured: articleData.featured,
          author: articleData.author,
          categoryDir: articleData.categoryDir,
        };
      })
      .sort((a: Article, b: Article) => {
        // Sort by date (newest first)
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return articles;
  } catch (error) {
    console.error('Error getting all articles:', error);
    return [];
  }
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter(article => article.featured);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter(article =>
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllCategories(): string[] {
  try {
    const articles = getAllArticles();
    const categories = articles.map(article => article.category);
    return Array.from(new Set(categories));
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
}

export function getAllTags(): string[] {
  try {
    const articles = getAllArticles();
    const tags = articles.flatMap(article => article.tags);
    return Array.from(new Set(tags));
  } catch (error) {
    console.error('Error getting tags:', error);
    return [];
  }
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  const allArticles = getAllArticles().filter(article => article.slug !== currentSlug);
  
  // Score articles based on shared tags and same category
  const scoredArticles = allArticles.map(article => {
    let score = 0;
    
    // Same category gets higher score
    if (article.category === currentArticle.category) {
      score += 3;
    }
    
    // Shared tags
    const sharedTags = article.tags.filter(tag => 
      currentArticle.tags.includes(tag)
    );
    score += sharedTags.length;
    
    return { article, score };
  });

  // Sort by score and return top articles
  return scoredArticles
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateArticleSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getAllCategoryDirs(): string[] {
  try {
    const articles = getAllArticles();
    const categoryDirs = articles.map(article => {
      return article.categoryDir || article.category.toLowerCase().replace(/\s+/g, '-');
    });
    return Array.from(new Set(categoryDirs));
  } catch (error) {
    console.error('Error getting category directories:', error);
    return [];
  }
}

export function getArticlesByCategoryDir(categoryDir: string): Article[] {
  try {
    const articles = getAllArticles();
    return articles.filter(article => {
      const articleCategoryDir = article.categoryDir || article.category.toLowerCase().replace(/\s+/g, '-');
      return articleCategoryDir === categoryDir;
    });
  } catch (error) {
    console.error('Error getting articles by category directory:', error);
    return [];
  }
}

export function getCategoryNameFromDir(categoryDir: string): string {
  try {
    const articles = getArticlesByCategoryDir(categoryDir);
    return articles.length > 0 ? articles[0].category : categoryDir;
  } catch (error) {
    console.error('Error getting category name from directory:', error);
    return categoryDir;
  }
}