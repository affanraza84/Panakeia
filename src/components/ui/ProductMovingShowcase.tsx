"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { IProduct } from "@/types";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Building2,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface ProductMovingShowcaseProps {
  products: IProduct[];
}

const CATEGORY_LABELS: Record<string, string> = {
  anaesthesia: "Anaesthesia Machine",
  ventilator: "Ventilator",
  monitoring: "Patient Monitor",
  infusion: "Syringe & Infusion Pump",
  emergency: "Emergency Resuscitation",
  accessories: "Medical Accessories",
};

const CATEGORY_BADGE_STYLES: Record<string, string> = {
  anaesthesia: "bg-med-teal-50 text-med-teal-700 border-med-teal-200",
  ventilator: "bg-blue-50 text-blue-700 border-blue-200",
  monitoring: "bg-indigo-50 text-indigo-700 border-indigo-200",
  infusion: "bg-purple-50 text-purple-700 border-purple-200",
  emergency: "bg-rose-50 text-rose-700 border-rose-200",
  accessories: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function ProductMovingShowcase({ products }: ProductMovingShowcaseProps) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items for continuous infinite marquee loop
  const marqueeItems = useMemo(() => {
    if (!products || products.length === 0) return [];
    if (products.length < 5) {
      return [...products, ...products, ...products, ...products];
    }
    return [...products, ...products];
  }, [products]);

  const isMarqueePaused = isPaused || selectedProduct !== null;

  const handleOpenProduct = (product: IProduct) => {
    setIsPaused(true);
    setSelectedProduct(product);
    setActiveImageIndex(0);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
    setIsPaused(false);
  };

  const handleNextProduct = () => {
    if (!selectedProduct || products.length === 0) return;
    const currentIndex = products.findIndex((p) => p.slug === selectedProduct.slug);
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedProduct(products[nextIndex]);
    setActiveImageIndex(0);
  };

  const handlePrevProduct = () => {
    if (!selectedProduct || products.length === 0) return;
    const currentIndex = products.findIndex((p) => p.slug === selectedProduct.slug);
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    setSelectedProduct(products[prevIndex]);
    setActiveImageIndex(0);
  };

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProduct) return;
      if (e.key === "Escape") {
        handleCloseProduct();
      } else if (e.key === "ArrowLeft") {
        handlePrevProduct();
      } else if (e.key === "ArrowRight") {
        handleNextProduct();
      }
    };

    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct, products]);

  return (
    <section className="bg-slate-50/70 border-b border-clinical-200 py-4 sm:py-6 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-med-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 mb-3 sm:mb-4">
        {/* SECTION HEADER - COMPACT & CLEAN */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-navy-900 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-med-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-med-teal-600"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-med-teal-700 font-bold">
                Live Equipment Stream
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold font-heading text-navy-950 tracking-tight">
              Indigenous Critical Care Equipment Portfolio
            </h2>
          </div>

          <p className="text-xs text-clinical-600">
            Hover to pause • Click image for enlarged view & specifications
          </p>
        </div>
      </Container>

      {/* CONTINUOUS MOVING MARQUEE TRACK (IMAGE-FOCUSED CARDS) */}
      <div
        className="relative w-full overflow-hidden py-1.5 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!selectedProduct) {
            setIsPaused(false);
          }
        }}
      >
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20" />

        {/* The Track with Pure Image Cards */}
        <div
          ref={trackRef}
          className="flex flex-row flex-nowrap items-center gap-4 sm:gap-5 w-max animate-marquee-ltr"
          style={{
            animationPlayState: isMarqueePaused ? "paused" : "running",
          }}
        >
          {marqueeItems.map((product, idx) => {
            const categoryBadge =
              CATEGORY_BADGE_STYLES[product.category] ||
              "bg-slate-100 text-slate-700 border-slate-200";
            const categoryLabel =
              CATEGORY_LABELS[product.category] || product.category;
            const primaryImage = product.images[0] || "/placeholder-product.jpg";

            return (
              <div
                key={`${product._id || product.slug}-${idx}`}
                onClick={() => handleOpenProduct(product)}
                style={{
                  width: "340px",
                  minWidth: "340px",
                  maxWidth: "340px",
                  height: "260px",
                  flexShrink: 0,
                }}
                className="w-[300px] sm:w-[340px] min-w-[300px] sm:min-w-[340px] h-[230px] sm:h-[260px] shrink-0 bg-slate-100 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-med-teal-500/70 transition-all duration-300 cursor-pointer overflow-hidden relative group/card flex items-center justify-center p-4 sm:p-5"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenProduct(product);
                  }
                }}
              >
                {/* Background Subtle Grey Canvas */}
                <div className="absolute inset-0 bg-slate-100 pointer-events-none" />
                <div className="absolute w-44 h-44 rounded-full bg-med-teal-500/5 blur-xl group-hover/card:bg-med-teal-500/20 transition-all duration-300 pointer-events-none" />

                {/* Pure Image Viewport with Larger Dimensions */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={primaryImage}
                    alt={`Panakeia ${product.name}`}
                    fill
                    sizes="(max-width: 640px) 300px, 340px"
                    className="object-contain p-2 sm:p-3 group-hover/card:scale-110 transition-transform duration-500 ease-out drop-shadow-md"
                  />
                </div>

                {/* Top Left: Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-2xs font-mono ${categoryBadge}`}
                  >
                    {categoryLabel}
                  </span>
                </div>

                {/* Top Right: Enlarge Icon Indicator */}
                <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-lg bg-white/95 backdrop-blur-xs border border-slate-200 shadow-2xs text-navy-900 flex items-center justify-center opacity-85 group-hover/card:opacity-100 group-hover/card:bg-med-teal-600 group-hover/card:text-white group-hover/card:border-med-teal-600 transition-all duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Overlay Pill: Product Name + View All Button */}
                <div className="absolute inset-x-2.5 sm:inset-x-3 bottom-2.5 z-10 opacity-95 group-hover/card:opacity-100 transition-opacity">
                  <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-xs flex items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm font-bold text-navy-950 truncate group-hover/card:text-med-teal-700 transition-colors min-w-0 flex-1">
                      {product.name}
                    </p>
                    <Link
                      href="/products"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="shrink-0 inline-flex items-center gap-1 text-[10.5px] sm:text-[11px] font-bold text-med-teal-700 hover:text-white bg-med-teal-50 hover:bg-med-teal-600 px-2 sm:px-2.5 py-1 rounded-lg border border-med-teal-200/80 hover:border-med-teal-600 transition-all duration-200 shadow-2xs cursor-pointer"
                      title="View all products"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ENLARGED PRODUCT DESCRIPTION & HIGH-RES MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
          >
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseProduct}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col"
            >
              {/* TOP MODAL BAR */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/95 backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-india-saffron animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy-900">
                    Indigenous Medical Engineering Showcase
                  </span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={handlePrevProduct}
                    className="p-1.5 rounded-lg text-clinical-600 hover:text-navy-900 hover:bg-slate-200 transition-colors"
                    title="Previous Product (Left Arrow)"
                    aria-label="Previous Product"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextProduct}
                    className="p-1.5 rounded-lg text-clinical-600 hover:text-navy-900 hover:bg-slate-200 transition-colors"
                    title="Next Product (Right Arrow)"
                    aria-label="Next Product"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="h-4 w-px bg-slate-200 mx-1" />
                  <button
                    type="button"
                    onClick={handleCloseProduct}
                    className="p-1.5 rounded-lg text-clinical-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Close (Esc)"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* MODAL BODY (SCROLLABLE) */}
              <div className="overflow-y-auto p-5 sm:p-8 space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* LEFT: ENLARGED IMAGE VIEWPORT */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="relative aspect-square w-full rounded-2xl bg-slate-100 border border-slate-200 p-6 flex items-center justify-center overflow-hidden shadow-inner">
                      <div className="absolute inset-0 subtle-grid-pattern opacity-30 pointer-events-none" />
                      <div className="absolute w-48 h-48 rounded-full bg-med-teal-500/10 blur-2xl pointer-events-none" />

                      <div className="relative w-full h-full">
                        <Image
                          src={
                            selectedProduct.images[activeImageIndex] ||
                            selectedProduct.images[0] ||
                            "/placeholder-product.jpg"
                          }
                          alt={`Panakeia ${selectedProduct.name} — High-Res View`}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 420px"
                          className="object-contain p-2 drop-shadow-md transition-all duration-300"
                        />
                      </div>

                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs border border-slate-200 text-[10px] font-mono text-clinical-700 shadow-2xs font-semibold">
                        High-Res Showcase View
                      </div>
                    </div>

                    {/* Image Thumbnails if multiple exist */}
                    {selectedProduct.images.length > 1 && (
                      <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {selectedProduct.images.map((img, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveImageIndex(i)}
                            className={`relative w-16 h-16 rounded-xl border-2 overflow-hidden bg-slate-100 transition-all shrink-0 ${
                              activeImageIndex === i
                                ? "border-med-teal-600 ring-2 ring-med-teal-500/30"
                                : "border-slate-200 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`Panakeia ${selectedProduct.name} view ${i + 1}`}
                              fill
                              sizes="64px"
                              className="object-contain p-1"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Quality Assurance Strip */}
                    <div className="rounded-xl bg-clinical-50 p-3.5 border border-clinical-200 flex items-start gap-3 text-xs text-clinical-700">
                      <Building2 className="w-5 h-5 text-med-teal-600 shrink-0 mt-0.5" />
                      <div className="leading-snug">
                        <span className="font-bold text-navy-950">In-House Manufacturing:</span> All parts,
                        electronic microprocessors, and pneumatic manifolds are manufactured directly by
                        Panakeia itself in Visakhapatnam.
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: RICH PRODUCT DESCRIPTION & CLINICAL SPECS */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                    {/* Header Tags & Title */}
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs font-mono ${
                            CATEGORY_BADGE_STYLES[selectedProduct.category] ||
                            "bg-slate-100 text-slate-700 border-slate-200"
                          }`}
                        >
                          {CATEGORY_LABELS[selectedProduct.category] || selectedProduct.category}
                        </span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-50 text-navy-900 border border-navy-200">
                          Make in India
                        </span>
                        <span className="text-[11px] font-mono text-med-teal-700 bg-med-teal-50 px-2.5 py-1 rounded-full border border-med-teal-200">
                          CDSCO Compliant
                        </span>
                      </div>

                      <h3
                        id="modal-product-title"
                        className="text-xl sm:text-2xl font-bold font-heading text-navy-950 leading-tight"
                      >
                        {selectedProduct.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-med-teal-800 bg-med-teal-50/70 p-3 rounded-xl border border-med-teal-100 leading-relaxed">
                        {selectedProduct.tagline}
                      </p>
                    </div>

                    {/* Rich Clinical Description */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">
                        Clinical Overview
                      </h4>
                      <p className="text-xs sm:text-sm text-clinical-700 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Key Highlights / Features */}
                    {selectedProduct.features && selectedProduct.features.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">
                          Key Clinical Capabilities
                        </h4>
                        <div className="grid grid-cols-1 gap-1.5">
                          {selectedProduct.features.slice(0, 4).map((feature, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-2.5 text-xs text-clinical-800 bg-slate-50 p-2 rounded-lg border border-slate-100"
                            >
                              <CheckCircle2 className="w-4 h-4 text-med-teal-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technical Specs Table */}
                    {selectedProduct.specs && selectedProduct.specs.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">
                          Selected Technical Specifications
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {selectedProduct.specs.slice(0, 4).map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs"
                            >
                              <div className="text-[10px] font-mono text-clinical-500 uppercase">
                                {spec.label}
                              </div>
                              <div className="font-semibold text-navy-950 mt-0.5 truncate">
                                {spec.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* MODAL FOOTER ACTION BAR */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-clinical-600">
                    <ShieldCheck className="w-4 h-4 text-med-teal-600" />
                    <span>ISO 13485:2016 & CDSCO Compliant</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {selectedProduct.brochurePdfUrl && (
                      <a
                        href={selectedProduct.brochurePdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-clinical-600" />
                        <span>Download Spec Sheet</span>
                      </a>
                    )}

                    <Link
                      href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                      onClick={handleCloseProduct}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-med-teal-600 hover:bg-med-teal-700 shadow-xs transition-colors"
                    >
                      <span>Request OT Demo / Quote</span>
                    </Link>

                    <Link
                      href={`/products/${selectedProduct.slug}`}
                      onClick={handleCloseProduct}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-navy-900 hover:bg-navy-950 shadow-xs transition-colors group"
                    >
                      <span>Full Product Page</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="/products"
                      onClick={handleCloseProduct}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-med-teal-800 bg-med-teal-50 hover:bg-med-teal-100 border border-med-teal-200 shadow-xs transition-colors"
                    >
                      <span>View All Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
