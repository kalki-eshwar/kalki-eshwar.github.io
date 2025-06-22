import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { SEOProps } from '@/types';
import { getProjectsData } from '@/utils/data';
import { COLOR_COMBINATIONS, getTailwindClass } from '@/presets';

const projectsSEO: SEOProps = {
  title: 'Projects - Kalki Eshwar D',
  description: 'Explore the projects and applications built by Kalki Eshwar D, showcasing skills in Flutter, Machine Learning, and web development.',
  canonical: 'https://kalkieshward.me/projects',
};

// Map the JSON data to match the expected format
const projectsData = getProjectsData();
const projects = projectsData.map(project => ({
  title: project.title,
  description: project.description,
  longDescription: project.longDescription,
  tech: project.technologies.map(tech => tech.name),
  features: project.highlights,
  github: project.githubUrl,
  demo: 'liveUrl' in project ? project.liveUrl : null,
  image: project.images?.[0]?.src?.replace(/^public\//, '/') || '/images/project-placeholder.png',
  category: project.category === 'web' ? 'Web Development' : project.category === 'ai' ? 'AI/Machine Learning' : project.category === 'mobile' ? 'App Development' : project.category,
  featured: project.featured || false,
  icon: project.icon || null
}));

const categories = ['All', 'Web Development', 'AI/Machine Learning', 'App Development'];

export default function Projects() {
  return (
    <Layout seo={projectsSEO}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className={`text-3xl md:text-4xl font-medium ${getTailwindClass('text-gray-900')} mb-4`}>
              My <span className={COLOR_COMBINATIONS.primary.default.text}>Projects</span>
            </h1>
            <p className={`text-lg ${getTailwindClass('text-gray-600')} max-w-2xl mx-auto`}>
              A collection of projects that showcase my skills in mobile development, web technologies, and machine learning.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className={`flex flex-wrap gap-2 ${getTailwindClass('bg-gray-50')} p-1 rounded-lg`}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${getTailwindClass('text-gray-600')} hover:${getTailwindClass('text-red-600')} hover:${getTailwindClass('bg-white')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className={`border rounded-lg overflow-hidden transition-colors duration-200 ${project.featured ? `${COLOR_COMBINATIONS.featured.default.background} ${COLOR_COMBINATIONS.featured.default.border} hover:${COLOR_COMBINATIONS.featured.hover.border}` : `${getTailwindClass('bg-white')} ${getTailwindClass('border-gray-200')} hover:${getTailwindClass('border-gray-300')}`}`}>
                {/* Small fixed height container for featured badge to maintain consistent layout */}
                <div className="h-10 px-4 pt-3 flex items-start">
                  {project.featured && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTailwindClass('bg-red-100')} ${getTailwindClass('text-red-800')}`}>
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured Project
                    </span>
                  )}
                </div>
                
                {/* Project Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && project.image !== '/images/project-placeholder.png' ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-16 h-16 ${getTailwindClass('bg-red-200')} rounded-lg mx-auto mb-2 flex items-center justify-center overflow-hidden`}>
                            {project.icon ? (
                              <img src={project.icon} alt={`${project.title} icon`} className="w-full h-full object-contain p-2" />
                            ) : (
                              <span className={`${getTailwindClass('text-red-600')} text-xl font-bold`}>
                                {project.title.substring(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <p className={`${getTailwindClass('text-red-600')} font-medium ${getTailwindClass('bg-red-100')} px-3 py-1 rounded-full`}>
                            {project.category}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={`h-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 ${getTailwindClass('bg-red-200')} rounded-lg mx-auto mb-2 flex items-center justify-center overflow-hidden`}>
                          {project.icon ? (
                            <img src={project.icon} alt={`${project.title} icon`} className="w-full h-full object-contain p-2" />
                          ) : (
                            <span className={`${getTailwindClass('text-red-600')} text-xl font-bold`}>
                              {project.title.substring(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <p className={`${getTailwindClass('text-red-600')} font-medium`}>{project.category}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className={`text-xl font-medium ${getTailwindClass('text-gray-900')}`}>{project.title}</h3>
                  </div>

                  <p className={`${getTailwindClass('text-gray-600')} text-sm mb-4 leading-relaxed`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className={`px-2 py-1 ${getTailwindClass('bg-gray-100')} ${getTailwindClass('text-gray-700')} text-xs rounded`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className={`text-sm font-medium ${getTailwindClass('text-gray-900')} mb-2`}>Key Features:</h4>
                    <ul className={`text-xs ${getTailwindClass('text-gray-600')} space-y-1`}>
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`${getTailwindClass('text-red-600')} mr-2`}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Link 
                      href={project.github} 
                      className={`inline-flex items-center px-3 py-2 text-sm ${getTailwindClass('text-gray-700')} hover:${getTailwindClass('text-red-600')} transition-colors duration-200`}
                      target='_blank'
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View Code
                    </Link>
                    {project.demo && (
                      <Link 
                        href={project.demo} 
                        className={`inline-flex items-center px-3 py-2 text-sm ${getTailwindClass('text-white')} ${getTailwindClass('bg-red-600')} hover:${getTailwindClass('bg-red-700')} rounded transition-colors duration-200`}
                        target='_blank'
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 pt-16 border-t ${getTailwindClass('border-gray-100')}`}>
            <h2 className={`text-2xl font-medium ${getTailwindClass('text-gray-900')} mb-4`}>
              Interested in <span className={getTailwindClass('text-red-600')}>Collaborating?</span>
            </h2>
            <p className={`${getTailwindClass('text-gray-600')} mb-6 max-w-2xl mx-auto`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link 
              href="/contact" 
              className={`inline-flex items-center px-6 py-3 ${getTailwindClass('bg-red-600')} ${getTailwindClass('text-white')} font-medium rounded-lg hover:${getTailwindClass('bg-red-700')} transition-colors duration-200`}
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}