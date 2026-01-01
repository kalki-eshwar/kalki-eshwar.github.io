# Email Services

This directory contains the email service abstraction layer for the portfolio contact form.

## Architecture

The email service uses the **Strategy Pattern** to allow easy switching between different email providers without changing the contact form code.

### Components

1. **`types.ts`** - Defines interfaces and types used across all email services
2. **`emailjs.service.ts`** - EmailJS implementation
3. **`formspree.service.ts`** - Formspree implementation
4. **`index.ts`** - Factory function that returns the configured service

### How It Works

```typescript
// In your component
import { getEmailService } from '@/services/email';

const emailService = getEmailService(); // Automatically selects configured service

if (emailService.isConfigured()) {
  const result = await emailService.sendEmail({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Hello',
    message: 'Test message',
    captchaToken: 'token_from_hcaptcha'
  });
  
  if (result.success) {
    console.log('Email sent!');
  }
}
```

### Service Selection Priority

1. EmailJS (if `NEXT_PUBLIC_EMAILJS_SERVICE_ID` is set)
2. Formspree (if `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set)
3. Default to EmailJS (will show configuration error)

### Adding New Services

To add a new email service provider:

1. Create a new file: `your-service.service.ts`
2. Implement the `IEmailService` interface:

```typescript
import { IEmailService, EmailMessage, EmailServiceResponse } from './types';

export class YourService implements IEmailService {
  constructor() {
    // Initialize with environment variables
  }

  isConfigured(): boolean {
    // Return true if all required env vars are set
    return !!process.env.NEXT_PUBLIC_YOUR_API_KEY;
  }

  async sendEmail(data: EmailMessage): Promise<EmailServiceResponse> {
    // Your implementation here
    try {
      // Send email using your service's API
      return { success: true, message: 'Email sent!' };
    } catch (error) {
      return { success: false, error: 'Failed to send' };
    }
  }
}
```

3. Update `index.ts` to include your service in the factory:

```typescript
export function getEmailService(): IEmailService {
  if (process.env.NEXT_PUBLIC_YOUR_API_KEY) {
    return new YourService();
  }
  // ... existing checks
}
```

### Benefits

- **Easy switching**: Change providers by updating environment variables
- **Type safety**: TypeScript interfaces ensure all services work the same way
- **Testability**: Services can be mocked easily for testing
- **Maintainability**: Changes to one service don't affect others
- **Extensibility**: Adding new services is straightforward

### Security Considerations

- All email services require hCaptcha verification before sending
- Environment variables are used for credentials (never hardcode)
- Client-side only services (no backend required)
- CORS-friendly services are preferred for static sites

## Documentation

See [EMAIL_SETUP.md](../../docs/EMAIL_SETUP.md) for detailed setup instructions.
