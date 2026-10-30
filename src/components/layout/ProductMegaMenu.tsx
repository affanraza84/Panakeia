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
  features?: string[];
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
        image: "/image/accessories/video-laryngoscope.jpg",
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
        title: "SAVEL Portable Ventilator",
        description: "Emergency & transport ventilator with 7\" touchscreen, multi-mode life support, and 6-hour battery...",
        image: "/image/savel-electro-portable-ventilator.jpeg",
        href: "/products/savel-electro-portable-ventilator",
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
        description: "Advanced systems for precise anaesthetic delivery...",
        image: "/image/three-gas-system-advanced-anaesthesia-workstation.jpeg",
        href: "/products/three-gas-system-advanced-anaesthesia-workstation",
      },
      {
        id: "ot-patient-monitor",
        title: "Patient Monitor",
        description: "Specialized monitoring systems for tracking patient...",
        image: "/image/multi-para-monitor-1.jpeg",
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
        image: "/image/accessories/video-laryngoscope.jpg",
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
        image: "/image/multi-para-monitor-1.jpeg",
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
    id: "accessories",
    name: "All Accessories",
    products: [
      {
        id: "breathing-circuit-acc",
        title: "Breathing Circuit",
        description:
          "Autoclavable corrugated circuits providing low compliance and leak-free ventilation delivery across mechanical ICU ventilators and anaesthesia workstations.",
        image: "/image/accessories/breathing-circuit.png",
        href: "/products/breathing-circuit",
        features: [
          "Autoclavable platinum-cured silicone with reinforced corrugated ribs",
          "Universal 22mm / 15mm ISO 5356-1 standard gas-tight conical connectors",
          "Integrated dual water-traps preventing condensation buildup in ventilator loops",
          "Compatible with low-flow and high-flow anaesthesia and ICU ventilators",
        ],
      },
      {
        id: "bains-circuit-acc",
        title: "Bains Circuit",
        description:
          "Coaxial Mapleson D breathing system with precision APL valve and natural inspired gas warming for spontaneous and controlled ventilation.",
        image: "/image/accessories/bains-circuit.png",
        href: "/products/bains-circuit",
        features: [
          "Coaxial tube-within-a-tube design providing natural inspired gas warming",
          "Integrated precision adjustable pressure-limiting (APL) safety valve",
          "2.0-Liter antistatic latex-free reservoir breathing bag with standard bushing",
          "Instant manual to spontaneous transition control for daycare and high-throughput OTs",
        ],
      },
      {
        id: "jackson-rees-circuit-acc",
        title: "Jackson-Rees Circuit",
        description:
          "Specialized Mapleson F pediatric breathing circuit with tail-bleed open reservoir bag for sensitive infant and neonatal airway management.",
        image: "/image/accessories/jackson-rees-circuit.jpg",
        href: "/products/jackson-rees-circuit",
        features: [
          "Specially engineered for pediatric, infant, and neonatal critical airway management",
          "Ultra-lightweight corrugated limb minimizing traction on endotracheal tubes",
          "Tail-valve bleed port providing direct tactile feedback of spontaneous breathing",
          "Minimal mechanical dead space ensuring accurate tidal gas exchange",
        ],
      },
      {
        id: "laryngoscope-acc",
        title: "Laryngoscope",
        description:
          "Surgical-grade stainless steel laryngoscope set with interchangeable cold LED fiber-optic Macintosh and Miller blades.",
        image: "/image/accessories/laryngoscope.jpg",
        href: "/products/laryngoscope",
        features: [
          "Medical 316L surgical stainless steel blades with anti-glare satin finish (Sizes 1-4)",
          "High-intensity cold white medical LED illumination delivering ≥800 Lux brightness",
          "Ergonomic knurled anti-slip handle with fast-twist battery access bay",
          "Autoclavable and high-level chemical disinfection compatible (IPX8 rated)",
        ],
      },
      {
        id: "video-laryngoscope-acc",
        title: "Video Laryngoscope",
        description:
          "High-definition digital video airway visualization platform with anti-fog CMOS micro-camera and rotating color monitor.",
        image: "/image/accessories/video-laryngoscope.jpg",
        href: "/products/video-laryngoscope",
        features: [
          "2.0 Megapixel anti-fog optical CMOS sensor for clear vocal cord exposure",
          "Multi-angle tilt and swivel high-resolution color TFT clinical monitor",
          "One-touch real-time photo recording and HD video telemetry for teaching",
          "Rechargeable ergonomic handle providing 4+ hours of continuous runtime",
        ],
      },
      {
        id: "bipap-tube-acc",
        title: "Bipap Tube",
        description:
          "Universal 22mm smooth-bore flexible tubing engineered for whisper-quiet BiPAP and CPAP positive pressure therapy.",
        image: "/image/accessories/bipap-tube.jpg",
        href: "/products/bipap-tube",
        features: [
          "Smooth internal bore reducing airflow turbulence and acoustic noise",
          "Soft medical silicone 22mm end cuffs forming gas-tight seal on all standard ports",
          "Crush-resistant helical outer ribbing preventing accidental occlusion",
          "Biocompatible latex-free clinical polymer suitable for continuous respiratory therapy",
        ],
      },
      {
        id: "bipap-mask-acc",
        title: "Bipap Mask",
        description:
          "Ergonomic full-face non-invasive ventilation mask with dual-wall liquid silicone cushion and 360-degree swivel elbow.",
        image: "/image/accessories/bipap-mask.png",
        href: "/products/bipap-mask",
        features: [
          "Dual-wall liquid silicone facial cushion auto-seals without bridge pressure",
          "360-degree double-swivel elbow connector with anti-asphyxia emergency valve",
          "Adjustable 4-point breathable headgear with quick-release magnetic/snap clips",
          "Dual built-in luer ports for oxygen enrichment and airway pressure monitoring",
        ],
      },
    ],
  },
];

interface ProductMegaMenuProps {
  onItemClick?: () => void;
  onSelectAccessory?: (product: MegaProductItem) => void;
}

export function ProductMegaMenu({ onItemClick, onSelectAccessory }: ProductMegaMenuProps) {
  const [activeTab, setActiveTab] = useState<string>("ot");

  const currentDepartment =
    MEGA_MENU_DEPARTMENTS.find((dept) => dept.id === activeTab) ||
    MEGA_MENU_DEPARTMENTS[1];

  const isAccessoriesTab = activeTab === "accessories";

  return (
    <div
      style={{ width: "820px", maxWidth: "92vw" }}
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

      {/* Product Cards Grid - Consistent 2-column layout matching original design */}
      <div className="p-6 lg:p-7 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "grid grid-cols-2 gap-x-6 gap-y-6",
              activeTab === "accessories" && "max-h-[380px] overflow-y-auto pr-2"
            )}
          >
            {currentDepartment.products.map((product) => {
              if (isAccessoriesTab) {
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => onSelectAccessory?.(product)}
                    className="group flex items-center gap-4 cursor-pointer text-left focus-visible:outline-none w-full"
                  >
                    {/* Product Image Box */}
                    <div className="w-[130px] h-[92px] shrink-0 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-slate-100/90 p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] group-hover:scale-[1.02]">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={125}
                        height={85}
                        unoptimized
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
                  </button>
                );
              }

              return (
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
                      unoptimized
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
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Category Landing Page Shortcuts Footer */}
      <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
          Product Categories:
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/products/category/anaesthesia-machines"
            onClick={onItemClick}
            className="text-slate-600 hover:text-med-teal-700 font-semibold transition-colors"
          >
            Anaesthesia Workstations
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/products/category/ventilators"
            onClick={onItemClick}
            className="text-slate-600 hover:text-med-teal-700 font-semibold transition-colors"
          >
            ICU Ventilators
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/products/category/patient-monitors"
            onClick={onItemClick}
            className="text-slate-600 hover:text-med-teal-700 font-semibold transition-colors"
          >
            Patient Monitors
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/products/category/syringe-infusion-pumps"
            onClick={onItemClick}
            className="text-slate-600 hover:text-med-teal-700 font-semibold transition-colors"
          >
            Infusion Pumps
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/products/category/emergency-resuscitation-kits"
            onClick={onItemClick}
            className="text-slate-600 hover:text-med-teal-700 font-semibold transition-colors"
          >
            Emergency Kits
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/products/category/medical-accessories"
            onClick={onItemClick}
            className="text-slate-600 hover:text-med-teal-700 font-semibold transition-colors"
          >
            All Accessories
          </Link>
        </div>
      </div>
    </div>
  );
}
