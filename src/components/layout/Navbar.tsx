"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { ChevronDown, ArrowRight, Lock, Menu, X } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
  },
  { name: "Aim", href: "/about#aim" },
  { name: "About Us", href: "/about" },
  { name: "Quality & Compliance", href: "/quality" },
  { name: "Installations", href: "/clients" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { isSignedIn, isLoaded } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track window hash for precise section targeting (Aim vs About Us)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [pathname]);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    if (href === "/about#aim") {
      setCurrentHash("#aim");
    } else if (href === "/about") {
      setCurrentHash("");
      if (typeof window !== "undefined") {
        if (pathname === "/about") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (window.location.hash) {
          history.pushState(null, "", "/about");
        }
      }
    } else {
      setCurrentHash("");
    }
  };

  const checkIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && !currentHash;
    }
    if (href === "/about#aim") {
      return pathname === "/about" && currentHash === "#aim";
    }
    if (href === "/about") {
      return pathname === "/about" && currentHash !== "#aim";
    }
    if (href.startsWith("/products")) {
      return pathname.startsWith("/products");
    }
    if (href === "/careers") {
      return pathname.startsWith("/careers");
    }
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200 w-full bg-white/95 backdrop-blur-md border-b border-clinical-200 shadow-xs",
        isScrolled ? "py-2 shadow-md bg-white" : "py-2.5 sm:py-3"
      )}
    >
      <Container className="flex items-center justify-between gap-3 lg:gap-6 max-w-[1440px] px-3 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-teal-500 rounded-xl shrink-0"
          aria-label="Panakeia Medtech - Home"
        >
          <div className="relative h-12 sm:h-14 md:h-16 w-[120px] sm:w-[145px] md:w-[165px] shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/image/logo.jpeg"
              alt="PANAKEIA MEDTECH PVT. LTD."
              fill
              priority
              quality={100}
              unoptimized
              sizes="(max-width: 640px) 145px, 165px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links - Generous & Balanced Sizing */}
        <nav className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-2.5 py-1">
          {NAV_LINKS.map((link) => {
            const isActive = checkIsActive(link.href);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative shrink-0"
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "px-3 py-1.5 xl:px-4 xl:py-2 text-[13px] xl:text-sm font-semibold rounded-xl transition-all flex items-center gap-1 whitespace-nowrap",
                      isActive
                        ? "text-med-teal-700 bg-med-teal-50/90 shadow-2xs font-bold"
                        : "text-slate-700 hover:text-navy-950 hover:bg-clinical-50/90"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </Link>

                  {/* Product Categories Dropdown */}
                  <AnimatePresence>
                    {productDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-clinical-200 p-2 overflow-hidden">
                          <Link
                            href="/products?category=anaesthesia"
                            onClick={() => handleNavClick("/products")}
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
                            onClick={() => handleNavClick("/products")}
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
                              onClick={() => handleNavClick("/products")}
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
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-3 py-1.5 xl:px-4 xl:py-2 text-[13px] xl:text-sm font-semibold rounded-xl transition-all relative shrink-0 whitespace-nowrap",
                  isActive
                    ? "text-med-teal-700 bg-med-teal-50/90 shadow-2xs font-bold"
                    : "text-slate-700 hover:text-navy-950 hover:bg-clinical-50/90"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Doctor Portal Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Doctor Portal / User Account Button (Always visible on desktop and mobile) */}
          {isLoaded && isSignedIn ? (
            <div className="flex items-center gap-2">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 sm:w-9 h-8 sm:h-9 rounded-full border-2 border-med-teal-500 shadow-xs",
                    userButtonPopoverCard: "shadow-2xl rounded-2xl border border-clinical-200",
                  },
                }}
              />
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-med-teal-600 to-med-teal-700 hover:from-med-teal-700 hover:to-med-teal-800 shadow-md shadow-med-teal-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Client Portal</span>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-navy-950 hover:bg-clinical-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-clinical-200 bg-white shadow-xl overflow-hidden"
          >
            <Container className="py-4 space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = checkIsActive(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        handleNavClick(link.href);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center block",
                        isActive
                          ? "text-med-teal-700 bg-med-teal-50 border border-med-teal-200 font-bold"
                          : "text-slate-700 hover:text-navy-950 hover:bg-clinical-50 border border-clinical-100"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Quick Products Links on Mobile */}
              <div className="pt-2 border-t border-clinical-100 flex items-center justify-between text-xs text-clinical-600 px-1">
                <Link
                  href="/products?category=anaesthesia"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-med-teal-600 font-medium"
                >
                  Anaesthesia Workstations →
                </Link>
                <Link
                  href="/products?category=ventilator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-med-teal-600 font-medium"
                >
                  ICU Ventilators →
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
