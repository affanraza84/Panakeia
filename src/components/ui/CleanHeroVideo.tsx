"use client";

import React, { useRef, useEffect } from "react";
import { Container } from "./Container";

interface CleanHeroVideoProps {
  videoSrc?: string;
}

export function CleanHeroVideo({
  videoSrc = "/video/panakeia-intro-video.mp4",
}: CleanHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Handled silently
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[60vh] sm:h-[68vh] lg:h-[72vh] min-h-[420px] max-h-[660px] bg-slate-950 flex items-center justify-center overflow-hidden border-b border-clinical-200 shadow-inner">
      {/* 1. Continuous Smooth Video Playing */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/image/hero-poster.jpg"
        className="w-full h-full object-cover object-center pointer-events-none"
      >
        <source src="/video/panakeia-intro-video.webm" type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Subtle vignette gradient overlay for crisp text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* 2. Hero Bottom-Left Title & Accent Bar (Matching Reference Screenshot) */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 pointer-events-none">
        <Container>
          <div className="max-w-2xl">
            {/* Main Bold Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight drop-shadow-md">
              Critical Care Solutions
            </h1>

            {/* Solid Accent Line directly below title */}
            <div className="w-48 sm:w-64 h-1.5 sm:h-2 bg-[#1e40af] rounded-full my-2.5 sm:my-3 shadow-md" />

            {/* Subtitle below accent bar */}
            <p className="text-lg sm:text-2xl font-bold text-white/95 tracking-wide drop-shadow-sm font-heading">
              Workstations & Ventilators
            </p>

            {/* Professional Intro Statement */}
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-200 font-medium max-w-xl leading-relaxed drop-shadow-md">
              Led by industry experts with 35+ years of global experience in critical care and medical technology.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
