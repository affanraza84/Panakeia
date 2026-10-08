import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { CompanyContactDetails } from "../auth/CompanyContactDetails";
import {
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy-950 text-clinical-300 border-t border-navy-800">
      {/* Top Banner / Regulatory Assurance */}
      <div className="border-b border-navy-800/80 bg-navy-900/60 py-6">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-med-teal-500/20 text-med-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white block">
                Indigenous Critical Care Manufacturing Facility
              </span>
              <span className="text-clinical-400">
                All components and parts are manufactured 100% in-house by Panakeia itself at Visakhapatnam.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-navy-800 border border-navy-700 text-clinical-200 text-[11px]">
              MSME Registered
            </span>
            <span className="px-3 py-1 rounded bg-navy-800 border border-navy-700 text-clinical-200 text-[11px]">
              CDSCO Compliant
            </span>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 lg:py-16">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus:outline-none py-1 select-none"
              aria-label="Panakeia Medtech - Home"
            >
              {/* Emblem directly on dark theme with refined ambient glow */}
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 transition-all duration-300 ease-out group-hover:scale-105 drop-shadow-[0_0_18px_rgba(0,194,203,0.45)] brightness-110">
                <Image
                  src="/image/logo-emblem-clean.png"
                  alt="Panakeia Medtech Logo"
                  fill
                  quality={100}
                  unoptimized
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-[26px] font-black font-heading tracking-[0.1em] bg-gradient-to-r from-white via-slate-100 to-med-teal-200 bg-clip-text text-transparent group-hover:to-med-teal-300 transition-all leading-none">
                  PANAKEIA
                </span>
                <div className="flex items-center gap-1.5 mt-1.5 leading-none">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-med-teal-400 shadow-[0_0_8px_#00c2cb] animate-pulse" />
                  <span className="text-[10.5px] sm:text-[11.5px] font-extrabold font-mono tracking-[0.22em] text-med-teal-300 uppercase">
                    MEDTECH PVT. LTD.
                  </span>
                </div>
                <span className="text-[8px] sm:text-[8.5px] font-bold tracking-[0.24em] text-clinical-400 uppercase mt-1.5 leading-none">
                  INNOVATE • ENGINEER • EMPOWER
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-clinical-400 leading-relaxed max-w-sm">
              Panakeia Medtech manufactures indigenous critical care Anaesthesia Workstations and Intensive Care Ventilators. Led by industry experts with 35+ years of global experience in critical care and medical technology.
            </p>
            <div className="pt-2 text-xs text-clinical-400 space-y-1">
              <div>Make in India • Startup India Recognized</div>
              <div>MSME Registered Medical Device Enterprise</div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/panakeia-medtech-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:border-med-teal-500/50 hover:bg-navy-800 transition-all group"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1FtuRP3h1R/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:border-med-teal-500/50 hover:bg-navy-800 transition-all group"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/panakeiamedtechpvt.ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:border-med-teal-500/50 hover:bg-navy-800 transition-all group"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://x.com/PanakeiaMedtech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:border-med-teal-500/50 hover:bg-navy-800 transition-all group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading mb-4">
              Equipment Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/products/category/anaesthesia-machines"
                  className="hover:text-white transition-colors"
                >
                  Anaesthesia Machines & Workstations
                </Link>
              </li>
              <li>
                <Link
                  href="/products/category/ventilators"
                  className="hover:text-white transition-colors"
                >
                  ICU & Anaesthesia Ventilators
                </Link>
              </li>
              <li>
                <Link
                  href="/products/category/patient-monitors"
                  className="hover:text-white transition-colors"
                >
                  Patient Monitors & Diagnostic ECG
                </Link>
              </li>
              <li>
                <Link
                  href="/products/category/syringe-infusion-pumps"
                  className="hover:text-white transition-colors"
                >
                  Syringe & Infusion Pumps
                </Link>
              </li>
              <li>
                <Link
                  href="/products/category/emergency-resuscitation-kits"
                  className="hover:text-white transition-colors"
                >
                  Emergency & Resuscitation Kits
                </Link>
              </li>
              <li>
                <Link
                  href="/products/category/medical-accessories"
                  className="hover:text-white transition-colors"
                >
                  Medical & Critical Care Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-med-teal-400 hover:text-med-teal-300 transition-colors inline-flex items-center gap-1 font-medium pt-1"
                >
                  Complete Product Catalog <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Founder Story & Legacy
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white transition-colors">
                  Quality & Regulatory Standing
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition-colors">
                  Hospital Installations
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors text-med-teal-400 font-medium">
                  Careers & Training Academy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Distributor & OEM Inquiries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Support & Service Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Manufacturing Location & Contacts */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading mb-4">
              Manufacturing Facility
            </h4>
            <div className="space-y-3 text-xs text-clinical-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                <span>
                  Panakeia Manufacturing Facility, Visakhapatnam - 530031, Andhra Pradesh, India.
                </span>
              </div>
              <CompanyContactDetails variant="footer" />
            </div>
          </div>
        </Container>
      </div>

      {/* Compliance Disclaimer & Copyright */}
      <div className="border-t border-navy-800/80 py-8 bg-navy-950">
        <Container className="space-y-4">
          <div className="p-4 rounded-lg bg-navy-900/80 border border-navy-800 text-xs text-clinical-400 leading-relaxed">
            <strong className="text-clinical-200 block mb-1">
              Regulatory Disclosure & Compliance Notice:
            </strong>
            Panakeia Medtech Private Limited is an MSME-registered medical device manufacturer adhering to CDSCO regulatory guidelines and ISO quality management standards. All critical care devices, parts, and components are manufactured directly in-house by Panakeia itself at our dedicated manufacturing facility in Visakhapatnam.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-clinical-500 pt-2">
            <div>
              &copy; {currentYear} Panakeia Medtech Private Limited. All rights reserved. Indigenous Critical Care Engineering.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-clinical-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/quality" className="hover:text-clinical-300 transition-colors">
                Quality Policy
              </Link>
              <Link href="/contact" className="hover:text-clinical-300 transition-colors">
                Procurement
              </Link>
              <Link href="/about" className="hover:text-clinical-300 transition-colors">
                In-House Facility
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
