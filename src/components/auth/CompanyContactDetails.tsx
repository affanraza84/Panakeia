"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Mail, Phone, Lock } from "lucide-react";

interface CompanyContactDetailsProps {
  variant: "footer" | "contact-sidebar" | "product-detail" | "privacy-desk";
}

export function CompanyContactDetails({ variant }: CompanyContactDetailsProps) {
  const { isSignedIn, isLoaded } = useUser();
  const authenticated = isLoaded && isSignedIn;

  if (variant === "footer") {
    if (authenticated) {
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-med-teal-400 shrink-0" />
            <a
              href="mailto:panakeia.india@gmail.com"
              className="hover:text-white transition-colors"
            >
              panakeia.india@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-med-teal-400 shrink-0" />
            <a
              href="tel:+919811340469"
              className="font-mono text-clinical-300 hover:text-white transition-colors"
            >
              +91-9811340469
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 space-y-1.5">
        <div className="flex items-center gap-1.5 text-clinical-300 font-semibold text-[11px]">
          <Lock className="w-3.5 h-3.5 text-med-teal-400" />
          <span>Direct Phone & Email</span>
        </div>
        <p className="text-[11px] text-clinical-400 leading-snug">
          Sign in to access direct contact information.
        </p>
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-med-teal-400 hover:text-med-teal-300 transition-colors"
        >
          Sign In to View &rarr;
        </Link>
      </div>
    );
  }

  if (variant === "contact-sidebar") {
    if (authenticated) {
      return (
        <>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-med-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-semibold mb-0.5">
                General & Procurement Inquiries:
              </strong>
              <a
                href="mailto:panakeia.india@gmail.com"
                className="text-med-teal-300 hover:underline font-mono text-xs"
              >
                panakeia.india@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-med-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-semibold mb-0.5">
                Procurement & Clinical Support Desk:
              </strong>
              <a
                href="tel:+919811340469"
                className="text-med-teal-300 hover:underline font-mono"
              >
                +91-9811340469
              </a>
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-white">
          <Lock className="w-4 h-4 text-med-teal-400" />
          <span>Direct Phone & Email Access</span>
        </div>
        <p className="text-xs text-clinical-300 leading-relaxed">
          Direct clinical telephone numbers and procurement email lines are visible to verified healthcare partners and registered users.
        </p>
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-med-teal-300 hover:text-white transition-colors pt-1"
        >
          Sign in to view direct phone & email &rarr;
        </Link>
      </div>
    );
  }

  if (variant === "product-detail") {
    if (authenticated) {
      return (
        <div className="p-3 bg-navy-50 rounded-lg border border-navy-100 flex items-center justify-between text-xs text-navy-900">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-med-teal-600" />
            <span>Direct Hospital Procurement Desk: <strong>+91-9811340469</strong></span>
          </span>
          <span className="font-mono text-clinical-500 text-[11px]">Mon-Sat 9AM-6PM IST</span>
        </div>
      );
    }

    return (
      <div className="p-3 bg-navy-50 rounded-lg border border-navy-100 flex items-center justify-between text-xs text-navy-900">
        <span className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-med-teal-600" />
          <span>Direct Hospital Procurement Desk: <Link href="/sign-in" className="text-med-teal-700 font-bold hover:underline">Sign in to view direct phone</Link></span>
        </span>
        <span className="font-mono text-clinical-500 text-[11px]">Mon-Sat 9AM-6PM IST</span>
      </div>
    );
  }

  if (variant === "privacy-desk") {
    if (authenticated) {
      return (
        <>
          <div>Email: <a href="mailto:panakeia.india@gmail.com" className="text-med-teal-700 hover:underline">panakeia.india@gmail.com</a></div>
          <div>Phone: <a href="tel:+919811340469" className="text-med-teal-700 hover:underline">+91-9811340469</a></div>
        </>
      );
    }

    return (
      <div className="pt-1 text-clinical-600 font-sans">
        Direct Email & Phone: <Link href="/sign-in" className="text-med-teal-700 font-bold hover:underline font-mono">Sign in to view direct contact channels</Link>
      </div>
    );
  }

  return null;
}
