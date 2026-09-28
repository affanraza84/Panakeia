"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MegaProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface MegaDepartment {
  id: string;
  name: string;
  products: MegaProductItem[];
}

export const MEGA_MENU_DEPARTMENTS: MegaDepartment[] = [
  {
    id: "emergency",
    name: "Emergency",
    products: [
      {
        id: "emerg-resus-kit",
        title: "Emergency Resuscitation Kit",
        description: "Clinical-grade trauma & airway resuscitation kit in ruggedized waterproof hard-shell case...",
        image: "/image/Emergency-Resuscitation-&-Airway-Kit2.jpeg",
        href: "/products/emergency-resuscitation-kit",
      },
      {
        id: "video-laryngoscope-emerg",
        title: "Video Laryngoscope",
        description: "Provides enhanced visualization during emergency intubation and difficult airway procedures...",
        image: "/image/video-laryngoscope.jpg",
        href: "/products/hd-video-laryngoscope-system",
      },
      {
        id: "ecg-machine-emerg",
        title: "12-Channel ECG Machine",
        description: "Simultaneous 12-lead diagnostic acquisition with automated arrhythmia interpretation...",
        image: "/image/ecg-machine.jpeg",
        href: "/products/12-channel-diagnostic-ecg-machine",
      },
      {
        id: "transport-vent-emerg",
        title: "Transport Ventilator",
        description: "Ultra-compact turbine respiratory support system engineered for high-mobility crash carts...",
        image: "/image/icu-ventilator.jpeg",
        href: "/products/icu-critical-care-ventilator",
      },
    ],
  },
  {
    id: "ot",
    name: "OT",
    products: [
      {
        id: "ot-anaesthesia",
        title: "Anaesthesia",
        description: "Advanced systems for precise anesthetic delivery...",
        image: "/image/three-gas-system-advanced-anaesthesia-workstation.jpeg",
        href: "/products/three-gas-system-advanced-anaesthesia-workstation",
      },
      {
        id: "ot-patient-monitor",
        title: "Patient Monitor",
        description: "Specialized monitoring systems for tracking patient...",
        image: "/image/multi-para-patient-monitor.jpeg",
        href: "/products/multi-para-patient-monitor",
      },
      {
        id: "ot-ventilator",
        title: "Ventilator",
        description: "An ideal ventilator should maintain the much-needed...",
        image: "/image/anaevent-anaesthesia-ventilator.jpeg",
        href: "/products/anaevent-anaesthesia-ventilator",
      },
      {
        id: "ot-video-laryngoscope",
        title: "Video Laryngoscope",
        description: "Provides enhanced visualization during intubation...",
        image: "/image/video-laryngoscope.jpg",
        href: "/products/hd-video-laryngoscope-system",
      },
    ],
  },
  {
    id: "icu",
    name: "ICU",
    products: [
      {
        id: "icu-critical-ventilator",
        title: "Ventilator",
        description: "Turbine-driven critical care ventilator for adult & paediatric continuous life support...",
        image: "/image/icu-ventilator.jpeg",
        href: "/products/icu-critical-care-ventilator",
      },
      {
        id: "icu-vital-monitor",
        title: "Patient Monitor",
        description: "Specialized monitoring systems for tracking patient vital signs and telemetry...",
        image: "/image/multi-para-patient-monitor.jpeg",
        href: "/products/multi-para-patient-monitor",
      },
      {
        id: "icu-infusion-pump",
        title: "Syringe & Infusion Pump",
        description: "Micro-infusion delivery system with comprehensive drug library and anti-bolus safety...",
        image: "/image/syringe-infusion-pump.jpeg",
        href: "/products/syringe-infusion-pump",
      },
      {
        id: "icu-ecg-machine",
        title: "12-Channel ECG Machine",
        description: "Diagnostic 12-lead workstation with high-resolution color display and arrhythmia analysis...",
        image: "/image/ecg-machine.jpeg",
        href: "/products/12-channel-diagnostic-ecg-machine",
      },
    ],
  },
  {
    id: "nicu",
    name: "NICU",
    products: [
      {
        id: "nicu-neonatal-ventilator",
        title: "Neonatal Ventilator",
        description: "Delicate low-tidal-volume high-frequency respiratory support engineered for neonates...",
        image: "/image/icu-ventilator.jpeg",
        href: "/products/icu-critical-care-ventilator",
      },
      {
        id: "nicu-vital-monitor",
        title: "Neonatal Vital Monitor",
        description: "High-sensitivity physiological telemetry tailored for newborn and premature infant vitals...",
        image: "/image/patient-multi-paramonitor.jpeg",
        href: "/products/multi-para-patient-monitor",
      },
      {
        id: "nicu-syringe-pump",
        title: "Micro-Infusion Syringe Pump",
        description: "Ultra-precise micro-rate medication and continuous intravenous pediatric nutrition delivery...",
        image: "/image/pan-flow-syringe-pump.jpeg",
        href: "/products/syringe-infusion-pump",
      },
      {
        id: "nicu-resus-kit",
        title: "Paediatric Resuscitator",
        description: "Specialized silicone manual resuscitators and precision pediatric airway blade sets...",
        image: "/image/Emergency-Resuscitation-&-Airway-Kit2.jpeg",
        href: "/products/emergency-resuscitation-kit",
      },
    ],
  },
];

interface ProductMegaMenuProps {
  onItemClick?: () => void;
}

export function ProductMegaMenu({ onItemClick }: ProductMegaMenuProps) {
  const [activeTab, setActiveTab] = useState<string>("ot");

  const currentDepartment =
    MEGA_MENU_DEPARTMENTS.find((dept) => dept.id === activeTab) ||
    MEGA_MENU_DEPARTMENTS[1];

  return (
    <div
      style={{ width: "800px", maxWidth: "90vw" }}
      className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.18)] border border-slate-100 overflow-hidden text-slate-800 shrink-0 pointer-events-auto select-none"
    >
      {/* Top Department Tabs Navigation */}
      <div className="px-7 pt-4 pb-0 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-8">
          {MEGA_MENU_DEPARTMENTS.map((dept) => {
            const isActive = dept.id === activeTab;
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveTab(dept.id)}
                onMouseEnter={() => setActiveTab(dept.id)}
                className={cn(
                  "relative pb-3.5 text-[15px] tracking-tight transition-colors duration-200 cursor-pointer select-none",
                  isActive
                    ? "text-[#1e3a8a] font-extrabold"
                    : "text-[#475569] hover:text-[#0f172a] font-bold"
                )}
              >
                <span>{dept.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="megaMenuTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2563eb] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2x2 Clean Product Cards Grid */}
      <div className="p-6 lg:p-7 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-2 gap-x-8 gap-y-6"
          >
            {currentDepartment.products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                onClick={onItemClick}
                className="group flex items-center gap-4 cursor-pointer text-left focus-visible:outline-none"
              >
                {/* Product Image Box */}
                <div className="w-[130px] h-[92px] shrink-0 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-slate-100/90 p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] group-hover:scale-[1.02]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={125}
                    height={85}
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>

                {/* Product Title & Description */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h4 className="text-[16px] font-bold text-[#0c2340] group-hover:text-[#2563eb] transition-colors leading-snug">
                    {product.title}
                  </h4>
                  <p className="text-[13px] text-[#64748b] line-clamp-2 mt-1 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
