import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  work_email: z.string().email("Valid work email is required"),
  company: z.string().min(2, "Company name is required"),
  role: z.string().min(2, "Role is required"),
  company_size: z.string().min(1, "Company size is required"),
  hires_per_year: z.string().min(1, "Hires per year is required"),
  message: z.string().optional(),
  hp_website: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check for bots
    if (body.hp_website && body.hp_website.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Demo request received" });
    }

    const validatedData = leadSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // In production, forward to CRM, email service (e.g. Resend, Sendgrid) or database
    console.log("[Lead Captured]:", {
      name: validatedData.data.name,
      email: validatedData.data.work_email,
      company: validatedData.data.company,
      role: validatedData.data.role,
      company_size: validatedData.data.company_size,
      hires_per_year: validatedData.data.hires_per_year,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Demo request received successfully. Our team will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("[Lead Submission Error]:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
