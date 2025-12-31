const { PostHog } = require('posthog-node');
require('dotenv').config({ path: '.env.local' });

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

if (!key) {
  console.error('No NEXT_PUBLIC_POSTHOG_KEY set');
  process.exit(1);
}

const client = new PostHog(key, { apiHost: host });
const testId = `test_${Date.now()}`;

(async () => {
  try {
    await client.capture({
      distinctId: testId,
      event: 'smoke_test_unique',
      properties: { note: 'Unique smoke test', testId },
    });
    console.log('Unique smoke test event sent:', testId);
  } catch (err) {
    console.error('Send failed', err);
    process.exit(2);
  } finally {
    client.shutdown();
  }
})();
