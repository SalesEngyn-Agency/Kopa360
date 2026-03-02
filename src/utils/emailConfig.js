// EmailJS configuration
// You'll need to:
// 1. Sign up at https://www.emailjs.com (free)
// 2. Create a service (Gmail recommended)
// 3. Create an email template
// 4. Replace the values below with your actual IDs

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',       // e.g. 'service_abc123'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',       // e.g. 'user_abc123xyz'
  TEMPLATES: {
    TUTOR_APPLICATION: 'YOUR_TUTOR_TEMPLATE_ID',     // e.g. 'template_abc123'
    PARENT_REQUEST: 'YOUR_PARENT_TEMPLATE_ID',
    SKILLZ_WAITLIST: 'YOUR_SKILLZ_TEMPLATE_ID',
    NETWORK_PARTNER: 'YOUR_NETWORK_TEMPLATE_ID',
    CONTACT: 'YOUR_CONTACT_TEMPLATE_ID',
  }
}

// NOTE: Until EmailJS is configured, forms will log to console.
// To set up EmailJS:
// 1. Go to emailjs.com and create a free account
// 2. Add a Gmail service and connect sundaydigitals@gmail.com
// 3. Create one template per form type
// 4. Replace the placeholder values above
