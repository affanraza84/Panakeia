import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Award,
  Building2,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Wrench,
  Sparkles,
  ArrowRight,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Clinical Heritage & AMTZ Manufacturing",
  description:
    "Learn about Panakeia Medtech: 30+ years of critical care clinical experience, live OT engineering roots, and our state-of-the-art manufacturing facility at AMTZ Visakhapatnam.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Panakeia Medtech Private Limited",
    url: "https://panakeiamedtech.com",
    logo: "https://panakeiamedtech.com/images/panakeia-logo.png",
    description:
      "Indigenous Indian manufacturer of critical care Anaesthesia Workstations and Intensive Care Ventilators at AMTZ Visakhapatnam.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit A84, Andhra Pradesh Medtech Zone (AMTZ), Nadupuru",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530031",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-891-2899000",
      contactType: "customer support",
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30" />
        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Our Legacy & Mission
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Born in the Operating Theatre. Built for Indian Healthcare.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-clinical-200 leading-relaxed">
            Panakeia Medtech was founded to bridge a critical gap in Indian hospitals: the reliance on imported, exorbitantly priced OT equipment with slow overseas service channels.
          </p>
        </Container>
      </section>

      {/* Founder Story & Clinical Pedigree */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image / Visual Frame */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-tr from-navy-900 via-navy-800 to-med-teal-900 rounded-2xl p-8 text-white relative shadow-lg overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-med-teal-400/20 rounded-full blur-2xl" />
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-med-teal-300">
                    <Stethoscope className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-med-teal-300 block mb-1">
                      Clinical Foundation
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      30+ Years in High-Acuity Surgical Suites
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-clinical-200 leading-relaxed">
                    Our engineering is led by clinical veterans who have spent decades administering anaesthesia, managing complex ICU ventilation, and troubleshooting real-time emergency hardware failures.
                  </p>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-clinical-300">
                    <span>AMTZ Manufacturing Hub</span>
                    <span>•</span>
                    <span>Visakhapatnam, AP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-med-teal-600 bg-med-teal-50 px-3 py-1 rounded-full border border-med-teal-200">
                <Clock className="w-3.5 h-3.5" /> 3 Decades of Domain Insights
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 leading-tight">
                Designed By Clinicians Who Understand Every Second in the OT Matters
              </h2>

              <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
                Most imported anaesthesia workstations and ventilators are designed for Western clinical environments with completely different hospital infrastructure, gas pipeline pressures, and climate conditions. In Indian hospitals, equipment must withstand voltage fluctuations, varying pipeline gas pressures, high patient turnover, and ambient temperature extremes.
              </p>

              <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
                Panakeia was engineered from the ground up to solve these realities. Our workstations incorporate dual mechanical gas flow backups, heated absorber canisters that prevent condensation in humid coastal climates, and robust turbine-driven blowers that operate seamlessly without central compressed air pipelines.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200">
                  <div className="text-2xl font-extrabold text-navy-950 font-heading">10,000+</div>
                  <div className="text-xs text-clinical-600 mt-1">Live surgical cases guided by core engineering team</div>
                </div>
                <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200">
                  <div className="text-2xl font-extrabold text-med-teal-600 font-heading">100%</div>
                  <div className="text-xs text-clinical-600 mt-1">Indigenous assembly & rigorous multi-point testing</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AMTZ Manufacturing Infrastructure */}
      <section className="py-16 lg:py-20 bg-clinical-50 border-t border-b border-clinical-200">
        <Container>
          <SectionHeading
            eyebrow="World-Class Manufacturing Cluster"
            title="Resident at Andhra Pradesh Medtech Zone (AMTZ)"
            description="Our manufacturing, testing, and cleanroom assembly operations are stationed in AMTZ, Asia's premier dedicated medical device ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-clinical-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-med-teal-50 text-med-teal-600 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-950 font-heading">
                State-of-the-Art Bio-Cluster
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-clinical-600 leading-relaxed">
                Direct access to shared high-end testing labs at AMTZ, including 3D rapid prototyping, PCB surface mount assembly, and high-precision CNC machining centers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-clinical-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-950 font-heading">
                In-House EMI/EMC & Safety Testing
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-clinical-600 leading-relaxed">
                Full compliance validation against IEC 60601-1-2 electromagnetic compatibility and medical safety regulations conducted on-site at AMTZ certified test chambers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-clinical-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-950 font-heading">
                National Logistics & Rapid Spares
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-clinical-600 leading-relaxed">
                Located near international port and airport hubs in Visakhapatnam, enabling sub-48-hour express dispatch of critical sensor kits and replacement modules across India.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Strip */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <Container className="max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Partner With India&apos;s Indigenous Critical Care Innovator
          </h2>
          <p className="text-xs sm:text-sm text-clinical-300">
            Whether you are a hospital procurement officer evaluating alternatives to European imports or a regional distributor seeking partnership, our leadership team is ready to connect.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch with our Clinical Engineering Team
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
