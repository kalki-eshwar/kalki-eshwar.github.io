import posthog from 'posthog-js';

// Lightweight instrumentation client compatible with Next.js 15.3+ instrumentation pattern
// It reads `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` from the environment.
// Defaults are set per PostHog recommendation (2025-11-30 as an example).

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
  // Keep privacy-first defaults: autocapture/capture_pageview are disabled.
  // Set NEXT_PUBLIC_POSTHOG_AUTOCAPTURE=true to enable autocapture if you decide later.
  autocapture: process.env.NEXT_PUBLIC_POSTHOG_AUTOCAPTURE === 'true',
  capture_pageview: process.env.NEXT_PUBLIC_POSTHOG_CAPTURE_PAGEVIEW === 'true',
  persistence: 'memory',
  defaults: '2025-11-30',
});

export default posthog;
