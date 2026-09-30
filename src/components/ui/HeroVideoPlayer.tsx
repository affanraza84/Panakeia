"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Activity,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface HeroVideoPlayerProps {
  src?: string;
  className?: string;
}

export function HeroVideoPlayer({
  src = "/video/panakeia-intro-video.mp4",
  className = "",
}: HeroVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure smooth autoplay when in view
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy without user interaction
          setIsPlaying(false);
        });
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

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-med-teal-500/30 bg-navy-950/90 shadow-2xl group ${className}`}
    >
      {/* Top Overlay Badge Bar */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-navy-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[11px] font-mono text-med-teal-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Panakeia • In-House Facility Tour</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 bg-navy-950/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono text-clinical-300">
          <Activity className="w-3 h-3 text-med-teal-400" />
          <span>HD 1080p</span>
        </div>
      </div>

      {/* Video Element */}
      <div className="relative w-full aspect-video bg-navy-950 flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/image/hero-poster.jpg"
          onLoadedData={() => setIsLoaded(true)}
          className="w-full h-full object-cover object-center rounded-2xl transition-opacity duration-500"
        >
          <source src="/video/panakeia-intro-video.webm" type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>

        {/* Gradient Overlay for Edge Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30 pointer-events-none" />
      </div>

      {/* Bottom Interactive Control Bar */}
      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between bg-navy-950/85 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-white shadow-lg transition-opacity duration-300 opacity-90 group-hover:opacity-100">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-med-teal-500 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-teal-400"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-teal-400"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-clinical-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-med-teal-300" />
            )}
          </button>

          <span className="text-[11px] font-mono text-clinical-300 hidden sm:inline-block">
            {isPlaying ? "Live Presentation" : "Paused"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-med-teal-400/90 bg-med-teal-950/60 px-2 py-0.5 rounded border border-med-teal-500/20">
            In-House Manufacturing
          </span>
          <button
            onClick={handleFullScreen}
            aria-label="Full Screen"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
