import Link from 'next/link';
import Image from 'next/image';
import { getCertifications } from '@/utils/data';
import { getTailwindClass, COLOR_COMBINATIONS } from '@/presets';

export default function CertificationsSection() {
  const certifications = getCertifications();
  
  return (
    <section className={`section border-t ${getTailwindClass('border-gray-100')}`}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-medium ${getTailwindClass('text-gray-900')} mb-3`}>
            Professional <span className={getTailwindClass('text-red-600')}>Certifications</span>
          </h2>
          <p className={getTailwindClass('text-gray-600')}>
            Skills validation and continuous learning achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.slice(0, 3).map((certification, index) => (
            <div key={index} className={`border rounded-lg p-6 hover:border-gray-300 transition-all duration-200 hover:shadow-sm ${
              certification.featured 
                ? `${COLOR_COMBINATIONS.featured.default.border} ${COLOR_COMBINATIONS.featured.default.background} ${COLOR_COMBINATIONS.featured.hover.border}` 
                : `${COLOR_COMBINATIONS.neutral.default.border}`
            }`}>
              {certification.featured && (
                <div className="flex items-center mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTailwindClass('bg-red-100')} ${getTailwindClass('text-red-800')}`}>
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Certification
                  </span>
                </div>
              )}
              <div className="space-y-4">
                {/* Icon and Issuer Row */}
                <div className="flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-3">
                    {certification.issuerIcon && (
                      <div className="flex-shrink-0">
                        <Image
                          src={certification.issuerIcon}
                          alt={certification.issuer}
                          width={32}
                          height={32}
                          className="rounded"
                        />
                      </div>
                    )}
                    <span className={`text-lg font-semibold ${getTailwindClass('text-red-600')}`}>{certification.issuer}</span>
                  </div>
                  {certification.verified && (
                    <span className="inline-flex items-center text-green-700 text-xs font-medium">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" fill="#16a34a" />
                        <path d="M6 10.5l2.25 2.25 5-5" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
                
                {/* Title */}
                <div>
                  <h3 className={`text-sm font-medium ${getTailwindClass('text-gray-900')} leading-tight`}>{certification.title}</h3>
                </div>
                
                {/* Tags and Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs ${getTailwindClass('text-red-600')} ${getTailwindClass('bg-red-50')} px-2 py-1 rounded-full`}>
                      {certification.category}
                    </span>
                    <span className={`text-xs ${getTailwindClass('text-gray-500')}`}>
                      {new Date(certification.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
                
                <p className={`${getTailwindClass('text-gray-600')} leading-relaxed text-sm line-clamp-2`}>
                  {certification.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1">
                    {certification.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span key={skillIndex} className={`text-xs ${getTailwindClass('bg-gray-100')} ${getTailwindClass('text-gray-600')} px-2 py-1 rounded`}>
                        {skill}
                      </span>
                    ))}
                    {certification.skills.length > 2 && (
                      <span className={`text-xs ${getTailwindClass('bg-gray-100')} ${getTailwindClass('text-gray-500')} px-2 py-1 rounded`}>
                        +{certification.skills.length - 2}
                      </span>
                    )}
                  </div>
                  {certification.certificateUrl && (
                    <a
                      href={certification.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${getTailwindClass('text-red-600')} hover:${getTailwindClass('text-red-700')} text-sm font-medium`}
                    >
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {certifications.length > 3 && (
          <div className="text-center mt-6">
            <Link href="/education#certifications" className="btn flex items-center justify-center space-x-2">
              <span>View All Certifications</span>
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
