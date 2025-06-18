import Link from 'next/link';
import { getAllArticles } from '@/utils/articles';
import { getTailwindClass, COLOR_COMBINATIONS } from '@/presets';

export default function ArticlesSection() {
  const articles = getAllArticles();
  
  // Show only the first 3 articles
  const displayedArticles = articles.slice(0, 3);
  return (
    <section className={`section border-t ${getTailwindClass('border-gray-100')}`}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-medium ${getTailwindClass('text-gray-900')} mb-3`}>
            Recent <span className={getTailwindClass('text-red-600')}>Articles</span>
          </h2>
          <p className={getTailwindClass('text-gray-600')}>
            Thoughts on technology, programming, and development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedArticles.map((article, index) => (
            <article key={index} className={`border rounded-lg p-6 transition-colors duration-200 ${
              article.featured 
                ? `${COLOR_COMBINATIONS.featured.default.background} ${COLOR_COMBINATIONS.featured.default.border} ${COLOR_COMBINATIONS.featured.hover.border}` 
                : `${getTailwindClass('bg-white')} ${COLOR_COMBINATIONS.neutral.default.border} ${COLOR_COMBINATIONS.neutral.hover.border}`
            }`}>
              {article.featured && (
                <div className="flex items-center mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTailwindClass('bg-red-100')} ${getTailwindClass('text-red-800')}`}>
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Article
                  </span>
                </div>
              )}
              <div className="space-y-3">
                <div className={`flex items-center text-sm space-x-4 ${getTailwindClass('text-gray-500')}`}>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className={`text-lg font-medium ${getTailwindClass('text-gray-900')}`}>{article.title}</h3>
                <p className={`leading-relaxed text-sm ${getTailwindClass('text-gray-600')}`}>{article.description}</p>
                <Link href={`/articles/${article.slug}`} className={`inline-block ${getTailwindClass('text-red-600')} hover:${getTailwindClass('text-red-700')} text-sm`}>
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {articles.length > 3 && (
          <div className="text-center mt-6">
            <Link href="/articles" className="btn flex items-center justify-center space-x-2">
              <span>View All Articles</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}