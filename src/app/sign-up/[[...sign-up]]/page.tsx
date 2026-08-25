import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Stethoscope, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Portal Registration — Panakeia Medtech",
  description:
    "Register for verified healthcare provider and institutional procurement access at Panakeia Medtech.",
};

export default function SignUpPage() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-clinical-50 via-white to-clinical-50 py-12 lg:py-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Tech Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <Container className="relative z-10 max-w-5xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-600 hover:text-navy-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Main Website</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Registration Intro */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-med-teal-50 text-med-teal-700 border border-med-teal-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-med-teal-600" />
              Verified Clinical Registration
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-950 tracking-tight leading-tight">
              Join the Panakeia Medical Network
            </h1>

            <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
              Create your account to unlock full equipment schematics, request bespoke pneumatic configurations, schedule live OT evaluations, and download priority quotation brochures.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-clinical-200 shadow-2xs space-y-2 text-xs text-clinical-700">
              <div className="font-bold text-navy-950 flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-med-teal-600" />
                <span>Exclusively for Healthcare Professionals:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-clinical-600 pl-1">
                <li>Senior Anaesthesiologists & Intensivists</li>
                <li>Hospital Medical Directors & Bio-Medical Engineers</li>
                <li>Authorized Medical Device Distributors</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Clerk Sign Up Component */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md shadow-xl rounded-2xl overflow-hidden border border-clinical-200 bg-white">
              <SignUp
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-none p-6 sm:p-8 bg-white",
                    headerTitle: "text-xl font-bold font-heading text-navy-950",
                    headerSubtitle: "text-xs text-clinical-600",
                    formButtonPrimary:
                      "bg-med-teal-600 hover:bg-med-teal-700 text-white font-bold py-2.5 rounded-xl transition-all shadow-sm",
                    footerActionLink: "text-med-teal-600 hover:text-med-teal-700 font-semibold",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
