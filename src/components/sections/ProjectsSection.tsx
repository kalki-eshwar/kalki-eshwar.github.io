import Link from 'next/link';
import Image from 'next/image';
import { getProjectsData } from '@/utils/data';
import { getTailwindClass, COLOR_COMBINATIONS } from '@/presets';

const projectsData = getProjectsData();
const projects = projectsData
  .filter(project => project.featured)
  .slice(0, 3)
  .map(project => ({
    title: project.title,
    description: project.description,
    tech: project.technologies.map(tech => tech.name).join(', '),
    link: `/projects#${project.id}`,
    featured: project.featured,
    category: project.category === 'web' ? 'Web Development' : project.category === 'ai' ? 'AI/Machine Learning' : project.category === 'mobile' ? 'App Development' : project.category,
    images: project.images // Pass images property
  }));

export default function ProjectsSection() {
  return (
    <section className={`section border-t ${getTailwindClass('border-gray-100')}`}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-medium ${getTailwindClass('text-gray-900')} mb-3`}>
            Featured <span className={getTailwindClass('text-red-600')}>Projects</span>
          </h2>
          <p className={getTailwindClass('text-gray-600')}>
            Some of the projects I&apos;ve worked on recently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`border rounded-lg overflow-hidden transition-colors duration-200 ${
              project.featured 
                ? `${COLOR_COMBINATIONS.featured.default.border} ${COLOR_COMBINATIONS.featured.default.background} ${COLOR_COMBINATIONS.featured.hover.border}` 
                : `${COLOR_COMBINATIONS.neutral.default.border} ${COLOR_COMBINATIONS.neutral.hover.border}`
            }`}>
              {/* Small fixed height container for featured badge to maintain consistent layout */}
              <div className="h-9 px-3 pt-2 flex items-start">
                {project.featured && (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTailwindClass('bg-red-100')} ${getTailwindClass('text-red-800')}`}>
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Project
                  </span>
                )}
              </div>
              
              {/* Project Image */}
              {project.images && project.images.length > 0 ? (
                <div className="h-32 relative overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className={`h-32 bg-gradient-to-br ${getTailwindClass('bg-red-50')} to-red-100 flex items-center justify-center`}>
                  <div className="text-center">
                    <p className={`${getTailwindClass('text-red-600')} font-medium text-sm`}>{project.category}</p>
                  </div>
                </div>
              )}

              <div className="p-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <h3 className={`card-title text-lg font-medium ${getTailwindClass('text-gray-900')}`}>{project.title}</h3>
                    <span className={`text-sm ${getTailwindClass('text-gray-500')}`}>{project.tech}</span>
                  </div>
                  <p className={`${getTailwindClass('text-gray-600')} leading-relaxed text-sm`}>{project.description}</p>
                  <Link href={project.link} className={`inline-block ${getTailwindClass('text-red-600')} hover:${getTailwindClass('text-red-700')} text-sm`}>
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Link href="/projects" className="btn flex items-center justify-center space-x-2">
            <span>View All Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}