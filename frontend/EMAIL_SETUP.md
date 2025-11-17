# EmailJS Setup Guide for Contact Form

## Overview
The Contact page now uses **EmailJS** to send emails directly to `support@medora.com` without requiring a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Create an Email Service
1. In the dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the setup instructions to connect your email account
5. Copy your **Service ID** (looks like `service_xxxxx`)

### 3. Create an Email Template
1. In the dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_email}}
Name: {{from_name}}

Message:
{{message}}

---
Reply-to: {{reply_to}}
```

4. Save the template and copy your **Template ID** (looks like `template_xxxxx`)

### 4. Get Your Public Key
1. In the dashboard, go to **Account**
2. Copy your **Public Key** (looks like `xxxxxxxxxxxxx`)

### 5. Add Environment Variables
Create a `.env.local` file in the `frontend/` folder with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace with your actual IDs and keys from steps 2-4.

### 6. Restart Development Server
```bash
npm run dev
```

## How It Works
- User fills out the contact form
- Form data is sent to EmailJS via the `@emailjs/browser` library
- EmailJS forwards the email to your configured email address (`support@medora.com`)
- User receives a confirmation message on the contact page

## Troubleshooting

**"Failed to send message" error?**
- Check that your `.env.local` file has correct keys
- Verify the email service is properly connected in EmailJS dashboard
- Ensure your Gmail account allows "Less Secure Apps" if using Gmail

**Email not arriving?**
- Check your spam/trash folder
- Verify the email template is active in EmailJS
- Check EmailJS activity logs in the dashboard

## Free Tier Limits
- EmailJS free tier allows **200 emails per month**
- For higher volume, consider upgrading to a paid plan

## Testing
To test the form without sending real emails, you can temporarily comment out the EmailJS send call and use the simulated submission instead.

