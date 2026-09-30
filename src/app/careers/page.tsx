import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CareersContentClient } from "./CareersContentClient";
import {
  Sparkles,
  ShieldCheck,
  Building2,
  Stethoscope,
  Award,
  Users,
  Cpu,
  TrendingUp,
} from "lucide-react";

import { SITE_URL, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers, Internships & Medical Sales Training Academy",
  description:
    "Join Panakeia Medtech in Visakhapatnam. Explore full-time biomedical engineering careers, high-impact clinical internships with PPO pathways, and intensive training programs in critical care products and medical sales.",
  keywords: [
    "Biomedical Engineering Careers India",
    "Medical Device Internships",
    "Anaesthesia Workstation Training",
    "ICU Ventilator Training Academy",
    "Medical Sales Jobs Visakhapatnam",
    "MedTech Jobs Andhra Pradesh",
    "Clinical Application Specialist Jobs",
    "Panakeia Careers",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers, Internships & Medical Sales Training | Panakeia Medtech",
    description:
      "Build lifesaving critical care medical hardware in Visakhapatnam. Full-time employment, internships with PPO, and comprehensive product & sales training academy.",
    url: "/careers",
    siteName: "Panakeia Medtech",
  },
};

export default function CareersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Panakeia Medtech Private Limited",
    url: `${SITE_URL}/careers`,
    description:
      "Careers, biomedical internships, and critical care product & sales training academy at Panakeia Medtech manufacturing facility in Visakhapatnam.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Panakeia Manufacturing Facility, Pragati Maidan",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530031",
      addressCountry: "IN",
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30 pointer-events-none" />
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-med-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl space-y-6">
          <Badge variant="primary" className="mx-auto">
            Innovate • Engineer • Empower
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Shape the Future of Indigenous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-med-teal-300 to-med-teal-400">
              Critical Care MedTech
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-clinical-200 max-w-3xl mx-auto leading-relaxed">
            Whether you are an experienced biomedical engineer, an ambitious student seeking hands-on internships with PPO pathways, or a professional aiming to master medical device products & sales—Panakeia provides the premier launchpad.
          </p>

          {/* Quick Metrics Strip */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-black font-heading text-med-teal-400">
                100%
              </div>
              <div className="text-[11px] text-clinical-300 font-medium mt-0.5">
                In-House R&D & Manufacturing
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-black font-heading text-med-teal-400">
                35+ Yrs
              </div>
              <div className="text-[11px] text-clinical-300 font-medium mt-0.5">
                Global MedTech Leadership
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-black font-heading text-med-teal-400">
                OT & ICU
              </div>
              <div className="text-[11px] text-clinical-300 font-medium mt-0.5">
                Direct Clinical Immersion
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-black font-heading text-med-teal-400">
                Vizag
              </div>
              <div className="text-[11px] text-clinical-300 font-medium mt-0.5">
                Advanced MedTech Facility
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content (Tabs, Job Cards, Internships, Training Modules & Application Form) */}
      <Container className="py-12 lg:py-16">
        <Suspense
          fallback={
            <div className="py-24 text-center text-clinical-500 font-mono text-xs">
              Loading Panakeia Careers & Training Academy portal...
            </div>
          }
        >
          <CareersContentClient />
        </Suspense>
      </Container>
    </div>
  );
}
