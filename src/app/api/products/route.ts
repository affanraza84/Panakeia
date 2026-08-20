import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { ApiResponse, IProduct } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<IProduct[]>>> {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const query: Record<string, unknown> = { published: true };
    if (category) {
      query.category = category;
    }

    const products = await Product.find(query)
      .sort({ order: 1, createdAt: 1 })
      .lean<IProduct[]>();

    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[GET /api/products error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: message,
        code: "PRODUCTS_FETCH_FAILED",
      },
      { status: 500 }
    );
  }
}
