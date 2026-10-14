"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Globe2,
  Users,
  GraduationCap,
  Trophy,
  Stethoscope,
  LayoutGrid,
  MapPin,
  Calendar,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { ConferenceEvent, ConferenceCategory } from "@/lib/conferenceData";
import { cn } from "@/lib/utils";

interface ConferenceGalleryProps {
  categories: ConferenceCategory[];
  events: ConferenceEvent[];
}

export function ConferenceGallery({ categories, events }: ConferenceGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null);

  // Category Icon Resolver
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-4 h-4" />;
      case "Globe2":
        return <Globe2 className="w-4 h-4" />;
      case "Users":
        return <Users className="w-4 h-4" />;
      case "GraduationCap":
        return <GraduationCap className="w-4 h-4" />;
      case "Trophy":
        return <Trophy className="w-4 h-4" />;
      case "Stethoscope":
        return <Stethoscope className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [events, selectedCategory, searchQuery]);

  // Active event for lightbox
  const activeEvent =
    activeEventIndex !== null && filteredEvents[activeEventIndex]
      ? filteredEvents[activeEventIndex]
      : null;

  const handleNext = useCallback(() => {
    if (activeEventIndex === null) return;
    setActiveEventIndex((prev) =>
      prev !== null && prev < filteredEvents.length - 1 ? prev + 1 : 0
    );
  }, [activeEventIndex, filteredEvents.length]);

  const handlePrev = useCallback(() => {
    if (activeEventIndex === null) return;
    setActiveEventIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredEvents.length - 1
    );
  }, [activeEventIndex, filteredEvents.length]);

  const handleClose = useCallback(() => {
    setActiveEventIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeEventIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeEventIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activeEventIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeEventIndex]);

  return (
    <div className="space-y-8">
      {/* Category Navigation & Search Bar */}
      <div className="bg-white rounded-2xl border border-clinical-200/90 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none text-xs sm:text-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0",
                    isActive
                      ? "bg-navy-950 text-white shadow-md shadow-navy-950/20"
                      : "bg-clinical-50 text-clinical-700 hover:bg-clinical-100 hover:text-navy-950 border border-clinical-200/80"
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors",
                      isActive ? "text-med-teal-400" : "text-clinical-500"
                    )}
                  >
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span>{cat.label}</span>
                  <span
                    className={cn(
                      "text-[11px] px-1.5 py-0.2 rounded-full font-mono font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-clinical-200/70 text-clinical-700"
                    )}
                  >
                    {cat.id === "all"
                      ? events.length
                      : events.filter((e) => e.category === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 sm:w-72 lg:w-80">
            <Search className="w-4 h-4 text-clinical-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search events, guests, hospital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-clinical-50 border border-clinical-200 focus:outline-none focus:border-med-teal-500 focus:bg-white text-navy-950 placeholder:text-clinical-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-clinical-400 hover:text-navy-950 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-clinical-200 p-8">
          <div className="w-14 h-14 rounded-full bg-clinical-100 text-clinical-500 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-navy-950 font-heading">
            No events match your criteria
          </h3>
          <p className="text-xs sm:text-sm text-clinical-500 mt-1 max-w-sm mx-auto">
            Try resetting your search query or selecting a different category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-navy-950 text-white text-xs font-semibold hover:bg-navy-900 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredEvents.map((event, index) => {
            const isFeatured = event.featured;
            const isPortrait = event.aspectRatio === "portrait";

            return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "group bg-white rounded-2xl border border-clinical-200 overflow-hidden shadow-2xs hover:shadow-xl hover:border-med-teal-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer",
                  isFeatured && "ring-1 ring-med-teal-500/30"
                )}
                onClick={() => setActiveEventIndex(index)}
              >
                <div>
                  {/* Image Container */}
                  <div
                    className={cn(
                      "relative overflow-hidden bg-slate-900",
                      isPortrait ? "aspect-[4/5]" : "aspect-[16/10]"
                    )}
                  >
                    <Image
                      src={event.imageSrc}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className="px-2.5 py-1 rounded-lg bg-navy-950/80 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10 shadow-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-med-teal-400" />
                        {event.categoryLabel}
                      </span>

                      {isFeatured && (
                        <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Key Milestone
                        </span>
                      )}
                    </div>

                    {/* Bottom Metadata Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-10">
                      <div className="flex items-center gap-1.5 text-clinical-200 text-[11px] bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                        <MapPin className="w-3 h-3 text-med-teal-400 shrink-0" />
                        <span className="truncate max-w-[180px]">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-clinical-200 text-[11px] bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg">
                        <Calendar className="w-3 h-3 text-med-teal-400 shrink-0" />
                        <span>{event.date}</span>
                      </div>
                    </div>

                    {/* Hover Prompt Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-white/90 text-navy-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-5 h-5 text-med-teal-700" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-navy-950 font-heading leading-snug group-hover:text-med-teal-700 transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-clinical-600 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="px-5 pb-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-clinical-100">
                    {event.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-clinical-50 text-clinical-600 border border-clinical-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {activeEvent && activeEventIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={handleClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full bg-navy-950 border border-navy-800 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-navy-800 bg-navy-900/80 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-med-teal-500/20 text-med-teal-400 text-xs font-semibold border border-med-teal-500/30">
                    {activeEvent.categoryLabel}
                  </span>
                  <span className="text-xs text-clinical-400 font-mono">
                    Image {activeEventIndex + 1} of {filteredEvents.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-navy-800 text-clinical-300 hover:text-white hover:bg-navy-700 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Media & Details View */}
              <div className="overflow-y-auto flex-1 flex flex-col lg:flex-row">
                {/* Image Display */}
                <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] sm:min-h-[460px] lg:min-h-[520px] p-2">
                  <div className="relative w-full h-full min-h-[300px] sm:min-h-[440px] max-h-[65vh]">
                    <Image
                      src={activeEvent.imageSrc}
                      alt={activeEvent.title}
                      fill
                      priority
                      quality={95}
                      className="object-contain"
                    />
                  </div>

                  {/* Previous / Next Controls on Image */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Event Sidebar Details */}
                <div className="w-full lg:w-96 bg-navy-900/90 border-t lg:border-t-0 lg:border-l border-navy-800 p-5 sm:p-6 flex flex-col justify-between shrink-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-clinical-400">
                      <Calendar className="w-3.5 h-3.5 text-med-teal-400" />
                      <span>{activeEvent.date}</span>
                      <span>•</span>
                      <MapPin className="w-3.5 h-3.5 text-med-teal-400" />
                      <span className="truncate">{activeEvent.location}</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                      {activeEvent.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-clinical-300 leading-relaxed">
                      {activeEvent.description}
                    </p>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-bold text-clinical-400 mb-2">
                        Key Participants & Focus
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeEvent.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-navy-800 border border-navy-700 text-clinical-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer Controls */}
                  <div className="pt-6 mt-6 border-t border-navy-800 flex items-center justify-between text-xs text-clinical-400">
                    <span className="font-mono">
                      Use ← → keys to navigate
                    </span>
                    <button
                      onClick={handleClose}
                      className="px-4 py-2 rounded-xl bg-med-teal-600 hover:bg-med-teal-500 text-white font-bold transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
