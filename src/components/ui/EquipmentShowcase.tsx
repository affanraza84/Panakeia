"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";
import { Badge } from "./Badge";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Activity,
  Layers,
  Sparkles,
  Download,
  FileText,
} from "lucide-react";

interface EquipmentItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  imageSrc: string;
  badge: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  brochureUrl?: string;
}

const equipmentData: EquipmentItem[] = [
  {
    id: "three-gas-advanced",
    slug: "three-gas-system-advanced-anaesthesia-workstation",
    name: "Three-Gas System Advanced Anaesthesia Workstation",
    category: "anaesthesia",
    categoryLabel: "High-Acuity OT Workstation",
    tagline: "Flagship Indigenously Engineered 3-Gas Delivery Platform with 12.1\" Touchscreen Ventilator",
    description:
      "Designed and manufactured at AMTZ Visakhapatnam for multi-speciality and tertiary surgical operating suites. Combines digital O2/N2O/Air blending with active scavenging and fail-safe mechanical gas flowmeters.",
    imageSrc: "/images/products/three-gas-system-advanced-anaesthesia-workstation.jpeg",
    badge: "Flagship 3-Gas System",
    highlights: [
      "12.1\" Color TFT anti-glare capacitive touchscreen with real-time P-T, F-T, V-T loops",
      "Full digital electronic gas mixing (O2, N2O, Air) + mechanical backup cascade",
      "Integrated heated breathing system with 1.8L quick-release dual-chamber CO2 canister",
      "Dual Selectatec-compatible tool-free vaporizer bar with interlock system",
      "180-minute hot-swappable dual battery backup for uninterrupted critical procedures",
    ],
    specs: [
      { label: "Gas Inputs", value: "O2, N2O, Medical Air" },
      { label: "Ventilator Modes", value: "VCV, PCV, SIMV-V, SIMV-P, PSV, PRVC" },
      { label: "Tidal Volume", value: "10 mL – 1,600 mL" },
      { label: "Display", value: "12.1\" Color HD Touch" },
      { label: "Certification", value: "ISO 80601-2-13 / CDSCO MD-13" },
      { label: "Facility", value: "AMTZ Vizag Zone" },
    ],
    brochureUrl: "/brochures/panakeia-three-gas-specsheet.pdf",
  },
  {
    id: "two-gas-basic",
    slug: "two-gas-system-basic-anaesthesia-workstation",
    name: "Two-Gas System Basic Anaesthesia Workstation",
    category: "anaesthesia",
    categoryLabel: "Daycare & Secondary OT",
    tagline: "Compact Precision O2/N2O Workstation with Mechanical Anti-Hypoxic Safety Guard",
    description:
      "Engineered for secondary surgical centers, daycare clinics, and high-turnover regional operating theatres. Features mechanical hypoxic link to ensure minimum 25% oxygen concentration at all flow rates.",
    imageSrc: "/images/products/two-gas-system-basic-anaesthesia-workstation.jpeg",
    badge: "High-Turnover Compact",
    highlights: [
      "Precision dual-tube cascade flowmeter for Oxygen and Nitrous Oxide",
      "Pneumatically driven, electronically monitored ventilator with real-time airway metrics",
      "Mechanical Hypoxic Guard linking system ensuring patient safety (≥25% O2)",
      "Single-action quick-release 1.5L autoclavable CO2 absorber system",
      "Compact footprint with heavy-duty antistatic central-locking wheels",
    ],
    specs: [
      { label: "Gas Inputs", value: "O2 & N2O Pipeline + Yokes" },
      { label: "Ventilator Modes", value: "VCV, PCV, SIMV, Manual" },
      { label: "Tidal Volume", value: "20 mL – 1,500 mL" },
      { label: "Absorber", value: "1.5L Quick-Release" },
      { label: "Battery Autonomy", value: "120 min Runtime" },
      { label: "Chassis", value: "Medical Grade Steel" },
    ],
    brochureUrl: "/brochures/panakeia-two-gas-specsheet.pdf",
  },
  {
    id: "basic-premium",
    slug: "basic-premium-anaesthesia-machine",
    name: "Basic Premium Anaesthesia Machine",
    category: "anaesthesia",
    categoryLabel: "General Surgery Workhorse",
    tagline: "Heavy-Duty Ergonomic Anaesthesia Station with Modular Patient Monitor Arm & Storage",
    description:
      "A ruggedized clinical anaesthesia workstation built for everyday surgical reliability. Equipped with full-extension locking equipment drawers, stainless-steel work shelf, and precision Selectatec vaporizer mounting.",
    imageSrc: "/images/products/basic-premium-anaesthesia-machine.jpeg",
    badge: "Modular Surgical Station",
    highlights: [
      "High-precision dual flowmeter cascade with fine micro-adjustment for low flow",
      "Integrated top swivel mount accommodating 10\" to 15\" multi-parameter patient monitors",
      "Spacious 3-tier locking drawer system for circuits, masks, and drugs",
      "Auxiliary common gas outlet (ACGO) for pediatric Bain & Jackson-Rees circuits",
      "Integrated pipeline pressure gauges and auxiliary cylinder pin-index yokes",
    ],
    specs: [
      { label: "Mounting Arm", value: "Swivel Multi-Monitor Arm" },
      { label: "Flowmeter", value: "Dual Cascade 0.05-10 L/min" },
      { label: "Vaporizer Rail", value: "Selectatec Interlock" },
      { label: "Storage", value: "3 Locking Drawers" },
      { label: "Structure", value: "Powder-coated Stainless Steel" },
      { label: "Mobility", value: "4 Antistatic Braked Castors" },
    ],
    brochureUrl: "/brochures/panakeia-premium-anaesthesia-specsheet.pdf",
  },
  {
    id: "icu-ventilator",
    slug: "icu-critical-care-ventilator",
    name: "Advanced ICU Critical Care Ventilator",
    category: "ventilator",
    categoryLabel: "Intensive Care Life Support",
    tagline: "Turbine-Driven High-Acuity ICU Ventilator for Adult, Paediatric & Neonatal Care",
    description:
      "State-of-the-art intensive care ventilation engineered at AMTZ. Powered by a high-end blower turbine that runs independently of external compressed air lines, offering seamless invasive, NIV, and High-Flow Nasal Cannula therapy.",
    imageSrc: "/images/products/icu-ventilator.jpeg",
    badge: "Turbine ICU System",
    highlights: [
      "15.6\" Full HD multi-touch color display with 360-degree top alarm beacon bar",
      "Ultra-quiet blower turbine (40,000 hrs rating) - zero compressed air needed",
      "Complete invasive & non-invasive modes: V-A/C, P-A/C, SIMV, CPAP/PSV, APRV, PRVC, HFNC",
      "Integrated High Flow Oxygen Therapy (HFNC) up to 80 L/min with accurate FiO2 titration",
      "Dual hot-swappable batteries providing 4+ hours of uninterrupted ICU runtime",
    ],
    specs: [
      { label: "Patients", value: "Adult, Pediatric & Neonatal" },
      { label: "Tidal Volume", value: "2 mL – 2,000 mL" },
      { label: "Peak Flow", value: "Up to 240 L/min" },
      { label: "HFNC Flow", value: "2 to 80 L/min Titration" },
      { label: "PEEP / CPAP", value: "0 to 50 cmH2O" },
      { label: "Battery Life", value: "4+ Hours Dual Battery" },
    ],
    brochureUrl: "/brochures/panakeia-icu-ventilator-specsheet.pdf",
  },
];

export function EquipmentShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const current = equipmentData[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % equipmentData.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + equipmentData.length) % equipmentData.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden">
      {/* Background Decorative Tech Grid & Glows */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-med-teal-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-med-teal-950/80 border border-med-teal-500/30 text-med-teal-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-med-teal-400" />
            <span>Indigenous Engineering Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-white">
            Precision Critical Care Equipment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore Panakeia&apos;s indigenous medical device portfolio manufactured at AMTZ Visakhapatnam — delivering surgical reliability, clinical ergonomics, and zero import downtime.
          </p>
        </div>

        {/* Tab Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {equipmentData.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-med-teal-500 text-white shadow-lg shadow-med-teal-500/25 border border-med-teal-400"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white/80 shrink-0" />
                <span className="truncate max-w-[200px] sm:max-w-none">{item.name.replace("Panakeia ", "")}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-xl bg-med-teal-400/20 pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 rounded-3xl border border-slate-800/80 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Left Column: Premium Hardware Display Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] max-w-[520px] rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-700/60 flex items-center justify-center p-4 sm:p-6 overflow-hidden group shadow-inner">
              {/* Radial Lighting Accent behind equipment */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-med-teal-500/20 via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Status Badges on Image */}
              <div className="absolute top-3.5 left-3.5 z-20 flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 border border-med-teal-500/40 text-med-teal-300 backdrop-blur-md shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-med-teal-400 animate-pulse" />
                  {current.badge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-black/60 backdrop-blur-md border border-white/10">
                  AMTZ VIZAG IHUB
                </span>
              </div>

              {/* Expand Lightbox Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                aria-label="View Fullscreen"
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-med-teal-600 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors shadow-md group/btn cursor-pointer"
                title="Expand Full Photo"
              >
                <Maximize2 className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
              </button>

              {/* Product Image with Animated Fade/Slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={current.imageSrc}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-contain object-center drop-shadow-[0_20px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom hint overlay */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                <span className="text-[11px] font-medium text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800 backdrop-blur-sm shadow-xs">
                  Click image to zoom high-resolution view
                </span>
              </div>
            </div>

            {/* Quick Thumbnail Navigation Bar */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-[520px] mt-4">
              {equipmentData.map((item, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={`thumb-${item.id}`}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative h-16 sm:h-20 rounded-xl overflow-hidden bg-slate-950 border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-med-teal-400 ring-2 ring-med-teal-500/40 scale-[1.02] shadow-md shadow-med-teal-500/20"
                        : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700"
                    }`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      sizes="120px"
                      className="object-contain p-1"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Engineering Features & Specifications */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-med-teal-400 bg-med-teal-950/90 px-3 py-1 rounded-full border border-med-teal-500/30 inline-block mb-2">
                    {current.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {current.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                    {current.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Key Engineering Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-med-teal-400" />
                    Key Clinical & Engineering Highlights
                  </h4>
                  <div className="space-y-2">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Specs Matrix */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  {current.specs.map((sp, idx) => (
                    <div key={idx} className="border-l-2 border-med-teal-500/40 pl-2.5">
                      <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-mono">
                        {sp.label}
                      </span>
                      <span className="text-white font-semibold font-mono text-xs sm:text-[13px] block truncate">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={`/contact?product=${current.slug}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-med-teal-500 to-med-teal-600 hover:from-med-teal-600 hover:to-med-teal-700 shadow-md shadow-med-teal-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Request Quotation & Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/products/${current.slug}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all duration-200"
                  >
                    <FileText className="w-4 h-4 text-med-teal-400" />
                    <span>Full Technical Datasheet</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Catalog Link Bar */}
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-med-teal-400 hover:text-med-teal-300 transition-colors bg-slate-900/60 hover:bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 hover:border-med-teal-500/40"
          >
            <span>Browse Full Critical Care Catalog & Technical Sheets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden flex flex-col items-center justify-between p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-slate-400">{current.categoryLabel} — Indigenous Manufacturing (AMTZ)</p>
                </div>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image in Modal */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] my-4 flex items-center justify-center">
                <Image
                  src={current.imageSrc}
                  alt={current.name}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Navigation Footer */}
              <div className="w-full flex items-center justify-between pt-3 border-t border-slate-800">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {equipmentData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        i === activeIdx ? "bg-med-teal-400 w-6" : "bg-slate-700 hover:bg-slate-500"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
