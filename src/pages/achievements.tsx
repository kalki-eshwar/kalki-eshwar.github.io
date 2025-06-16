import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';
import { getAchievementsData } from '@/utils/data';

const achievementsSEO: SEOProps = {
  title: 'Achievements - Kalki Eshwar D',
  description: 'Key achievements and milestones in the career of Kalki Eshwar D, including academic accomplishments, professional projects, and recognition.',
  canonical: 'https://kalkieshward.me/achievements',
};

export default function Achievements() {
  const { achievements } = getAchievementsData();
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
            <div key={index} className={`border rounded-lg p-8 hover:border-gray-300 transition-all duration-200 hover:shadow-sm ${achievement.featured ? 'border-red-200 bg-red-50/20 hover:border-red-400' : 'border-gray-200'}`}>
              {achievement.featured && (
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Achievement
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-medium text-gray-900">{achievement.title}</h2>
                    <span className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{achievement.year}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
