import Link from 'next/link';
import { getPersonalInfo, getEducationData, getWorkExperience, getPublications, getCertifications, getProjectsData } from '@/utils/data';
import { COLORS, getTailwindClass } from '@/presets';

export default function HeroSection() {
  const personalInfo = getPersonalInfo();
  const educationData = getEducationData();
  const workData = getWorkExperience();
  const projectsData = getProjectsData();
  
  // Calculate dynamic values - now using the centralized projects data
  const university = 'VIT';
  const major = 'CS';
  const projectsCount = projectsData.length; // Now matches projects page: Portfolio, Task Manager, AI Generator
  const publicationsCount = getPublications()?.length || 0;
  const certificationsCount = getCertifications()?.length || 0;
  const internshipsCount = workData.workExperience?.filter(exp => exp.type === 'Internship').length || 0;
  
  return (
    <section
      className="section relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${personalInfo.backgroundImage}')`
      }}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium ${getTailwindClass('text-white')}`}>
                Hi, I'm <span style={{ color: COLORS.primary[500] }}>{personalInfo.name}</span>
              </h1>
              <p className={`text-lg md:text-xl ${getTailwindClass('text-gray-200')}`}>
                {personalInfo.bio}
              </p>
            </div>

            <p className={`${getTailwindClass('text-gray-200')} text-justify leading-relaxed max-w-md mx-auto lg:mx-0`}>
              {personalInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={personalInfo.resumePath}
                download={personalInfo.resumeFileName}
                onClick={() => {
                  try {
                    const { trackEvent } = require('@/utils/analytics');
                    trackEvent('resume_download', { filename: personalInfo.resumeFileName, path: personalInfo.resumePath });
                  } catch (e) {
                    // ignore
                  }
                }}
                className={`inline-flex items-center px-6 py-3 ${getTailwindClass('bg-red-600')} ${getTailwindClass('text-white')} font-medium rounded-lg ${getTailwindClass('hover:bg-red-700')} transition-colors duration-200 shadow-lg`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <Link href="/contact" onClick={() => {
                try { const { trackEvent } = require('@/utils/analytics'); trackEvent('cta_click', { label: 'get_in_touch_home' }); } catch (e) { }
              }} className={`inline-block px-6 py-3 ${getTailwindClass('bg-white')} ${getTailwindClass('text-gray-900')} font-medium rounded-lg ${getTailwindClass('hover:bg-gray-200')} transition-colors duration-200 shadow-lg`}>
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right side - Quick stats or info */}
          <div className="lg:justify-self-end">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className={`text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200`}>
                <div className={`text-2xl font-medium ${getTailwindClass('text-white')}`}>{university}</div>
                <div className={`text-sm ${getTailwindClass('text-gray-200')} mt-1`}>University</div>
              </div>
              <div className={`text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200`}>
                <div className={`text-2xl font-medium ${getTailwindClass('text-white')}`}>{major}</div>
                <div className={`text-sm ${getTailwindClass('text-gray-200')} mt-1`}>Major</div>
              </div>
              <div className={`text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200`}>
                <div className={`text-2xl font-medium ${getTailwindClass('text-white')}`}>{projectsCount}+</div>
                <div className={`text-sm ${getTailwindClass('text-gray-200')} mt-1`}>FOSS Projects</div>
              </div>
              <div className={`text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200`}>
                <div className={`text-2xl font-medium ${getTailwindClass('text-white')}`}>{publicationsCount}</div>
                <div className={`text-sm ${getTailwindClass('text-gray-200')} mt-1`}>Publications</div>
              </div>
              <div className={`text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200`}>
                <div className={`text-2xl font-medium ${getTailwindClass('text-white')}`}>{certificationsCount}</div>
                <div className={`text-sm ${getTailwindClass('text-gray-200')} mt-1`}>Certifications</div>
              </div>
              <div className={`text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200`}>
                <div className={`text-2xl font-medium ${getTailwindClass('text-white')}`}>{internshipsCount}</div>
                <div className={`text-sm ${getTailwindClass('text-gray-200')} mt-1`}>Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}