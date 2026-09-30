import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CompanyContactDetails } from "@/components/auth/CompanyContactDetails";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Panakeia Medtech Private Limited",
  description:
    "Data protection policy and privacy commitments for Panakeia Medtech Private Limited, indigenous medical device manufacturer in Visakhapatnam.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 21, 2026";

  return (
    <div className="py-12 sm:py-16 bg-clinical-50/50">
      <Container className="max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-med-teal-50 border border-med-teal-200 text-med-teal-800 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-med-teal-600" />
            <span>Data Protection & Privacy Commitment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-clinical-600">
            Panakeia Medtech Private Limited &bull; In-House Manufacturing Facility, Visakhapatnam
          </p>
          <p className="text-xs text-clinical-400 font-mono">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Quick Highlights Box */}
        <div className="bg-white rounded-2xl border border-clinical-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-navy-950 flex items-center gap-2">
            <Lock className="w-5 h-5 text-med-teal-600" />
            Executive Privacy Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-clinical-700 leading-relaxed">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>B2B Clinical Purpose:</strong> We only collect contact details submitted through our procurement and distributor enquiry channels.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Commercial Sale:</strong> We never sell, monetize, or broker your personal or institutional information to third parties.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Encrypted in Transit:</strong> All web submissions are encrypted over HTTPS (TLS 1.3) with strict HTTP security headers.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Right to Erasure:</strong> You can request complete deletion of your contact records at any time by emailing us.
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-2xl border border-clinical-200 p-8 sm:p-12 shadow-sm space-y-10 text-clinical-800 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold font-heading text-navy-950">
              1. Introduction & Corporate Scope
            </h3>
            <p>
              Panakeia Medtech Private Limited (&ldquo;Panakeia&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates an indigenous medical device manufacturing facility situated in Visakhapatnam - 530031, India, where all parts and components are manufactured directly in-house by Panakeia itself.
            </p>
            <p>
              This Privacy Policy explains how we collect, handle, store, and safeguard the information you provide when interacting with our official web portal (
              <code className="bg-clinical-100 px-1 py-0.5 rounded text-navy-950 font-mono text-xs">
                https://panakeiamedtech.com
              </code>
              ), our clinical quotation tools, and communication channels.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold font-heading text-navy-950">
              2. Personal Data We Collect
            </h3>
            <p>
              We collect information directly when you voluntarily complete our commercial procurement form, request an on-site clinical demonstration, or apply for channel distribution:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-clinical-700">
              <li>
                <strong>Contact Information:</strong> Full name, professional work email address, and direct contact telephone / mobile number.
              </li>
              <li>
                <strong>Institutional Affiliation:</strong> Name of your hospital, healthcare system, clinic, medical college, or biomedical dealership organization.
              </li>
              <li>
                <strong>Geographical Location:</strong> City and state coordinates to route inquiries to regional biomedical field engineers.
              </li>
              <li>
                <strong>Clinical Requirements & Specifications:</strong> OT bed capacity, ventilator specifications, tender requirements, or custom OEM manufacturing parameters.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold font-heading text-navy-950">
              3. Purpose & Legal Basis for Processing
            </h3>
            <p>
              We process personal and institutional data solely for legitimate business and regulatory purposes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-clinical-700">
              <li>Preparing and transmitting formal technical quotations and device specifications.</li>
              <li>Coordinating clinical demonstrations and biomedical trial evaluations in hospital OT suites.</li>
              <li>Empaneling authorized regional medical device distributors and managing channel agreements.</li>
              <li>Maintaining statutory compliance records as required under CDSCO Medical Device Rules.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold font-heading text-navy-950">
              4. Technical & Organizational Data Security
            </h3>
            <p>
              We implement comprehensive technological and organizational safeguards to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-clinical-700">
              <li>
                <strong>Transport Security:</strong> Strict Transport Security (HSTS) and modern TLS encryption on all public API endpoints.
              </li>
              <li>
                <strong>Input Sanitization & Injection Defense:</strong> Server-side schema validation (Zod) and automated NoSQL sanitization to prevent unauthorized access.
              </li>
              <li>
                <strong>Rate Limiting & Anti-Spam:</strong> Automated IP-based rate limiting (5 requests/minute) and honeypot traps to prevent automated abuse.
              </li>
              <li>
                <strong>Restricted Access:</strong> Access to procurement lead databases is restricted to authorized Panakeia sales and clinical engineering personnel.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold font-heading text-navy-950">
              5. Data Retention & Erasure
            </h3>
            <p>
              We retain procurement and clinical enquiry records only for the period necessary to fulfill commercial negotiations, customer support, and statutory medical device record-keeping obligations.
            </p>
            <p>
              You have the right to request access to your submitted data, request corrections, or ask for complete deletion of your records from our systems at any time.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold font-heading text-navy-950">
              6. Grievance Redressal & Data Inquiries
            </h3>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your data privacy rights, please contact our administrative desk:
            </p>
            <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200 text-xs space-y-1.5 font-mono text-navy-950">
              <div><strong>Panakeia Medtech Private Limited</strong></div>
              <div>Attn: Privacy & Data Protection Desk</div>
              <div>Panakeia Manufacturing Facility, Visakhapatnam - 530031, AP, India</div>
              <CompanyContactDetails variant="privacy-desk" />
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="text-xs font-semibold text-med-teal-700 hover:text-med-teal-800 transition-colors inline-flex items-center gap-1"
          >
            &larr; Return to Procurement & Clinical Contact Page
          </Link>
        </div>
      </Container>
    </div>
  );
}
