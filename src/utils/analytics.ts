import PostHogProvider, { Provider } from './posthogProvider';

let provider: Provider | null = null;
let enabled = false;

const NoopProvider: Provider = {
  init: () => undefined,
  trackEvent: () => undefined,
  pageview: () => undefined,
  optIn: () => undefined,
  optOut: () => undefined,
};

export function initAnalytics(opts: { key?: string; host?: string }) {
  if (opts.key) {
    provider = PostHogProvider;
    provider.init({ key: opts.key, host: opts.host });
    enabled = true;
  } else {
    provider = NoopProvider;
    enabled = false;
  }
}

export function trackEvent(event: string, props?: Record<string, any>) {
  if (!provider) return;
  try {
    provider.trackEvent(event, props);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('trackEvent error', e);
  }
}

export function pageview(path: string) {
  if (!provider) return;
  try {
    provider.pageview(path);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('pageview error', e);
  }
}

export function optIn() {
  provider?.optIn();
}

export function optOut() {
  provider?.optOut();
}

export function isEnabled() {
  return enabled;
}

export const Analytics = {
  initAnalytics,
  trackEvent,
  pageview,
  optIn,
  optOut,
  isEnabled,
};
