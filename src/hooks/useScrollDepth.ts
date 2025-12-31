import { useEffect } from 'react';
import { trackEvent } from '@/utils/analytics';

const THRESHOLDS = [25, 50, 75, 100];

export default function useScrollDepth() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const seen = new Set<number>();

    const handler = () => {
      const scrolled = window.scrollY || window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const percent = Math.round((scrolled / height) * 100);

      for (const t of THRESHOLDS) {
        if (percent >= t && !seen.has(t)) {
          seen.add(t);
          try { trackEvent('scroll_depth', { percent: t }); } catch (e) { }
        }
      }
    };

    // use passive listener for performance
    window.addEventListener('scroll', handler, { passive: true });

    // check on mount
    handler();

    return () => window.removeEventListener('scroll', handler);
  }, []);
}
