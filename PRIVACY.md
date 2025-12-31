Analytics & Privacy

What we collect (privacy-first):
- Non-identifying, aggregated events only.
- Events collected:
  - `nav_click` — top navigation tabs clicked (label, href)
  - `resume_download` — resume downloads (filename, path)
  - `cta_click` — important CTAs (label)
  - `filter_clicked` — project category filters
  - `project_card_click` — project card opens (title)
  - `project_link_click` — clicks to GitHub / Live Demo (project title, type)
  - `achievement_click` — clicks on achievement entries (title, category)
  - `scroll_depth` — page scroll depth (25/50/75/100%)

How we protect privacy:
- No user identifiers are stored or sent by default (we do not call identify()).
- No cookies or localStorage persistence for analytics (PostHog is initialized with `persistence: 'memory'`).
- Autocapture and session replay are disabled (autocapture: false, capture_pageview: false).
- You can opt-out of capturing via the `Analytics.optOut()` API.
- IP anonymization and additional PII masking should be configured server-side in PostHog or via self-hosted settings.

Migration & abstraction:
- The site uses a thin analytics abstraction in `src/utils/analytics.ts` so the provider can be swapped later with minimal code changes.

If you want, I can add a short privacy paragraph to the site footer or Privacy Policy page summarizing this in user-facing language.