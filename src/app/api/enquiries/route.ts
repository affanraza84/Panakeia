import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Enquiry } from "@/models/Enquiry";
import { enquirySchema } from "@/lib/validations";
import { enquiryRateLimiter, getClientIp } from "@/lib/rate-limiter";
import { sendEnquiryNotification } from "@/lib/email";
import { ApiResponse } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<{ id?: string }>>> {
  try {
    // 1. Extract IP & verify Rate Limit (5 req/min per IP)
    const ip = getClientIp(request);
    const rateLimit = enquiryRateLimiter.check(ip);

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiry requests. Please wait before submitting again.",
          code: "RATE_LIMIT_EXCEEDED",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.max(1, rateLimit.reset - Math.ceil(Date.now() / 1000))),
            "X-RateLimit-Limit": String(rateLimit.limit),
            "X-RateLimit-Remaining": String(rateLimit.remaining),
            "X-RateLimit-Reset": String(rateLimit.reset),
          },
        }
      );
    }

    // 2. Parse request JSON body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON payload provided",
          code: "INVALID_JSON",
        },
        { status: 400 }
      );
    }

    // 3. Validate with Zod
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const firstErrorMessage =
        validationResult.error.issues[0]?.message || "Validation failed";

      return NextResponse.json(
        {
          success: false,
          error: firstErrorMessage,
          code: "VALIDATION_FAILED",
          details: fieldErrors as Record<string, string[]>,
        },
        { status: 400 }
      );
    }

    const { hp, ...cleanData } = validationResult.data;

    // 4. Honeypot check (anti-spam bot trap)
    // If a bot fills the hidden 'hp' field, silently succeed with 200 without saving to DB
    if (hp && hp.trim().length > 0) {
      console.warn(`[Honeypot Triggered] Bot submission trapped from IP: ${ip}`);
      return NextResponse.json(
        {
          success: true,
          error: undefined,
          data: { id: "processed" },
        },
        { status: 200 }
      );
    }

    // 5. Connect to MongoDB and save
    await connectToDatabase();

    const enquiryDoc = await Enquiry.create({
      name: cleanData.name,
      email: cleanData.email,
      phone: cleanData.phone,
      hospitalOrOrg: cleanData.hospitalOrOrg || undefined,
      city: cleanData.city || undefined,
      message: cleanData.message,
      type: cleanData.type,
      productSlug: cleanData.productSlug || undefined,
      status: "new",
      createdAt: new Date(),
    });

    // 6. Dispatch email notification asynchronously
    void sendEnquiryNotification(enquiryDoc.toObject());

    return NextResponse.json(
      {
        success: true,
        data: {
          id: enquiryDoc._id.toString(),
        },
      },
      {
        status: 201,
        headers: {
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[POST /api/enquiries error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: message,
        code: "ENQUIRY_SUBMISSION_FAILED",
      },
      { status: 500 }
    );
  }
}
