import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ConferenceGallery } from "@/components/conference/ConferenceGallery";
import {
  CONFERENCE_CATEGORIES,
  CONFERENCE_EVENTS,
} from "@/lib/conferenceData";
import {
  Building2,
  Globe2,
  Users,
  GraduationCap,
  Trophy,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conferences, Summits & Hospital Inaugurations | Panakeia Medtech",
  description:
    "Explore Panakeia's official event records: Shatabdi Hospital inauguration attended by Hon'ble Union Minister Shri Piyush Goyal, BIRAC MedTech Summit, WHO UK delegations, academic student visits, and VCCI Innovation Awards.",
  alternates: {
    canonical: "/conference",
  },
  openGraph: {
    title: "Conferences, Summits & Hospital Inaugurations | Panakeia Medtech",
    description:
      "Photographic record of Panakeia Medtech's critical care leadership, ministerial inaugurations, global health delegations, and university engineering visits.",
    url: "/conference",
    type: "website",
  },
};

export const revalidate = 3600;

export default function ConferencePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-med-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Institutional Engagements & Events
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
            Conferences, Summits & Hospital Inaugurations
          </h1>

          <p className="mt-4 text-base sm:text-lg text-clinical-200 leading-relaxed">
            A photographic record of Panakeia Medtech&apos;s journey — from hospital
            inaugurations attended by Union Ministers to global healthcare
            summits, international health delegations, student masterclasses, and
            national innovation awards.
          </p>

          {/* Key Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-navy-800/80">
            <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800">
              <div className="flex items-center justify-center gap-1.5 text-med-teal-400 font-bold text-xl sm:text-2xl font-mono">
                <Building2 className="w-5 h-5" />
                <span>6+</span>
              </div>
              <div className="text-[11px] text-clinical-400 mt-1 uppercase tracking-wider font-semibold">
                Hospital Milestones
              </div>
            </div>

            <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800">
              <div className="flex items-center justify-center gap-1.5 text-blue-400 font-bold text-xl sm:text-2xl font-mono">
                <Globe2 className="w-5 h-5" />
                <span>Global</span>
              </div>
              <div className="text-[11px] text-clinical-400 mt-1 uppercase tracking-wider font-semibold">
                WHO & Dubai Expos
              </div>
            </div>

            <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-xl sm:text-2xl font-mono">
                <GraduationCap className="w-5 h-5" />
                <span>500+</span>
              </div>
              <div className="text-[11px] text-clinical-400 mt-1 uppercase tracking-wider font-semibold">
                Engineers Trained
              </div>
            </div>

            <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 font-bold text-xl sm:text-2xl font-mono">
                <Trophy className="w-5 h-5" />
                <span>VCCI</span>
              </div>
              <div className="text-[11px] text-clinical-400 mt-1 uppercase tracking-wider font-semibold">
                Meta India Award
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Milestone: Shatabdi Hospital Inauguration by Hon'ble Minister Piyush Goyal */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-clinical-50/80 to-white border-b border-clinical-200">
        <Container>
          <div className="bg-white rounded-3xl border border-clinical-200 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-med-teal-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Story & Official Statement */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-med-teal-50 text-med-teal-700 text-xs font-bold border border-med-teal-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-med-teal-600" />
                    Special Landmark Milestone
                  </span>
                  <span className="text-xs text-clinical-500 font-mono">
                    Mumbai, India
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 leading-tight">
                  Shatabdi Hospital Inauguration by Hon&apos;ble Union Minister
                  Shri Piyush Goyal
                </h2>

                <p className="text-sm sm:text-base text-clinical-700 leading-relaxed">
                  During an official visit to the Bharat Ratna Dr. Babasaheb
                  Ambedkar Municipal General Hospital (Shatabdi Hospital) in
                  Kandivali, modern critical care medical equipment indigenously
                  engineered by Panakeia Medtech was ceremonially unveiled and
                  inaugurated by Hon&apos;ble Union Minister Shri Piyush Goyal.
                </p>

                {/* Minister's Quote Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-navy-950 text-white relative shadow-md">
                  <Quote className="w-8 h-8 text-med-teal-400/30 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm text-clinical-200 italic leading-relaxed relative z-10">
                    &ldquo;During the visit to Shatabdi Hospital located in
                    Kandivali, modern medical equipment was inaugurated. This will
                    provide citizens with excellent and high-quality treatment,
                    and health services will become even more accessible and
                    affordable. With the resolve of &lsquo;Health for All,&rsquo; the
                    government is continuously strengthening the health
                    sector.&rdquo;
                  </p>
                  <div className="mt-3 pt-3 border-t border-navy-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-med-teal-300">
                      — Shri Piyush Goyal
                    </span>
                    <span className="text-clinical-400 font-mono text-[11px]">
                      Hon&apos;ble Union Minister
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-clinical-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Advanced Anaesthesia Workstation Suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Affordable Critical Care for Citizens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Make in India Healthcare Mission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Municipal Surgical Care Infrastructure</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Montage */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-clinical-200 shadow-md group">
                  <Image
                    src="/image/piyush-goyal-inaugration-post.jpeg"
                    alt="Official tweet by Minister Piyush Goyal on Shatabdi Hospital inauguration"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-semibold text-white">
                      Official Statement
                    </span>
                  </div>
                </div>

                <div className="space-y-3 flex flex-col justify-between">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-clinical-200 shadow-md group">
                    <Image
                      src="/image/opening1.jpeg"
                      alt="Minister Piyush Goyal unveiling Panakeia workstation"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-semibold text-white">
                        Curtain Unveiling
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-clinical-200 shadow-md group">
                    <Image
                      src="/image/opening3.jpeg"
                      alt="Minister Piyush Goyal addressing doctors and media"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-semibold text-white">
                        Press Address
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Photographic Gallery Section */}
      <section className="py-14 lg:py-20 bg-slate-50/60">
        <Container>
          <SectionHeading
            eyebrow="Interactive Photo Gallery"
            title="Explore All Events, Summits & Delegations"
            description="Browse photographic archives categorized by hospital inaugurations, global conferences, international delegations, student industrial visits, dealer handovers, and national awards."
          />

          <ConferenceGallery
            categories={CONFERENCE_CATEGORIES}
            events={CONFERENCE_EVENTS}
          />
        </Container>
      </section>

      {/* Institutional Engagement & Collaboration CTA */}
      <section className="py-14 lg:py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-20" />
        <Container className="relative z-10 text-center max-w-3xl">
          <span className="px-3 py-1 rounded-full bg-med-teal-500/20 text-med-teal-400 text-xs font-bold border border-med-teal-500/30 inline-block mb-4">
            Partner With Us
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight">
            Schedule an Institutional Visit or Facility Tour
          </h2>

          <p className="mt-4 text-sm sm:text-base text-clinical-300 leading-relaxed">
            Whether you represent a hospital procurement committee, an academic
            biomedical engineering department, a regional medical equipment
            distributor, or an international health organization — we welcome you to
            experience our 100% in-house critical care manufacturing complex at
            AMTZ, Visakhapatnam.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-med-teal-600 hover:bg-med-teal-500 text-white font-bold text-sm shadow-lg shadow-med-teal-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule Facility Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-clinical-200 border border-navy-700 font-bold text-sm transition-all hover:text-white"
            >
              <span>Explore Product Catalog</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
