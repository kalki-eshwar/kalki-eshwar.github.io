import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* For different sizes - all pointing to favicon.ico */}
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="48x48" href="/favicon.ico" />
        
        {/* Apple devices */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        
        {/* Android devices */}
        <link rel="icon" type="image/x-icon" sizes="192x192" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="512x512" href="/favicon.ico" />
        
        {/* Web manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}