"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Sparkles,
  Building2,
  ShieldCheck,
  Award,
  Stethoscope,
  Activity,
  HeartPulse,
  Ambulance,
  CheckCircle2,
  ArrowRight,
  Zap,
  Cpu,
  Layers,
  FileCheck,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      "Color Touchscreen Waveform Telemetry",
      "Dynamic Pressure & Flow Closed Loops",
      "Adult, Neonatal & Paediatric Modes",
    ],
    pdfRef: "Panakeia R&D Lab Specs",
  },
  {
    id: "inhouse-manufacturing",
    tag: "100% In-House Parts",
    title: "Precision Manufacturing",
    subtitle: "State-of-the-Art Production Facility",
    description:
      "All components and parts are manufactured directly by Panakeia itself with robotic precision, calibrated ascending bellows tooling, cleanroom electronics assembly, and 100% component traceability.",
    icon: Building2,
    color: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      glow: "group-hover:border-blue-500/50",
      badge: "bg-blue-100/70 text-blue-800",
    },
    keyFeatures: [
      "100% In-House Parts Manufacturing",
      "Calibrated Ascending Bellows Machining",
      "Immediate Spares & Component Traceability",
    ],
    pdfRef: "Manufacturing Facility Showcase",
  },
  {
    id: "clinical-safety",
    tag: "Patient-Centric",
    title: "Fail-Safe Clinical Safety",
    subtitle: "Multi-Tier Protection & Ergonomics",
    description:
      "Engineered in collaboration with active senior anaesthesiologists and intensivists. Integrates mechanical anti-hypoxic guards, anti-motion telemetry, emergency O2 flush, and 360° visual alert beacons.",
    icon: ShieldCheck,
    color: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      glow: "group-hover:border-emerald-500/50",
      badge: "bg-emerald-100/70 text-emerald-800",
    },
    keyFeatures: [
      "Mechanical Anti-Hypoxic Safety Link",
      "Automatic Apnea & Overpressure Backup",
      "360° High-Visibility Alarm Light Bar",
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

interface ClinicalEnvironment {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  categoryHref: string;
  categoryLabel: string;
  summary: string;
  points: string[];
  specs: {
    label: string;
    value: string;
  }[];
  compatibleProducts: {
    name: string;
    category: string;
    href: string;
    tag: string;
  }[];
  safeguards: string[];
}

const CLINICAL_ENVIRONMENTS: ClinicalEnvironment[] = [
  {
    id: "ot",
    name: "Operation Theatres",
    icon: Stethoscope,
    badge: "Surgical Suites",
    categoryHref: "/products#anaesthesia",
    categoryLabel: "Anaesthesia & OT Systems",
    summary:
      "Engineered for high-acuity general, cardiac, neuro, and thoracic surgical theatres requiring precise volatile delivery, multi-gas blending, and active waste scavenging.",
    points: [
      "Multi-Gas (O2, N2O, Medical Air) precision delivery with mechanical anti-hypoxic linkage",
      "Dual Selectatec-compatible tool-free vaporizer manifolds with interlock mechanism",
      "Integrated active anaesthetic gas scavenging system (AGSS) for pollution-free OR air",
      "Continuous pulmonary mechanics telemetry with Pressure-Volume and Flow-Volume clinical loops",
    ],
    specs: [
      { label: "Medical Gas Supply", value: "Triple Gas: O2, N2O & Medical Air (280–600 kPa)" },
      { label: "Ventilation Acuity", value: "VCV, PCV, SIMV-V, SIMV-P, PSV/CPAP, PRVC & Manual" },
      { label: "Breathing System", value: "Heated dual-chamber quick-release CO2 absorber (1.8L)" },
      { label: "Battery Autonomy", value: "180-minute hot-swappable dual lithium battery backup" },
    ],
    compatibleProducts: [
      {
        name: "Three-Gas System Advanced Anaesthesia Machine",
        category: "Anaesthesia",
        href: "/products/three-gas-system-advanced-anaesthesia-workstation",
        tag: "Flagship OT System",
      },
      {
        name: "Two-Gas System Basic Anaesthesia Machine",
        category: "Anaesthesia",
        href: "/products/two-gas-system-basic-anaesthesia-workstation",
        tag: "High-Throughput OT",
      },
      {
        name: "Multi-Parameter Patient Monitor",
        category: "Monitoring",
        href: "/products/multi-para-patient-monitor",
        tag: "12.1\" Touchscreen",
      },
    ],
    safeguards: [
      "Mechanical anti-hypoxic safety guard automatically maintains a minimum 25% oxygen concentration across all gas deliveries.",
      "Selectatec manifold interlock bar strictly prevents concurrent activation of multiple volatile agent vaporizers.",
      "Direct active gas scavenging (AGSS) interface eliminates occupational anaesthetic exposure in surgical operating rooms.",
    ],
  },
  {
    id: "icu",
    name: "Intensive Care Units",
    icon: Activity,
    badge: "High-Acuity ICU / CCU",
    categoryHref: "/products#ventilator",
    categoryLabel: "Critical Care Ventilation",
    summary:
      "Tertiary intensive care units, coronary care units, and post-surgical recovery suites demanding continuous invasive and non-invasive life-support with zero external compressor dependency.",
    points: [
      "Invasive and Non-Invasive (NIV) positive pressure mechanical life-support",
      "High Flow Nasal Cannula (HFNC: 2–80 L/min) oxygen therapy with calibrated FiO2 titration",
      "Advanced pulmonary mechanics diagnostics: P0.1, NIF, Auto-PEEP, RSBI, Static Compliance & Resistance",
      "Ultra-quiet 40,000+ hour operational lifespan blower turbine drive requiring zero central compressed air",
    ],
    specs: [
      { label: "Drive Mechanism", value: "Ultra-quiet blower turbine (40,000+ hour rating, compressor-free)" },
      { label: "Display & Controls", value: "15.6\" Full HD tiltable multi-touch display with 360° alert light bar" },
      { label: "Patient Spectrum", value: "Adult, Paediatric, and Neonatal life-support modes" },
      { label: "Battery Autonomy", value: "4+ hours continuous operation with dual hot-swap battery bays" },
    ],
    compatibleProducts: [
      {
        name: "Advanced ICU Critical Care Ventilator",
        category: "Ventilator",
        href: "/products/icu-critical-care-ventilator",
        tag: "Turbine-Driven",
      },
      {
        name: "Multi-Parameter Patient Monitor",
        category: "Monitoring",
        href: "/products/multi-para-patient-monitor",
        tag: "Arrhythmia Analysis",
      },
      {
        name: "Syringe & Infusion Pump Series",
        category: "Infusion",
        href: "/products/category/syringe-infusion-pumps",
        tag: "Precision Delivery",
      },
    ],
    safeguards: [
      "Internal turbine drive provides autonomous compressed air, safeguarding against central hospital pipeline pressure drops.",
      "Comprehensive weaning diagnostics calculate real-time RSBI, P0.1 respiratory drive, and negative inspiratory force.",
      "Independent dual overpressure valves and automatic apnea ventilation prevent barotrauma and patient hypoxia.",
    ],
  },
  {
    id: "transport",
    name: "Emergency & Transport",
    icon: Ambulance,
    badge: "Mobile Life Support",
    categoryHref: "/products#emergency",
    categoryLabel: "Emergency Resuscitation",
    summary:
      "Hospital emergency trauma departments, patient transit ambulances, crash carts, and disaster relief units requiring rugged, instant-on life support.",
    points: [
      "Lightweight, compact portable ventilators engineered for rapid emergency mobilization",
      "Hot-swappable extended internal battery autonomy for uninterrupted multi-hour transit",
      "Ruggedized, drop-tested military-grade casing with anti-vibration shock absorption",
      "One-touch emergency resuscitation protocols and automatic apnea backup ventilation",
    ],
    specs: [
      { label: "Chassis & Enclosure", value: "Drop-tested impact-resistant casing with shock-mounted electronics" },
      { label: "Power Adaptability", value: "12V DC vehicle ambulance power, 100–240V AC & internal battery" },
      { label: "Gas Adaptation", value: "Standard medical oxygen cylinders with quick-connect pin-index" },
      { label: "Emergency Modes", value: "Rapid-start emergency mandatory ventilation with apnea backup" },
    ],
    compatibleProducts: [
      {
        name: "Emergency & Resuscitation Equipment Kits",
        category: "Emergency",
        href: "/products/category/emergency-resuscitation-kits",
        tag: "Rapid Deployment",
      },
      {
        name: "Multi-Parameter Patient Monitor",
        category: "Monitoring",
        href: "/products/multi-para-patient-monitor",
        tag: "Portable Vital Signs",
      },
      {
        name: "Advanced ICU Critical Care Ventilator",
        category: "Ventilator",
        href: "/products/icu-critical-care-ventilator",
        tag: "Mobile Cart Ready",
      },
    ],
    safeguards: [
      "Reinforced chassis withstands accidental drops and severe transit vibrations in emergency transport.",
      "360° high-contrast visual alert beacons and piercing audible alarms alert clinicians in noisy ambulances.",
      "Seamless instant switchover between battery, vehicle DC power, and mains AC power with zero cycle interruption.",
    ],
  },
  {
    id: "daycare",
    name: "Day Care & Secondary Centers",
    icon: HeartPulse,
    badge: "High-Throughput OT",
    categoryHref: "/products#anaesthesia",
    categoryLabel: "High-Turnover Solutions",
    summary:
      "Daycare surgical clinics, endoscopy centers, ophthalmic surgical suites, and secondary district hospitals prioritizing high case turnover, agility, and low lifecycle cost.",
    points: [
      "Agile dual-gas footprint with mechanical hypoxic safety guard maintaining at least 25% O2",
      "Quick-release autoclavable CO2 absorbers for rapid between-case sterilization turnaround",
      "Streamlined ergonomics, low lifecycle maintenance overhead, and high operational reliability",
      "Precision fine-adjustment cascade micro-flowmeters for low-flow anaesthesia economy",
    ],
    specs: [
      { label: "Footprint & Chassis", value: "Space-efficient powder-coated medical steel with central brake castors" },
      { label: "Gas Manifold", value: "Dual pipeline inputs (O2, N2O) plus auxiliary emergency cylinder yokes" },
      { label: "Flowmeter Precision", value: "Cascade dual-tube flowmeters calibrated for low-flow economy" },
      { label: "Infection Control", value: "134°C fully autoclavable patient circuit and absorber components" },
    ],
    compatibleProducts: [
      {
        name: "Two-Gas System Basic Anaesthesia Machine",
        category: "Anaesthesia",
        href: "/products/two-gas-system-basic-anaesthesia-workstation",
        tag: "Low Cost of Ownership",
      },
      {
        name: "Basic Premium Anaesthesia Machine",
        category: "Anaesthesia",
        href: "/products/basic-premium-anaesthesia-machine",
        tag: "Stainless Steel Trolley",
      },
      {
        name: "Syringe & Infusion Pump Series",
        category: "Infusion",
        href: "/products/category/syringe-infusion-pumps",
        tag: "Micro-Dosing",
      },
    ],
    safeguards: [
      "100% in-house manufacturing by Panakeia guarantees immediate spare parts availability within hours.",
      "Single-action quick-release CO2 absorber canister allows fast, sterile changeovers between surgical cases.",
      "Recessed emergency oxygen flush button prevents accidental trigger while remaining instantly accessible.",
    ],
  },
];

export function IndigenousExcellenceStrip() {
  const [activeEnv, setActiveEnv] = useState<number | null>(null);

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

        {/* CLINICAL DEPLOYMENT ENVIRONMENTS STRIP */}
        <div className="rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-navy-800 shadow-xl">
          {/* Subtle Ambient Graphic Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-med-teal-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-navy-800/80">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-med-teal-400 text-xs font-bold uppercase tracking-wider font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span>Comprehensive Clinical Deployment</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white tracking-tight">
                Versatile Life-Support Across Every Critical Care Tier
              </h3>
              <p className="text-xs sm:text-sm text-clinical-300 leading-relaxed">
                Engineered for immediate readiness across surgical operating suites, high-acuity ICUs,
                mobile emergency transport, and rural clinical centers.
              </p>
            </div>

            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/90 border border-navy-700/80 text-[11px] text-clinical-300 font-mono shadow-inner">
                <span className="w-2 h-2 rounded-full bg-med-teal-400 animate-pulse" />
                <span>Click any service tier below to expand dropdown</span>
              </div>
            </div>
          </div>

          {/* 4 Environment Option Cards - ZERO TRUNCATION */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLINICAL_ENVIRONMENTS.map((env, idx) => {
              const EnvIcon = env.icon;
              const isSelected = activeEnv === idx;
              return (
                <div
                  key={env.id}
                  onClick={() => setActiveEnv(activeEnv === idx ? null : idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveEnv(activeEnv === idx ? null : idx);
                    }
                  }}
                  className={`group/card cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden select-none ${
                    isSelected
                      ? "bg-navy-900 border-med-teal-400/90 shadow-lg shadow-med-teal-500/15 ring-2 ring-med-teal-400/40 -translate-y-1"
                      : "bg-navy-900/70 border-navy-800 hover:bg-navy-850 hover:border-navy-700 hover:-translate-y-0.5"
                  }`}
                >
                  {/* Subtle top indicator bar when selected */}
                  {isSelected && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-med-teal-400 via-med-teal-300 to-med-teal-500" />
                  )}

                  <div>
                    {/* Top Header: Icon + Name + Badge + Dropdown Trigger */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/card:scale-105 ${
                            isSelected
                              ? "bg-med-teal-500 text-navy-950 font-bold shadow-md shadow-med-teal-500/30"
                              : "bg-navy-800 text-med-teal-400 border border-navy-700"
                          }`}
                        >
                          <EnvIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover/card:text-med-teal-300 transition-colors leading-snug">
                            {env.name}
                          </h4>
                          <span className="inline-block text-[10.5px] text-med-teal-300 font-mono font-semibold uppercase tracking-wider mt-0.5">
                            {env.badge}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isSelected
                            ? "bg-med-teal-400/20 text-med-teal-300"
                            : "bg-navy-800/80 text-clinical-400 group-hover/card:text-white group-hover/card:bg-navy-800"
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isSelected ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>

                    {/* All Points - FULL TEXT, ZERO TRUNCATION */}
                    <ul className="space-y-2 text-xs text-clinical-300 mt-3 pt-3 border-t border-navy-800/80">
                      {env.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-med-teal-400 font-bold shrink-0 mt-0.5">•</span>
                          <span className="text-slate-200">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Interactive Status Bar */}
                  <div className="mt-4 pt-3 border-t border-navy-800/60 flex items-center justify-between text-[11px] font-semibold">
                    <span
                      className={`transition-colors ${
                        isSelected
                          ? "text-med-teal-300 font-bold"
                          : "text-clinical-400 group-hover/card:text-clinical-200"
                      }`}
                    >
                      {isSelected ? "Dropdown Open" : "Click for Dropdown"}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-mono transition-transform duration-300 ${
                        isSelected
                          ? "text-med-teal-400 translate-y-0.5"
                          : "text-clinical-500 group-hover/card:text-med-teal-400"
                      }`}
                    >
                      {isSelected ? "Collapse" : "Expand"}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isSelected ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BEAUTIFULLY ANIMATED DROPDOWN ACCORDION DRAWER */}
          <AnimatePresence mode="wait">
            {activeEnv !== null && CLINICAL_ENVIRONMENTS[activeEnv] && (() => {
              const selectedEnv = CLINICAL_ENVIRONMENTS[activeEnv];
              const SelectedIcon = selectedEnv.icon;

              return (
                <motion.div
                  key={`env-dropdown-${selectedEnv.id}`}
                  initial={{ opacity: 0, height: 0, y: -12 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden mt-6 pt-6 border-t border-navy-800 relative z-10"
                >
                  <div className="bg-gradient-to-b from-navy-900/95 via-navy-950 to-navy-900/90 rounded-2xl border border-med-teal-500/40 p-5 sm:p-7 lg:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                    {/* Ambient interior glows */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-med-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                      {/* Dropdown Header: Service Title & Overview */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-navy-800">
                        <div className="flex items-start gap-3.5">
                          <div className="w-12 h-12 rounded-xl bg-med-teal-500 text-navy-950 flex items-center justify-center shrink-0 shadow-lg shadow-med-teal-500/25">
                            <SelectedIcon className="w-6 h-6" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
                                {selectedEnv.name}
                              </h4>
                              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-med-teal-950 border border-med-teal-500/40 text-med-teal-300">
                                {selectedEnv.badge}
                              </span>
                              <span className="text-[11px] font-mono text-clinical-400 bg-navy-800 px-2 py-0.5 rounded-md border border-navy-700">
                                {selectedEnv.categoryLabel}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-clinical-300 leading-relaxed max-w-3xl">
                              {selectedEnv.summary}
                            </p>
                          </div>
                        </div>

                        {/* Close Dropdown Button */}
                        <button
                          type="button"
                          onClick={() => setActiveEnv(null)}
                          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-clinical-300 hover:text-white border border-navy-700 text-xs font-semibold transition-colors cursor-pointer self-start"
                          aria-label="Close Dropdown"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Close Dropdown</span>
                        </button>
                      </div>

                      {/* Dropdown 3-Column Content Matrix */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* 1. Deployment Technical Specifications (4 cols) */}
                        <div className="lg:col-span-4 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-med-teal-400">
                            <Cpu className="w-4 h-4" />
                            <span>Technical Deployment Specs</span>
                          </div>
                          <div className="grid grid-cols-1 gap-2.5">
                            {selectedEnv.specs.map((spec, sIdx) => (
                              <div
                                key={sIdx}
                                className="p-3 rounded-xl bg-navy-950/80 border border-navy-800 shadow-inner"
                              >
                                <span className="block text-[10px] uppercase tracking-wider font-mono text-clinical-400">
                                  {spec.label}
                                </span>
                                <span className="block text-xs font-semibold text-white mt-1 leading-snug">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 2. Clinical Engineering Safeguards (4 cols) */}
                        <div className="lg:col-span-4 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-med-teal-400">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Clinical Safety & Engineering</span>
                          </div>
                          <div className="space-y-2.5">
                            {selectedEnv.safeguards.map((safe, gIdx) => (
                              <div
                                key={gIdx}
                                className="p-3 rounded-xl bg-navy-950/80 border border-navy-800 flex items-start gap-2.5 text-xs text-clinical-200 leading-relaxed shadow-inner"
                              >
                                <CheckCircle2 className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                                <span>{safe}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 3. Recommended Indigenous Equipment (4 cols) */}
                        <div className="lg:col-span-4 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-med-teal-400">
                            <Building2 className="w-4 h-4" />
                            <span>Dedicated Panakeia Equipment</span>
                          </div>
                          <div className="space-y-2.5">
                            {selectedEnv.compatibleProducts.map((prod, pIdx) => (
                              <Link
                                key={pIdx}
                                href={prod.href}
                                className="group/prod block p-3 rounded-xl bg-navy-950/80 hover:bg-navy-900 border border-navy-800 hover:border-med-teal-500/60 transition-all duration-200 shadow-inner"
                              >
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <span className="text-[10px] font-mono uppercase tracking-wider text-med-teal-300 bg-med-teal-950 px-2 py-0.5 rounded border border-med-teal-500/30">
                                    {prod.tag}
                                  </span>
                                  <ExternalLink className="w-3.5 h-3.5 text-clinical-500 group-hover/prod:text-med-teal-400 transition-colors" />
                                </div>
                                <h5 className="text-xs font-bold text-white group-hover/prod:text-med-teal-300 transition-colors leading-snug">
                                  {prod.name}
                                </h5>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Dropdown Action Bar */}
                      <div className="pt-4 border-t border-navy-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <Link
                            href={selectedEnv.categoryHref}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-med-teal-600 hover:bg-med-teal-500 shadow-md shadow-med-teal-600/25 transition-all duration-200 cursor-pointer"
                          >
                            <span>Explore All {selectedEnv.name} Equipment</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-clinical-200 bg-navy-800 hover:bg-navy-700 hover:text-white border border-navy-700 transition-colors"
                          >
                            <span>Schedule Clinical Trial / OT Demo</span>
                          </Link>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveEnv(null)}
                          className="text-clinical-400 hover:text-white inline-flex items-center gap-1 font-mono transition-colors cursor-pointer"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                          <span>Minimize Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
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
                Anaesthesia Machines
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
