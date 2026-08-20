import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Client } from "@/models/Client";
import { clientQuerySchema } from "@/lib/validations";
import { sanitizeInput } from "@/lib/sanitize";
import { ApiResponse, IClient } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<IClient[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const rawFeatured = searchParams.get("featured") || undefined;

    const parseResult = clientQuerySchema.safeParse({ featured: rawFeatured });
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid featured filter parameter",
          code: "INVALID_FILTER",
        },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const query: Record<string, unknown> = {};
    if (parseResult.data.featured === "true") {
      query.featured = true;
    } else if (parseResult.data.featured === "false") {
      query.featured = false;
    }

    const sanitizedQuery = sanitizeInput(query);

    const clients = await Client.find(sanitizedQuery)
      .sort({ featured: -1, createdAt: -1 })
      .lean<IClient[]>();

    return NextResponse.json({
      success: true,
      data: clients,
    });
  } catch (error: unknown) {
    console.error("[GET /api/clients error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve client installations. Please try again later.",
        code: "CLIENTS_FETCH_FAILED",
      },
      { status: 500 }
    );
  }
}
