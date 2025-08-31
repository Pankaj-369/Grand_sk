# EmailJS Setup Guide for The Grand SK Cafe

Follow these simple steps to enable automatic email confirmations for reservations.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or your preferred email provider
4. Follow the connection wizard:
   - For Gmail: You'll need to allow EmailJS access
   - Use the email: **niteshchhabra2001@gmail.com**
5. Name your service (e.g., "grand-sk-emails")
6. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Templates

### Customer Confirmation Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Customer Confirmation"
4. **Copy the Template ID** - you'll need this
5. Paste this content in the template editor:

**Subject:** ✅ Reservation Confirmed - The Grand SK Cafe & Lounge

**Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #d97706, #f59e0b); color: white; padding: 30px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .tagline { font-size: 16px; opacity: 0.9; }
        .content { padding: 30px; }
        .confirmation-box { background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .details-table td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
        .details-table .label { font-weight: bold; color: #374151; width: 40%; }
        .location-box { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .footer { background: #1f2937; color: white; padding: 20px; text-align: center; }
        .button { display: inline-block; background: #d97706; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">☕ The Grand SK</div>
            <div class="tagline">Vibes hotter than your coffee ☕🔥</div>
        </div>
        
        <div class="content">
            <div class="confirmation-box">
                <h2 style="color: #22c55e; margin: 0 0 10px 0;">✅ Reservation Confirmed!</h2>
                <p style="margin: 0;">Thank you {{customer_name}} for choosing The Grand SK!</p>
            </div>
            
            <h3>Your Reservation Details:</h3>
            <table class="details-table">
                <tr><td class="label">Name:</td><td>{{customer_name}}</td></tr>
                <tr><td class="label">Date:</td><td>{{reservation_date}}</td></tr>
                <tr><td class="label">Time:</td><td>{{reservation_time}}</td></tr>
                <tr><td class="label">Guests:</td><td>{{number_of_guests}}</td></tr>
                <tr><td class="label">Contact:</td><td>{{customer_phone}}</td></tr>
            </table>
            
            <div class="location-box">
                <h4 style="color: #d97706; margin: 0 0 10px 0;">📍 Location Details</h4>
                <p style="margin: 0;">
                    <strong>The Grand SK Cafe and Lounge</strong><br>
                    Building No-9 Satya Niketan<br>
                    Moti Bagh, 110021 (South Campus)<br>
                    Nearest Metro: Durgabai Deshmukh<br>
                    Phone: +91 8700560190
                </p>
            </div>
            
            <p>We're excited to welcome you! Our team will contact you shortly to confirm your reservation.</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="tel:+918700560190" class="button">📞 Call Us</a>
                <a href="https://www.instagram.com/thegrand_sk" class="button">📱 Follow Us</a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280;">
                <strong>Important:</strong> Please arrive 10 minutes before your reservation time. For changes or cancellations, call us at least 2 hours in advance.
            </p>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">© 2024 The Grand SK Cafe and Lounge | Founded by Nitesh Chhabra</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">Where every moment becomes a cherished memory</p>
        </div>
    </div>
</body>
</html>
```

### Owner Notification Template
1. Create another template named "Owner Notification"
2. **Copy this Template ID** too
3. Paste this content:

**Subject:** 🔔 New Reservation - {{customer_name}} for {{reservation_date}}

**Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px; }
        .alert-box { background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9fafb; }
        .details-table th, .details-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        .details-table th { background: #374151; color: white; font-weight: bold; }
        .priority { color: #dc2626; font-weight: bold; }
        .action-box { background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px; padding: 15px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0;">🔔 New Reservation Alert</h1>
            <p style="margin: 5px 0 0 0;">The Grand SK Cafe and Lounge</p>
        </div>
        
        <div class="content">
            <div class="alert-box">
                <h2 style="color: #d97706; margin: 0 0 10px 0;">📅 New Table Reservation</h2>
                <p style="margin: 0;">A new reservation has been made through the website.</p>
            </div>
            
            <h3>Customer Details:</h3>
            <table class="details-table">
                <tr><th>Field</th><th>Information</th></tr>
                <tr><td><strong>Customer Name:</strong></td><td>{{customer_name}}</td></tr>
                <tr><td><strong>Email:</strong></td><td>{{customer_email}}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>{{customer_phone}}</td></tr>
                <tr><td><strong>Date:</strong></td><td class="priority">{{reservation_date}}</td></tr>
                <tr><td><strong>Time:</strong></td><td class="priority">{{reservation_time}}</td></tr>
                <tr><td><strong>Guests:</strong></td><td>{{number_of_guests}}</td></tr>
            </table>
            
            <div class="action-box">
                <h4 style="color: #1e40af; margin: 0 0 10px 0;">📋 Action Required:</h4>
                <ul style="margin: 0; padding-left: 20px; color: #1e40af;">
                    <li>Call customer to confirm reservation</li>
                    <li>Check table availability</li>
                    <li>Update reservation system</li>
                    <li>Send special instructions if needed</li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
```

## Step 4: Get Your Credentials
1. Go to "Account" → "General"
2. **Copy your Public Key**
3. You now have:
   - ✅ Public Key
   - ✅ Service ID  
   - ✅ Customer Template ID
   - ✅ Owner Template ID

## Step 5: Update the Website (Final Step)
Replace these values in `src/components/Contact.tsx`:

```javascript
// Line 47: Replace YOUR_PUBLIC_KEY
emailjs.init("your_actual_public_key_here");

// Line 55 & 61: Replace YOUR_SERVICE_ID  
"your_actual_service_id_here"

// Line 56: Replace YOUR_CUSTOMER_TEMPLATE_ID
"your_customer_template_id_here"

// Line 62: Replace YOUR_OWNER_TEMPLATE_ID  
"your_owner_template_id_here"
```

## That's It! 🎉

Once you update those 4 values, the system will automatically:
- ✅ Send beautiful confirmation emails to customers
- ✅ Send notification emails to niteshchhabra2001@gmail.com
- ✅ Show immediate confirmation on screen
- ✅ Handle all formatting and styling automatically

**Free Tier Limits:**
- 200 emails/month (plenty for a cafe)
- No credit card required
- Upgrade available if needed

The email templates are already professionally designed with your cafe branding, location details, and all reservation information beautifully formatted.