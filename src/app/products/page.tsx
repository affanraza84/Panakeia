import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProducts } from "@/lib/data";
import { ProductCatalogClient } from "./ProductCatalogClient";
import { ShieldCheck, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Critical Care Solutions",
  description:
    "Explore Panakeia Medtech's indigenous critical care product catalog: High-acuity Anaesthesia Workstations and Intensive Care Ventilators manufactured at AMTZ Visakhapatnam.",
};

export const revalidate = 3600;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-clinical-50/40 min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-18 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30" />
        <Container className="relative z-10 text-center max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-med-teal-500/20 text-med-teal-300 border border-med-teal-400/30 mb-4">
            Indigenous Critical Care Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Anaesthesia Workstations & Ventilators
          </h1>
          <p className="mt-4 text-base sm:text-lg text-clinical-200 leading-relaxed">
            Clinical-grade life-support platforms engineered at our AMTZ Visakhapatnam facility. Built to replace expensive imported equipment with zero compromise on precision.
          </p>
        </Container>
      </section>

      {/* Interactive Catalog */}
      <Suspense
        fallback={
          <div className="py-20 text-center text-clinical-500">
            Loading products catalog...
          </div>
        }
      >
        <ProductCatalogClient initialProducts={products} />
      </Suspense>

      {/* Manufacturing & Custom OEM Strip */}
      <section className="py-12 bg-white border-t border-clinical-200">
        <Container>
          <div className="bg-navy-900 rounded-2xl p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono text-med-teal-400 uppercase tracking-wider block mb-1">
                AMTZ Contract Manufacturing & OEM
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Looking for OEM Sub-Assembly or Custom Modifications?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-clinical-300 max-w-xl">
                We partner with hospital networks, state health corporations, and medical device distributors across India to provide tailored configurations, private labeling, and pneumatic sub-assemblies.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/contact?type=oem"
                className="inline-flex items-center justify-center font-medium rounded-lg px-6 py-3 bg-med-teal-500 hover:bg-med-teal-600 text-white text-sm transition-colors shadow-sm"
              >
                Discuss OEM Partnership
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
