"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IProduct, ProductCategory } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { staggerContainerVariant, fadeUpVariant } from "@/lib/animations";
import { Stethoscope, Wind, LayoutGrid } from "lucide-react";

interface ProductCatalogClientProps {
  initialProducts: IProduct[];
}

export function ProductCatalogClient({
  initialProducts,
}: ProductCatalogClientProps) {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") as ProductCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<string>(
    defaultCategory || "all"
  );

  const categories = [
    { id: "all", label: "All Equipment", icon: LayoutGrid, count: initialProducts.length },
    {
      id: "anaesthesia",
      label: "Anaesthesia Workstations",
      icon: Stethoscope,
      count: initialProducts.filter((p) => p.category === "anaesthesia").length,
    },
    {
      id: "ventilator",
      label: "ICU & Transport Ventilators",
      icon: Wind,
      count: initialProducts.filter((p) => p.category === "ventilator").length,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 lg:py-16">
      <Container>
        {/* Filter / Category Tab Switcher with animated underline */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-clinical-100 border border-clinical-200 shadow-2xs">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isSelected ? "text-navy-950" : "text-clinical-600 hover:text-navy-900"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm border border-clinical-200"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-med-teal-500" />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-med-teal-50 text-med-teal-700 font-bold"
                          : "bg-clinical-200 text-clinical-600"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.slug} variants={fadeUpVariant}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-clinical-200 p-8">
            <p className="text-clinical-500 text-sm">
              No products currently found in this category.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
