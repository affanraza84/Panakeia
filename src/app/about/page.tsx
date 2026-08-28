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
  Target,
  Compass,
  Eye,
  Flag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Clinical Heritage & AMTZ Manufacturing",
  description:
    "Panakeia Medtech is led by industry experts with 35+ years of global experience in critical care and medical technology, manufacturing world-class equipment at AMTZ Visakhapatnam.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Panakeia Medtech Private Limited",
    url: "https://panakeiamedtech.com",
    logo: "https://panakeiamedtech.com/images/panakeia-logo.png",
    description:
      "Indigenous Indian manufacturer of critical care Anaesthesia Workstations and Intensive Care Ventilators at AMTZ Visakhapatnam. Led by industry experts with 35+ years of global experience in critical care and medical technology.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-20, IHUB Building, AMTZ Campus, Pragati Maidan",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530031",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9811340469",
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
            Led by industry experts with 35+ years of global experience in critical care and medical technology, Panakeia Medtech manufactures dependable indigenous OT & ICU solutions engineered for Indian healthcare realities.
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
                      35+ Years in Global Critical Care & MedTech
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-clinical-200 leading-relaxed">
                    Led by industry experts with 35+ years of global experience in critical care and medical technology, our engineering is rooted in decades of live OT administration, ventilator design, and high-acuity patient care.
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
                <Clock className="w-3.5 h-3.5" /> 35+ Years Global Experience
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 leading-tight">
                Led by Industry Experts with 35+ Years of Global Experience in Critical Care & MedTech
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

      {/* Corporate Philosophy: Aim, Objective, Vision & Mission Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-clinical-50/50 to-white border-t border-clinical-200">
        <Container>
          <SectionHeading
            eyebrow="Our Guiding Principles"
            title="Aim, Objective, Vision & Mission"
            description="Driven by clinical excellence, indigenous medical manufacturing, and patient-first engineering to transform high-acuity surgical and ICU care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* AIM */}
            <div
              id="aim"
              className="scroll-mt-28 bg-white p-8 rounded-2xl border-2 border-med-teal-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-med-teal-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-med-teal-100/70 text-med-teal-800 text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4 text-med-teal-600" />
                  Our Aim
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                  Indigenous Self-Reliance in High-Acuity Medical Systems
                </h3>
                <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
                  To develop and promote an indigenous medical product brand that delivers high-quality, reliable and affordable solutions, with the vision of making the brand a trusted name among doctors.
                </p>
                <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
                  To build a strong indigenous healthcare brand by developing quality medical products in India and establishing the brand as a trusted and preferred choice among doctors nationwide.
                </p>
                <div className="pt-2 border-t border-clinical-100 flex items-center gap-2 text-xs font-semibold text-med-teal-700">
                  <Sparkles className="w-3.5 h-3.5" /> Built specifically for Indian hospital operating realities
                </div>
              </div>
            </div>

            {/* OBJECTIVE */}
            <div
              id="objective"
              className="scroll-mt-28 bg-white p-8 rounded-2xl border-2 border-navy-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-100/70 text-navy-800 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-navy-700" />
                  Our Objectives
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                  Precision Engineering & Rapid Technical Response
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-clinical-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-med-teal-500 mt-2 shrink-0" />
                    <span><strong>Zero-Downtime Guarantee:</strong> Deploy robust mechanical backups and modular subsystems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-med-teal-500 mt-2 shrink-0" />
                    <span><strong>Sub-48h Spares Support:</strong> Direct domestic dispatch from our AMTZ manufacturing hub.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-med-teal-500 mt-2 shrink-0" />
                    <span><strong>Clinical-First Ergonomics:</strong> Intuitive touch controls designed alongside senior anaesthesiologists.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VISION */}
            <div
              id="vision"
              className="scroll-mt-28 bg-white p-8 rounded-2xl border-2 border-cyan-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-100/70 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-cyan-600" />
                  Our Vision
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                  India’s Global Flagship in Critical Care Medtech
                </h3>
                <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
                  To establish Panakeia Medtech as the premier benchmark for indigenous critical care innovation across Asia and emerging global markets, recognized universally for unyielding engineering precision, bio-compatibility, and human-centric design.
                </p>
                <div className="pt-2 border-t border-clinical-100 flex items-center gap-2 text-xs font-semibold text-cyan-700">
                  <HeartHandshake className="w-3.5 h-3.5" /> Advancing healthcare sovereignty and universal patient safety
                </div>
              </div>
            </div>

            {/* MISSION */}
            <div
              id="mission"
              className="scroll-mt-28 bg-white p-8 rounded-2xl border-2 border-emerald-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100/70 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <Flag className="w-4 h-4 text-emerald-600" />
                  Our Mission
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                  Empowering Clinicians With Fail-Safe Technology
                </h3>
                <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
                  To equip hospitals and clinicians with world-class, intuitive, and rigorously certified anaesthesia and ventilation workstations that protect life in high-stress surgical moments, backed by transparent pricing and dependable local lifecycle service.
                </p>
                <div className="pt-2 border-t border-clinical-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Quality & Medical Safety Certification Standards
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
              <p className="text-xs text-clinical-600 leading-relaxed">
                Located near international port and airport hubs in Visakhapatnam, enabling express dispatch of critical sensor kits and replacement modules for healthcare centers worldwide.
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
            Whether you are a hospital procurement officer seeking advanced medical devices or a healthcare distributor exploring global partnerships, our leadership team is ready to connect.
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
