"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IClient } from "@/types";
import { ChevronLeft, ChevronRight, Quote, Building2, MapPin } from "lucide-react";

interface TestimonialCarouselProps {
  testimonials: IClient[];
  autoAdvanceInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoAdvanceInterval = 7000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoAdvanceInterval);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, autoAdvanceInterval, testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white rounded-2xl border border-clinical-200 shadow-sm p-8 sm:p-12 overflow-hidden min-h-[320px] flex flex-col justify-between relative">
        <div className="absolute top-6 right-8 text-med-teal-500/10 pointer-events-none">
          <Quote className="w-24 h-24 rotate-180" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-med-teal-600 uppercase tracking-widest mb-4">
              <Building2 className="w-4 h-4" />
              <span>Clinical Evaluation & Operational Feedback</span>
            </div>

            <blockquote className="text-lg sm:text-xl text-navy-950 font-normal leading-relaxed italic">
              &ldquo;{current.testimonial || "Panakeia critical care workstations delivered exceptional reliability in our surgical suites."}&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-clinical-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-navy-950 font-heading text-base">
                  {current.doctorName || "Chief of Anaesthesia"}
                </div>
                <div className="text-sm text-clinical-600 font-medium flex items-center gap-1.5 mt-0.5">
                  <span>{current.name}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-clinical-500">
                    <MapPin className="w-3 h-3 text-med-teal-500" />
                    {current.city}, {current.state}
                  </span>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-6 bg-med-teal-500"
                        : "w-2 bg-clinical-200 hover:bg-clinical-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Visible Prev/Next Controls */}
      <div className="flex items-center justify-end gap-3 mt-4">
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="p-2.5 rounded-lg border border-clinical-200 bg-white hover:bg-clinical-50 text-clinical-700 hover:text-navy-900 transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-teal-500"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="p-2.5 rounded-lg border border-clinical-200 bg-white hover:bg-clinical-50 text-clinical-700 hover:text-navy-900 transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-teal-500"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
