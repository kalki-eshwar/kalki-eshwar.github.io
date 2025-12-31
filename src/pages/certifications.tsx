import Layout from '@/components/layout/Layout';
import CertificationsSection from '@/components/sections/CertificationsSection';
import { SEOProps } from '@/types';

const certificationsSEO: SEOProps = {
  title: 'Certifications - Kalki Eshwar',
  description: 'Professional certifications and credentials earned by Kalki Eshwar in cybersecurity, AI, web development, and more.',
  canonical: 'https://kalkieshward.me/certifications',
};

export default function Certifications() {
  return (
    <Layout seo={certificationsSEO}>
      <div className="pt-16">
        <CertificationsSection />
      </div>
    </Layout>
  );
}