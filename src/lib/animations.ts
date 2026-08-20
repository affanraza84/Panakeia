import { Variants } from "framer-motion";

/**
 * Centralized Framer Motion Animation Variants
 *
 * Rules:
 * 1. Animate strictly transform and opacity to maintain 60fps GPU acceleration (no width/height/top/left).
 * 2. Keep durations short and snappy (150ms - 400ms for micro-interactions, 500ms max for sections).
 * 3. All variants are respectful of prefers-reduced-motion.
 */

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInLeftVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInRightVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const cardHoverVariant: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
  },
  hover: {
    y: -4,
    scale: 1.015,
    boxShadow: "0 20px 25px -5px rgba(10, 37, 64, 0.08), 0 10px 10px -5px rgba(10, 37, 64, 0.04)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const badgePopVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
