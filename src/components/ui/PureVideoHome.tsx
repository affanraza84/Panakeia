"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Activity,
} from "lucide-react";

interface PureVideoHomeProps {
  videoSrc?: string;
}

export function PureVideoHome({
  videoSrc = "/video/introVideo.mp4",
}: PureVideoHomeProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

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

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div
      className="relative w-full h-[calc(100vh-140px)] min-h-[500px] max-h-[1440px] bg-black flex items-center justify-center overflow-hidden group"
      onMouseEnter={() => setShowControls(true)}
    >
      {/* 1. MAIN VIDEO */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onClick={togglePlay}
        className="w-full h-full object-cover object-center cursor-pointer"
      />

      {/* 2. FLOATING MINIMAL CONTROLS OVERLAY */}
      <div
        className={`absolute bottom-6 right-6 z-30 flex items-center gap-3 bg-black/75 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full text-white shadow-2xl transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
          className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-med-teal-400 hover:text-white"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 fill-current" />
          )}
        </button>

        <div className="w-[1px] h-4 bg-white/20" />

        {/* Audio Mute / Unmute */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
          className="flex items-center gap-1.5 text-xs font-mono hover:text-med-teal-300 transition-colors cursor-pointer px-1"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-clinical-400" />
              <span className="hidden sm:inline text-clinical-400">Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-med-teal-400" />
              <span className="hidden sm:inline text-med-teal-300">Mute</span>
            </>
          )}
        </button>

        <div className="w-[1px] h-4 bg-white/20" />

        {/* Fullscreen */}
        <button
          onClick={toggleFullScreen}
          aria-label="Toggle Fullscreen"
          className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-clinical-300 hover:text-white"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* 3. SUBTLE TOP BADGE */}
      <div className="absolute top-4 left-6 z-20 pointer-events-none">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-clinical-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Panakeia Medtech • Indigenous Critical Care</span>
        </div>
      </div>
    </div>
  );
}
