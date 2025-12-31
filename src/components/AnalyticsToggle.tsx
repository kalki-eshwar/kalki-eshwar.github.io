import { useEffect, useState } from 'react';
import { getTailwindClass } from '@/presets';
import { Analytics } from '@/utils/analytics';

export default function AnalyticsToggle() {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      const val = window.localStorage.getItem('analytics:opt_out');
      return val !== '1';
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (!enabled) {
        Analytics.optOut();
        window.localStorage.setItem('analytics:opt_out', '1');
      } else {
        Analytics.optIn();
        window.localStorage.removeItem('analytics:opt_out');
      }
    } catch (e) {
      // ignore
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled((s) => !s)}
      className={`text-xs px-3 py-1 rounded ${getTailwindClass('bg-gray-50')} ${getTailwindClass('text-gray-700')} hover:opacity-90`}
    >
      Analytics: {enabled ? 'On' : 'Off'}
    </button>
  );
}
