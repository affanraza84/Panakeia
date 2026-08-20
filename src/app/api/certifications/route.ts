import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Certification } from "@/models/Certification";
import { ApiResponse, ICertification } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse<ApiResponse<ICertification[]>>> {
  try {
    await connectToDatabase();

    const certifications = await Certification.find({})
      .sort({ order: 1, createdAt: 1 })
      .lean<ICertification[]>();

    return NextResponse.json({
      success: true,
      data: certifications,
    });
  } catch (error: unknown) {
    console.error("[GET /api/certifications error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve regulatory certifications. Please try again later.",
        code: "CERTIFICATIONS_FETCH_FAILED",
      },
      { status: 500 }
    );
  }
}
