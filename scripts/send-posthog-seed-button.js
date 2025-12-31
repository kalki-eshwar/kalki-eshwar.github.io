const { PostHog } = require('posthog-node');
require('dotenv').config({ path: '.env.local' });

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

if (!key) {
  console.error('No NEXT_PUBLIC_POSTHOG_KEY set');
  process.exit(1);
}

const client = new PostHog(key, { apiHost: host });

const sample = [
  { label: 'download_resume', section: 'hero' },
  { label: 'get_in_touch_home', section: 'hero' },
  { label: 'project_card_Portfolio Website', section: 'projects' },
  { label: 'project_link_github_Portfolio Website', section: 'projects' },
  { label: 'achievement_karnataka', section: 'achievements' },
];

(async () => {
  try {
    for (const ev of sample) {
      for (let i = 0; i < 3; i++) {
        await client.capture({ distinctId: `seed_button_${i}`, event: 'button_click', properties: { label: ev.label, section: ev.section } });
      }
    }
    console.log('Seeded button_click events');
  } catch (err) {
    console.error('Seed send failed', err);
  } finally {
    client.shutdown();
  }
})();
