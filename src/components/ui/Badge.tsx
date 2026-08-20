import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "navy" | "active" | "pending" | "saffron" | "outline";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-med-teal-50 text-med-teal-700 border-med-teal-200",
    navy: "bg-navy-50 text-navy-800 border-navy-200",
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pending: "bg-amber-50 text-amber-800 border-amber-200",
    saffron: "bg-orange-50 text-orange-800 border-orange-200",
    outline: "bg-transparent text-clinical-700 border-clinical-200",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium uppercase tracking-wider",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
