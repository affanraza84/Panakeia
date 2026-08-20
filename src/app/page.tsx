import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { CleanHeroVideo } from "@/components/ui/CleanHeroVideo";
import { AwardsSection } from "@/components/ui/AwardsSection";
import { getProducts, getClients, getCertifications } from "@/lib/data";
import {
  ShieldCheck,
  Zap,
  Clock,
  Wrench,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  HeartPulse,
} from "lucide-react";

export const revalidate = 3600; // ISR 1 hour

export default async function HomePage() {
  const products = await getProducts();
  const clients = await getClients();
  const certifications = await getCertifications();

  const featuredClients = clients.filter((c) => c.featured);

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* 1. CLEAN FULL SCREEN INTRO VIDEO (No text overlay written on the video) */}
      <CleanHeroVideo videoSrc="/video/introVideo.mp4" />

      {/* 2. STAT COUNTER STRIP (Matching reference screenshot) */}
      <section id="home-content" className="bg-white border-b border-clinical-200 py-10 lg:py-14 shadow-xs relative z-20 overflow-hidden">
        {/* Subtle medical watermark backdrop */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <StatCounter
              value={30}
              suffix="+"
              label="Years Clinical Experience"
              sublabel="Live OT & ICU domain pedigree"
            />
            <StatCounter
              value={99}
              suffix=".4%"
              label="Operational OT Uptime"
              sublabel="Precision life-support engineering"
            />
            <StatCounter
              value={48}
              suffix="h"
              label="Rapid Spares Dispatch"
              sublabel="Direct from AMTZ manufacturing hub"
            />
            <StatCounter
              value={100}
              prefix="🇮🇳 "
              suffix="%"
              label="Indigenous Manufacturing"
              sublabel="Make in India / DPIIT Recognized"
            />
          </div>
        </Container>
      </section>

      {/* 3. WHY INDIGENOUS MANUFACTURING SECTION */}
      <section className="py-16 lg:py-24 bg-clinical-50/60">
        <Container>
          <SectionHeading
            eyebrow="The Indigenous Advantage"
            title="Engineered in India, For Indian Operating Theatres"
            description="Hospital procurement teams and critical care directors choose Panakeia to eliminate long import lead times, inflated spare parts markups, and delayed servicing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-clinical-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-med-teal-50 text-med-teal-600 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 font-heading">
                Rapid Spares & Local AMTZ Support
              </h3>
              <p className="mt-3 text-sm text-clinical-600 leading-relaxed">
                Unlike imported devices that leave your OT non-operational while waiting weeks for European or North American spare parts, all Panakeia components and sensor modules are stocked and dispatched directly from our AMTZ facility.
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
                Deliver world-class ventilation and volatile anaesthesia accuracy at a fraction of imported capital expenditure and annual maintenance contract (AMC) costs, maximizing hospital revenue and throughput.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-clinical-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 font-heading">
                Clinical Workflow Centric Ergonomics
              </h3>
              <p className="mt-3 text-sm text-clinical-600 leading-relaxed">
                Designed alongside active senior anaesthesiologists and intensivists. Features intuitive color touchscreens, instant mode switching, and fail-safe mechanical gas flow backups for high-stress emergency surgical cases.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PRODUCT HIGHLIGHTS */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-med-teal-600 px-3 py-1 rounded-full bg-med-teal-50 border border-med-teal-200 inline-block mb-3">
                Critical Care Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy-950">
                Anaesthesia Workstations & Ventilators
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 text-sm font-semibold text-med-teal-600 hover:text-med-teal-700 inline-flex items-center gap-1.5"
            >
              Browse Full Catalog & Technical Sheets <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
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
