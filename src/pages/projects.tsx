import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { SEOProps } from '@/types';

const projectsSEO: SEOProps = {
  title: 'Projects - Kalki Eshwar D',
  description: 'Explore the projects and applications built by Kalki Eshwar D, showcasing skills in Flutter, Machine Learning, and web development.',
  canonical: 'https://kalkieshward.me/projects',
};

const projects = [
  {
    title: 'Studize',
    description: 'A comprehensive miniature calendar application designed to facilitate easy management of academic tasks and schedules. Built with Flutter for cross-platform compatibility.',
    longDescription: 'Studize is a student-focused productivity application that helps manage academic schedules, assignments, and tasks. The app features an intuitive calendar interface, task management system, and notification alerts to keep students organized throughout their academic journey.',
    tech: ['Flutter', 'Dart', 'SQLite', 'Local Notifications'],
    features: [
      'Interactive calendar for academic planning',
      'Task and assignment management',
      'Notification system for deadlines',
      'Cross-platform mobile support',
      'Offline data storage'
    ],
    github: 'https://github.com/KalkiEshwarD/studize',
    demo: '#',
    image: '/images/studize-preview.png',
    status: 'Completed',
    category: 'Mobile App'
  },
  {
    title: 'VITCL Flutter Application',
    description: 'A comprehensive platform designed for chess enthusiasts at VIT, enabling seamless player registration and gameplay management for the VIT Chess League.',
    longDescription: 'The VITCL (VIT Chess League) application serves as a central hub for chess players at Vellore Institute of Technology. It provides features for tournament registration, match scheduling, player profiles, and real-time game tracking.',
    tech: ['Flutter', 'Firebase', 'Cloud Firestore', 'Firebase Auth'],
    features: [
      'User registration and authentication',
      'Tournament management system',
      'Real-time match tracking',
      'Player rankings and statistics',
      'Push notifications for match updates'
    ],
    github: 'https://github.com/KalkiEshwarD/vitcl-app',
    demo: '#',
    image: '/images/vitcl-preview.png',
    status: 'Completed',
    category: 'Mobile App'
  },
  {
    title: 'Loan Default Prediction',
    description: 'A machine learning model developed for Coursera\'s Dataset Challenge, achieving 88th percentile ranking through advanced predictive analytics and data processing.',
    longDescription: 'This project involves building a sophisticated machine learning model to predict loan defaults using various borrower characteristics and historical data. The model employs feature engineering, data preprocessing, and ensemble methods to achieve high accuracy.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    features: [
      'Advanced feature engineering',
      'Multiple ML algorithm comparison',
      'Cross-validation and hyperparameter tuning',
      'Data visualization and analysis',
      'Performance metrics evaluation'
    ],
    github: 'https://github.com/KalkiEshwarD/loan-prediction',
    demo: 'https://colab.research.google.com/drive/loan-prediction',
    image: '/images/loan-prediction-preview.png',
    status: 'Completed',
    category: 'Machine Learning'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and TypeScript, featuring optimized performance and clean design aesthetics.',
    longDescription: 'This portfolio website showcases my professional work, projects, and articles. Built with modern web technologies, it features server-side rendering, optimized images, and responsive design for an excellent user experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    features: [
      'Server-side rendering with Next.js',
      'Responsive design for all devices',
      'SEO optimized with meta tags',
      'Fast loading with image optimization',
      'Modern UI/UX design'
    ],
    github: 'https://github.com/KalkiEshwarD/portfolio',
    demo: 'https://kalkieshward.me',
    image: '/images/portfolio-preview.png',
    status: 'Active',
    category: 'Web Development'
  }
];

const categories = ['All', 'Mobile App', 'Web Development', 'Machine Learning'];

export default function Projects() {
  return (
    <Layout seo={projectsSEO}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              My <span className="text-red-600">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in mobile development, web technologies, and machine learning.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-gray-50 p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-gray-600 hover:text-red-600 hover:bg-white"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors duration-200">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-red-600 text-xl font-bold">
                        {project.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-red-600 font-medium">{project.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Link 
                      href={project.github} 
                      className="inline-flex items-center px-3 py-2 text-sm text-gray-700 hover:text-red-600 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Code
                    </Link>
                    {project.demo !== '#' && (
                      <Link 
                        href={project.demo} 
                        className="inline-flex items-center px-3 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-16 border-t border-gray-100">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Interested in <span className="text-red-600">Collaborating?</span>
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
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