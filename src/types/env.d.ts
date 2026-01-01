/// <reference types="next" />

/**
 * Environment Variables Type Definitions
 * This file provides TypeScript type support for environment variables
 */

declare namespace NodeJS {
  interface ProcessEnv {
    // EmailJS Configuration
    NEXT_PUBLIC_EMAILJS_SERVICE_ID?: string;
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?: string;
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?: string;

    // Formspree Configuration (Alternative)
    NEXT_PUBLIC_FORMSPREE_FORM_ID?: string;

    // hCaptcha Configuration
    NEXT_PUBLIC_HCAPTCHA_SITEKEY?: string;

    // PostHog Analytics
    NEXT_PUBLIC_POSTHOG_KEY?: string;
    NEXT_PUBLIC_POSTHOG_HOST?: string;
    NEXT_PUBLIC_POSTHOG_AUTOCAPTURE?: string;
    NEXT_PUBLIC_POSTHOG_CAPTURE_PAGEVIEW?: string;

    // Node environment
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
