import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';

const workSEO: SEOProps = {
  title: 'Work Experience - Kalki Eshwar D',
  description: 'Professional work experience and career journey of Kalki Eshwar D, including internships and projects.',
  canonical: 'https://kalkieshward.me/work',
};

const workExperience = [
  {
    title: 'Flutter Developer',
    company: 'Monclarity Solutions Pvt. Ltd.',
    period: 'June 2023 - August 2023',
    type: 'Internship',
    location: 'Remote',
    description: 'Developed finance applications using Flutter framework, integrated APIs to connect various services, and performed comprehensive debugging and testing to ensure quality assurance.',
    achievements: [
      'Built responsive mobile applications for financial services',
      'Integrated RESTful APIs for seamless data connectivity',
      'Implemented comprehensive testing strategies',
      'Managed cross-team projects for timely delivery',
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Security Compliance Intern',
    company: 'Valsco Technology Pvt Ltd',
    period: 'March 2023 - May 2023',
    type: 'Internship',
    location: 'Remote',
    description: 'Created security policies in adherence to data governance and compliance standards, designed security protocols across systems, and developed tiered response systems for security incidents.',
    achievements: [
      'Developed comprehensive security policies and procedures',
      'Designed multi-layered security protocols for system protection',
      'Created incident response frameworks for security events',
      'Ensured compliance with data governance standards',
    ],
    technologies: ['Security Frameworks', 'Compliance Standards', 'Risk Assessment', 'Policy Development'],
  },
];

export default function Work() {
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
                  <div className="absolute left-2 top-6 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-sm" />
                  
                  {/* Content */}
                  <div className="ml-12">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-lg text-red-600 font-medium">{job.company}</p>
                          <p className="text-sm text-gray-500">{job.location}</p>
                        </div>
                        <div className="mt-2 md:mt-0 md:text-right">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                            {job.type}
                          </span>
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
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
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