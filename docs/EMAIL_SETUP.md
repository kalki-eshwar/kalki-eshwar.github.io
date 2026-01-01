# Email Service Configuration

This portfolio uses an abstraction layer for email services, allowing you to easily switch between different providers without changing the code.

## Currently Supported Services

1. **EmailJS** (Primary/Default)
2. **Formspree** (Alternative)

## Setting Up EmailJS (Recommended)

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Configure Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `abc123XYZ`)

### 5. Set Environment Variables

Create or update your `.env.local` file:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123XYZ

# hCaptcha Configuration (already set)
NEXT_PUBLIC_HCAPTCHA_SITEKEY=your_hcaptcha_site_key
```

### 6. Testing

1. Restart your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and complete the hCaptcha
4. Submit and check your configured email inbox

## Alternative: Setting Up Formspree

If you prefer to use Formspree instead:

### 1. Create a Formspree Account

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account

### 2. Create a Form

1. In your dashboard, click **New Form**
2. Give it a name (e.g., "Portfolio Contact Form")
3. Copy the **Form ID** (e.g., `abc123xyz`)

### 3. Set Environment Variables

Update your `.env.local` file:

```bash
# Formspree Configuration (remove or comment out EmailJS vars)
NEXT_PUBLIC_FORMSPREE_FORM_ID=abc123xyz

# hCaptcha Configuration
NEXT_PUBLIC_HCAPTCHA_SITEKEY=your_hcaptcha_site_key
```

The system will automatically detect Formspree configuration and use it instead of EmailJS.

## Switching Between Services

The email service is automatically selected based on environment variables:

1. **EmailJS** is used if `NEXT_PUBLIC_EMAILJS_SERVICE_ID` is set
2. **Formspree** is used if EmailJS is not configured but `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set

To switch services, simply update your environment variables and restart the dev server.

## Adding a New Email Service

To add support for another email service (e.g., SendGrid, AWS SES):

1. Create a new service file in `src/services/email/`:

```typescript
// src/services/email/your-service.service.ts
import { IEmailService, EmailMessage, EmailServiceResponse } from './types';

export class YourService implements IEmailService {
  isConfigured(): boolean {
    // Check if environment variables are set
    return !!process.env.NEXT_PUBLIC_YOUR_SERVICE_KEY;
  }

  async sendEmail(data: EmailMessage): Promise<EmailServiceResponse> {
    // Implement your service logic here
  }
}
```

2. Update `src/services/email/index.ts` to include your service:

```typescript
import { YourService } from './your-service.service';

export function getEmailService(): IEmailService {
  // Add your service check
  if (process.env.NEXT_PUBLIC_YOUR_SERVICE_KEY) {
    return new YourService();
  }
  
  // ... existing checks
}
```

## Security Notes

- **Never commit `.env.local` to version control** - it's already in `.gitignore`
- For production (GitHub Pages), you'll need to use GitHub Secrets or another method to inject environment variables during the build process
- hCaptcha verification is required before any email can be sent, protecting against spam
- The abstraction layer keeps your email service credentials separate from your form logic

## Troubleshooting

### "Email service is not configured"
- Check that your environment variables are set in `.env.local`
- Restart your development server after adding environment variables

### Emails not sending
- Verify all environment variables are correct
- Check the browser console for error messages
- Ensure hCaptcha is completed before submission
- For EmailJS: Verify your email service is connected in the EmailJS dashboard

### hCaptcha not loading
- Ensure `NEXT_PUBLIC_HCAPTCHA_SITEKEY` is set
- Check your internet connection
- Verify the hCaptcha site key is valid

## Production Deployment

For static exports (like GitHub Pages), you need to inject environment variables at build time:

1. Set the variables in your CI/CD environment (GitHub Secrets)
2. Build with: `NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx npm run build`
3. Or use a build script that reads from a secure source
