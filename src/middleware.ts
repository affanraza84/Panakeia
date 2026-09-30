import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that do not require authentication to browse
const isPublicRoute = createRouteMatcher([
  "/",
  "/products(.*)",
  "/resources(.*)",
  "/about(.*)",
  "/quality(.*)",
  "/clients(.*)",
  "/careers(.*)",
  "/contact(.*)",
  "/privacy(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/products(.*)",
  "/api/clients(.*)",
  "/api/certifications(.*)",
  "/api/enquiries(.*)",
  "/api/revalidate(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const host = req.headers.get("host") || "";
  // 301 Redirect legacy domain traffic to canonical panakeiacare.com
  if (
    host === "panakeiamedtech.com" ||
    host.startsWith("www.panakeiamedtech.com")
  ) {
    const url = req.nextUrl.clone();
    url.host = "panakeiacare.com";
    url.port = "";
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|pdf)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
