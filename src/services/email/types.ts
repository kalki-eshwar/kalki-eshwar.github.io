/**
 * Email Service Abstraction Layer
 * This allows easy switching between different email service providers
 */

export interface EmailMessage {
  name: string;
  email?: string;
  subject: string;
  message: string;
  // captchaToken is optional on the client payload; server-side verification can be used if required
  captchaToken?: string;
}

export interface EmailServiceResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface IEmailService {
  /**
   * Send an email using the configured service
   * @param data The email message data
   * @returns Promise with success status and optional message
   */
  sendEmail(data: EmailMessage): Promise<EmailServiceResponse>;
  
  /**
   * Validate the service configuration
   * @returns true if the service is properly configured
   */
  isConfigured(): boolean;
}
