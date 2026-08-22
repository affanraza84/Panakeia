import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import {
  Activity,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Building,
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
                Resident manufacturing facility at Andhra Pradesh Medtech Zone (AMTZ), Visakhapatnam.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-navy-800 border border-navy-700 text-clinical-200 font-mono text-[11px]">
              DPIIT: DIPP114820
            </span>
            <span className="px-3 py-1 rounded bg-navy-800 border border-navy-700 text-clinical-200 font-mono text-[11px]">
              CDSCO Test Lic: MD-13
            </span>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 lg:py-16">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl border border-slate-200 shadow-md">
              <div className="relative h-14 sm:h-16 w-[120px] sm:w-[140px]">
                <Image
                  src="/image/logo.jpeg"
                  alt="PANAKEIA MEDTECH PVT. LTD."
                  fill
                  quality={100}
                  unoptimized
                  sizes="140px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-clinical-400 leading-relaxed max-w-sm">
              Panakeia Medtech Private Limited manufactures indigenous critical care Anaesthesia Workstations and Intensive Care Ventilators. Pioneered by clinicians with 30+ years of live OT & ICU experience.
            </p>
            <div className="pt-2 text-xs text-clinical-400 space-y-1 font-mono">
              <div>CIN: U33100AP2023PTC123456</div>
              <div>MSME Reg: UDYAM-AP-10-0048291</div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/products/three-gas-system-advanced-anaesthesia-workstation"
                  className="hover:text-white transition-colors"
                >
                  Three-Gas Advanced Workstation
                </Link>
              </li>
              <li>
                <Link
                  href="/products/two-gas-system-basic-anaesthesia-workstation"
                  className="hover:text-white transition-colors"
                >
                  Two-Gas Basic Workstation
                </Link>
              </li>
              <li>
                <Link
                  href="/products/basic-premium-anaesthesia-machine"
                  className="hover:text-white transition-colors"
                >
                  Basic Premium Anaesthesia Machine
                </Link>
              </li>
              <li>
                <Link
                  href="/products/icu-critical-care-ventilator"
                  className="hover:text-white transition-colors"
                >
                  Advanced ICU Ventilator
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-med-teal-400 hover:text-med-teal-300 transition-colors inline-flex items-center gap-1 font-medium pt-1"
                >
                  View All Products <ArrowUpRight className="w-3 h-3" />
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
              AMTZ Facility
            </h4>
            <div className="space-y-3 text-xs text-clinical-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                <span>
                  C-20, IHUB Building, AMTZ Campus, Pragati Maidan, Visakhapatnam - 530031, Andhra Pradesh, India.
                </span>
              </div>
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
                <a href="tel:+919811340469" className="hover:text-white transition-colors font-mono">
                  +91-9811340469
                </a>
              </div>
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
            Panakeia Medtech Private Limited is a DPIIT-recognized and MSME-registered medical device manufacturer. The company holds a valid CDSCO Medical Device Test License (Form MD-13) for performance validation and clinical evaluation. The commercial manufacturing license application (Form MD-9) is under final statutory audit and validation at our AMTZ Visakhapatnam facility.
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
                AMTZ Hub
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
