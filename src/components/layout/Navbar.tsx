"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
  },
  { name: "About Us", href: "/about" },
  { name: "Quality & Compliance", href: "/quality" },
  { name: "Installations", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200 w-full bg-white border-b border-clinical-200",
        isScrolled ? "shadow-sm py-2 sm:py-2.5" : "py-2.5 sm:py-3"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo - Enlarged for crystal clear legibility of all emblem text */}
        <Link
          href="/"
          className="flex items-center group py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-teal-500 rounded-lg shrink-0"
          aria-label="Panakeia Medtech - Home"
        >
          <div className="relative h-18 sm:h-22 md:h-24 w-[86px] sm:w-[105px] md:w-[115px] shrink-0">
            <Image
              src="/image/logo.jpeg"
              alt="PANAKEIA MEDTECH PVT. LTD."
              fill
              priority
              sizes="(max-width: 640px) 90px, 120px"
              className="object-contain object-left group-hover:opacity-95 transition-opacity"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1",
                      isActive
                        ? "text-navy-950 bg-clinical-50"
                        : "text-slate-700 hover:text-navy-950 hover:bg-clinical-50/80"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </Link>

                  {/* Product Categories Dropdown */}
                  <AnimatePresence>
                    {productDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-clinical-200 p-2 overflow-hidden">
                          <Link
                            href="/products?category=anaesthesia"
                            className="block p-3 rounded-lg hover:bg-clinical-50 transition-colors group"
                          >
                            <div className="text-sm font-bold text-navy-950 group-hover:text-med-teal-600">
                              Anaesthesia Workstations
                            </div>
                            <div className="text-xs text-clinical-500 mt-0.5">
                              Integrated OT anaesthesia delivery platforms
                            </div>
                          </Link>
                          <Link
                            href="/products?category=ventilator"
                            className="block p-3 rounded-lg hover:bg-clinical-50 transition-colors group border-t border-clinical-100"
                          >
                            <div className="text-sm font-bold text-navy-950 group-hover:text-med-teal-600">
                              ICU & Transport Ventilators
                            </div>
                            <div className="text-xs text-clinical-500 mt-0.5">
                              Turbine-driven critical care respiratory units
                            </div>
                          </Link>
                          <div className="bg-clinical-50 p-2.5 rounded-b-lg border-t border-clinical-100 text-center">
                            <Link
                              href="/products"
                              className="text-xs font-semibold text-med-teal-600 hover:text-med-teal-700 flex items-center justify-center gap-1"
                            >
                              Browse All Devices <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors relative",
                  isActive
                    ? "text-navy-950 bg-clinical-50"
                    : "text-slate-700 hover:text-navy-950 hover:bg-clinical-50/80"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-med-teal-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Menu Toggle Button */}
        <div className="flex items-center gap-3">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex shadow-xs font-semibold"
          >
            Request Quote
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-navy-950 hover:bg-navy-900 text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Slide-in Drawer with Staggered Link Fade-in */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-clinical-200 bg-white shadow-xl overflow-hidden"
          >
            <Container className="py-6 space-y-4">
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                        pathname === link.href
                          ? "bg-med-teal-50 text-med-teal-700"
                          : "text-slate-800 hover:bg-clinical-50"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-clinical-100 flex flex-col gap-3">
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Request Commercial Quotation
                </Button>
                <div className="text-xs text-clinical-500 text-center font-mono">
                  AMTZ Campus, Pragati Maidan, Visakhapatnam • +91-9811340469
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
