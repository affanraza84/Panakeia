import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Enquiry } from "@/models/Enquiry";
import { enquirySchema, isSpamPayload } from "@/lib/validations";
import { enquiryRateLimiter, getClientIp } from "@/lib/rate-limiter";
import { sendEnquiryNotification } from "@/lib/email";
import { sanitizeInput } from "@/lib/sanitize";
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
      const retryAfterSeconds = Math.max(
        1,
        rateLimit.reset - Math.ceil(Date.now() / 1000)
      );

      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiry requests. Please wait a moment before submitting again.",
          code: "RATE_LIMIT_EXCEEDED",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSeconds),
            "X-RateLimit-Limit": String(rateLimit.limit),
            "X-RateLimit-Remaining": String(rateLimit.remaining),
            "X-RateLimit-Reset": String(rateLimit.reset),
          },
        }
      );
    }

    // 2. Parse request JSON body safely
    let rawBody: unknown;
    try {
      rawBody = await request.json();
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

    // 3. Sanitize raw input to prevent NoSQL injection
    const sanitizedBody = sanitizeInput(rawBody);

    // 4. Validate with Zod server-side
    const validationResult = enquirySchema.safeParse(sanitizedBody);
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

    const { hp, formStartTime, ...cleanData } = validationResult.data;

    // 5. Honeypot check (anti-bot defense)
    // If a bot fills the hidden 'hp' field, silently succeed with 200 without saving to DB
    if (hp && hp.trim().length > 0) {
      console.warn(`[Anti-Spam] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json(
        {
          success: true,
          data: { id: "processed" },
        },
        { status: 200 }
      );
    }

    // 6. Form fill time check (reject sub-2-second automated bots)
    if (formStartTime && typeof formStartTime === "number") {
      const elapsedMs = Date.now() - formStartTime;
      if (elapsedMs < 2000) {
        console.warn(
          `[Anti-Spam] Fast-submission bot trapped (${elapsedMs}ms) from IP: ${ip}`
        );
        return NextResponse.json(
          {
            success: true,
            data: { id: "processed" },
          },
          { status: 200 }
        );
      }
    }

    // 7. Spam pattern heuristics
    if (isSpamPayload(cleanData)) {
      console.warn(`[Anti-Spam] Heuristic spam pattern trapped from IP: ${ip}`);
      return NextResponse.json(
        {
          success: true,
          data: { id: "processed" },
        },
        { status: 200 }
      );
    }

    // 8. Connect to MongoDB and save sanitized record
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

    // 9. Dispatch email notification asynchronously (PII safe server-side)
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
    // Log complete error details server-side only
    console.error("[POST /api/enquiries error]:", error);

    // Return strict generic error message to client - never leak database internals or stack traces
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your enquiry. Please try again later or contact our team directly.",
        code: "ENQUIRY_SUBMISSION_FAILED",
      },
      { status: 500 }
    );
  }
}
