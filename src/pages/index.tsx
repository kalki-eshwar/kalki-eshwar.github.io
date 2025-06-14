import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import { SEOProps } from '@/types';

const homeSEO: SEOProps = {
  title: 'KalkiEshwar - Software Developer & Tech Writer',
  description: 'Portfolio of KalkiEshwar, a passionate software developer sharing insights on technology, programming, and life.',
  canonical: 'https://kalkieshward.me',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'KalkiEshwar',
    jobTitle: 'Software Developer',
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
      {/* Additional sections will be added here */}
    </Layout>
  );
}