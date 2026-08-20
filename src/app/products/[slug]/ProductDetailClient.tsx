"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IProduct } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  FileDown,
  ShieldCheck,
  Building2,
  Phone,
  Activity,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/animations";

interface ProductDetailClientProps {
  product: IProduct;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isAnaesthesia = product.category === "anaesthesia";

  const images =
    product.images && product.images.length > 0
      ? product.images
      : ["/images/products/placeholder.webp"];

  return (
    <div className="space-y-12">
      {/* Top Product Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Interactive Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-b from-clinical-50 to-clinical-100 rounded-2xl border border-clinical-200 p-8 h-96 sm:h-[450px] flex items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute top-4 left-4 z-10">
              <Badge variant={isAnaesthesia ? "primary" : "navy"}>
                {isAnaesthesia ? "Anaesthesia Delivery" : "ICU Ventilation"}
              </Badge>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="text-[11px] font-mono text-clinical-600 bg-white/90 px-2.5 py-1 rounded-md border border-clinical-200 shadow-2xs font-semibold">
                AMTZ Unit A84
              </span>
            </div>

            {/* Main Visual Display Frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full h-full flex flex-col items-center justify-center text-center p-6"
              >
                <div className="w-28 h-28 rounded-2xl bg-white border border-clinical-200 shadow-md flex items-center justify-center text-med-teal-600 mb-4">
                  <Activity className="w-14 h-14 stroke-[1.5]" />
                </div>
                <div className="text-sm font-mono font-bold text-navy-950 uppercase tracking-widest">
                  {product.name}
                </div>
                <span className="text-xs text-clinical-500 mt-1 font-mono">
                  View Frame #{activeImageIndex + 1} • High Precision Calibration
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-18 w-24 rounded-lg border-2 p-2 flex items-center justify-center transition-all bg-white cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-med-teal-500 shadow-xs ring-2 ring-med-teal-500/20"
                      : "border-clinical-200 hover:border-clinical-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="text-[10px] font-mono font-semibold text-clinical-600">
                    View #{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Key Info & Procurement Action */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-med-teal-600">
                Model Reference: {product.slug}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy-950 leading-tight">
              {product.name}
            </h1>
            <p className="mt-3 text-base text-clinical-700 font-medium leading-relaxed">
              {product.tagline}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200 text-xs sm:text-sm text-clinical-700 leading-relaxed">
            {product.description}
          </div>

          {/* Clinical Features List */}
          <div>
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider font-heading mb-3">
              Key Clinical Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-clinical-800">
                  <CheckCircle2 className="w-4 h-4 text-med-teal-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-clinical-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Pulsing Request Quote CTA (runs subtle pulse once on load) */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1"
            >
              <Button
                href={`/contact?product=${encodeURIComponent(product.slug)}`}
                variant="primary"
                size="lg"
                className="w-full shadow-md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Quotation & Demo
              </Button>
            </motion.div>

            {product.brochurePdfUrl && (
              <Button
                href={product.brochurePdfUrl}
                variant="outline"
                size="lg"
                className="flex-1"
                leftIcon={<FileDown className="w-4 h-4 text-clinical-600" />}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Spec Sheet (PDF)
              </Button>
            )}
          </div>

          {/* Direct Procurement Help Line */}
          <div className="p-3 bg-navy-50 rounded-lg border border-navy-100 flex items-center justify-between text-xs text-navy-900">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-med-teal-600" />
              <span>Direct Hospital Procurement Desk: <strong>+91 (0891) 289-9000</strong></span>
            </span>
            <span className="font-mono text-clinical-500 text-[11px]">Mon-Sat 9AM-6PM IST</span>
          </div>
        </div>
      </div>

      {/* Structured Technical Specifications Table */}
      <div className="pt-10 border-t border-clinical-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-med-teal-600 px-3 py-1 rounded-full bg-med-teal-50 border border-med-teal-200 inline-block mb-2">
              Engineering Parameters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Complete Technical Specifications
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-clinical-600">
              Verified against IEC 60601-1 and ISO 80601-2-13 medical electrical equipment safety standards.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-clinical-200 shadow-xs overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-heading">
                  <th className="py-3.5 px-6 font-semibold w-1/3">Parameter / Specification</th>
                  <th className="py-3.5 px-6 font-semibold">Clinical Tolerance & Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-clinical-100 font-mono">
                {product.specs.map((spec, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white hover:bg-clinical-50/80 transition-colors" : "bg-clinical-50/40 hover:bg-clinical-50/80 transition-colors"}
                  >
                    <td className="py-3.5 px-6 font-sans font-medium text-navy-950 align-top">
                      {spec.label}
                    </td>
                    <td className="py-3.5 px-6 text-clinical-700 align-top">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
