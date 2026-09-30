import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Us & Procurement Inquiries",
  description:
    "Contact Panakeia Medtech in Visakhapatnam for Anaesthesia Workstation and Ventilator technical quotations, clinical trials, or dealership inquiries with 100% in-house manufactured parts.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-clinical-50/40 min-h-screen py-12 lg:py-16">
      <Container className="mb-10 text-center max-w-2xl">
        <Badge variant="primary" className="mb-3">
          Procurement & OEM Desk
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 tracking-tight">
          Connect with Panakeia Medtech
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-clinical-600 leading-relaxed">
          Request official device quotations, arrange hospital trial evaluations, or inquire about OEM sub-assembly partnerships.
        </p>
      </Container>

      <Container>
        <Suspense
          fallback={
            <div className="py-20 text-center text-clinical-500">
              Loading enquiry form...
            </div>
          }
        >
          <ContactFormClient />
        </Suspense>
      </Container>
    </div>
  );
}
