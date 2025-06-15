import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import { SEOProps } from '@/types';
import { getPersonalInfo, getContactInfo } from '@/utils/data';

export default function Home() {
  const personalInfo = getPersonalInfo();
  const { socialLinks } = getContactInfo();
  
  const homeSEO: SEOProps = {
    title: personalInfo.seo.title,
    description: personalInfo.seo.description,
    canonical: personalInfo.seo.canonical,
    structuredData: {
      ...personalInfo.seo.structuredData,
      sameAs: socialLinks.map(link => link.url)
    }
  };

  return (
    <Layout seo={homeSEO}>
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ProjectsSection />
      <ArticlesSection />
    </Layout>
  );
}