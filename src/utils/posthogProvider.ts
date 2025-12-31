import posthog from 'posthog-js';

export interface Provider {
  init: (opts: { key?: string; host?: string }) => void;
  trackEvent: (event: string, props?: Record<string, any>) => void;
  pageview: (path: string) => void;
  optIn: () => void;
  optOut: () => void;
}

const PostHogProvider: Provider = {
  init({ key, host }) {
    if (!key) return;

    const autocapture = (typeof window !== 'undefined' && (window as any).process?.env?.NEXT_PUBLIC_POSTHOG_AUTOCAPTURE === 'true') || process.env.NEXT_PUBLIC_POSTHOG_AUTOCAPTURE === 'true';
    const capturePageview = (typeof window !== 'undefined' && (window as any).process?.env?.NEXT_PUBLIC_POSTHOG_CAPTURE_PAGEVIEW === 'true') || process.env.NEXT_PUBLIC_POSTHOG_CAPTURE_PAGEVIEW === 'true';

    posthog.init(key, {
      api_host: host || 'https://app.posthog.com',
      autocapture: autocapture, // opt-in if explicitly enabled via env
      capture_pageview: capturePageview, // opt-in only if explicitly enabled
      persistence: 'memory', // don't persist IDs in cookies/localStorage
      defaults: '2025-11-30', // PostHog recommended defaults date
    });

    // Note: We import `src/utils/instrumentation-client.js` for Next.js 15.3+ instrumentation support
    // but keep behavior privacy-first unless env flags are enabled.
  },

  trackEvent(event, props) {
    try {
      posthog.capture(event, props);
    } catch (e) {
      // swallow errors for resilience
      // eslint-disable-next-line no-console
      console.error('PostHog capture failed', e);
    }
  },

  pageview(path) {
    try {
      posthog.capture('pageview', { path });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('PostHog pageview failed', e);
    }
  },

  optIn() {
    try {
      posthog.opt_in_capturing?.();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('PostHog opt-in failed', e);
    }
  },

  optOut() {
    try {
      posthog.opt_out_capturing?.();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('PostHog opt-out failed', e);
    }
  },
};

export default PostHogProvider;
