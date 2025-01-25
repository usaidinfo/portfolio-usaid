// app/api/subscribe/route.ts
import { Resend } from 'resend';

const resend = new Resend('re_azabiei2_4hFFbuLFbxtkJPZ7gqAEddCw');

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { email } = body;
  
      const { data, error } = await resend.emails.send({
        from: 'Usaid Portfolio <onboarding@resend.dev>',
        to: 'm.41usaid@gmail.com',
        subject: 'New Newsletter Subscription',
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Newsletter Subscription</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    
    <!-- Main Container -->
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <!-- Header -->
        <tr>
            <td style="padding: 30px; background: linear-gradient(135deg, #2563eb, #3b82f6); border-radius: 8px 8px 0 0; text-align: center;">
                <h1 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">
                    <img src="[Your-Logo-URL]" alt="Company Logo" style="height: 40px; vertical-align: middle;">
                    Welcome to [Company Name]
                </h1>
            </td>
        </tr>

        <!-- Content -->
        <tr>
            <td style="padding: 40px 30px;">
                <h2 style="margin: 0 0 25px 0; color: #1f2937; font-size: 20px;">
                    🎉 Thanks for subscribing!
                </h2>
                
                <p style="color: #4b5563; line-height: 1.6; margin-bottom: 30px;">
                    We're excited to have you on board. You'll now receive our latest updates, 
                    exclusive content, and special offers directly in your inbox.
                </p>

                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-bottom: 30px;">
                    <p style="margin: 0; color: #1f2937;">
                        <strong>Registered Email:</strong><br>
                        <span style="color: #3b82f6; font-size: 16px;">${email}</span>
                    </p>
                </div>

                <p style="color: #4b5563; line-height: 1.6;">
                    <strong>What to expect:</strong>
                    <ul style="color: #4b5563; padding-left: 20px;">
                        <li>Weekly industry insights</li>
                        <li>Exclusive member offers</li>
                        <li>Early access to new features</li>
                        <li>Curated content just for you</li>
                    </ul>
                </p>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="padding: 25px 30px; background-color: #f9fafb; border-radius: 0 0 8px 8px; text-align: center;">
                <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
                    <p style="color: #6b7280; font-size: 12px; margin: 10px 0;">
                        You received this email because you signed up for updates from [Company Name].<br>
                        <a href="#" style="color: #3b82f6; text-decoration: none;">Unsubscribe</a> | 
                        <a href="#" style="color: #3b82f6; text-decoration: none;">View in Browser</a> | 
                        <a href="#" style="color: #3b82f6; text-decoration: none;">Privacy Policy</a>
                    </p>
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        © 2024 [Company Name]. All rights reserved.<br>
                        [Company Address]<br>
                        [City, State, ZIP Code]
                    </p>
                </div>
            </td>
        </tr>
    </table>

    <!-- Social Media Links -->
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; text-align: center;">
        <tr>
            <td>
                <a href="#" style="margin: 0 10px; display: inline-block;">
                    <img src="facebook-icon.png" alt="Facebook" style="height: 24px;">
                </a>
                <a href="#" style="margin: 0 10px; display: inline-block;">
                    <img src="twitter-icon.png" alt="Twitter" style="height: 24px;">
                </a>
                <a href="#" style="margin: 0 10px; display: inline-block;">
                    <img src="instagram-icon.png" alt="Instagram" style="height: 24px;">
                </a>
                <a href="#" style="margin: 0 10px; display: inline-block;">
                    <img src="linkedin-icon.png" alt="LinkedIn" style="height: 24px;">
                </a>
            </td>
        </tr>
    </table>

</body>
</html>
        `
      });
  
      if (error) {
        return Response.json({ error });
      }
  
      return Response.json({ success: true, data });
    } catch (error) {
      return Response.json({ error: 'Error sending email' }, { status: 500 });
    }
  }