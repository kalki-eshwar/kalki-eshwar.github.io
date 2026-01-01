import emailjs from '@emailjs/browser';
import { IEmailService, EmailMessage, EmailServiceResponse } from './types';

/**
 * EmailJS implementation of the email service
 * 
 * Required environment variables:
 * - NEXT_PUBLIC_EMAILJS_SERVICE_ID: Your EmailJS service ID
 * - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: Your EmailJS template ID
 * - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: Your EmailJS public key
 */
export class EmailJSService implements IEmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor() {
    this.serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    this.templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    this.publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
  }

  isConfigured(): boolean {
    return !!(this.serviceId && this.templateId && this.publicKey);
  }

  async sendEmail(data: EmailMessage): Promise<EmailServiceResponse> {
    if (!this.isConfigured()) {
      return {
        success: false,
        error: 'EmailJS is not properly configured. Please check your environment variables.',
      };
    }

    try {
      // EmailJS expects template parameters in a specific format
      const templateParams = {
        from_name: data.name,
        from_email: data.email || 'No email provided',
        subject: data.subject,
        message: data.message,
        'g-recaptcha-response': data.captchaToken, // Some EmailJS templates use this field
        captcha_token: data.captchaToken,
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Message sent successfully!',
        };
      } else {
        return {
          success: false,
          error: 'Failed to send message. Please try again.',
        };
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred while sending your message.',
      };
    }
  }
}
