import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';
import { getTailwindClass, COLOR_COMBINATIONS } from '@/presets';

const seo: SEOProps = {
  title: 'Page Not Found - Kalki Eshwar',
  description: "Looks like the page you're looking for doesn't exist.",
  canonical: 'https://kalkieshward.me/404',
};

export default function NotFound() {
  return (
    <Layout seo={seo}>
      <div className="section">
        <div className="container py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${getTailwindClass('text-gray-900')}`}>
              404
            </h1>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${getTailwindClass('text-gray-900')}`}>
              Are you sure where you're going?
            </h2>
            <p className={`${getTailwindClass('text-gray-600')} mb-8`}>It's in the middle of nowhere.</p>

            <div className="flex items-center justify-center gap-4">
              <Link href="/" className={`inline-flex items-center px-6 py-3 ${getTailwindClass('bg-red-600')} ${getTailwindClass('text-white')} font-medium rounded-lg ${getTailwindClass('hover:bg-red-700')} transition-colors duration-200`}>
                Take me home
              </Link>

              <Link href="/projects" className={`inline-flex items-center px-6 py-3 ${getTailwindClass('bg-white')} ${getTailwindClass('text-gray-900')} font-medium rounded-lg border ${getTailwindClass('border-gray-200')} hover:${getTailwindClass('bg-gray-100')} transition-colors duration-200`}>
                Browse Projects
              </Link>
            </div>

            <p className={`${getTailwindClass('text-gray-500')} text-sm mt-6`}>
              If you think this is an error, feel free to <Link href="/contact" className="underline">get in touch</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
