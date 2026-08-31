"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Award, 
  ShieldCheck, 
  Maximize2,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AwardItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  accreditationBody: string;
  actionText: string;
  category: string;
  number?: string;
}

const AWARDS: AwardItem[] = [
  {
    id: "award-iso-9001",
    image: "/image/certificate-iso-9001.jpeg",
    title: "EuroPaCert ISO 9001:2015 Quality Management System",
    subtitle: "Certificate No: EPC2024Q1198 — Medical Device Manufacturing",
    description: "Certified quality management for the design, development, manufacture, and servicing of Critical Care Anaesthesia Workstations and Intensive Care Ventilators.",
    accreditationBody: "EuroPaCert International",
    actionText: "View ISO 9001 Certificate",
    category: "International Standard",
    number: "ISO 9001:2015",
  },
  {
    id: "award-iso-13485",
    image: "/image/certificate-iso-13485.jpeg",
    title: "KIHT ISO 13485:2016 Medical Devices Quality System",
    subtitle: "Accredited by Kalam Institute of Health Technology & UAF (USA)",
    description: "Medical Devices Quality Management System (MDQMS) validating strict regulatory and clinical safety compliance for high-acuity life-support equipment.",
    accreditationBody: "KIHT & UAF Accreditation",
    actionText: "View ISO 13485 Certificate",
    category: "Medical Device Standard",
    number: "ISO 13485:2016",
  },
  {
    id: "award-vcci-excellence",
    image: "/image/award-vcci-trophy.jpeg",
    title: "VCCI Excellence Awards 2024 — Star of Industry",
    subtitle: "Presented by The Vizagapatam Chamber of Commerce & Industry",
    description: "Conferred 'Star of Industry' in recognition of pioneering self-reliance and engineering excellence in indigenous medical device manufacturing with 100% parts produced in-house.",
    accreditationBody: "VCCI Industry Conclave",
    actionText: "View Award Plaque",
    category: "Industry Recognition",
    number: "Star of Industry 2024",
  },
  {
    id: "award-vcci-recognition",
    image: "/image/award-vcci-plaque.jpeg",
    title: "VCCI Award of Recognition 2024 — Medical Devices",
    subtitle: "Presented by Ms Sandhya Devanathan (MD & VP - Meta India)",
    description: "Honored for innovation and high-acuity critical care device engineering, presented during the VCCI Conclave by Meta India leadership.",
    accreditationBody: "VCCI & Meta India",
    actionText: "View Award Plaque",
    category: "National Distinction",
    number: "Innovation Award 2024",
  },
];

export function AwardsSection() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  const handleOpenLightbox = (award: AwardItem) => {
    setSelectedAward(award);
    setZoomScale(1);
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomScale(1);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#f8fafc] overflow-hidden relative border-t border-clinical-200">
      {/* Background subtle ambiance */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0062d2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-med-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0062d2] text-xs font-bold uppercase tracking-widest shadow-2xs">
            <Award className="w-4 h-4 text-[#0062d2]" />
            <span>AUTHENTICATED ACCREDITATIONS & AWARDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy-950 tracking-tight leading-tight">
            Awards & Regulatory Certifications
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            All certifications and awards are independently verified, with all device components and parts manufactured in-house by Panakeia itself in Visakhapatnam.
          </p>
        </div>

        {/* 4 HIGH-DEFINITION CERTIFICATE & AWARD CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {AWARDS.map((award) => (
            <motion.div
              key={award.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-[#0062d2]/60 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Category & Badge Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-white text-[#0062d2] border border-blue-200 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0062d2]" />
                  {award.category}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                  {award.number}
                </span>
              </div>

              {/* PURE WHITE IMAGE CONTAINER (Balanced 380px height) */}
              <div 
                style={{ height: "380px", minHeight: "380px" }}
                className="relative w-full bg-white p-4 sm:p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden cursor-pointer group/img"
                onClick={() => handleOpenLightbox(award)}
              >
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  priority
                  quality={100}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center p-2 transition-transform duration-300 group-hover/img:scale-[1.02] filter drop-shadow-sm"
                />

                {/* Hover Quick Zoom Button */}
                <div className="absolute inset-0 bg-navy-950/15 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                  <span className="px-4 py-2 rounded-xl bg-navy-950/90 text-white font-bold text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#0062d2]" />
                    Click to View Full Document
                  </span>
                </div>
              </div>

              {/* Card Body & Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg sm:text-xl text-navy-950 font-heading leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 font-mono">
                    {award.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {award.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenLightbox(award)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0062d2] hover:text-[#004bb5] transition-colors cursor-pointer group/btn"
                  >
                    <span>{award.actionText}</span>
                    <Maximize2 className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  </button>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-500">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Original
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* NORMAL, PERFECTLY PROPORTIONED LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl sm:max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col border border-slate-200"
            >
              {/* Modal Header with Zoom Tools */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white gap-3 shrink-0">
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0062d2]">
                    {selectedAward.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-navy-950 font-heading truncate">
                    {selectedAward.title}
                  </h3>
                </div>

                {/* Zoom & Close Toolbar */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomScale <= 0.75}
                      className="p-1.5 rounded-lg hover:bg-white text-slate-700 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold px-2 text-slate-700 min-w-[3rem] text-center font-mono">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoomScale >= 2.5}
                      className="p-1.5 rounded-lg hover:bg-white text-slate-700 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="p-1.5 rounded-lg hover:bg-white text-slate-700 transition-colors ml-1 cursor-pointer"
                      title="Reset (100%)"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedAward(null)}
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors ml-1 cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Normal Sized Modal Image Viewport */}
              <div 
                style={{ height: "380px", minHeight: "380px", position: "relative" }}
                className="relative w-full bg-slate-50/60 p-4 sm:p-6 flex items-center justify-center overflow-auto"
              >
                <div
                  style={{ transform: `scale(${zoomScale})`, transformOrigin: "center center" }}
                  className="transition-transform duration-200 flex items-center justify-center max-w-full max-h-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    className="max-h-[340px] max-w-full w-auto h-auto object-contain filter drop-shadow-sm rounded-lg"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {selectedAward.description}
                </p>
                <div className="text-xs font-semibold text-slate-400 shrink-0 font-mono">
                  100% In-House Manufactured
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
