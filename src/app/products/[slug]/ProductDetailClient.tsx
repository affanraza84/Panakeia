"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  ArrowRight,
  Sliders,
} from "lucide-react";

interface ProductDetailClientProps {
  product: IProduct;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "anaesthesia":
        return "Anaesthesia Delivery";
      case "ventilator":
        return "ICU Ventilation";
      case "monitoring":
        return "Patient Monitoring";
      case "infusion":
        return "Infusion & Syringe Systems";
      case "emergency":
        return "Emergency & Resuscitation";
      default:
        return "Critical Care Device";
    }
  };

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [`/images/products/${product.slug}.jpeg`];

  const currentImage = images[activeImageIndex] || images[0];

  return (
    <div className="space-y-12">
      {/* Top Product Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Interactive Image Gallery on Pure White Canvas */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl border border-clinical-200 h-96 sm:h-[480px] p-6 flex items-center justify-center relative overflow-hidden shadow-md">
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="primary" className="bg-white/95 text-med-teal-700 border border-slate-200/80 shadow-2xs font-semibold">
                {getCategoryLabel(product.category)}
              </Badge>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="text-[11px] font-mono text-slate-700 bg-white/95 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs font-semibold">
                AMTZ IHUB C-20
              </span>
            </div>

            {/* Main Visual Display Frame with next/image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={currentImage}
                  alt={`${product.name} — Technical Overview`}
                  fill
                  priority
                  quality={95}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center filter drop-shadow-sm"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Strip with Pure White Backgrounds */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-20 w-24 rounded-xl border-2 overflow-hidden transition-all bg-white cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-med-teal-500 shadow-sm ring-2 ring-med-teal-500/30"
                      : "border-clinical-200 hover:border-clinical-400 opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail view ${idx + 1}`}
                    fill
                    quality={95}
                    unoptimized
                    sizes="96px"
                    className="object-contain p-1"
                  />
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

          {/* Bespoke Customization Callout */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-med-teal-50/90 via-white to-clinical-50 border border-med-teal-300/80 flex items-start gap-3.5 shadow-2xs">
            <div className="p-2 rounded-xl bg-med-teal-100/80 text-med-teal-700 shrink-0 mt-0.5">
              <Sliders className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-navy-950 font-heading">
                  100% Customizable Engineering Available
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-med-teal-100 text-med-teal-800 font-bold uppercase">
                  Bespoke R&D
                </span>
              </div>
              <p className="text-xs text-clinical-700 leading-relaxed">
                Need specialized modifications for your hospital? Because this device is designed and manufactured in-house at AMTZ, we can customize gas circuits, display telemetry, software protocols, and mounting ergonomics to match your clinical workflow.
              </p>
              <a
                href={`/contact?type=oem&product=${encodeURIComponent(product.slug)}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-med-teal-700 hover:text-med-teal-800 pt-1 transition-colors"
              >
                <span>Request Custom Hospital Configurations</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 border-t border-clinical-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Pulsing Request Quote CTA */}
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
              <span>Direct Hospital Procurement Desk: <strong>+91-9811340469</strong></span>
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
