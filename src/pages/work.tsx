import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';
import { getWorkExperience } from '@/utils/data';

const workSEO: SEOProps = {
  title: 'Work Experience - Kalki Eshwar D',
  description: 'Professional work experience and career journey of Kalki Eshwar D, including internships and projects.',
  canonical: 'https://kalkieshward.me/work',
};

export default function Work() {
  const { workExperience } = getWorkExperience();
  
  return (
    <Layout seo={workSEO}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Work <span className="text-red-600">Experience</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and the experiences that have shaped my career in technology and software development.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== workExperience.length - 1 && (
                    <div className="absolute left-4 top-16 bottom-0 w-px bg-gray-200" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-2 top-6 w-4 h-4 rounded-full border-4 border-white shadow-sm ${
                    job.current ? 'bg-green-600' : 'bg-red-600'
                  }`} />
                  
                  {/* Content */}
                  <div className="ml-12">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900 mb-1">{job.title}</h3>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-lg text-red-600 font-medium">{job.company}</p>
                            <a
                              href={job.companyWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                              title={`Visit ${job.company} website`}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          <p className="text-sm text-gray-500">{job.location}</p>
                        </div>
                        <div className="mt-2 md:mt-0 md:text-right">
                          <div className="flex items-center gap-2 md:justify-end">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                              {job.type}
                            </span>
                            {job.current && (
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{job.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        {job.certificateUrl && (
                          <a
                            href={job.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}