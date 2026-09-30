import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { getProducts } from "@/lib/data";
import {
  CATEGORY_SEO,
  categoryFromSlug,
  absUrl,
  safeJsonLd,
} from "@/lib/seo";
import {
  ChevronRight,
  Home,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Building2,
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.values(CATEGORY_SEO).map((item) => ({
    category: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const catKey = categoryFromSlug(category);

  if (!catKey) {
    return {
      title: "Category Not Found",
    };
  }

  const catConfig = CATEGORY_SEO[catKey];

  return {
    title: catConfig.title,
    description: catConfig.description,
    alternates: {
      canonical: `/products/category/${category}`,
    },
    openGraph: {
      type: "website",
      url: `/products/category/${category}`,
      title: `${catConfig.h1} | Panakeia Medtech`,
      description: catConfig.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catKey = categoryFromSlug(category);

  if (!catKey) {
    notFound();
  }

  const catConfig = CATEGORY_SEO[catKey];
  const allProducts = await getProducts();
  const categoryProducts = allProducts.filter((p) => p.category === catKey);

  // Structured Data 1: ItemList JSON-LD
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: catConfig.h1,
    description: catConfig.description,
    url: absUrl(`/products/category/${catConfig.slug}`),
    numberOfItems: categoryProducts.length,
    itemListElement: categoryProducts.map((prod, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: prod.name,
      url: absUrl(`/products/${prod.slug}`),
    })),
  };

  // Structured Data 2: FAQPage JSON-LD (only rendered when FAQs exist)
  const faqPageJsonLd =
    catConfig.faqs && catConfig.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: catConfig.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  // Structured Data 3: BreadcrumbList JSON-LD
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
        name: catConfig.h1,
        item: absUrl(`/products/category/${catConfig.slug}`),
      },
    ],
  };

  return (
    <div className="bg-clinical-50/40 min-h-screen">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListJsonLd) }}
      />
      {faqPageJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqPageJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />

      {/* Hero Category Header */}
      <section className="bg-navy-950 text-white py-14 lg:py-18 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30" />
        <Container className="relative z-10 max-w-4xl text-center">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs text-clinical-300 mb-6 font-medium"
          >
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-clinical-500" />
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-clinical-500" />
            <span className="text-med-teal-300 font-semibold truncate max-w-xs sm:max-w-none">
              {catConfig.h1}
            </span>
          </nav>

          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-med-teal-500/20 text-med-teal-300 border border-med-teal-400/30 mb-4">
            Indigenous Critical Care Portfolio • 100% In-House Parts
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
            {catConfig.h1}
          </h1>

          {/* Factual Original Category Introduction (150-250 words) */}
          <p className="mt-5 text-sm sm:text-base text-clinical-200 leading-relaxed text-left sm:text-center">
            {catConfig.intro}
          </p>

          {/* Trust and Compliance Badges Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-navy-800/80 text-xs text-clinical-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900 border border-navy-800 font-medium">
              <ShieldCheck className="w-4 h-4 text-med-teal-400" />
              ISO 13485:2016 Certified QMS
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900 border border-navy-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-med-teal-400" />
              CDSCO Regulatory Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900 border border-navy-800 font-medium">
              <Building2 className="w-4 h-4 text-med-teal-400" />
              MSME Registered Manufacturer
            </span>
          </div>
        </Container>
      </section>

      {/* Product Listings Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-med-teal-700 uppercase tracking-wider font-bold block mb-1">
                Equipment Catalog
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                Available Systems & Models ({categoryProducts.length})
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-semibold text-med-teal-700 hover:text-med-teal-800 inline-flex items-center gap-1"
            >
              <span>View All Product Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-clinical-200 p-8">
              <p className="text-clinical-600 text-sm">
                No systems currently listed under this category.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Verified Category FAQs Section */}
      {catConfig.faqs && catConfig.faqs.length > 0 && (
        <section className="py-12 lg:py-16 bg-white border-t border-clinical-200">
          <Container className="max-w-4xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-med-teal-50 border border-med-teal-200 text-med-teal-800 text-xs font-semibold mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-med-teal-600" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Technical & Clinical Insights
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-clinical-600 max-w-xl mx-auto">
                Verified information regarding device architecture, clinical safety mechanisms, and manufacturing standards.
              </p>
            </div>

            <div className="space-y-4">
              {catConfig.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-clinical-50/60 border border-clinical-200/90 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <h3 className="text-base font-bold text-navy-950 font-heading flex items-start gap-2.5">
                    <span className="text-med-teal-600 font-mono text-sm font-semibold shrink-0 mt-0.5">
                      Q{idx + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-clinical-700 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Institutional Procurement CTA Strip */}
      <section className="py-12 bg-navy-950 text-white border-t border-navy-800">
        <Container>
          <div className="bg-navy-900 rounded-2xl p-8 lg:p-10 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-med-teal-400 uppercase tracking-wider block">
                Direct In-House OEM & Hospital Tenders
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Request Clinical Demonstration or Institutional Quotation
              </h3>
              <p className="text-xs sm:text-sm text-clinical-300 max-w-xl leading-relaxed">
                Connect directly with Panakeia biomedical engineers in Visakhapatnam for tender compliance documentation, OT trial installations, or dealership inquiries.
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Contact Procurement
              </Button>
              <Button
                href="/products"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800"
              >
                All Categories
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
