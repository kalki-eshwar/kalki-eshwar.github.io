import { IEmailService, EmailMessage, EmailServiceResponse } from './types';

/**
 * Formspree implementation of the email service (alternative to EmailJS)
 * 
 * Required environment variables:
 * - NEXT_PUBLIC_FORMSPREE_FORM_ID: Your Formspree form ID
 */
export class FormspreeService implements IEmailService {
  private formId: string;

  constructor() {
    this.formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || '';
  }

  isConfigured(): boolean {
    return !!this.formId;
  }

  async sendEmail(data: EmailMessage): Promise<EmailServiceResponse> {
    if (!this.isConfigured()) {
      return {
        success: false,
        error: 'Formspree is not properly configured. Please check your environment variables.',
      };
    }

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email || '');
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('h-captcha-response', data.captchaToken);

      const response = await fetch(`https://formspree.io/f/${this.formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Message sent successfully!',
        };
      } else {
        const errorData = await response.json().catch(() => ({}));
        return {
          success: false,
          error: errorData.error || 'Failed to send message. Please try again.',
        };
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred while sending your message.',
      };
    }
  }
}
