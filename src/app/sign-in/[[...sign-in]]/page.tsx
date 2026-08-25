import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Stethoscope, Building2, Lock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Portal Sign In — Panakeia Medtech",
  description:
    "Sign in to your Panakeia Medtech Healthcare Provider portal to access engineering schematics, institutional quotations, and direct AMTZ support.",
};

export default function SignInPage() {
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
          {/* Left Column: Hospital & Doctor Portal Branding */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-med-teal-50 text-med-teal-700 border border-med-teal-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-med-teal-600" />
              Verified Clinical & Procurement Portal
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-950 tracking-tight leading-tight">
              Hospital Procurement & Clinical Engineering Access
            </h1>

            <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
              Sign in to manage your medical device specifications, track live hospital OT quotations, download tender compliance documentation, and access direct AMTZ technical engineering lines.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-clinical-200 shadow-2xs">
                <Stethoscope className="w-5 h-5 text-med-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-navy-950 block">Doctors & Intensivists</span>
                  <span className="text-xs text-clinical-600">Access clinical loop telemetry, ventilator modes & simulator manuals</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-clinical-200 shadow-2xs">
                <Building2 className="w-5 h-5 text-navy-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-navy-950 block">Hospital Procurement Directors</span>
                  <span className="text-xs text-clinical-600">Generate instant BOM quotes, verify CDSCO/DPIIT test certifications</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-clinical-500 flex items-center gap-4">
              <span>AMTZ Hub C-20</span>
              <span>•</span>
              <span>ISO 13485 Certified</span>
              <span>•</span>
              <span>End-to-End SSL</span>
            </div>
          </div>

          {/* Right Column: Clerk Sign In Component */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md shadow-xl rounded-2xl overflow-hidden border border-clinical-200 bg-white">
              <SignIn
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
