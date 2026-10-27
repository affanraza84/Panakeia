"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Cpu,
  FileCheck,
} from "lucide-react";

interface Pillar {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: {
    bg: string;
    border: string;
    text: string;
    glow: string;
    badge: string;
  };
  keyFeatures: string[];
  pdfRef: string;
}

const PILLARS: Pillar[] = [
  {
    id: "r-and-d",
    tag: "Indigenous Technology",
    title: "Advanced Medical R&D",
    subtitle: "Proprietary Pneumatics & Intelligent Software",
    description:
      "Indigenously engineered microprocessor architectures featuring closed-loop pneumatic gas delivery, real-time spirometry telemetry, and custom ventilation algorithms designed completely in-house.",
    icon: Cpu,
    color: {
      bg: "bg-med-teal-50",
      border: "border-med-teal-200",
      text: "text-med-teal-600",
      glow: "group-hover:border-med-teal-500/50",
      badge: "bg-med-teal-100/70 text-med-teal-800",
    },
    keyFeatures: [
      "Proprietary Closed-Loop Pneumatic Control",
      "Real-Time Pulmonary Flow & Pressure Loops",
      "Custom Firmware with Microsecond Sensor Telemetry",
    ],
    pdfRef: "Panakeia Research & Clinical Whitepaper",
  },
  {
    id: "in-house-mfg",
    tag: "Complete Autonomy",
    title: "100% In-House Precision Manufacturing",
    subtitle: "Zero Imported Dependency • AMTZ Visakhapatnam",
    description:
      "Every single component, structural chassis, electronic PCB assembly, and pneumatic manifold is machined, assembled, and calibrated in-house by Panakeia itself, ensuring guaranteed spare parts availability.",
    icon: Building2,
    color: {
      bg: "bg-navy-50",
      border: "border-navy-200",
      text: "text-navy-900",
      glow: "group-hover:border-navy-400/50",
      badge: "bg-navy-100/80 text-navy-900",
    },
    keyFeatures: [
      "100% In-House Fabricated Parts & Electronic Boards",
      "Sub-48-Hour Domestic Spare Parts Dispatch Guarantee",
      "Complete Component Traceability & Lifecycle Support",
    ],
    pdfRef: "Manufacturing Facility & Capabilities Dossier",
  },
  {
    id: "clinical-ergonomics",
    tag: "Clinician-Centric",
    title: "Ergonomics & Patient Safety",
    subtitle: "Built Alongside Practicing Intensivists",
    description:
      "Designed with input from senior anaesthesiologists to deliver intuitive touchscreen workflows, mechanical anti-hypoxic safety fail-safes, and continuous monitoring that minimizes clinician fatigue.",
    icon: ShieldCheck,
    color: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      glow: "group-hover:border-emerald-500/50",
      badge: "bg-emerald-100/70 text-emerald-800",
    },
    keyFeatures: [
      "Mechanical Fail-Safe Hypoxic Guard (Min 25% O2)",
      "Intuitive Touchscreen UI Designed for Low-Light OTs",
      "Hot-Swappable 3.5+ Hour Battery Backup Architecture",
    ],
    pdfRef: "Critical Care Safety Protocol",
  },
  {
    id: "quality-compliance",
    tag: "Global Standards",
    title: "Certified International Quality",
    subtitle: "Audited Regulatory & Medical Approvals",
    description:
      "Built with strict adherence to ISO 13485:2016 (Medical Devices Quality Management) and ISO 9001:2015 standards, complying with CDSCO regulatory guidelines through comprehensive factory stress tests.",
    icon: Award,
    color: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-600",
      glow: "group-hover:border-amber-500/50",
      badge: "bg-amber-100/70 text-amber-900",
    },
    keyFeatures: [
      "ISO 13485:2016 Certified Facility",
      "ISO 9001:2015 Quality Management",
      "CDSCO & International Standards Compliant",
    ],
    pdfRef: "Official ISO & CDSCO Audit",
  },
];

export function IndigenousExcellenceStrip() {
  return (
    <section
      id="home-content"
      className="bg-white border-b border-clinical-200 py-12 lg:py-16 shadow-xs relative z-20 overflow-hidden"
    >
      {/* Subtle medical watermark backdrop */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative subtle ambient glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-med-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 space-y-10 lg:space-y-12">
        {/* TOP BRAND EMBLEM & EDITORIAL HEADER */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50/90 border border-navy-200/80 text-navy-900 text-xs font-semibold tracking-wide shadow-2xs">
            <span className="inline-block w-2 h-2 rounded-full bg-india-saffron animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-india-saffron font-bold">
              Make in India
            </span>
            <span className="text-clinical-300">•</span>
            <span className="text-clinical-700">100% In-House Manufactured Parts</span>
            <span className="text-clinical-300">•</span>
            <span className="text-med-teal-700 font-medium">CDSCO Compliant</span>
          </div>

          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-med-teal-600 font-mono">
              INNOVATE • ENGINEER • EMPOWER
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy-950 tracking-tight leading-snug">
              Engineering Tomorrow’s Critical Care with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-med-teal-600 to-navy-800">
                Indigenous Precision
              </span>
            </h2>
            <p className="text-sm sm:text-base text-clinical-600 max-w-2xl mx-auto leading-relaxed">
              Advanced anaesthesia machines and life-support ventilators indigenously designed
              and manufactured to international clinical standards — safeguarding patients across
              high-acuity hospital suites.
            </p>
          </div>
        </div>

        {/* 4 CORE CLINICAL & ENGINEERING PILLARS (NO NUMBERS - PURE CLASSY ARCHITECTURE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${pillar.color.glow}`}
              >
                {/* Top Row: Icon + Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${pillar.color.bg} ${pillar.color.text} flex items-center justify-center border ${pillar.color.border} shadow-inner group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${pillar.color.badge} font-mono`}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-base font-bold text-navy-950 font-heading group-hover:text-navy-800 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-medium text-med-teal-600 mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Highlights Bullet Pills */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {pillar.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-clinical-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-med-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM QUICK ACTIONS & BROCHURE ACCESS BAR */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 text-xs text-clinical-600">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-navy-950">Explore Products:</span>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/products#anaesthesia"
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-navy-900 font-medium transition-colors"
              >
                Anaesthesia Workstations
              </Link>
              <Link
                href="/products#ventilator"
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-navy-900 font-medium transition-colors"
              >
                ICU & Portable Ventilators
              </Link>
              <Link
                href="/products#monitoring"
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-navy-900 font-medium transition-colors"
              >
                Multi-Para Monitors
              </Link>
              <Link
                href="/products#infusion"
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-navy-900 font-medium transition-colors"
              >
                Infusion & Syringe Pumps
              </Link>
              <Link
                href="/products"
                className="px-2.5 py-1 rounded-md bg-med-teal-50 hover:bg-med-teal-600 text-med-teal-700 hover:text-white font-bold border border-med-teal-200 transition-colors inline-flex items-center gap-1 shadow-2xs"
              >
                <span>View All Products</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/quality"
              className="inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:text-med-teal-600 transition-colors group"
            >
              <FileCheck className="w-3.5 h-3.5 text-med-teal-600" />
              <span>Regulatory Compliance</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:text-med-teal-600 transition-colors group"
            >
              <span>In-House Manufacturing Facility</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
