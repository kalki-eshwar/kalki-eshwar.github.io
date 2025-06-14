import Link from 'next/link';

const articles = [
  {
    title: 'Building Scalable React Applications',
    description: 'Learn how to structure and build React applications that can grow with your team and requirements.',
    date: 'Dec 2024',
    readTime: '8 min read',
    slug: 'building-scalable-react-applications'
  },
  {
    title: 'Lessons from Five Years in Tech',
    description: 'Reflections on my journey in technology, the lessons learned, and advice for newcomers.',
    date: 'Nov 2024',
    readTime: '6 min read',
    slug: 'lessons-from-five-years-in-tech'
  },
];

export default function ArticlesSection() {
  return (
    <section className="section border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">Recent Articles</h2>
          <p className="text-gray-600">
            Thoughts on technology, programming, and development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <article key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{article.description}</p>
                <Link href={`/articles/${article.slug}`} className="inline-block text-blue-600 hover:text-blue-700 text-sm">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Link href="/articles" className="btn">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}