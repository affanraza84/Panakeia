import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { productSlugSchema } from "@/lib/validations";
import { sanitizeInput } from "@/lib/sanitize";
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
    const rawParams = await params;
    const validationResult = productSlugSchema.safeParse(rawParams);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid product slug format",
          code: "INVALID_SLUG",
        },
        { status: 400 }
      );
    }

    const cleanSlug = sanitizeInput(validationResult.data.slug.toLowerCase());

    await connectToDatabase();

    const product = await Product.findOne({
      slug: cleanSlug,
      published: true,
    }).lean<IProduct>();

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: "Requested product was not found",
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
    console.error("[GET /api/products/[slug] error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve product details. Please try again later.",
        code: "PRODUCT_FETCH_FAILED",
      },
      { status: 500 }
    );
  }
}
