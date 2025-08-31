// Email templates for reservation confirmations
// These templates can be used with EmailJS or any email service

export const customerConfirmationTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservation Confirmation - The Grand SK</title>
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #d97706, #f59e0b); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .tagline { font-size: 16px; opacity: 0.9; }
        .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
        .confirmation-box { background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .details-table td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
        .details-table .label { font-weight: bold; color: #374151; width: 40%; }
        .location-box { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .footer { background: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
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
                <p style="margin: 0;">Thank you {{customer_name}} for choosing The Grand SK Cafe and Lounge!</p>
            </div>
            
            <h3>Your Reservation Details:</h3>
            <table class="details-table">
                <tr>
                    <td class="label">Name:</td>
                    <td>{{customer_name}}</td>
                </tr>
                <tr>
                    <td class="label">Date:</td>
                    <td>{{reservation_date}}</td>
                </tr>
                <tr>
                    <td class="label">Time:</td>
                    <td>{{reservation_time}}</td>
                </tr>
                <tr>
                    <td class="label">Guests:</td>
                    <td>{{number_of_guests}}</td>
                </tr>
                <tr>
                    <td class="label">Contact:</td>
                    <td>{{customer_phone}}</td>
                </tr>
            </table>
            
            <div class="location-box">
                <h4 style="color: #d97706; margin: 0 0 10px 0;">📍 Location Details</h4>
                <p style="margin: 0;">
                    <strong>{{cafe_name}}</strong><br>
                    {{cafe_address}}<br>
                    Nearest Metro: Durgabai Deshmukh<br>
                    Phone: {{cafe_phone}}
                </p>
            </div>
            
            <p>We're excited to welcome you to The Grand SK! Our team will contact you shortly to confirm your reservation.</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="tel:{{cafe_phone}}" class="button">📞 Call Us</a>
                <a href="https://www.instagram.com/thegrand_sk" class="button">📱 Follow Us</a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280;">
                <strong>Important:</strong> Please arrive 10 minutes before your reservation time. For any changes or cancellations, please call us at least 2 hours in advance.
            </p>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">© 2024 The Grand SK Cafe and Lounge | Founded by Nitesh Chhabra</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">Where every moment becomes a cherished memory</p>
        </div>
    </div>
</body>
</html>
`;

export const ownerNotificationTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Reservation - The Grand SK</title>
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
        .alert-box { background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9fafb; }
        .details-table th, .details-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        .details-table th { background: #374151; color: white; font-weight: bold; }
        .footer { background: #1f2937; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px; }
        .priority { color: #dc2626; font-weight: bold; }
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
                <p style="margin: 0;">A new reservation has been made through the website. Please review and confirm with the customer.</p>
            </div>
            
            <h3>Customer Details:</h3>
            <table class="details-table">
                <tr>
                    <th>Field</th>
                    <th>Information</th>
                </tr>
                <tr>
                    <td><strong>Customer Name:</strong></td>
                    <td>{{customer_name}}</td>
                </tr>
                <tr>
                    <td><strong>Email:</strong></td>
                    <td>{{customer_email}}</td>
                </tr>
                <tr>
                    <td><strong>Phone:</strong></td>
                    <td>{{customer_phone}}</td>
                </tr>
                <tr>
                    <td><strong>Date:</strong></td>
                    <td class="priority">{{reservation_date}}</td>
                </tr>
                <tr>
                    <td><strong>Time:</strong></td>
                    <td class="priority">{{reservation_time}}</td>
                </tr>
                <tr>
                    <td><strong>Number of Guests:</strong></td>
                    <td>{{number_of_guests}}</td>
                </tr>
            </table>
            
            <div style="background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h4 style="color: #1e40af; margin: 0 0 10px 0;">📋 Action Required:</h4>
                <ul style="margin: 0; padding-left: 20px; color: #1e40af;">
                    <li>Call the customer to confirm the reservation</li>
                    <li>Check table availability for the requested time</li>
                    <li>Update your reservation system</li>
                    <li>Send any special instructions if needed</li>
                </ul>
            </div>
            
            <p style="font-size: 14px; color: #6b7280;">
                <strong>Note:</strong> This reservation was submitted through the website contact form. Please contact the customer within 2 hours to confirm availability and finalize the booking.
            </p>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">The Grand SK Management System</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">This is an automated notification from your website</p>
        </div>
    </div>
</body>
</html>
`;

// EmailJS configuration instructions
export const emailJSSetupInstructions = `
To enable email confirmations, follow these steps:

1. Create an EmailJS account at https://www.emailjs.com/
2. Create a new service (Gmail, Outlook, etc.)
3. Create two email templates:
   - Customer confirmation template (use customerConfirmationTemplate)
   - Owner notification template (use ownerNotificationTemplate)
4. Get your:
   - Public Key
   - Service ID
   - Template IDs
5. Replace the placeholder values in Contact.tsx:
   - YOUR_PUBLIC_KEY
   - YOUR_SERVICE_ID
   - customer_confirmation (template ID)
   - owner_notification (template ID)
6. Uncomment the sendEmails function call in handleSubmit

Template variables to use in EmailJS:
- {{customer_name}}
- {{customer_email}}
- {{customer_phone}}
- {{reservation_date}}
- {{reservation_time}}
- {{number_of_guests}}
- {{cafe_name}}
- {{cafe_address}}
- {{cafe_phone}}
- {{owner_email}}
`;