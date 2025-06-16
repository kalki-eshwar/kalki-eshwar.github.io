import Link from 'next/link';
import { getAchievementsData } from '@/utils/data';

export default function AchievementsSection() {
  const { achievements } = getAchievementsData();
  
  return (
    <section className="section border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">
            Key <span className="text-red-600">Achievements</span>
          </h2>
          <p className="text-gray-600">
            Milestones and accomplishments in my journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.slice(0, 3).map((achievement, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-200 hover:shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 leading-tight">{achievement.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                          {achievement.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {achievements.length > 3 && (
          <div className="text-center mt-6">
            <Link href="/achievements" className="btn flex items-center justify-center space-x-2">
              <span>View All Achievements</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
