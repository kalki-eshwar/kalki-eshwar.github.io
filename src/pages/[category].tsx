import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { SEOProps } from '@/types';
import { getAllArticles, formatDate, Article } from '@/utils/articles';
import { getTailwindClass } from '@/presets';

interface CategoryPageProps {
  articles: Article[];
  categoryName: string;
  categorySlug: string;
  allCategories: string[];
}

export default function CategoryPage({ articles, categoryName, categorySlug, allCategories }: CategoryPageProps) {
  const seo: SEOProps = {
    title: `${categoryName} Articles - Kalki Eshwar D`,
    description: `Articles and insights on ${categoryName.toLowerCase()} by Kalki Eshwar D. Explore thoughts and experiences in this category.`,
    canonical: `https://kalkieshward.me/${categorySlug}`,
  };

  // Get category description based on category name
  const getCategoryDescription = (category: string) => {
    const descriptions: Record<string, string> = {
      'backend': 'Insights on server-side development, APIs, databases, and system architecture. Building robust and scalable backend systems.',
      'tech': 'Insights on modern technologies, programming languages, frameworks, and development best practices. Exploring the latest trends and techniques in software development.',
      'life': 'Personal reflections, career insights, and life lessons from my journey in technology. Sharing experiences that shaped my perspective on success, growth, and happiness.',
      'chess': 'Strategic insights, opening principles, tactical patterns, and chess improvement tips. Exploring the beautiful game of chess.',
      'machine-learning': 'Exploring artificial intelligence, machine learning algorithms, data science, and AI applications in real-world scenarios.',
      'mobile': 'Mobile development insights, cross-platform frameworks, iOS and Android development, and mobile app best practices.',
    };
    
    return descriptions[categorySlug] || `Articles and insights on ${category.toLowerCase()}. Sharing knowledge and experiences in this field.`;
  };

  const getCategoryDisplayName = (category: string) => {
    const displayNames: Record<string, string> = {
      'tech': 'Technology',
      'backend': 'Backend Development',
      'life': 'Life & Career',
      'chess': 'Chess Strategy',
      'machine-learning': 'Machine Learning',
      'mobile': 'Mobile Development',
    };
    
    return displayNames[categorySlug] || category;
  };

  const displayName = getCategoryDisplayName(categoryName);
  const description = getCategoryDescription(categoryName);

  return (
    <Layout seo={seo}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              {displayName.split(' ').map((word, index) => 
                index === displayName.split(' ').length - 1 ? (
                  <span key={index} className="text-red-600">{word}</span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Articles List */}
          {articles.length > 0 ? (
            <div className="space-y-6 mb-12">
              {articles.map((article) => (
                <article key={article.slug} className={`rounded-lg p-6 transition-colors duration-200 ${
                  article.featured 
                    ? 'bg-red-50/20 border border-red-200 hover:border-red-400' 
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}>
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
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 mb-12">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Articles Yet</h3>
              <p className="text-gray-600 mb-6">
                Articles in this category will appear here. Check back soon for new content.
              </p>
              <Link
                href="/articles"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                View All Articles
              </Link>
            </div>
          )}

          {/* Navigation */}
          <div className="pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center text-gray-600 hover:text-red-600 text-sm"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All Articles
              </Link>
              
              <div className="flex flex-wrap gap-4">
                {allCategories.filter(cat => cat.toLowerCase() !== categorySlug.toLowerCase()).map((category) => (
                  <Link
                    key={category}
                    href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-600 hover:text-red-600"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const articles = getAllArticles();
    
    // Get unique categories from articles
    const categories = articles.reduce((acc: Record<string, string>, article) => {
      // Use the categoryDir from the article data to get the original directory name
      const categoryData = article as any;
      const categoryDir = categoryData.categoryDir || article.category.toLowerCase().replace(/\s+/g, '-');
      const categoryName = article.category;
      
      acc[categoryDir] = categoryName;
      return acc;
    }, {});

    const paths = Object.keys(categories).map((categorySlug) => ({
      params: { category: categorySlug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error in getStaticPaths for category pages:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const categorySlug = params?.category as string;
    
    if (!categorySlug) {
      return {
        notFound: true,
      };
    }

    const allArticles = getAllArticles();
    
    // Filter articles by category directory
    const categoryArticles = allArticles.filter(article => {
      const articleData = article as any;
      const articleCategoryDir = articleData.categoryDir || article.category.toLowerCase().replace(/\s+/g, '-');
      return articleCategoryDir === categorySlug;
    });

    if (categoryArticles.length === 0) {
      return {
        notFound: true,
      };
    }

    // Get category name from first article
    const categoryName = categoryArticles[0].category;
    
    // Get all unique categories for navigation
    const allCategories = Array.from(new Set(allArticles.map(article => article.category)));

    return {
      props: {
        articles: categoryArticles,
        categoryName,
        categorySlug,
        allCategories,
      },
    };
  } catch (error) {
    console.error(`Error in getStaticProps for category ${params?.category}:`, error);
    return {
      notFound: true,
    };
  }
};
