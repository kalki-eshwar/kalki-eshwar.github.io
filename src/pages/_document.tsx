import { Html, Head, Main, NextScript } from 'next/document';
import { COLORS } from '@/presets';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={COLORS.primary[600]} />
        <meta name="msapplication-TileColor" content={COLORS.primary[600]} />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon-16x16.png`} />
        <link rel="apple-touch-icon" sizes="32x32" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon-32x32.png`} />
        <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
        
        {/* Web manifest */}
        <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/site.webmanifest`} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}