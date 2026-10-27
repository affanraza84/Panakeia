"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export interface AccessoryModalProduct {
  id?: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  specs?: { label: string; value: string }[];
}

interface AccessoryModalProps {
  product: AccessoryModalProduct | null;
  onClose: () => void;
}

export function AccessoryModal({ product, onClose }: AccessoryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset image error state whenever product changes
  useEffect(() => {
    setImageError(false);
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!mounted || !product) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessory-modal-title"
      style={{
        zIndex: 99999999,
        backgroundColor: "rgba(6, 24, 38, 0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-5 select-text overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          zIndex: 100000000,
          backgroundColor: "#ffffff",
        }}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-200/90 overflow-hidden flex flex-col my-auto"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-med-teal-50 text-med-teal-700 border border-med-teal-200/80">
              Medical Accessory
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 font-sans">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Panakeia Critical Care</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-7 space-y-5 overflow-y-auto max-h-[calc(85vh-140px)]">
          {/* High-Resolution Product Showcase Frame */}
          <div
            style={{
              height: "250px",
              minHeight: "220px",
              width: "100%",
            }}
            className="relative rounded-2xl bg-gradient-to-b from-slate-50 via-white to-slate-50 border border-slate-200/90 p-4 flex items-center justify-center overflow-hidden shrink-0 shadow-inner group"
          >
            {/* Top Quality Indicators */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 border border-slate-200/80 shadow-2xs backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-med-teal-600" />
              <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-tight">
                Hospital Grade
              </span>
            </div>

            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 border border-slate-200/80 shadow-2xs backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-tight">
                100% In-House Parts
              </span>
            </div>

            {/* Direct Image Rendering with Fallback */}
            {!imageError ? (
              <img
                src={product.image}
                alt={product.title}
                loading="eager"
                onError={() => setImageError(true)}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
                className="w-auto h-auto transition-transform duration-500 group-hover:scale-105 select-none filter drop-shadow-sm"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-med-teal-50 text-med-teal-600 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-slate-800">{product.title}</span>
                <span className="text-xs text-slate-500 mt-0.5">Clinical Grade Accessory</span>
              </div>
            )}
          </div>

          {/* Product Title & Short Description */}
          <div>
            <h3
              id="accessory-modal-title"
              className="text-2xl font-extrabold font-heading text-navy-950 tracking-tight leading-snug"
            >
              {product.title}
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {/* Key Clinical Features */}
          {product.features && product.features.length > 0 && (
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Key Clinical Highlights:
              </span>
              <div className="space-y-2">
                {product.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100/90 text-xs text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <CheckCircle2 className="w-4 h-4 text-med-teal-600 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Grid */}
          {product.specs && product.specs.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Technical Specifications:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {product.specs.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100"
                  >
                    <span className="text-[10px] text-slate-400 block uppercase font-sans font-medium">
                      {s.label}
                    </span>
                    <span className="text-slate-900 font-bold truncate block mt-0.5">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 sm:px-7 border-t border-slate-100 bg-slate-50/95 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
          >
            Close
          </button>

          <Link
            href={`/contact?product=${encodeURIComponent(product.title)}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-med-teal-600 to-med-teal-700 hover:from-med-teal-700 hover:to-med-teal-800 shadow-md shadow-med-teal-600/25 hover:shadow-lg hover:shadow-med-teal-600/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Request Quote / Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}
