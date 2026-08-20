import { z } from "zod";

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
  type: z.enum(["general", "distributor", "oem", "product-enquiry"], {
    error: "Please select a valid enquiry type",
  }),
  productSlug: z.string().trim().optional().or(z.literal("")),
  // Honeypot field - must be empty for human submissions
  hp: z.string().optional().or(z.literal("")),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
