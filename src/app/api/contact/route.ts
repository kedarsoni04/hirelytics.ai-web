import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendServerlessNotification } from "@/lib/serverless-notifications";

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  category: z.string().min(1, "Inquiry category is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  hp_website: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check for bots
    if (body.hp_website && body.hp_website.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Message received" });
    }

    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await sendServerlessNotification({
      type: "Contact Message",
      subject: `[${validatedData.data.category}] Inbound message from ${validatedData.data.name}`,
      data: {
        Name: validatedData.data.name,
        Email: validatedData.data.email,
        Category: validatedData.data.category,
        Company: validatedData.data.company || "Not specified",
        Message: validatedData.data.message,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Hirelytics. We have received your message and will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("[Contact Submission Error]:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
