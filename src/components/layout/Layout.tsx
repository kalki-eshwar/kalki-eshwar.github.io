import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { SEOProps } from '@/types';

interface LayoutProps {
  children: ReactNode;
  seo?: SEOProps;
}

export default function Layout({ children, seo }: LayoutProps) {
  const defaultSEO: SEOProps = {
    title: 'KalkiEshwar - Software Developer & Tech Writer',
    description: 'Portfolio of KalkiEshwar, a passionate software developer sharing insights on technology, programming, and life.',
    keywords: ['software developer', 'portfolio', 'react', 'typescript', 'web development'],
    canonical: 'https://kalkieshward.me',
    ogImage: '/images/og-image.png',
    twitterCard: 'summary_large_image',
  };

  const pageSEO = { ...defaultSEO, ...seo };

  return (
    <>
      <Head>
        <title>{pageSEO.title}</title>
        <meta name="description" content={pageSEO.description} />
        {pageSEO.keywords && (
          <meta name="keywords" content={pageSEO.keywords.join(', ')} />
        )}
        <meta name="author" content="KalkiEshwar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageSEO.canonical} />
        <meta property="og:title" content={pageSEO.title} />
        <meta property="og:description" content={pageSEO.description} />
        {pageSEO.ogImage && <meta property="og:image" content={pageSEO.ogImage} />}

        {/* Twitter */}
        <meta property="twitter:card" content={pageSEO.twitterCard} />
        <meta property="twitter:url" content={pageSEO.canonical} />
        <meta property="twitter:title" content={pageSEO.title} />
        <meta property="twitter:description" content={pageSEO.description} />
        {pageSEO.ogImage && <meta property="twitter:image" content={pageSEO.ogImage} />}

        {/* Canonical URL */}
        {pageSEO.canonical && <link rel="canonical" href={pageSEO.canonical} />}

        {/* Structured Data */}
        {pageSEO.structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(pageSEO.structuredData),
            }}
          />
        )}
      </Head>

      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}