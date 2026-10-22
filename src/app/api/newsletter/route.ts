import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendServerlessNotification } from "@/lib/serverless-notifications";

const newsletterSchema = z.object({
  email: z.string().email("Valid email address is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = newsletterSchema.safeParse(body);

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
      type: "Newsletter Subscription",
      subject: `New Research Briefing subscriber: ${validatedData.data.email}`,
      data: {
        Email: validatedData.data.email,
        SubscribedAt: new Date().toISOString(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "You're subscribed! Welcome to the Hirelytics research briefing.",
    });
  } catch (error) {
    console.error("[Newsletter Subscription Error]:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
