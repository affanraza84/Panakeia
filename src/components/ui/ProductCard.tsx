"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IProduct } from "@/types";
import { Badge } from "./Badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cardHoverVariant } from "@/lib/animations";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "anaesthesia":
        return "Anaesthesia Machine";
      case "ventilator":
        return "ICU Ventilator";
      case "monitoring":
        return "Patient Monitor";
      case "infusion":
        return "Infusion / Syringe Pump";
      case "emergency":
        return "Emergency Resuscitation";
      default:
        return "Medical Device";
    }
  };

  const categoryLabel = getCategoryLabel(product.category);
  const primaryImage = product.images?.[0] || "/image/three-gas-system-advanced-anaesthesia-workstation.jpeg";

  return (
    <motion.div
      variants={cardHoverVariant}
      initial="rest"
      whileHover="hover"
      className="flex flex-col bg-white rounded-2xl border border-clinical-200 overflow-hidden transition-all duration-300 hover:border-med-teal-400 hover:shadow-xl group"
    >
      {/* Product Image Display Frame with Clinical Grey Studio Backdrop */}
      <div className="relative h-64 bg-slate-100 flex items-center justify-center overflow-hidden border-b border-clinical-200/80 p-4 group">
        {/* Category & Badge Indicators */}
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
          <Badge variant="primary" className="shadow-2xs bg-white/95 text-med-teal-700 border border-slate-200/80 backdrop-blur-md font-semibold">
            {categoryLabel}
          </Badge>
        </div>
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-white/95 px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs font-mono backdrop-blur-md">
            100% In-House Parts
          </span>
        </div>

        {/* Product Image with smooth hover scale on Pure White Canvas */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={primaryImage}
            alt={`Panakeia ${product.name} — ${categoryLabel}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain object-center filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      {/* Product Body Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-navy-950 font-heading group-hover:text-med-teal-600 transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-clinical-600 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Key Clinical Features (Top 3) */}
          <div className="mt-4 space-y-2">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-clinical-700">
                <CheckCircle2 className="w-4 h-4 text-med-teal-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Quick Specs Highlight Box */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-5 p-3 rounded-lg bg-clinical-50 border border-clinical-200 grid grid-cols-2 gap-2 text-xs font-mono">
              <div>
                <span className="text-clinical-400 block text-[10px] uppercase font-sans">Modes</span>
                <span className="text-clinical-800 font-semibold truncate block">
                  {product.specs[0]?.value || "Standard Modes"}
                </span>
              </div>
              <div>
                <span className="text-clinical-400 block text-[10px] uppercase font-sans">Tidal Range</span>
                <span className="text-clinical-800 font-semibold truncate block">
                  {product.specs[1]?.value || "Adult/Pediatric"}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-clinical-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-semibold text-navy-950 bg-clinical-50/90 hover:bg-clinical-100 border border-clinical-200/80 hover:border-clinical-300 transition-all duration-200 group/btn shadow-2xs hover:shadow-xs active:scale-[0.98] text-center"
          >
            <span>Technical Specs</span>
            <ArrowRight className="w-3.5 h-3.5 text-clinical-600 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:text-navy-950" />
          </Link>
          <Link
            href={`/contact?product=${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-med-teal-600 to-med-teal-700 hover:from-med-teal-700 hover:to-med-teal-800 shadow-sm hover:shadow-md hover:shadow-med-teal-600/20 transition-all duration-200 group/btn active:scale-[0.98] text-center"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/80 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:text-white" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
