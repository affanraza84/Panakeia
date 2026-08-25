"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { 
  ArrowRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Activity,
  CheckCircle2,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EquipmentItem {
  id: string;
  name: string;
  slug: string;
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  imageSrc: string;
}

const equipmentData: EquipmentItem[] = [
  {
    id: "three-gas-advanced",
    name: "Three-Gas Advanced Anaesthesia Workstation",
    slug: "three-gas-system-advanced-anaesthesia-workstation",
    categoryLabel: "High-Acuity Surgical Workstation",
    badge: "Flagship OT System",
    tagline: "Indigenous Multi-Gas Pneumatic Blending with 12.1-inch Capacitive Touchscreen Ventilator",
    description: "Engineered for complex cardiothoracic, neuro, and pediatric surgical operations. Integrates electronic gas mixing (O2, N2O, Medical Air) with dual-vaporizer manifold and advanced spirometry loops.",
    highlights: [
      "12.1\" Color TFT Touchscreen with Pressure-Volume & Flow-Volume clinical loops",
      "Cascade 3-Gas flowmeters with mechanical hypoxic guard and auxiliary O2 flush",
      "Advanced modes: VCV, PCV, SIMV-V, SIMV-P, PSV/CPAP, and PRVC",
      "Active Anaesthetic Gas Scavenging System (AGSS) interface built-in",
      "180-minute hot-swappable dual lithium battery backup system"
    ],
    specs: [
      { label: "Gas Inlets", value: "O2, N2O, Medical Air (280-600 kPa)" },
      { label: "Tidal Volume", value: "10 mL – 1,600 mL (Adult/Paediatric/Infant)" },
      { label: "Absorber", value: "1.8L Dual-Chamber Quick-Release" },
      { label: "Standard", value: "ISO 80601-2-13 / CDSCO MD-13" },
      { label: "Vaporizers", value: "Dual Selectatec-compatible Interlock Bar" },
      { label: "Manufacture", value: "AMTZ MedTech Zone, Visakhapatnam" }
    ],
    imageSrc: "/images/products/three-gas-system-advanced-anaesthesia-workstation.jpeg",
  },
  {
    id: "two-gas-basic",
    name: "Two-Gas System Basic Anaesthesia Workstation",
    slug: "two-gas-system-basic-anaesthesia-workstation",
    categoryLabel: "Compact OT Delivery Station",
    badge: "Workhorse Reliability",
    tagline: "Agile Dual-Gas Precision Anaesthesia Delivery for Daycare & Secondary Surgical Suites",
    description: "A compact, highly mobile workstation engineered for maximum surgical uptime in high-throughput operating rooms. Features anti-hypoxic safety guard and autoclavable patient circuit.",
    highlights: [
      "Dual-tube flowmeter cascade with mechanical anti-hypoxic linkage (≥25% O2)",
      "Pneumatically driven ventilator with electronic pressure/volume telemetry",
      "Single-action quick-release 1.5L autoclavable CO2 absorber",
      "Heavy-duty mobile chassis with central brake antistatic castors",
      "120-minute uninterrupted battery autonomy"
    ],
    specs: [
      { label: "Gas Supply", value: "2 Gases: O2 & N2O with Pin-Index Yokes" },
      { label: "Tidal Volume", value: "20 mL – 1,500 mL" },
      { label: "Vent Modes", value: "VCV, PCV, SIMV, Manual, Spontaneous" },
      { label: "Safety", value: "Mechanical Hypoxic Guard (min 25% O2)" },
      { label: "Absorber", value: "1.5L Autoclavable Quick-Release" },
      { label: "Origin", value: "100% Indigenous AMTZ IHUB C-20" }
    ],
    imageSrc: "/images/products/two-gas-system-basic-anaesthesia-workstation.jpeg",
  },
  {
    id: "basic-premium",
    name: "Basic Premium Anaesthesia Machine",
    slug: "basic-premium-anaesthesia-machine",
    categoryLabel: "Modular Surgical Platform",
    badge: "Heavy-Duty Ergonomics",
    tagline: "Modular Stainless-Steel Anaesthesia Trolley with Monitor Swivel Arm & Precision Vaporizer Rail",
    description: "Built on a ruggedized antimicrobial stainless steel frame with integrated 3-tier locking storage drawers, auxiliary suction, and an overhead multi-parameter monitor bracket.",
    highlights: [
      "High-precision fine-adjustment micro-flowmeters for low-flow anaesthesia",
      "Overhead monitor swivel arm accommodating 10-15\" multiparameter displays",
      "3 Full-extension steel storage drawers for clinical disposables and drugs",
      "Integrated emergency O2 flush with recessed safety collar",
      "Autoclavable patient breathing manifold with adjustable APL valve"
    ],
    specs: [
      { label: "Gas Inputs", value: "O2 & N2O Pipeline + Cylinder Yokes" },
      { label: "Flow Range", value: "Dual cascade 0.05 – 10 L/min" },
      { label: "Mounting", value: "Selectatec Rail with Interlock" },
      { label: "Structure", value: "Powder-coated medical steel chassis" },
      { label: "Storage", value: "3 Large full-extension locking drawers" },
      { label: "Mobility", value: "4 Antistatic castors with foot brakes" }
    ],
    imageSrc: "/images/products/basic-premium-anaesthesia-machine.jpeg",
  },
  {
    id: "icu-ventilator",
    name: "Advanced ICU Critical Care Ventilator",
    slug: "icu-critical-care-ventilator",
    categoryLabel: "Intensive Care Turbine Ventilator",
    badge: "High-Acuity Life Support",
    tagline: "Turbine-Driven Multi-Functional Intensive Care Ventilator for Adult, Paediatric & Neonatal Life Support",
    description: "An advanced indigenous critical care ventilator powered by an ultra-quiet blower turbine. Delivers invasive and non-invasive ventilation (NIV & HFNC) with zero external compressor dependency.",
    highlights: [
      "15.6\" High-Resolution Tiltable Capacitive Touchscreen with 360° alarm light bar",
      "Ultra-quiet blower turbine rated for 40,000+ hours operation",
      "High Flow Oxygen Therapy (HFNC: 2-80 L/min) with precision FiO2 titration",
      "Full mechanics: P0.1, NIF, Auto-PEEP, RSBI, Static Compliance & Resistance",
      "Hot-swappable dual battery system delivering 4+ hours continuous operation"
    ],
    specs: [
      { label: "Patient Range", value: "Adult, Paediatric, and Neonatal (2mL-2000mL)" },
      { label: "Peak Flow", value: "Up to 240 L/min rapid turbine response" },
      { label: "Modes", value: "VCV, PCV, SIMV, CPAP/PSV, APRV, PRVC, HFNC" },
      { label: "PEEP / CPAP", value: "0 to 50 cmH2O precision electronic valve" },
      { label: "FiO2 Range", value: "21% to 100% calibrated titration" },
      { label: "Display", value: "15.6\" Full HD multi-touch anti-glare" }
    ],
    imageSrc: "/images/products/icu-ventilator.jpeg",
  },
  {
    id: "patient-monitor",
    name: "Multi-Parameter Patient Monitor",
    slug: "multi-para-patient-monitor",
    categoryLabel: "High-Acuity Vital Signs Monitor",
    badge: "Clinical Precision",
    tagline: "12.1-inch Color Touchscreen Vital Signs Monitor with Anti-Motion SpO2 & Arrhythmia Analysis",
    description: "Indigenously engineered for continuous real-time physiological monitoring across OT and ICU suites. Features 3/5-lead ECG with arrhythmia analysis, anti-motion SpO2, and smart NIBP.",
    highlights: [
      "12.1\" Color TFT Touchscreen with multi-waveform high-contrast layout",
      "3/5-lead ECG analysis with 23 arrhythmia classifications and ST detection",
      "Anti-motion low-perfusion SpO2 algorithm with perfusion index telemetry",
      "Overpressure-protected smart NIBP with auto-interval measurement cycles",
      "4+ Hours hot-swappable internal lithium-ion battery pack"
    ],
    specs: [
      { label: "Display", value: "12.1\" Color TFT Touchscreen" },
      { label: "Parameters", value: "ECG, SpO2, NIBP, RESP, 2-Temp, PR" },
      { label: "Arrhythmia", value: "23 Classifications + ST Analysis" },
      { label: "SpO2 Range", value: "0 - 100% (±2% Accuracy)" },
      { label: "Trends", value: "160 Hours tabular & graphic data" },
      { label: "Battery", value: "4+ Hours continuous monitoring" }
    ],
    imageSrc: "/images/products/multi-para-patient-monitor.jpeg",
  },
  {
    id: "syringe-infusion-pump",
    name: "Syringe & Volumetric Infusion Pump",
    slug: "syringe-infusion-pump",
    categoryLabel: "Smart Medication Delivery",
    badge: "Micro-Step Precision",
    tagline: "Dual-Channel Syringe & Infusion Pump System with Comprehensive Drug Library & Anti-Bolus Guard",
    description: "Engineered for critical care and anaesthesia drug delivery with ultra-precise stepper motor drive mechanics, automatic syringe recognition, and dynamic occlusion pressure release.",
    highlights: [
      "Micro-step motor precision from 0.01 mL/h to 1500 mL/h with ±2% accuracy",
      "Automatic syringe brand & size detection for 2mL to 60mL syringes",
      "Comprehensive onboard Drug Library with safe concentration limits",
      "12-Level dynamic occlusion pressure detection with anti-bolus safety",
      "Stackable interlocking frame for multi-pump IV pole mounting towers"
    ],
    specs: [
      { label: "Flow Range", value: "0.01 – 1500.00 mL/h" },
      { label: "Accuracy", value: "±2% (Mechanical ±1%)" },
      { label: "Syringe Size", value: "2, 5, 10, 20, 30, 50/60 mL" },
      { label: "Occlusion", value: "12 Adjustable pressure levels" },
      { label: "Display", value: "3.5\" High-Contrast Color LCD" },
      { label: "Battery", value: "6+ Hours continuous runtime" }
    ],
    imageSrc: "/images/products/syringe-infusion-pump.jpeg",
  },
  {
    id: "emergency-resuscitation-kit",
    name: "Emergency Resuscitation & Airway Kit",
    slug: "emergency-resuscitation-kit",
    categoryLabel: "Emergency Airway & Trauma",
    badge: "Field & OT Ready",
    tagline: "Comprehensive Clinical Trauma & Airway Resuscitation Kit in Waterproof Shockproof Hard Case",
    description: "A complete field-ready airway management and resuscitation station. Includes adult & pediatric silicone manual resuscitators, LED fiber-optic laryngoscope set, airways, and suction tools.",
    highlights: [
      "Autoclavable medical silicone manual resuscitators (Adult 1500mL & Paediatric 550mL)",
      "Stainless steel fiber-optic LED laryngoscope set with 4 interchangeable blades",
      "Oxygen reservoir bag assembly with non-rebreathing valve manifold",
      "Complete assortment of cushioned silicone face masks & Guedel airways",
      "Heavy-duty IP67 waterproof and impact-resistant custom foam hard case"
    ],
    specs: [
      { label: "Resuscitator", value: "1500mL (Adult) / 550mL (Paediatric)" },
      { label: "Laryngoscope", value: "Fiber-Optic LED (Blades 1-4)" },
      { label: "Masks", value: "Sizes 0, 1, 2, 3, 4, 5 Silicone" },
      { label: "Airways", value: "Guedel Airways + Stylet + Forceps" },
      { label: "Case Rating", value: "IP67 Waterproof & Impact-Resistant" },
      { label: "Standard", value: "ISO 10651-4 Compliant" }
    ],
    imageSrc: "/images/products/emergency-resuscitation-kit.jpeg",
  },
];

export function EquipmentShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const current = equipmentData[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? equipmentData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === equipmentData.length - 1 ? 0 : prev + 1));
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
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-5xl mx-auto">
          {equipmentData.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-med-teal-500 text-white shadow-lg shadow-med-teal-500/25 border border-med-teal-400"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white/80 shrink-0" />
                <span className="truncate max-w-[180px] sm:max-w-none">{item.name.replace("Panakeia ", "")}</span>
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
          {/* Left Column: Premium Pure White Hardware Display Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] max-w-[520px] rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center p-4 sm:p-6 overflow-hidden group shadow-md">
              {/* Status Badges on Image */}
              <div className="absolute top-3.5 left-3.5 z-20 flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-white/95 border border-med-teal-500/30 text-med-teal-700 backdrop-blur-md shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-med-teal-500 animate-pulse" />
                  {current.badge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold text-slate-700 bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xs">
                  AMTZ VIZAG IHUB
                </span>
              </div>

              {/* Expand Lightbox Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                aria-label="View Fullscreen"
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-xl bg-white/95 hover:bg-med-teal-600 text-slate-700 hover:text-white border border-slate-200 flex items-center justify-center transition-colors shadow-md group/btn cursor-pointer"
                title="Expand Full Photo"
              >
                <Maximize2 className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
              </button>

              {/* Product Image with Animated Fade/Slide on Pure White Canvas */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-full cursor-pointer flex items-center justify-center"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={current.imageSrc}
                    alt={current.name}
                    fill
                    quality={95}
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-contain object-center filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom hint overlay */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                <span className="text-[11px] font-semibold text-slate-700 bg-white/95 px-3 py-1 rounded-full border border-slate-200 backdrop-blur-sm shadow-xs">
                  Click image to zoom high-resolution view
                </span>
              </div>
            </div>

            {/* Quick Thumbnail Navigation Bar with Pure White Backgrounds */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-2 w-full max-w-[520px] mt-4">
              {equipmentData.map((item, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={`thumb-${item.id}`}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative h-14 sm:h-16 rounded-xl overflow-hidden bg-white border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-med-teal-500 ring-2 ring-med-teal-500/40 scale-[1.02] shadow-md shadow-med-teal-500/20"
                        : "border-slate-300/80 opacity-75 hover:opacity-100 hover:border-slate-400"
                    }`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      quality={95}
                      unoptimized
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

      {/* Fullscreen Lightbox Modal with Pure White Canvas */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-2xl sm:max-w-3xl w-full bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col p-4 sm:p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-navy-950 font-heading">{current.name}</h4>
                  <p className="text-xs text-med-teal-700 font-medium">{current.categoryLabel} — Indigenous Manufacturing (AMTZ)</p>
                </div>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image in Modal with Pure White Background */}
              <div 
                style={{ height: "360px", minHeight: "360px", position: "relative" }}
                className="relative w-full my-3 flex items-center justify-center bg-slate-50/50 rounded-xl p-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.imageSrc}
                  alt={current.name}
                  className="max-h-[320px] max-w-full w-auto h-auto object-contain filter drop-shadow-sm rounded-lg bg-white"
                />
              </div>

              {/* Modal Navigation Footer */}
              <div className="w-full flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm font-semibold text-slate-700 transition-colors cursor-pointer"
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
                        i === activeIdx ? "bg-med-teal-500 w-6" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm font-semibold text-slate-700 transition-colors cursor-pointer"
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
