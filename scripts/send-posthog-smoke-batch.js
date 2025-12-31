const { PostHog } = require('posthog-node');
require('dotenv').config({ path: '.env.local' });

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

if (!key) {
  console.error('No NEXT_PUBLIC_POSTHOG_KEY set');
  process.exit(1);
}

const client = new PostHog(key, { apiHost: host });

const events = [
  { event: 'nav_click', properties: { label: 'Projects', href: '/projects' } },
  { event: 'resume_download', properties: { filename: 'Kalki_Eshwar_Resume.pdf', path: '/documents/Resume.pdf' } },
  { event: 'cta_click', properties: { label: 'get_in_touch_home' } },
  { event: 'filter_clicked', properties: { category: 'Web Development' } },
  { event: 'project_card_click', properties: { title: 'Portfolio Website' } },
  { event: 'project_link_click', properties: { project: 'Portfolio Website', type: 'github' } },
  { event: 'achievement_click', properties: { title: 'Karnataka U-1700 State Amateur Chess Champion', category: 'Sports' } },
  { event: 'scroll_depth', properties: { percent: 50 } },
];

(async () => {
  try {
    for (const ev of events) {
      await client.capture({ distinctId: 'smoke-test-batch', event: ev.event, properties: ev.properties });
      console.log('Sent', ev.event);
    }
    console.log('Batch sent');
  } catch (err) {
    console.error('Send failed', err);
  } finally {
    client.shutdown();
  }
})();
