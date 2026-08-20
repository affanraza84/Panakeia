"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
  className?: string;
  dark?: boolean;
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  duration = 1.6,
  className,
  dark = false,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={cn("text-center py-6 px-4 flex flex-col items-center justify-center", className)}>
      {/* Massive Bold Medical Numbers styled like reference */}
      <div
        className={cn(
          "text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight flex items-baseline justify-center gap-0.5",
          dark ? "text-white" : "text-[#2563eb] text-navy-950"
        )}
      >
        {prefix && <span className="text-med-teal-600 text-2xl sm:text-3xl font-bold">{prefix}</span>}
        <span className="text-[#1e40af]">{displayValue.toLocaleString()}</span>
        {suffix && <span className="text-[#3b82f6] font-extrabold">{suffix}</span>}
      </div>

      {/* Label */}
      <div
        className={cn(
          "mt-2.5 text-sm sm:text-base font-bold tracking-tight",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {label}
      </div>

      {/* Sublabel */}
      {sublabel && (
        <div
          className={cn(
            "mt-1 text-xs sm:text-xs text-clinical-500 font-medium max-w-[220px]",
            dark ? "text-clinical-400" : "text-clinical-500"
          )}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}
