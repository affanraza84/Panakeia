"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Stethoscope,
  X,
  ArrowRight,
  Sparkles,
  FileCheck2,
  Lock,
  LogOut,
  UserCheck,
  Building2,
  Clock,
} from "lucide-react";

// 30 seconds engagement timer (in milliseconds)
const ENGAGEMENT_THRESHOLD_MS = 30 * 1000;
const SESSION_STORAGE_DISMISS_KEY = "panakeia_engagement_dismissed";

export function SessionEngagementPrompt() {
  const { isSignedIn, isLoaded, user } = useUser();
  const { signOut, openSignIn } = useClerk();

  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

  // Check if previously dismissed in this session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem(SESSION_STORAGE_DISMISS_KEY);
      if (dismissed) {
        setHasDismissed(true);
      }
    }
  }, []);

  // Timer logic for 2-3 minutes engagement
  useEffect(() => {
    if (!isLoaded || hasDismissed) return;

    let timeSpent = 0;
    const intervalTime = 1000;

    const timer = setInterval(() => {
      // Only accumulate time if document is visible (user is actively on the tab)
      if (document.visibilityState === "visible") {
        timeSpent += intervalTime;

        if (timeSpent >= ENGAGEMENT_THRESHOLD_MS) {
          setIsOpen(true);
          clearInterval(timer);
        }
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isLoaded, hasDismissed]);

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    setHasDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_STORAGE_DISMISS_KEY, "true");
    }
  }, []);

  // Handle escape key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleDismiss]);

  if (!isLoaded || !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-md transition-opacity"
            onClick={handleDismiss}
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-clinical-200 overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Band */}
            <div className="h-2 bg-gradient-to-r from-med-teal-500 via-blue-600 to-med-teal-600" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 rounded-full text-clinical-400 hover:text-navy-950 hover:bg-clinical-100 transition-colors cursor-pointer"
              aria-label="Dismiss prompt"
            >
              <X className="w-5 h-5" />
            </button>

            {/* SIGNED OUT STATE: Invite to Sign In / Create Account */}
            {!isSignedIn ? (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-med-teal-50 text-med-teal-600 border border-med-teal-200/80 flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-med-teal-700 bg-med-teal-100/70 px-2.5 py-0.5 rounded-md">
                      Client & Healthcare Portal
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 mt-1">
                      Welcome to Panakeia Medtech
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-clinical-700 leading-relaxed">
                  You&apos;ve been exploring our critical care systems. Sign in to your verified clinical account to access unrestricted hospital procurement resources:
                </p>

                {/* Key Benefits Grid */}
                <div className="space-y-2.5 bg-clinical-50/80 p-4 rounded-2xl border border-clinical-100 text-xs sm:text-sm text-clinical-800">
                  <div className="flex items-start gap-2.5">
                    <FileCheck2 className="w-4 h-4 text-med-teal-600 shrink-0 mt-0.5" />
                    <span>Download complete engineering whitepapers & CAD schematics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-med-teal-600 shrink-0 mt-0.5" />
                    <span>Instant institutional quotation builder & tender compliance kits</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Stethoscope className="w-4 h-4 text-med-teal-600 shrink-0 mt-0.5" />
                    <span>Direct direct scheduling with AMTZ biomedical engineering specialists</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/sign-in"
                    onClick={handleDismiss}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-med-teal-600 to-med-teal-700 hover:from-med-teal-700 hover:to-med-teal-800 shadow-md shadow-med-teal-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Sign In to Portal</span>
                  </Link>

                  <Link
                    href="/sign-up"
                    onClick={handleDismiss}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-navy-950 bg-clinical-100 hover:bg-clinical-200 border border-clinical-200 transition-all text-center"
                  >
                    <span>Register Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleDismiss}
                    className="text-xs text-clinical-500 hover:text-navy-900 underline underline-offset-4 cursor-pointer"
                  >
                    Continue browsing as guest for now
                  </button>
                </div>
              </div>
            ) : (
              /* SIGNED IN STATE: Clinical Session Status & Options */
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shadow-xs">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                      Active Clinical Session
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 mt-1">
                      Welcome back, {user?.firstName || user?.fullName || "Doctor"}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-clinical-700 leading-relaxed">
                  You are signed in as <strong>{user?.primaryEmailAddress?.emailAddress}</strong>. Your session is active with full access to institutional datasheets and procurement portals.
                </p>

                <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-100 flex items-center justify-between text-xs text-clinical-600">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-med-teal-600" />
                    <span>Session Status: <strong>Secure & Active</strong></span>
                  </span>
                  <span className="font-mono text-[11px] text-clinical-400">AMTZ Encrypted</span>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={handleDismiss}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-med-teal-600 to-med-teal-700 hover:from-med-teal-700 hover:to-med-teal-800 shadow-md shadow-med-teal-600/20 transition-all cursor-pointer text-center"
                  >
                    <span>Keep Browsing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      handleDismiss();
                      signOut();
                    }}
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer text-center"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
