import Link from 'next/link';
import { getAllArticles } from '@/utils/articles';

export default function ArticlesSection() {
  const articles = getAllArticles();
  
  // Show only the first 3 articles
  const displayedArticles = articles.slice(0, 3);
  return (
    <section className="section border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">
            Recent <span className="text-red-600">Articles</span>
          </h2>
          <p className="text-gray-600">
            Thoughts on technology, programming, and development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedArticles.map((article, index) => (
            <article key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{article.description}</p>
                <Link href={`/articles/${article.slug}`} className="inline-block text-red-600 hover:text-red-700 text-sm">
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