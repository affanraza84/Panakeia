import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getProducts, getProductBySlug } from "@/lib/data";
import { ProductDetailClient } from "./ProductDetailClient";
import { ChevronRight, Home } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const categoryLabels: Record<string, string> = {
    anaesthesia: "Anaesthesia Workstation",
    ventilator: "ICU Ventilator",
    monitoring: "Patient Monitor",
    infusion: "Syringe & Infusion Pump",
    emergency: "Emergency Resuscitation Kit",
  };

  const catLabel = categoryLabels[product.category] || "Medical Equipment";

  return {
    title: `${product.name} — Indigenous ${catLabel}`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} | Panakeia Medtech`,
      description: product.tagline,
      images: product.images,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    anaesthesia: "Anaesthesia Workstation",
    ventilator: "Medical Ventilator",
    monitoring: "Patient Monitor",
    infusion: "Syringe & Infusion Pump",
    emergency: "Emergency Resuscitation Kit",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: categoryLabels[product.category] || "Medical Equipment",
    manufacturer: {
      "@type": "Organization",
      name: "Panakeia Medtech Private Limited",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="bg-white min-h-screen py-8 lg:py-12">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-clinical-500 mb-8 font-medium"
        >
          <Link href="/" className="hover:text-navy-950 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-clinical-300" />
          <Link href="/products" className="hover:text-navy-950">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-clinical-300" />
          <span className="text-navy-950 font-semibold truncate max-w-xs sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Interactive Client Component */}
        <ProductDetailClient product={product} />
      </Container>
    </div>
  );
}
