const { PostHog } = require('posthog-node');
require('dotenv').config({ path: '.env.local' });

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

if (!key) {
  console.error('No NEXT_PUBLIC_POSTHOG_KEY set');
  process.exit(1);
}

const client = new PostHog(key, { apiHost: host });

(async () => {
  try {
    await client.capture({
      distinctId: 'smoke-test-server',
      event: 'smoke_test_event',
      properties: { note: 'Server-side smoke test from repo automation' },
    });
    console.log('Smoke test event sent');
  } catch (err) {
    console.error('Send failed', err);
    process.exit(2);
  } finally {
    client.shutdown();
  }
})();
