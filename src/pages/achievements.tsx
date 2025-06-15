import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';

const achievementsSEO: SEOProps = {
  title: 'Achievements - Kalki Eshwar D',
  description: 'Key achievements and milestones in the career of Kalki Eshwar D, including academic accomplishments, professional projects, and recognition.',
  canonical: 'https://kalkieshward.me/achievements',
};

const achievements = [
  {
    title: 'Loan Default Prediction Model',
    description: 'Developed a comprehensive machine learning model for predicting loan defaults as part of Coursera\'s Dataset Challenge. The model utilized advanced algorithms including Random Forest, Gradient Boosting, and Neural Networks to achieve high accuracy in prediction. Ranked in the 88th percentile among all participants, demonstrating strong analytical and machine learning skills.',
    category: 'Data Science',
    year: '2024',
    icon: '🏆',
    details: [
      'Achieved 88th percentile ranking in Coursera\'s Dataset Challenge',
      'Implemented multiple ML algorithms including Random Forest and Gradient Boosting',
      'Performed comprehensive data preprocessing and feature engineering',
      'Optimized model performance through hyperparameter tuning'
    ]
  },
  {
    title: 'Flutter Developer at Monclarity Solutions',
    description: 'Worked as a Flutter Developer at Monclarity Solutions Pvt. Ltd., developing finance applications with modern UI/UX design. Successfully integrated multiple APIs to connect various financial services and performed comprehensive debugging and testing to ensure quality assurance.',
    category: 'Professional',
    year: '2024',
    icon: '💼',
    details: [
      'Developed finance applications using Flutter framework',
      'Integrated REST APIs for real-time financial data',
      'Implemented comprehensive testing strategies',
      'Managed cross-team project coordination and delivery',
      'Ensured code quality through debugging and optimization'
    ]
  },
  {
    title: 'Security Compliance Intern',
    description: 'Served as a Security Compliance Intern at Valsco Technology Pvt Ltd, where I created comprehensive security policies in adherence to data governance and compliance standards. Designed and implemented security protocols across systems to ensure confidentiality, integrity, and availability of information.',
    category: 'Security',
    year: '2024',
    icon: '🔒',
    details: [
      'Created security policies following industry standards',
      'Designed protocols ensuring CIA (Confidentiality, Integrity, Availability)',
      'Implemented data governance frameworks',
      'Conducted security audits and compliance assessments',
      'Collaborated with teams to ensure security best practices'
    ]
  },
  {
    title: 'VIT Chess League Platform',
    description: 'Designed and developed a comprehensive chess platform specifically for VIT students using Flutter and Firebase. The platform enables seamless player registration, tournament management, and real-time gameplay tracking, serving the entire VIT chess community.',
    category: 'Development',
    year: '2023',
    icon: '♟️',
    details: [
      'Built using Flutter for cross-platform compatibility',
      'Integrated Firebase for real-time data management',
      'Implemented user authentication and profile management',
      'Created tournament bracket and scoring systems',
      'Designed intuitive UI for enhanced user experience'
    ]
  },
  {
    title: 'Computer Science Student at VIT',
    description: 'Currently pursuing Computer Science and Engineering at Vellore Institute of Technology, one of India\'s premier technical institutions. Maintaining strong academic performance while actively participating in various technical and extracurricular activities.',
    category: 'Academic',
    year: '2021-2025',
    icon: '🎓',
    details: [
      'Pursuing B.Tech in Computer Science and Engineering',
      'Strong foundation in programming, algorithms, and data structures',
      'Active participation in technical clubs and events',
      'Consistent academic performance throughout the program',
      'Engaged in various research and development projects'
    ]
  },
  {
    title: 'Studize Calendar Application',
    description: 'Designed and developed Studize, a miniature calendar application specifically created to help students manage their academic tasks and schedules more efficiently. The application features intuitive task management, deadline tracking, and schedule optimization.',
    category: 'Development',
    year: '2023',
    icon: '📅',
    details: [
      'Developed using Flutter for mobile compatibility',
      'Implemented task management and scheduling features',
      'Created intuitive UI for academic workflow optimization',
      'Added deadline tracking and notification systems',
      'Designed for enhanced student productivity'
    ]
  }
];

export default function Achievements() {
  return (
    <Layout seo={achievementsSEO}>
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">
            Key <span className="text-red-600">Achievements</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my milestones, accomplishments, and recognition 
            across various domains including academic pursuits, professional projects, 
            and technical contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-200 hover:shadow-sm">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-medium text-gray-900">{achievement.title}</h2>
                      <span className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{achievement.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-900">Key Highlights:</h3>
                  <ul className="space-y-1">
                    {achievement.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
