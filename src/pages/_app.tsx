import type { AppProps } from 'next/app';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';
import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@/utils/analytics';
import useScrollDepth from '@/hooks/useScrollDepth';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // hook to fire scroll-depth events
  // import dynamically to avoid SSR issues
  useScrollDepth();

  useEffect(() => {
    // Initialize analytics in the browser if key is present
    if (typeof window !== 'undefined') {
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
      const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
      Analytics.initAnalytics({ key, host });

      // initial pageview
      Analytics.pageview(window.location.pathname);

      // track subsequent route changes
      const handleRoute = (url: string) => {
        Analytics.pageview(url);
      };

      router.events.on('routeChangeComplete', handleRoute);

      // initialize delegated click tracker
      import('@/utils/autoClickTracker').then((m) => m?.default?.()).catch(() => {/* ignore */});

      return () => router.events.off('routeChangeComplete', handleRoute);
    }
    return undefined;
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
      </Head>
      <div className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}