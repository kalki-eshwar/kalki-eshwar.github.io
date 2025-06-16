import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';
import { getEducationData } from '@/utils/data';
import Image from 'next/image';

const educationSEO: SEOProps = {
  title: 'Education, Publications & Certifications - Kalki Eshwar D',
  description: 'Educational background, research publications, and professional certifications of Kalki Eshwar D, including academic achievements and continuous learning journey.',
  canonical: 'https://kalkieshward.me/education',
};

export default function Education() {
  const { education, certifications, skills, certificationCategories, publications } = getEducationData();
  
  return (
    <Layout seo={educationSEO}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Education, Publications & <span className="text-red-600">Certifications</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic journey, research publications, and continuous learning path through formal education and professional certifications.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              <span className="text-red-600">Education</span>
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => {
                // Generate anchor ID from institution name
                const anchorId = edu.institution.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                
                return (
                  <div key={index} id={anchorId === 'vellore-institute-of-technology' ? 'vit' : anchorId} className={`bg-white border rounded-lg p-6 hover:border-gray-300 transition-colors duration-200 ${edu.featured ? 'border-red-200 bg-red-50/30' : 'border-gray-200'}`}>
                    {edu.featured && (
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured Education
                        </span>
                      </div>
                    )}
                    
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-medium text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-red-600 font-medium mb-1">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mb-2">{edu.location}</p>
                        <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6 lg:text-right lg:min-w-0 lg:flex-shrink-0">
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full mb-2 whitespace-nowrap">
                          {edu.type === 'undergraduate' ? "Bachelor's Degree" : 'Secondary Education'}
                        </span>
                        <p className="text-sm text-gray-600">{edu.period}</p>
                        <p className="text-sm font-medium text-gray-900 mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Publications Section */}
          <div className="mb-16" id="publications">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Research <span className="text-red-600">Publications</span>
            </h2>
            
            <div className="space-y-6">
              {publications?.map((publication, index) => (
                <div key={index} className={`bg-white border rounded-lg p-6 hover:border-gray-300 transition-colors duration-200 ${publication.featured ? 'border-red-200 bg-red-50/30' : 'border-gray-200'}`}>
                  {publication.featured && (
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured Publication
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-grow lg:pr-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{publication.title}</h3>
                      
                      <div className="text-sm text-gray-600 mb-3">
                        <p className="mb-1">
                          <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
                        </p>
                        <p className="mb-1">
                          <span className="font-medium">Published in:</span> {publication.journal}
                        </p>
                        <p>
                          <span className="font-medium">Date:</span> {publication.date} | 
                          <span className="font-medium"> Type:</span> {publication.type} | 
                          <span className="font-medium"> Status:</span> {publication.status}
                        </p>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{publication.abstract}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {publication.keywords.map((keyword, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-xs text-gray-500 mb-4">
                        {publication.pages && <p>Pages: {publication.pages}</p>}
                        {publication.doi && <p>DOI: {publication.doi}</p>}
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:min-w-0 lg:flex-shrink-0">
                      <div className="flex flex-col gap-2">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full text-center whitespace-nowrap">
                          {publication.category}
                        </span>
                        
                        {publication.pdfUrl && (
                          <a
                            href={publication.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View PDF
                          </a>
                        )}
                        
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(publication.bibtex);
                            // You could add a toast notification here
                          }}
                          className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy BibTeX
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifications" className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Professional <span className="text-red-600">Certifications</span>
            </h2>

            {/* Category Filter */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap gap-2 bg-gray-50 p-1 rounded-lg">
                {certificationCategories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-gray-600 hover:text-red-600 hover:bg-white"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className={`bg-white border rounded-lg p-6 hover:border-gray-300 transition-colors duration-200 ${cert.featured ? 'border-red-200 bg-red-50/30' : 'border-gray-200'}`}>
                  {cert.featured && (
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured Certification
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                      {cert.issuerIcon ? (
                        <Image
                          src={cert.issuerIcon}
                          alt={`${cert.issuer} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-red-600 text-sm font-bold">
                          {cert.category.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    {cert.verified && (
                      <div className="flex items-center text-green-600">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Issuer Name - bigger than title */}
                  <h2 className="text-xl font-semibold text-red-600 mb-2">{cert.issuer}</h2>
                  
                  {/* Title - smaller and red */}
                  <h3 className="text-md font-medium text-gray-900 mb-2">{cert.title}</h3>
                  
                  <p className="text-gray-500 text-xs mb-3">{cert.date}</p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-900 mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {(cert.credentialId != null) && (<div className="text-xs text-gray-500 mb-4">
                    <p>Credential ID: {cert.credentialId}</p>
                  </div>)}
                  
                  <div className="mt-auto">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Technical <span className="text-red-600">Skills</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="text-center py-16 border-t border-gray-100">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Continuous <span className="text-red-600">Learning</span>
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I believe in staying current through continuous learning, 
              professional development, and hands-on experience with emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Always Learning</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>{certifications.length}+ Certifications</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{publications?.length || 0} Publications</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Hands-on Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}