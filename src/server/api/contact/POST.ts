import 'dotenv/config';
import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export default async function handler(req: Request, res: Response) {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log('✅ SMTP Connected Successfully');

    await transporter.sendMail({
      from: `"BlueDots Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Enquiry from ${name} — ${service || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">
          <h2 style="color:#2563eb;">New Contact Form Submission</h2>

          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="border:1px solid #ddd;padding:8px;"><strong>Name</strong></td>
              <td style="border:1px solid #ddd;padding:8px;">${name}</td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd;padding:8px;"><strong>Email</strong></td>
              <td style="border:1px solid #ddd;padding:8px;">${email}</td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd;padding:8px;"><strong>Phone</strong></td>
              <td style="border:1px solid #ddd;padding:8px;">${phone || 'N/A'}</td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd;padding:8px;"><strong>Company</strong></td>
              <td style="border:1px solid #ddd;padding:8px;">${company || 'N/A'}</td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd;padding:8px;"><strong>Service</strong></td>
              <td style="border:1px solid #ddd;padding:8px;">${service || 'General Inquiry'}</td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd;padding:8px;"><strong>Message</strong></td>
              <td style="border:1px solid #ddd;padding:8px;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Message received successfully. We will contact you soon.',
    });
  } catch (error: any) {
    console.error('❌ Contact form error:', error);

    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email.',
    });
  }
}