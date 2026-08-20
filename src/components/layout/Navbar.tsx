"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
  },
  { name: "Aim", href: "/about#aim" },
  { name: "Objective", href: "/about#objective" },
  { name: "Vision", href: "/about#vision" },
  { name: "Mission", href: "/about#mission" },
  { name: "About Us", href: "/about" },
  { name: "Quality & Compliance", href: "/quality" },
  { name: "Installations", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200 w-full bg-white/95 backdrop-blur-md border-b border-clinical-200 shadow-xs",
        isScrolled ? "py-1.5 shadow-md bg-white" : "py-2 sm:py-2.5"
      )}
    >
      <Container className="flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo - Enhanced for crystal clarity, maximum appeal & high visibility */}
        <Link
          href="/"
          className="flex items-center gap-3 group py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-teal-500 rounded-xl shrink-0"
          aria-label="Panakeia Medtech - Home"
        >
          <div className="relative h-14 sm:h-16 md:h-18 w-[120px] sm:w-[145px] md:w-[165px] shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/image/logo.jpeg"
              alt="PANAKEIA MEDTECH PVT. LTD."
              fill
              priority
              sizes="(max-width: 640px) 145px, (max-width: 1024px) 165px, 180px"
              className="object-contain object-left drop-shadow-2xs"
            />
          </div>
        </Link>

        {/* Navigation Links - All links clearly visible and accessible */}
        <nav className="flex items-center gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto no-scrollbar py-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/about#")
                ? pathname === "/about" && typeof window !== "undefined" && window.location.hash === link.href.replace("/about", "")
                : pathname === link.href;

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
                    className={cn(
                      "px-2.5 sm:px-3 md:px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1 whitespace-nowrap",
                      pathname.startsWith("/products")
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
                  "px-2.5 sm:px-3 md:px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all relative shrink-0 whitespace-nowrap",
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
      </Container>
    </header>
  );
}
