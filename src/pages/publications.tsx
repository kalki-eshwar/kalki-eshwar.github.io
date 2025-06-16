import Layout from '@/components/layout/Layout';
import PublicationsSection from '@/components/sections/PublicationsSection';
import { SEOProps } from '@/types';

const publicationsSEO: SEOProps = {
  title: 'Publications - Kalki Eshwar D',
  description: 'Research publications and academic papers by Kalki Eshwar D in AI, cybersecurity, blockchain, and software development.',
  canonical: 'https://kalkieshward.me/publications',
};

export default function Publications() {
  return (
    <Layout seo={publicationsSEO}>
      <div className="pt-16">
        <PublicationsSection />
      </div>
    </Layout>
  );
}