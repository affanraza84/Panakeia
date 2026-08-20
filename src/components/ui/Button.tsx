"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navy" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-med-teal-500 hover:bg-med-teal-600 text-white shadow-sm hover:shadow-md focus-visible:ring-med-teal-500 focus-visible:ring-offset-white",
      navy:
        "bg-navy-900 hover:bg-navy-950 text-white shadow-sm hover:shadow-md focus-visible:ring-navy-900 focus-visible:ring-offset-white",
      outline:
        "border border-clinical-300 hover:border-navy-900 hover:bg-clinical-50 text-clinical-900 focus-visible:ring-navy-900",
      secondary:
        "bg-clinical-100 hover:bg-clinical-200 text-clinical-900 focus-visible:ring-clinical-400",
      ghost:
        "hover:bg-clinical-100 text-clinical-800 hover:text-clinical-950 focus-visible:ring-clinical-400",
      link: "text-med-teal-600 hover:text-med-teal-700 underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 font-medium",
      md: "text-sm px-4 py-2.5 gap-2 font-medium",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </>
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
