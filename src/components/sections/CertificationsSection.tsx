import Link from 'next/link';
import Image from 'next/image';
import { getCertifications } from '@/utils/data';

export default function CertificationsSection() {
  const certifications = getCertifications();
  
  return (
    <section className="section border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">
            Professional <span className="text-red-600">Certifications</span>
          </h2>
          <p className="text-gray-600">
            Skills validation and continuous learning achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.slice(0, 3).map((certification, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-200 hover:shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
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
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-medium text-gray-900 leading-tight">{certification.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                        {certification.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(certification.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </span>
                      {certification.verified && (
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{certification.issuer}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                  {certification.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1">
                    {certification.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {certification.skills.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{certification.skills.length - 2}
                      </span>
                    )}
                  </div>
                  {certification.certificateUrl && (
                    <a
                      href={certification.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
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
            <Link href="/certifications" className="btn flex items-center justify-center space-x-2">
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
