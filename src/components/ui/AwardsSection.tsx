"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AwardItem {
  id: string;
  image: string;
  title: string;
  description: string;
  actionText: string;
  category: string;
}

const AWARDS: AwardItem[] = [
  {
    id: "award-1",
    image: "/image/WhatsApp Image 2026-08-17 at 19.14.26.jpeg",
    title: "VCCI Excellence Awards 2024",
    description: "Star of Industry — Awarded for Innovation in Medical Devices by The Vizagapatam Chamber of Commerce & Industry.",
    actionText: "View Award",
    category: "Industry Recognition",
  },
  {
    id: "award-2",
    image: "/image/WhatsApp Image 2026-08-17 at 19.14.29.jpeg",
    title: "VCCI Award of Recognition 2024",
    description: "Presented by Ms Sandhya Devanathan (MD & VP - Meta India) for Pioneer Innovation in Medical Devices.",
    actionText: "View Award",
    category: "National Distinction",
  },
  {
    id: "award-3",
    image: "/image/WhatsApp Image 2026-08-17 at 19.14.18.jpeg",
    title: "KIHT ISO 13485:2016 Certification",
    description: "Medical Devices Quality Management System accredited by Kalam Institute of Health Technology & UAF.",
    actionText: "View Certificate",
    category: "Quality Standard",
  },
  {
    id: "award-4",
    image: "/image/WhatsApp Image 2026-08-17 at 19.14.14.jpeg",
    title: "EuroPaCert ISO 9001:2015",
    description: "Certified Quality Management for Critical Care Anaesthesia & Ventilator Manufacturing.",
    actionText: "View Certificate",
    category: "International Standard",
  },
];

export function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-slide every 5 seconds unless paused or modal is open
  useEffect(() => {
    if (isPaused || selectedAward !== null) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AWARDS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, selectedAward]);

  // Auto-scroll the active card into view smoothly
  useEffect(() => {
    if (carouselRef.current) {
      const activeCard = carouselRef.current.children[currentIndex] as HTMLElement | undefined;
      if (activeCard) {
        const container = carouselRef.current;
        const scrollLeft =
          activeCard.offsetLeft - container.offsetWidth / 2 + activeCard.offsetWidth / 2;
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % AWARDS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + AWARDS.length) % AWARDS.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#f8fafc] overflow-hidden relative border-t border-clinical-200">
      {/* Background subtle elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-med-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0062d2]">
              <Award className="w-4 h-4" />
              OUR ACHIEVEMENTS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy-950 tracking-tight leading-tight">
              Awards & Recognitions
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Recognizing excellence in medical equipment innovation and quality
            </p>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous award"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 text-slate-700 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next award"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 text-slate-700 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-500 font-medium ml-2">
                {currentIndex + 1} / {AWARDS.length}
              </span>
            </div>
          </div>

          {/* Right Column: 3D-Style Card Carousel */}
          <div className="lg:col-span-7 relative">
            <div
              ref={carouselRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-4 px-2 snap-x"
            >
              {AWARDS.map((award, index) => {
                const isCurrent = index === currentIndex;

                return (
                  <motion.div
                    key={award.id}
                    layout
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    onClick={() => setCurrentIndex(index)}
                    className={`shrink-0 w-[260px] sm:w-[290px] md:w-[320px] rounded-2xl bg-white border transition-all duration-300 snap-center cursor-pointer ${
                      isCurrent
                        ? "shadow-2xl ring-2 ring-[#0062d2]/20 border-[#0062d2]/30 scale-105 z-20"
                        : "shadow-md hover:shadow-lg border-slate-200 opacity-80 hover:opacity-100 scale-95 z-10"
                    }`}
                  >
                    {/* Award Image Container */}
                    <div className="relative h-48 sm:h-56 w-full rounded-t-2xl overflow-hidden bg-slate-100/80 p-3 group">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 290px, 320px"
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAward(award);
                        }}
                        aria-label={`Enlarge ${award.title}`}
                        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-[#0062d2]"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Award Content */}
                    <div className="p-5 space-y-2.5">
                      <h3 className="font-bold text-base text-navy-950 line-clamp-1 font-heading">
                        {award.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                        {award.description}
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedAward(award);
                          }}
                          className="text-xs sm:text-sm font-bold text-[#0062d2] hover:text-[#004bb5] inline-flex items-center gap-1 transition-colors"
                        >
                          {award.actionText}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* High-Resolution Award Lightbox Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0062d2]">
                    {selectedAward.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-950 font-heading">
                    {selectedAward.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedAward(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative w-full h-[380px] sm:h-[480px] bg-slate-50 p-4">
                <Image
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-contain"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedAward.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
