    // app/api/contact/route.ts
    import { Resend } from 'resend';

    const resend = new Resend('re_azabiei2_4hFFbuLFbxtkJPZ7gqAEddCw');

    export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, interest, message } = body;

        const { data, error } = await resend.emails.send({
        from: 'You Got An Interaction <onboarding@resend.dev>',
        to: 'm.41usaid@gmail.com',
        subject: `Your Portfolio Got An interaction - ${interest}`,
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Portfolio Contact</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: Arial, sans-serif;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f6f9fc">
              <tr>
                <td style="padding: 40px 0;">
                  <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                      <td style="padding: 40px 30px; background-color: #1a1a1a; border-radius: 10px 10px 0 0;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Portfolio Interaction</h1>
                        <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">Someone is interested in your work!</p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="padding-bottom: 30px;">
                              <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 20px;">Contact Details</h2>
                              
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 8px; margin-bottom: 20px;">
                                <tr>
                                  <td style="padding: 20px;">
                                    <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Name:</strong> <span style="color: #1a1a1a;">${firstName} ${lastName}</span></p>
                                    <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Email:</strong> <span style="color: #1a1a1a;">${email}</span></p>
                                    <p style="margin: 0;"><strong style="color: #4b5563;">Interest:</strong> <span style="color: #1a1a1a; background-color: #e5e7eb; padding: 4px 10px; border-radius: 15px; font-size: 14px;">${interest}</span></p>
                                  </td>
                                </tr>
                              </table>
                              
                              <h2 style="color: #1a1a1a; margin: 30px 0 20px 0; font-size: 20px;">Message</h2>
                              <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                                <p style="margin: 0; color: #1a1a1a; line-height: 1.6;">${message}</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; background-color: #f8fafc; border-radius: 0 0 10px 10px; border-top: 1px solid #e5e7eb;">
                        <p style="margin: 0; color: #6b7280; font-size: 14px; text-align: center;">
                          This message was sent from your portfolio contact form.<br>
                          © ${new Date().getFullYear()} Usaid Mustafa Portfolio
                        </p>
                      </td>
                    </tr>
                  </table>
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