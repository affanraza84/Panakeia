import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { CleanHeroVideo } from "@/components/ui/CleanHeroVideo";
import { IndigenousExcellenceStrip } from "@/components/ui/IndigenousExcellenceStrip";
import { AwardsSection } from "@/components/ui/AwardsSection";
import { EquipmentShowcase } from "@/components/ui/EquipmentShowcase";
import { getClients, getCertifications } from "@/lib/data";
import {
  Zap,
  Wrench,
  HeartPulse,
} from "lucide-react";

export const revalidate = 3600; // ISR 1 hour

export default async function HomePage() {
  const clients = await getClients();
  const certifications = await getCertifications();

  const featuredClients = clients.filter((c) => c.featured);

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* 1. CLEAN FULL SCREEN INTRO VIDEO (No text overlay written on the video) */}
      <CleanHeroVideo videoSrc="/video/introVideo.mp4" />

      {/* 2. INDIGENOUS EXCELLENCE & CLINICAL PILLARS STRIP (Brochure Data, Zero Numbers) */}
      <IndigenousExcellenceStrip />

      {/* 3. INTERACTIVE INDIGENOUS EQUIPMENT SHOWCASE (Featuring 4 Flagship Systems) */}
      <EquipmentShowcase />

      {/* 4. WHY INDIGENOUS MANUFACTURING SECTION */}
      <section className="py-16 lg:py-24 bg-clinical-50/60">
        <Container>
          <SectionHeading
            eyebrow="Indigenous Technology • Global Standards"
            title="World-Class Engineering, Patient-Centric Critical Care"
            description="Manufactured at the state-of-the-art AMTZ MedTech Zone, Panakeia combines advanced R&D, rigorous international quality validation, and dedicated worldwide technical support."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-clinical-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-med-teal-50 text-med-teal-600 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 font-heading">
                Precision Manufacturing & Dedicated Support
              </h3>
              <p className="mt-3 text-sm text-clinical-600 leading-relaxed">
                Our state-of-the-art facility at AMTZ is equipped with advanced infrastructure and testing laboratories, ensuring dependable parts availability, responsive technical assistance, and continuous lifecycle support for healthcare institutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-clinical-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 font-heading">
                Optimized Total Cost of Ownership
              </h3>
              <p className="mt-3 text-sm text-clinical-600 leading-relaxed">
                Deliver world-class ventilation and volatile anaesthesia accuracy with optimized capital expenditure, streamlined maintenance protocols, and high operational reliability that maximize hospital throughput.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-clinical-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 font-heading">
                Clinically-Focused Ergonomics & Safety
              </h3>
              <p className="mt-3 text-sm text-clinical-600 leading-relaxed">
                Designed alongside active senior anaesthesiologists and intensivists. Features intuitive touchscreen telemetry, multi-waveform monitoring, and fail-safe mechanical backups for critical surgical and intensive care suites.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. REGULATORY & COMPLIANCE SECTION */}
      <section className="py-16 lg:py-20 bg-clinical-50 border-t border-b border-clinical-200">
        <Container>
          <SectionHeading
            eyebrow="Compliance & Quality Assurance"
            title="Factual Regulatory Standing & Certifications"
            description="Panakeia operates with strict adherence to Indian medical device rules and international quality frameworks. Transparent compliance documentation for hospital procurement vetting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.slice(0, 3).map((cert) => (
              <CertificationCard key={cert.title} certification={cert} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/quality" variant="outline" size="md">
              View Detailed Regulatory Credentials & Audit Documentation
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. AWARDS & RECOGNITIONS SECTION (Matching Reference Design) */}
      <AwardsSection />

      {/* 7. TESTIMONIAL PREVIEW */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Hospital References"
            title="Trusted by Leading Surgical Suites"
            description="Read clinical feedback from senior anaesthesiologists and intensive care specialists evaluating Panakeia systems in high-acuity environments."
          />

          <TestimonialCarousel testimonials={featuredClients.length > 0 ? featuredClients : clients} />
        </Container>
      </section>

      {/* 7. PROCUREMENT CTA STRIP */}
      <section className="py-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-med-teal-500/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="saffron" className="mb-4">
            Make in India For Critical Care
          </Badge>

          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
            Schedule an OT Evaluation or Request a Commercial Quotation
          </h2>

          <p className="mt-4 text-sm sm:text-base text-clinical-200 leading-relaxed">
            Speak directly with our clinical biomedical engineering team at AMTZ Visakhapatnam to discuss device specifications, tender participation, or dealership opportunities.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Contact Procurement Desk
            </Button>
            <Button
              href="/products"
              variant="outline"
              size="lg"
              className="border-navy-700 text-white hover:bg-navy-800"
            >
              Download Product Spec Sheets
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
