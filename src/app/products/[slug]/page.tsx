import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getProducts, getProductBySlug } from "@/lib/data";
import { ProductDetailClient } from "./ProductDetailClient";
import { ChevronRight, Home } from "lucide-react";

import { SITE_URL, absUrl, safeJsonLd } from "@/lib/seo";

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

  const title = product.seoTitle ?? `${product.name} – Manufacturer in India`;
  const description = product.seoDescription ?? product.tagline.slice(0, 155);

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/products/${product.slug}`,
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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images?.map((img) => absUrl(img)) || [],
    category: categoryLabels[product.category] || "Medical Equipment",
    url: absUrl(`/products/${product.slug}`),
    brand: {
      "@type": "Brand",
      name: "Panakeia",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Panakeia Medtech Private Limited",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Panakeia Manufacturing Facility, Pragati Maidan",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530031",
        addressCountry: "IN",
      },
    },
    ...(product.specs && product.specs.length > 0
      ? {
          additionalProperty: product.specs.slice(0, 10).map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: absUrl("/products"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: absUrl(`/products/${product.slug}`),
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen py-8 lg:py-12">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
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
