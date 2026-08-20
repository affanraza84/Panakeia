import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3">
          <span
            className={cn(
              "inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
              dark
                ? "bg-med-teal-500/20 text-med-teal-300 border border-med-teal-400/30"
                : "bg-med-teal-50 text-med-teal-700 border border-med-teal-200"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-heading leading-tight",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            dark ? "text-clinical-300" : "text-clinical-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
