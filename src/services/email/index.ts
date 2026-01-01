import { IEmailService } from './types';
import { EmailJSService } from './emailjs.service';

/**
 * Email Service Factory
 * 
 * Currently the app uses EmailJS for sending messages. To add other providers,
 * implement `IEmailService` and update this factory.
 */
export function getEmailService(): IEmailService {
  return new EmailJSService();
}

// Export types for use in components
export type { EmailMessage, EmailServiceResponse, IEmailService } from './types';
