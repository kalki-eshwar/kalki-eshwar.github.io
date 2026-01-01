import { IEmailService } from './types';
import { EmailJSService } from './emailjs.service';
import { FormspreeService } from './formspree.service';

/**
 * Email Service Factory
 * 
 * Returns the configured email service based on environment variables.
 * Priority:
 * 1. EmailJS (if NEXT_PUBLIC_EMAILJS_SERVICE_ID is configured)
 * 2. Formspree (if NEXT_PUBLIC_FORMSPREE_FORM_ID is configured)
 * 
 * To switch services, simply change the environment variables.
 */
export function getEmailService(): IEmailService {
  // Check EmailJS configuration first (current default)
  if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
    return new EmailJSService();
  }
  
  // Fallback to Formspree if configured
  if (process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID) {
    return new FormspreeService();
  }

  // Return EmailJS by default (will show configuration error if not set up)
  return new EmailJSService();
}

// Export types for use in components
export type { EmailMessage, EmailServiceResponse, IEmailService } from './types';
