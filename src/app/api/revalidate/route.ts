import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { timingSafeEqual } from "crypto";
import { revalidateRateLimiter, getClientIp } from "@/lib/rate-limiter";
import { revalidateSchema } from "@/lib/validations";
import { sanitizeInput } from "@/lib/sanitize";

export const dynamic = "force-dynamic";

function safeCompareSecrets(a: string, b: string): boolean {
  try {
    const bufferA = Buffer.from(a, "utf-8");
    const bufferB = Buffer.from(b, "utf-8");
    if (bufferA.length !== bufferB.length) {
      return false;
    }
    return timingSafeEqual(bufferA, bufferB);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  // 1. Rate limiting check
  const ip = getClientIp(request);
  const rateLimit = revalidateRateLimiter.check(ip);

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many revalidation requests. Please wait.",
        code: "RATE_LIMIT_EXCEEDED",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.max(1, rateLimit.reset - Math.ceil(Date.now() / 1000))),
        },
      }
    );
  }

  // 2. Secret authentication check with constant-time comparison
  const secretHeader =
    request.headers.get("x-revalidate-secret") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret || !secretHeader || !safeCompareSecrets(secretHeader, expectedSecret)) {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized: Invalid or missing revalidation credentials",
        code: "UNAUTHORIZED",
      },
      { status: 401 }
    );
  }

  try {
    const rawBody = (await request.json().catch(() => ({}))) as unknown;
    const sanitizedBody = sanitizeInput(rawBody);

    const validationResult = revalidateSchema.safeParse(sanitizedBody);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid revalidation parameters",
          code: "INVALID_PARAMETERS",
        },
        { status: 400 }
      );
    }

    const { path, tag } = validationResult.data;

    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        success: true,
        revalidated: true,
        path,
        now: Date.now(),
      });
    }

    if (tag) {
      revalidateTag(tag, "max");
      return NextResponse.json({
        success: true,
        revalidated: true,
        tag,
        now: Date.now(),
      });
    }

    // Default revalidate all major routes if no path/tag specified
    revalidatePath("/", "layout");

    return NextResponse.json({
      success: true,
      revalidated: true,
      scope: "all-pages",
      now: Date.now(),
    });
  } catch (error: unknown) {
    console.error("[POST /api/revalidate error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Revalidation operation failed",
        code: "REVALIDATION_FAILED",
      },
      { status: 500 }
    );
  }
}
