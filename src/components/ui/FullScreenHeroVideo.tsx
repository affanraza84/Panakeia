"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  ChevronDown,
} from "lucide-react";

interface FullScreenHeroVideoProps {
  videoSrc?: string;
}

export function FullScreenHeroVideo({
  videoSrc = "/video/panakeia-intro-video.mp4",
}: FullScreenHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[640px] max-h-[1080px] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* 1. FULL SCREEN BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/image/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src="/video/panakeia-intro-video.webm" type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* 2. CINEMATIC GRADIENT & CONTRAST OVERLAYS */}
      {/* Dark tint so clinical typography is high contrast */}
      <div className="absolute inset-0 bg-navy-950/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
      <div className="absolute inset-0 subtle-grid-pattern-dark opacity-20 pointer-events-none" />

      {/* 3. HERO CONTENT LAYER */}
      <Container className="relative z-10 w-full pt-6 pb-12">
        <div className="max-w-3xl">
          {/* National / Indigenous Badge */}
          <div className="inline-flex items-center gap-2 bg-navy-900/80 border border-med-teal-400/40 px-4 py-1.5 rounded-full text-xs text-med-teal-300 font-medium mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Indigenous Critical Care Engineering • 100% In-House Parts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.1] drop-shadow-md">
            Precision Life-Support. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-med-teal-300 via-med-teal-400 to-med-teal-200">
              Manufactured for Indian Healthcare.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-clinical-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            Panakeia Medtech manufactures indigenous, clinical-grade Anaesthesia Workstations and Intensive Care Ventilators, with all parts manufactured directly by Panakeia itself.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href="/products"
              variant="primary"
              size="lg"
              className="shadow-lg shadow-med-teal-500/20"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Product Portfolio
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Request Procurement Quote
            </Button>
          </div>

          {/* Quick Trust Strip */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-clinical-200">
            <div className="flex items-center gap-2 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-med-teal-300 shrink-0" />
              <span>CDSCO Compliant</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-xs">
              <Building2 className="w-4 h-4 text-med-teal-300 shrink-0" />
              <span>100% In-House Manufactured</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1 backdrop-blur-xs">
              <Clock className="w-4 h-4 text-med-teal-300 shrink-0" />
              <span>30+ Yrs OT Experience</span>
            </div>
          </div>
        </div>
      </Container>

      {/* 4. BOTTOM FLOATING CONTROLS & SCROLL PROMPT */}
      <div className="absolute bottom-4 left-0 right-0 z-20 px-6">
        <Container className="flex items-center justify-between">
          {/* Scroll Down Button */}
          <button
            onClick={scrollToContent}
            aria-label="Scroll down"
            className="flex items-center gap-2 text-xs font-medium text-clinical-300 hover:text-white transition-colors cursor-pointer group bg-navy-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
          >
            <span>Explore Clinical Specs</span>
            <ChevronDown className="w-3.5 h-3.5 text-med-teal-400 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Floating Audio & Playback Controls */}
          <div className="flex items-center gap-2 bg-navy-950/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-white shadow-xl">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Background Video" : "Play Background Video"}
              className="p-1 rounded hover:bg-white/20 transition-colors cursor-pointer text-med-teal-300 hover:text-white"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>

            <div className="w-[1px] h-3 bg-white/20" />

            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
              className="flex items-center gap-1.5 text-[11px] font-mono hover:text-med-teal-300 transition-colors cursor-pointer px-1"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-clinical-400" />
                  <span className="hidden sm:inline text-clinical-400">Sound Off</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-med-teal-300" />
                  <span className="hidden sm:inline text-med-teal-300">Sound On</span>
                </>
              )}
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
