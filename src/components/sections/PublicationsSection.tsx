import Link from 'next/link';
import { getPublications } from '@/utils/data';

export default function PublicationsSection() {
  const publications = getPublications();
  
  return (
    <section className="section border-t border-gray-100" data-section="publications">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">
            Research <span className="text-red-600">Publications</span>
          </h2>
          <p className="text-gray-600">
            Academic contributions and research work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {publications.slice(0, 3).map((publication, index) => (
            <div key={index} className={`border rounded-lg p-6 hover:border-gray-300 transition-all duration-200 hover:shadow-sm ${publication.featured ? 'border-red-200 bg-red-50/20 hover:border-red-400' : 'border-gray-200'}`}>
              {publication.featured && (
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Publication
                  </span>
                </div>
              )}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 leading-tight">{publication.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                      {publication.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(publication.date).getFullYear()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{publication.journal}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                  {publication.abstract}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1">
                    {publication.keywords.slice(0, 2).map((keyword, keyIndex) => (
                      <span key={keyIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                    {publication.keywords.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                        +{publication.keywords.length - 2}
                      </span>
                    )}
                  </div>
                  {publication.pdfUrl && (
                    <a
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {publications.length > 0 && (
          <div className="text-center mt-6">
            <Link href="/education#publications" className="btn flex items-center justify-center space-x-2">
              <span>View All Publications</span>
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
