import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, message } = await request.json();

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const firstName = name.split(' ')[0];

    // Email A — Internal notification
    await resend.emails.send({
      from: 'Bismark Consulting Group Website <no-reply@bismarkconsulting.net>',
      to: 'info@bismarkconsulting.net',
      subject: `New Contact Form Submission — ${name} (${company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0F1B2D; border-bottom: 2px solid #C5952A; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #0F1B2D; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 12px; color: #333;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 12px; font-weight: bold; color: #0F1B2D; vertical-align: top;">Company</td>
              <td style="padding: 8px 12px; color: #333;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #0F1B2D; vertical-align: top;">Email</td>
              <td style="padding: 8px 12px; color: #333;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 12px; font-weight: bold; color: #0F1B2D; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; color: #333; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    // Email B — Confirmation to submitter
    await resend.emails.send({
      from: 'Bismark Consulting Group <no-reply@bismarkconsulting.net>',
      to: email,
      subject: 'We received your message — Bismark Consulting Group',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #0F1B2D; padding: 24px 32px;">
            <h1 style="color: #C5952A; font-size: 20px; margin: 0; letter-spacing: 2px;">BISMARK</h1>
            <p style="color: #999; font-size: 10px; margin: 2px 0 0; letter-spacing: 4px;">CONSULTING GROUP</p>
          </div>
          <div style="padding: 32px;">
            <p style="color: #0F1B2D; font-size: 16px; line-height: 1.6;">
              ${firstName},
            </p>
            <p style="color: #333; font-size: 15px; line-height: 1.6;">
              Thank you for reaching out. We've received your message and a member of our team will follow up within <strong>24 business hours</strong>.
            </p>
            <p style="color: #333; font-size: 15px; line-height: 1.6;">
              If you'd like to get started sooner, you can schedule a complimentary Walkthrough directly:
            </p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://calendly.com/bismarkconsulting-info/walkthrough"
                 style="background: #C5952A; color: #0F1B2D; padding: 12px 28px; text-decoration: none; font-weight: bold; font-size: 14px; letter-spacing: 1px; display: inline-block;">
                SCHEDULE A WALKTHROUGH
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
            <p style="color: #0F1B2D; font-size: 14px; margin-bottom: 2px;">
              <strong>Luis Telleria-Xucla</strong>
            </p>
            <p style="color: #666; font-size: 13px; margin: 0;">
              Managing Director, Bismark Consulting Group
            </p>
          </div>
          <div style="background: #f5f5f5; padding: 16px 32px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              <a href="mailto:info@bismarkconsulting.net" style="color: #C5952A; text-decoration: none;">info@bismarkconsulting.net</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;Miami, Florida
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
