import Link from 'next/link';

const projects = [
  {
    title: 'Studize',
    description: 'A miniature calendar application facilitating an easy way to manage academic tasks and schedules.',
    tech: 'Flutter',
    link: '/projects/studize',
    featured: true
  },
  {
    title: 'VITCL Flutter Application',
    description: 'A platform through which players from VIT could register and play chess seamlessly.',
    tech: 'Flutter, Firebase',
    link: '/projects/vitcl',
    featured: true
  },
  {
    title: 'Loan Default Prediction',
    description: 'Machine learning model created for Coursera\'s Dataset Challenge. Ranked in the 88th percentile.',
    tech: 'Python, Sklearn',
    link: '/projects/loan-prediction',
    featured: false
  },
];

export default function ProjectsSection() {
  return (
    <section className="section border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">
            Featured <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-600">
            Some of the projects I've worked on recently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`border rounded-lg p-6 hover:border-gray-300 transition-colors duration-200 ${project.featured ? 'border-red-200 bg-red-50/30' : 'border-gray-200'}`}>
              {project.featured && (
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Project
                  </span>
                </div>
              )}
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.tech}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
                <Link href={project.link} className="inline-block text-red-600 hover:text-red-700 text-sm">
                  View Project →
                </Link>
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