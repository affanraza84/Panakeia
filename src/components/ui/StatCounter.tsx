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
    <div ref={ref} className={cn("text-center p-6", className)}>
      <div
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        <span className="text-med-teal-500 font-bold">{prefix}</span>
        <span>{displayValue.toLocaleString()}</span>
        <span className="text-med-teal-500 font-bold">{suffix}</span>
      </div>
      <div
        className={cn(
          "mt-2 text-sm sm:text-base font-semibold",
          dark ? "text-clinical-200" : "text-clinical-900"
        )}
      >
        {label}
      </div>
      {sublabel && (
        <div
          className={cn(
            "mt-1 text-xs sm:text-sm",
            dark ? "text-clinical-400" : "text-clinical-500"
          )}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}
