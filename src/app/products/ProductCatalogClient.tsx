"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IProduct } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { Container } from "@/components/ui/Container";
import { staggerContainerVariant, fadeUpVariant } from "@/lib/animations";
import { Stethoscope, Wind, LayoutGrid, Activity, Syringe, BriefcaseMedical, ArrowRight, CheckCircle2, Sliders } from "lucide-react";

interface ProductCatalogClientProps {
  initialProducts: IProduct[];
  initialCategory?: string;
}

export function ProductCatalogClient({
  initialProducts,
  initialCategory = "all",
}: ProductCatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = [
    { id: "all", label: "All Equipment", icon: LayoutGrid, count: initialProducts.length },
    {
      id: "anaesthesia",
      label: "Anaesthesia Workstations",
      icon: Stethoscope,
      count: initialProducts.filter((p) => p.category === "anaesthesia").length,
    },
    {
      id: "ventilator",
      label: "ICU Ventilators",
      icon: Wind,
      count: initialProducts.filter((p) => p.category === "ventilator").length,
    },
    {
      id: "monitoring",
      label: "Patient Monitors",
      icon: Activity,
      count: initialProducts.filter((p) => p.category === "monitoring").length,
    },
    {
      id: "infusion",
      label: "Syringe & Infusion Pumps",
      icon: Syringe,
      count: initialProducts.filter((p) => p.category === "infusion").length,
    },
    {
      id: "emergency",
      label: "Emergency & Resuscitation",
      icon: BriefcaseMedical,
      count: initialProducts.filter((p) => p.category === "emergency").length,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 lg:py-16">
      <Container>
        {/* Bespoke Customization & Tailored Engineering Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 border border-med-teal-500/30 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-med-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-med-teal-950/90 border border-med-teal-400/40 text-med-teal-300 text-xs font-bold uppercase tracking-wider">
                <Sliders className="w-3.5 h-3.5 text-med-teal-400" />
                100% In-House R&D & Bespoke Design
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white tracking-tight">
                All Products Are Fully Customizable to Your Clinical Specifications
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Because we engineer and manufacture every device and part indigenously in-house at Panakeia itself, we can tailor-design hardware, pneumatic flow circuits, telemetry interfaces, and mechanical ergonomics to match your hospital’s precise clinical workflows and institutional requirements.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-med-teal-400" /> Custom Gas & Sensor Manifolds
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-med-teal-400" /> Hospital EMR / Telemetry Integration
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-med-teal-400" /> Institutional & OEM Configurations
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <a
                href="/contact?type=oem"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-med-teal-500 to-med-teal-600 hover:from-med-teal-600 hover:to-med-teal-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-med-teal-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Tailored Solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter / Category Tab Switcher with animated underline */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-clinical-100/80 border border-clinical-200 shadow-2xs max-w-5xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isSelected ? "text-navy-950" : "text-clinical-600 hover:text-navy-900"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm border border-clinical-200"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-med-teal-500" />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-med-teal-50 text-med-teal-700 font-bold"
                          : "bg-clinical-200 text-clinical-600"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.slug} variants={fadeUpVariant}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-clinical-200 p-8">
            <p className="text-clinical-500 text-sm">
              No products currently found in this category.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
