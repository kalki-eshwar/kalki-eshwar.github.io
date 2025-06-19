import { GetStaticProps } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { SEOProps } from '@/types';
import { getAllArticles, getAllCategories, getAllCategoryDirs, formatDate, Article } from '@/utils/articles';
import { COLOR_COMBINATIONS, getTailwindClass } from '@/presets';

const articlesSEO: SEOProps = {
  title: 'Articles - Kalki Eshwar D',
  description: 'Read articles and insights by Kalki Eshwar D on software development, technology trends, and programming best practices.',
  canonical: 'https://kalkieshward.me/articles',
};

interface ArticlesPageProps {
  articles: Article[];
  categories: string[];
  categoryDirs: string[];
}

export default function Articles({ articles, categories, categoryDirs }: ArticlesPageProps) {
  const featuredArticles = articles.filter(article => article.featured);

  // Create mapping of category dirs to display names
  const getCategoryDisplayName = (categoryDir: string) => {
    const article = articles.find(a => (a as any).categoryDir === categoryDir);
    return article?.category || categoryDir;
  };

  return (
    <Layout seo={articlesSEO}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Articles & <span className="text-red-600">Insights</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughts on technology, programming, and development. Sharing insights from my journey in software development and technology.
            </p>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-medium text-gray-900 mb-8">
                Featured <span className="text-red-600">Articles</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <article key={article.slug} className="bg-red-50/20 border border-red-200 rounded-lg overflow-hidden hover:border-red-400 transition-colors duration-200">
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured Article
                        </span>
                      </div>
                    </div>
                    
                    <div
                      className="h-48 bg-center bg-cover flex items-end justify-center"
                      style={{ backgroundImage: "url('/images/home_background.webp')" }}
                    >
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-red-600 mb-3">
                        <span>{formatDate(article.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readingTime.text}</span>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Category Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-gray-50 p-1 rounded-lg">
              <Link
                href="/articles"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 bg-white text-red-600 shadow-sm"
              >
                All Articles
              </Link>
              {categoryDirs.map((categoryDir) => (
                <Link
                  key={categoryDir}
                  href={`/${categoryDir}`}
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-gray-600 hover:text-red-600 hover:bg-white"
                >
                  {getCategoryDisplayName(categoryDir)}
                </Link>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              All <span className="text-red-600">Articles</span>
            </h2>
            <div className="space-y-6">
              {articles.map((article) => (
                <article key={article.slug} className={`rounded-lg p-6 transition-colors duration-200 ${article.featured ? 'bg-red-50/20 border border-red-200 hover:border-red-400' : 'bg-white border border-gray-200 hover:border-gray-300'}`}>
                  {article.featured && (
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured Article
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    
                    <div className="flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{formatDate(article.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readingTime.text}</span>
                        <span className="mx-2">•</span>
                        <span className="text-red-600">{article.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{article.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          href={`/articles/${article.slug}`}
                          className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center py-16 border-t border-gray-100">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Stay <span className="text-red-600">Updated</span>
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about technology, programming, and development insights.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articles = getAllArticles();
    const categories = getAllCategories();
    const categoryDirs = getAllCategoryDirs();

    return {
      props: {
        articles: articles || [],
        categories: categories || [],
        categoryDirs: categoryDirs || [],
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps for articles:', error);
    
    // Return empty arrays as fallback
    return {
      props: {
        articles: [],
        categories: [],
        categoryDirs: [],
      },
    };
  }
};