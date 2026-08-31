import { Resend } from "resend";
import { IEnquiry } from "@/types";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendEnquiryNotification(
  enquiry: IEnquiry
): Promise<{ success: boolean; id?: string }> {
  const recipient = process.env.ENQUIRY_NOTIFICATION_EMAIL || "panakeia.india@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Panakeia Web <enquiries@panakeiamedtech.com>";

  if (!resend) {
    // Note: Do not log PII (names, emails, phone numbers) in plaintext to console/logs
    console.info(
      `[Email Notification Mock] RESEND_API_KEY not configured. Skipping email dispatch. [Enquiry Type: ${enquiry.type}]`
    );
    return { success: true, id: "mock-email-id" };
  }

  try {
    const typeLabels: Record<string, string> = {
      general: "General Clinical & Institutional Enquiry",
      distributor: "Distributor & Channel Partner Application",
      oem: "OEM Manufacturing & Sub-Assembly Partnership",
      "product-enquiry": `Product Specific Quote Request (${enquiry.productSlug || "Device"})`,
    };

    const subject = `[Panakeia MedTech Lead] ${typeLabels[enquiry.type] || "New Enquiry"} - ${enquiry.hospitalOrOrg || "Institutional Inquiry"}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0a2540; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.5px;">Panakeia Medtech Private Limited</h2>
          <p style="margin: 4px 0 0; color: #00c2cb; font-size: 14px;">100% In-House Parts Manufacturing | Critical Care Systems</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <h3 style="color: #0a2540; margin-top: 0;">New Incoming B2B Enquiry</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Enquiry Type:</td>
              <td style="padding: 8px 0; color: #00828a; font-weight: bold;">${typeLabels[enquiry.type] || enquiry.type}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0;">${enquiry.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${enquiry.email}">${enquiry.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${enquiry.phone}">${enquiry.phone}</a></td>
            </tr>
            ${
              enquiry.hospitalOrOrg
                ? `<tr>
                    <td style="padding: 8px 0; font-weight: bold;">Hospital / Org:</td>
                    <td style="padding: 8px 0;">${enquiry.hospitalOrOrg}</td>
                  </tr>`
                : ""
            }
            ${
              enquiry.city
                ? `<tr>
                    <td style="padding: 8px 0; font-weight: bold;">City:</td>
                    <td style="padding: 8px 0;">${enquiry.city}</td>
                  </tr>`
                : ""
            }
            ${
              enquiry.productSlug
                ? `<tr>
                    <td style="padding: 8px 0; font-weight: bold;">Product Slug:</td>
                    <td style="padding: 8px 0;"><strong>${enquiry.productSlug}</strong></td>
                  </tr>`
                : ""
            }
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #00a3ad; border-radius: 4px;">
            <strong style="color: #0f172a; display: block; margin-bottom: 6px;">Message / Specification:</strong>
            <p style="margin: 0; color: #475569; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${enquiry.message}</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 12px; color: #64748b; text-align: center;">
          Panakeia Medtech Pvt. Ltd. • In-House Manufacturing Facility, Visakhapatnam, Andhra Pradesh
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      subject,
      html,
      replyTo: enquiry.email,
    });

    if (error) {
      console.error("[Resend Error]: Failed to send notification email", error.name);
      return { success: false };
    }

    return { success: true, id: data?.id };
  } catch {
    console.error("[Email Notification Error]: Failed to dispatch lead notification email");
    return { success: false };
  }
}
