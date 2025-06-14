import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import { SEOProps } from '@/types';

const homeSEO: SEOProps = {
  title: 'Kalki Eshwar D - Computer Science Student & Developer',
  description: 'Portfolio of Kalki Eshwar D, a Computer Science student at VIT Vellore passionate about software development and technology.',
  canonical: 'https://kalkieshward.me',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kalki Eshwar D',
    jobTitle: 'Computer Science Student',
    url: 'https://kalkieshward.me',
    sameAs: [
      'https://github.com/KalkiEshwarD',
      'https://linkedin.com/in/kalkieshward',
      'https://twitter.com/kalkieshward'
    ]
  }
};

export default function Home() {
  return (
    <Layout seo={homeSEO}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ArticlesSection />
    </Layout>
  );
}