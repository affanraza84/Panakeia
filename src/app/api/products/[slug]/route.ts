import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { ApiResponse, IProduct } from "@/types";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(
  _request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse<ApiResponse<IProduct>>> {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          error: "Product slug is required",
          code: "SLUG_REQUIRED",
        },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const product = await Product.findOne({
      slug: slug.toLowerCase(),
      published: true,
    }).lean<IProduct>();

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: `Product '${slug}' not found`,
          code: "PRODUCT_NOT_FOUND",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[GET /api/products/[slug] error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: message,
        code: "PRODUCT_FETCH_FAILED",
      },
      { status: 500 }
    );
  }
}
