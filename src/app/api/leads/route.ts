import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendServerlessNotification } from "@/lib/serverless-notifications";

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

    // Serverless logging & optional email notification
    await sendServerlessNotification({
      type: "Lead / Demo Request",
      subject: `Demo Request from ${validatedData.data.name} (${validatedData.data.company})`,
      data: {
        Name: validatedData.data.name,
        "Work Email": validatedData.data.work_email,
        Company: validatedData.data.company,
        Role: validatedData.data.role,
        "Company Size": validatedData.data.company_size,
        "Expected Hires / Year": validatedData.data.hires_per_year,
        Message: validatedData.data.message || "None",
      },
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
