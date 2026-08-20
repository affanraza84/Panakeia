import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Client } from "@/models/Client";
import { ApiResponse, IClient } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<IClient[]>>> {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");

    const query: Record<string, unknown> = {};
    if (featured === "true") {
      query.featured = true;
    }

    const clients = await Client.find(query)
      .sort({ featured: -1, createdAt: -1 })
      .lean<IClient[]>();

    return NextResponse.json({
      success: true,
      data: clients,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[GET /api/clients error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: message,
        code: "CLIENTS_FETCH_FAILED",
      },
      { status: 500 }
    );
  }
}
