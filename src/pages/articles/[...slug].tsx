import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { 
  getArticleSlugs, 
  getSerializedArticle, 
  getRelatedArticles, 
  formatDate,
  SerializedArticle,
  Article 
} from '@/utils/articles';
import { SEOProps } from '@/types';
import { getTailwindClass, COLOR_COMBINATIONS } from '@/presets';

interface ArticlePageProps {
  article: SerializedArticle;
  relatedArticles: Article[];
}

const mdxComponents = {
  h1: (props: any) => <h1 className={`text-3xl font-bold ${getTailwindClass('text-gray-900')} mb-6`} {...props} />,
  h2: (props: any) => <h2 className={`text-2xl font-semibold ${getTailwindClass('text-gray-900')} mb-4 mt-8`} {...props} />,
  h3: (props: any) => <h3 className={`text-xl font-semibold ${getTailwindClass('text-gray-900')} mb-3 mt-6`} {...props} />,
  h4: (props: any) => <h4 className={`text-lg font-semibold ${getTailwindClass('text-gray-900')} mb-2 mt-4`} {...props} />,
  p: (props: any) => <p className={`${getTailwindClass('text-gray-700')} leading-relaxed mb-4`} {...props} />,
  ul: (props: any) => <ul className={`list-disc list-inside ${getTailwindClass('text-gray-700')} mb-4 space-y-1`} {...props} />,
  ol: (props: any) => <ol className={`list-decimal list-inside ${getTailwindClass('text-gray-700')} mb-4 space-y-1`} {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote className={`border-l-4 border-red-600 pl-4 italic ${getTailwindClass('text-gray-600')} my-6`} {...props} />
  ),
  code: (props: any) => (
    <code className={`${getTailwindClass('bg-gray-100')} ${getTailwindClass('text-red-600')} px-2 py-1 rounded text-sm font-mono`} {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm" {...props} />
  ),
  a: (props: any) => (
    <a
      className="md-link"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  hr: (props: any) => <hr className={`${getTailwindClass('border-gray-200')} my-8`} {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className={`min-w-full divide-y ${getTailwindClass('border-gray-200')}`} {...props} />
    </div>
  ),
  thead: (props: any) => <thead className={getTailwindClass('bg-gray-50')} {...props} />,
  tbody: (props: any) => <tbody className={`${getTailwindClass('bg-white')} divide-y ${getTailwindClass('border-gray-200')}`} {...props} />,
  tr: (props: any) => <tr {...props} />,
  th: (props: any) => (
    <th className={`px-6 py-3 text-left text-xs font-medium ${getTailwindClass('text-gray-500')} uppercase tracking-wider`} {...props} />
  ),
  td: (props: any) => <td className={`px-6 py-4 whitespace-nowrap text-sm ${getTailwindClass('text-gray-900')}`} {...props} />,
};

export default function ArticlePage({ article, relatedArticles }: ArticlePageProps) {
  const seo: SEOProps = {
    title: `${article.title} - Kalki Eshwar`,
    description: article.description,
    canonical: `https://kalkieshward.me/articles/${article.slug}`,
    ogImage: `/api/og?title=${encodeURIComponent(article.title)}`,
  };

  return (
    <Layout seo={seo}>
      <article className="py-8">
        <div className="container max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-6">
              <Link 
                href="/articles" 
                className={`inline-flex items-center ${getTailwindClass('text-red-600')} hover:${getTailwindClass('text-red-700')} text-sm font-medium`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Articles
              </Link>
            </div>

            <div className="space-y-4">
              <div className={`flex flex-wrap items-center gap-4 text-sm ${getTailwindClass('text-gray-500')}`}>
                <span className={`px-3 py-1 ${getTailwindClass('bg-red-100')} ${getTailwindClass('text-red-800')} rounded-full`}>
                  {article.category}
                </span>
                <span className="text-red-600">{formatDate(article.date)}</span>
                <span>•</span>
                <span className="text-red-600">{article.readingTime.text}</span>
                <span>•</span>
                <span><span className="text-red-600">By</span> <span className="text-red-600">{article.author}</span></span>
              </div>

              <h1 className={`text-3xl md:text-4xl font-bold ${getTailwindClass('text-gray-900')} leading-tight`}>
                {article.title}
              </h1>

              <p className={`text-xl ${getTailwindClass('text-gray-600')} leading-relaxed`}>
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className={`px-2 py-1 ${getTailwindClass('bg-gray-100')} ${getTailwindClass('text-gray-700')} text-sm rounded`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none article-content">
            <MDXRemote {...article.source} components={mdxComponents} />
          </div>

          {/* Article Footer */}
          <footer className={`mt-12 pt-8 border-t ${getTailwindClass('border-gray-200')}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <p className={getTailwindClass('text-gray-600')}>
                  Written by <span className="text-red-600 font-medium">{article.author}</span>
                </p>
                <p className={`text-sm ${getTailwindClass('text-gray-500')}`}>
                  Published on {formatDate(article.date)}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className={`${getTailwindClass('text-gray-500')} text-sm`}>Share:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + `https://kalkieshward.me/articles/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.205 5.077 4.366.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12 2.003A9.997 9.997 0 0 0 2 12c0 1.768.464 3.432 1.267 4.872L2 22l5.236-1.246A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10s-4.477-9.997-10-9.997z" />
                  </svg>
                </a>
                <a
                  href={`https://www.instagram.com/?url=${encodeURIComponent(`https://kalkieshward.me/articles/${article.slug}`)}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Share on Instagram"
                >
                  {/* Instagram Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 6.75zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 8.25zm5.25-.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                  </svg>
                </a>
                <a
                  href={`https://x.com/intent/post?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://kalkieshward.me/articles/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors"
                  aria-label="Share on X (formerly Twitter)"
                >
                  {/* X Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.53 2.47a2.5 2.5 0 0 1 3.54 3.54l-5.47 5.47 5.47 5.47a2.5 2.5 0 0 1-3.54 3.54l-5.47-5.47-5.47 5.47a2.5 2.5 0 0 1-3.54-3.54l5.47-5.47-5.47-5.47a2.5 2.5 0 0 1 3.54-3.54l5.47 5.47 5.47-5.47z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://kalkieshward.me/articles/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className={`py-12 border-t ${getTailwindClass('border-gray-100')}`}>
          <div className="container max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold ${getTailwindClass('text-gray-900')} mb-8`}>
              Related <span className={getTailwindClass('text-red-600')}>Articles</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.slug} className={`border rounded-lg p-6 transition-colors duration-200 ${
                  relatedArticle.featured 
                    ? `${COLOR_COMBINATIONS.featured.default.background} border-red-300 hover:border-red-400` 
                    : `${getTailwindClass('bg-white')} ${COLOR_COMBINATIONS.neutral.default.border} ${COLOR_COMBINATIONS.neutral.hover.border}`
                }`}>
                  {relatedArticle.featured && (
                    <div className="flex items-center mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTailwindClass('bg-red-100')} ${getTailwindClass('text-red-800')}`}>
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured Article
                      </span>
                    </div>
                  )}
                  <div className="space-y-3">
                    <div className={`flex items-center text-sm ${relatedArticle.featured ? getTailwindClass('text-red-600') : getTailwindClass('text-gray-500')}`}>
                      <span className={`px-2 py-1 ${getTailwindClass('bg-red-100')} ${getTailwindClass('text-red-800')} text-xs rounded-full`}>
                        {relatedArticle.category}
                      </span>
                      <span className="ml-auto">{relatedArticle.readTime}</span>
                    </div>
                    
                    <h3 className={`text-lg font-medium line-clamp-2 ${relatedArticle.featured ? 'text-red-900' : getTailwindClass('text-gray-900')}`}>
                      {relatedArticle.title}
                    </h3>
                    
                    <p className={`text-sm line-clamp-3 ${relatedArticle.featured ? 'text-red-700' : getTailwindClass('text-gray-600')}`}>
                      {relatedArticle.description}
                    </p>
                    
                    <Link 
                      href={`/articles/${relatedArticle.slug}`}
                      className={`inline-flex items-center ${getTailwindClass('text-red-600')} hover:${getTailwindClass('text-red-700')} text-sm font-medium`}
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
        </section>
      )}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
console.log('getStaticPaths for articles/[...slug] called');
  try {
    const slugs = getArticleSlugs();
    const paths = slugs.map((slug) => ({
      params: { slug: slug.split('/') }, // Handle nested paths like "backend/article-name"
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error in getStaticPaths for articles:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slugArray = params?.slug as string[];
    
    if (!slugArray) {
      return {
        notFound: true,
      };
    }

    // Join the slug array back into a single slug string
    const slug = slugArray.join('/');

    const article = await getSerializedArticle(slug);
    
    if (!article) {
      return {
        notFound: true,
      };
    }

    const relatedArticles = getRelatedArticles(slug, 3);

    return {
      props: {
        article,
        relatedArticles: relatedArticles || [],
      },
    };
  } catch (error) {
    console.error(`Error in getStaticProps for article ${params?.slug}:`, error);
    return {
      notFound: true,
    };
  }
};