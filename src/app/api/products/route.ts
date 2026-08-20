import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { productQuerySchema } from "@/lib/validations";
import { sanitizeInput } from "@/lib/sanitize";
import { ApiResponse, IProduct } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<IProduct[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const rawCategory = searchParams.get("category") || undefined;

    // Validate query parameter against strict enum
    const parseResult = productQuerySchema.safeParse({ category: rawCategory });
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid category filter parameter",
          code: "INVALID_CATEGORY",
        },
        { status: 400 }
      );
    }

    const { category } = parseResult.data;

    await connectToDatabase();

    const query: Record<string, unknown> = { published: true };
    if (category) {
      query.category = sanitizeInput(category);
    }

    const products = await Product.find(query)
      .sort({ order: 1, createdAt: 1 })
      .lean<IProduct[]>();

    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error: unknown) {
    console.error("[GET /api/products error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve products. Please try again later.",
        code: "PRODUCTS_FETCH_FAILED",
      },
      { status: 500 }
    );
  }
}
