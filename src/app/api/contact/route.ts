import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmails } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  propertyInterested: z.string().optional(),
  checkInDate: z.string().optional(),
  checkOutDate: z.string().optional(),
  numberOfGuests: z.coerce.number().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission (Resend not configured):", data);
      return NextResponse.json({
        success: true,
        inquiryId: `MK-DEV-${Date.now()}`,
        message: "Inquiry received. We will contact you shortly.",
      });
    }

    const result = await sendContactEmails(data);

    return NextResponse.json({
      success: true,
      inquiryId: result.inquiryId,
      message: "Thank you! We have received your inquiry and will respond within 24 hours.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send inquiry. Please try calling us directly." },
      { status: 500 }
    );
  }
}
