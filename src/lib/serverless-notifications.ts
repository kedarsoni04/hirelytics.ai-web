/**
 * Serverless notification helper for backend-free forms.
 * Handles logging and optional email delivery (via Resend REST API)
 * with zero required third-party SDK dependencies.
 */

interface SendNotificationOptions {
  type: "Lead / Demo Request" | "Contact Message" | "Newsletter Subscription";
  subject: string;
  data: Record<string, string | number | undefined | null>;
}

export async function sendServerlessNotification({
  type,
  subject,
  data,
}: SendNotificationOptions): Promise<{ success: boolean; forwardedViaEmail: boolean }> {
  const timestamp = new Date().toISOString();

  // 1. Always log structured data in serverless stdout / logs
  console.log(`\n========================================`);
  console.log(`📬 [Hirelytics Submission] - ${type}`);
  console.log(`⏰ Time: ${timestamp}`);
  console.log(`📝 Details:`, JSON.stringify(data, null, 2));
  console.log(`========================================\n`);

  // 2. If RESEND_API_KEY is configured, forward an email notification to the team
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "hirelytics.ai@gmail.com";

  if (resendApiKey) {
    try {
      const emailBody = Object.entries(data)
        .filter(([_, v]) => v !== undefined && v !== null && v !== "")
        .map(([k, v]) => `<strong>${k}:</strong> ${v}`)
        .join("<br/>");

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hirelytics Forms <onboarding@resend.dev>",
          to: [toEmail],
          subject: `[Hirelytics ${type}] ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e3e8f7; border-radius: 12px;">
              <h2 style="color: #0B1250; margin-bottom: 8px;">New ${type}</h2>
              <p style="color: #4B5578; font-size: 14px; margin-top: 0;">Received at: ${timestamp}</p>
              <hr style="border: 0; border-top: 1px solid #e3e8f7; margin: 16px 0;" />
              <div style="font-size: 14px; line-height: 1.6; color: #0B1250;">
                ${emailBody}
              </div>
              <hr style="border: 0; border-top: 1px solid #e3e8f7; margin: 16px 0;" />
              <p style="font-size: 12px; color: #9CA5C2;">This is an automated notification from Hirelytics.ai forms.</p>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return { success: true, forwardedViaEmail: true };
      } else {
        console.warn(`[Notification Warning] Resend returned status ${res.status}`);
      }
    } catch (err) {
      console.error("[Notification Error] Failed to send via email provider:", err);
    }
  }

  return { success: true, forwardedViaEmail: false };
}
