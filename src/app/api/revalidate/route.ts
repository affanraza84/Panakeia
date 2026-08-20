import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const secretHeader =
    request.headers.get("x-revalidate-secret") ||
    request.headers.get("authorization")?.replace("Bearer ", "");

  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret || secretHeader !== expectedSecret) {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized: Invalid or missing revalidation token",
        code: "UNAUTHORIZED",
      },
      { status: 401 }
    );
  }

  try {
    const body = (await request.json().catch(() => ({}))) as {
      path?: string;
      tag?: string;
    };

    if (body.path) {
      revalidatePath(body.path);
      return NextResponse.json({
        success: true,
        revalidated: true,
        path: body.path,
        now: Date.now(),
      });
    }

    if (body.tag) {
      revalidateTag(body.tag, "max");
      return NextResponse.json({
        success: true,
        revalidated: true,
        tag: body.tag,
        now: Date.now(),
      });
    }

    // Default revalidate all major routes if nothing specified
    revalidatePath("/", "layout");

    return NextResponse.json({
      success: true,
      revalidated: true,
      scope: "all-pages",
      now: Date.now(),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Revalidation failed";
    return NextResponse.json(
      {
        success: false,
        error: message,
        code: "REVALIDATION_FAILED",
      },
      { status: 500 }
    );
  }
}
