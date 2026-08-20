"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IProduct } from "@/types";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cardHoverVariant } from "@/lib/animations";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const isAnaesthesia = product.category === "anaesthesia";
  const primaryImage = product.images?.[0] || "/images/products/aesthetica-700.jpg";

  return (
    <motion.div
      variants={cardHoverVariant}
      initial="rest"
      whileHover="hover"
      className="flex flex-col bg-white rounded-xl border border-clinical-200 overflow-hidden transition-colors hover:border-med-teal-400 group"
    >
      {/* Product Image Display Frame */}
      <div className="relative h-64 bg-slate-900 flex items-center justify-center overflow-hidden border-b border-clinical-200">
        {/* Category & Badge Indicators */}
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
          <Badge variant={isAnaesthesia ? "primary" : "navy"} className="shadow-xs bg-white/95">
            {isAnaesthesia ? "Anaesthesia Workstation" : "ICU Ventilator"}
          </Badge>
        </div>
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-clinical-700 bg-white/95 px-2.5 py-0.5 rounded-full border border-clinical-200 shadow-xs font-mono">
            AMTZ IHUB C-20
          </span>
        </div>

        {/* Product Image with smooth hover scale */}
        <div className="relative w-full h-full">
          <Image
            src={primaryImage}
            alt={`${product.name} — Indigenous ${isAnaesthesia ? "Anaesthesia Delivery Platform" : "Intensive Care Ventilator"}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
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
        <div className="mt-6 pt-4 border-t border-clinical-100 flex items-center justify-between gap-3">
          <Button
            href={`/products/${product.slug}`}
            variant="outline"
            size="sm"
            className="flex-1"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Technical Specs
          </Button>
          <Button
            href={`/contact?product=${product.slug}`}
            variant="primary"
            size="sm"
            className="flex-1"
          >
            Request Quote
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
