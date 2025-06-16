import Image from 'next/image';
import { getPersonalInfo } from '@/utils/data';
import DynamicContent from '@/components/DynamicContent';

export default function AboutSection() {
  const personalInfo = getPersonalInfo();
  
  return (
    <section className="section border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Title and Profile Image */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-medium text-gray-900 text-center lg:text-left">
              About <span className="text-red-600">Me</span>
            </h2>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
            {personalInfo.aboutSections.map((section, index) => (
              <p key={index}>
                <DynamicContent content={section} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}