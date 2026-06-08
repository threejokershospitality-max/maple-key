import { Resend } from "resend";
import { ContactFormData } from "@/types";
import { siteConfig } from "./config";
import { generateInquiryId } from "./utils";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function sendContactEmails(data: ContactFormData) {
  const resend = getResendClient();
  const inquiryId = generateInquiryId();
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "threejokershospitality@gmail.com";
  const notificationEmail =
    process.env.RESEND_NOTIFICATION_EMAIL ||
    "threejokershospitality@gmail.com";

  const internalHtml = `
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #F7F2E8;">
      <h1 style="color: #1B3B5F; font-size: 24px; margin-bottom: 8px;">New Inquiry Received</h1>
      <p style="color: #D4842C; font-size: 14px; margin-bottom: 24px;">Reference: ${inquiryId}</p>
      <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #6B5E52; width: 140px;">Name</td><td style="padding: 8px 0; color: #2C2118; font-weight: 500;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #6B5E52;">Email</td><td style="padding: 8px 0; color: #2C2118;">${data.email}</td></tr>
          <tr><td style="padding: 8px 0; color: #6B5E52;">Phone</td><td style="padding: 8px 0; color: #2C2118;">${data.phone}</td></tr>
          ${data.propertyInterested ? `<tr><td style="padding: 8px 0; color: #6B5E52;">Property</td><td style="padding: 8px 0; color: #2C2118;">${data.propertyInterested}</td></tr>` : ""}
          ${data.checkInDate ? `<tr><td style="padding: 8px 0; color: #6B5E52;">Check-in</td><td style="padding: 8px 0; color: #2C2118;">${data.checkInDate}</td></tr>` : ""}
          ${data.checkOutDate ? `<tr><td style="padding: 8px 0; color: #6B5E52;">Check-out</td><td style="padding: 8px 0; color: #2C2118;">${data.checkOutDate}</td></tr>` : ""}
          ${data.numberOfGuests ? `<tr><td style="padding: 8px 0; color: #6B5E52;">Guests</td><td style="padding: 8px 0; color: #2C2118;">${data.numberOfGuests}</td></tr>` : ""}
        </table>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E5D9C8;">
          <p style="color: #6B5E52; margin-bottom: 8px;">Message</p>
          <p style="color: #2C2118; line-height: 1.6;">${data.message}</p>
        </div>
      </div>
    </div>
  `;

  const confirmationHtml = `
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #F7F2E8;">
      <h1 style="color: #1B3B5F; font-size: 28px; margin-bottom: 8px;">Thank You, ${data.name}</h1>
      <p style="color: #D4842C; font-size: 14px; margin-bottom: 24px;">Inquiry Reference: ${inquiryId}</p>
      <div style="background: white; padding: 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <p style="color: #2C2118; line-height: 1.8; margin-bottom: 16px;">
          We have received your inquiry and our hospitality team will get back to you within 24 hours.
        </p>
        <p style="color: #2C2118; line-height: 1.8; margin-bottom: 24px;">
          For immediate assistance, feel free to reach us on WhatsApp or call us directly.
        </p>
        <div style="text-align: center; margin-top: 24px;">
          <a href="https://wa.me/${siteConfig.whatsapp}" style="display: inline-block; background: #D4842C; color: #F7F2E8; padding: 12px 32px; border-radius: 4px; text-decoration: none; font-size: 14px;">Chat on WhatsApp</a>
        </div>
      </div>
      <p style="color: #6B6B6B; font-size: 12px; text-align: center; margin-top: 24px;">
        ${siteConfig.name}, ${siteConfig.tagline}
      </p>
    </div>
  `;

  const [internalResult, confirmationResult] = await Promise.all([
    resend.emails.send({
      from: `${siteConfig.name} <${fromEmail}>`,
      to: notificationEmail,
      subject: `New Inquiry ${inquiryId} - ${data.name}`,
      html: internalHtml,
      replyTo: data.email,
    }),
    resend.emails.send({
      from: `${siteConfig.name} <${fromEmail}>`,
      to: data.email,
      subject: `Thank you for your inquiry - ${siteConfig.name}`,
      html: confirmationHtml,
    }),
  ]);

  return {
    inquiryId,
    internal: internalResult,
    confirmation: confirmationResult,
  };
}
