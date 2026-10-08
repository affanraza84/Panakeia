import { z } from "zod";

/**
 * Enquiry Form Submission Schema
 * Server-side & Client-side validation
 */
export const enquirySchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .trim(),
  email: z
    .string({ error: "Email is required" })
    .email("Please provide a valid email address")
    .trim()
    .toLowerCase(),
  phone: z
    .string({ error: "Phone number is required" })
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number cannot exceed 20 digits")
    .regex(/^[+0-9\s\-()]+$/, "Phone number contains invalid characters")
    .trim(),
  hospitalOrOrg: z
    .string()
    .max(150, "Hospital / Organization cannot exceed 150 characters")
    .trim()
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .max(100, "City cannot exceed 100 characters")
    .trim()
    .optional()
    .or(z.literal("")),
  message: z
    .string({ error: "Message is required" })
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message cannot exceed 3000 characters")
    .trim(),
  type: z.enum(
    [
      "general",
      "distributor",
      "oem",
      "product-enquiry",
      "career-employment",
      "career-internship",
      "career-training",
    ],
    {
      error: "Please select a valid enquiry type",
    }
  ),
  productSlug: z
    .string()
    .max(100, "Product slug cannot exceed 100 characters")
    .regex(/^[a-z0-9-]*$/, "Invalid product slug format")
    .trim()
    .optional()
    .or(z.literal("")),
  // Honeypot field - must be empty for human submissions
  hp: z.string().optional().or(z.literal("")),
  // Timestamp when the form was loaded in the client (used for bot speed heuristics)
  formStartTime: z.number().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

/**
 * Products Query Parameters Schema
 */
export const productQuerySchema = z.object({
  category: z.enum(["anaesthesia", "ventilator", "monitoring", "infusion", "emergency", "accessories"]).optional(),
});

/**
 * Product Slug URL Parameter Schema
 */
export const productSlugSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1, "Product slug is required")
    .max(100, "Product slug cannot exceed 100 characters")
    .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
});

/**
 * Clients Query Parameters Schema
 */
export const clientQuerySchema = z.object({
  featured: z.enum(["true", "false"]).optional(),
});

/**
 * Revalidation Request Schema
 */
export const revalidateSchema = z.object({
  path: z
    .string()
    .trim()
    .startsWith("/", "Path must start with '/'")
    .max(250, "Path too long")
    .optional(),
  tag: z
    .string()
    .trim()
    .min(1, "Tag cannot be empty")
    .max(100, "Tag too long")
    .regex(/^[a-zA-Z0-9_-]+$/, "Invalid cache tag format")
    .optional(),
});

/**
 * Basic heuristic spam detection helper
 */
export function isSpamPayload(data: { message: string; name: string }): boolean {
  // 1. Check for excessive URL count (common in automated link injection spam)
  const urlMatches = data.message.match(/https?:\/\//gi) || [];
  if (urlMatches.length > 3) {
    return true;
  }

  // 2. Obvious crypto/casino/pharma spam patterns in B2B medical queries
  const spamKeywords = [
    /\bcrypto(currency)?\b/i,
    /\bcasino\b/i,
    /\bviagra\b/i,
    /\bcialis\b/i,
    /\brolex\b/i,
    /\bbaccarat\b/i,
    /\bseo services\b/i,
    /\bbacklinks\b/i,
  ];

  const content = `${data.name} ${data.message}`;
  return spamKeywords.some((pattern) => pattern.test(content));
}
