import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';

const educationSEO: SEOProps = {
  title: 'Education & Certifications - Kalki Eshwar D',
  description: 'Educational background and professional certifications of Kalki Eshwar D, including academic achievements and continuous learning journey.',
  canonical: 'https://kalkieshward.me/education',
};

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Vellore Institute of Technology, Vellore',
    period: '2021 - 2025 (Expected)',
    location: 'Vellore, Tamil Nadu, India',
    gpa: '8.5/10',
    description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and emerging technologies.',
    coursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Software Engineering',
      'Machine Learning',
      'Computer Networks',
      'Operating Systems',
      'Web Technologies',
      'Mobile Application Development',
      'Cybersecurity Fundamentals'
    ],
    achievements: [
      'Maintained consistent academic performance with 8.5+ GPA',
      'Active participant in technical clubs and coding competitions',
      'Completed multiple industry-relevant projects',
      'Presented research work at college symposiums'
    ],
    type: 'undergraduate'
  },
  {
    degree: 'Higher Secondary Education (12th Grade)',
    institution: 'St. Joseph\'s Higher Secondary School',
    period: '2019 - 2021',
    location: 'Chennai, Tamil Nadu, India',
    gpa: '95.2%',
    description: 'Specialized in Science stream with focus on Mathematics, Physics, Chemistry, and Computer Science.',
    coursework: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science',
      'English Literature'
    ],
    achievements: [
      'Scored 95.2% in board examinations',
      'School topper in Computer Science',
      'Participated in state-level mathematics olympiad',
      'Led the school\'s computer science club'
    ],
    type: 'secondary'
  }
];

const certifications = [
  {
    title: 'Flutter Development Certification',
    issuer: 'Google Developers',
    date: 'June 2023',
    credentialId: 'FLT-2023-001',
    description: 'Comprehensive certification covering Flutter framework, Dart programming, and mobile app development best practices.',
    skills: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX Design'],
    verified: true,
    category: 'Mobile Development'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera (Stanford University)',
    date: 'March 2024',
    credentialId: 'COURSERA-ML-2024',
    description: 'Complete machine learning course covering supervised learning, unsupervised learning, and neural networks.',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis'],
    verified: true,
    category: 'Machine Learning'
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'September 2023',
    credentialId: 'AWS-CP-2023-789',
    description: 'Foundational understanding of AWS cloud services, architecture, and best practices.',
    skills: ['AWS', 'Cloud Computing', 'DevOps', 'Infrastructure'],
    verified: true,
    category: 'Cloud Computing'
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Cisco Networking Academy',
    date: 'May 2023',
    credentialId: 'CISCO-SEC-2023',
    description: 'Comprehensive course on cybersecurity principles, threat analysis, and security protocols.',
    skills: ['Cybersecurity', 'Network Security', 'Risk Assessment', 'Compliance'],
    verified: true,
    category: 'Security'
  },
  {
    title: 'React.js Developer Certification',
    issuer: 'Meta (Facebook)',
    date: 'January 2024',
    credentialId: 'META-REACT-2024',
    description: 'Advanced React.js development including hooks, context API, and modern React patterns.',
    skills: ['React.js', 'JavaScript', 'Frontend Development', 'Component Architecture'],
    verified: true,
    category: 'Web Development'
  },
  {
    title: 'Git and GitHub Professional',
    issuer: 'GitHub',
    date: 'November 2023',
    credentialId: 'GITHUB-PRO-2023',
    description: 'Advanced version control, collaboration workflows, and GitHub best practices.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    verified: true,
    category: 'Development Tools'
  }
];

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Dart', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL']
  },
  {
    category: 'Frameworks & Technologies',
    items: ['Flutter', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'TensorFlow', 'Firebase']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'AWS', 'Docker', 'VS Code', 'Android Studio', 'Figma']
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'Firebase Firestore', 'SQLite', 'PostgreSQL']
  }
];

const certificationCategories = ['All', 'Mobile Development', 'Machine Learning', 'Web Development', 'Cloud Computing', 'Security', 'Development Tools'];

export default function Education() {
  return (
    <Layout seo={educationSEO}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Education & <span className="text-red-600">Certifications</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic journey and continuous learning path through formal education and professional certifications.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              <span className="text-red-600">Education</span>
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-red-600 font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-500 mb-2">{edu.location}</p>
                      <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6 lg:text-right">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full mb-2">
                        {edu.type === 'undergraduate' ? 'Bachelor\'s Degree' : 'Secondary Education'}
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
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
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
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-sm font-bold">
                        {cert.category.substring(0, 2).toUpperCase()}
                      </span>
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
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-red-600 font-medium text-sm mb-1">{cert.issuer}</p>
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
                  
                  <div className="text-xs text-gray-500">
                    <p>Credential ID: {cert.credentialId}</p>
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
                <span>6+ Certifications</span>
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