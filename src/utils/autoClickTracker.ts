import { trackEvent } from './analytics';

export default function initAutoClickTracker() {
  if (typeof window === 'undefined') return;

  const handler = (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest('[data-analytics]') as HTMLElement | null;
    if (!target) return;

    const kind = target.getAttribute('data-analytics');
    if (!kind) return;

    // Only handle button_click events via auto tracker
    if (kind !== 'button_click') return;

    const label = (target.getAttribute('data-analytics-label') || target.getAttribute('aria-label') || target.textContent || '').trim().slice(0, 200);
    const section = target.getAttribute('data-analytics-section') || document.location.pathname;
    const href = (target as HTMLAnchorElement).href || undefined;

    try {
      trackEvent('button_click', { label, section, page: window.location.pathname, href });
    } catch (err) {
      // swallow errors to avoid breaking UI
      // eslint-disable-next-line no-console
      console.error('button_click tracking failed', err);
    }
  };

  document.addEventListener('click', handler, { passive: true });
}
