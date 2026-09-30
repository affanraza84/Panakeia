import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getResourceArticles } from "@/lib/resources";
import { absUrl, safeJsonLd, SITE_URL } from "@/lib/seo";
import {
  BookOpen,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Home,
} from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Clinical Resources & Medical Equipment Guides | Panakeia Medtech",
  description:
    "Explore clinical comparison guides, operation theatre setup checklists, and ICU ventilator procurement insights authored by Panakeia Medtech biomedical engineers in India.",
  alternates: {
    canonical: absUrl("/resources"),
  },
  openGraph: {
    title: "Clinical Resources & Medical Equipment Guides | Panakeia Medtech",
    description:
      "Authoritative biomedical guides on anaesthesia workstations, ICU ventilators, and operation theatre equipment setup.",
    url: absUrl("/resources"),
    siteName: "Panakeia Medtech",
    type: "website",
    locale: "en_IN",
  },
};

export default function ResourcesPage() {
  const articles = getResourceArticles();

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
        name: "Clinical Resources",
        item: absUrl("/resources"),
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Panakeia Medtech Clinical Engineering Resources",
    url: absUrl("/resources"),
    description:
      "Technical and clinical evaluation resources for hospital procurement teams, anaesthesiologists, and biomedical engineers.",
    publisher: {
      "@type": "Organization",
      name: "Panakeia Medtech Private Limited",
      url: SITE_URL,
    },
    hasPart: articles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: absUrl(`/resources/${article.slug}`),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      description: article.metaDescription,
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionJsonLd) }}
      />

      <Container>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-clinical-500 mb-8 font-medium flex-wrap"
        >
          <Link href="/" className="hover:text-navy-950 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-clinical-300" />
          <span className="text-navy-950 font-semibold">Clinical Resources</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-med-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-medium text-med-teal-300 mb-4 backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Biomedical Knowledge & Procurement Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-4">
              Clinical Engineering & Equipment Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Explore in-depth technical comparisons, operating theatre checklists, and ICU ventilator procurement standards authored by the biomedical engineering team at Panakeia Medtech in Visakhapatnam, India.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-clinical-200 hover:border-med-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-med-teal-50 text-med-teal-800 font-semibold border border-med-teal-200/60">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-navy-950 font-heading mb-3 group-hover:text-med-teal-600 transition-colors leading-snug">
                  <Link href={`/resources/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-clinical-600 leading-relaxed line-clamp-4 mb-6 flex-1">
                  {article.summary}
                </p>

                <div className="pt-4 border-t border-clinical-100 flex items-center justify-between">
                  <span className="text-xs text-clinical-500">
                    Updated: {article.updatedAt}
                  </span>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-med-teal-700 hover:text-med-teal-900 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Engineering Standards Advisory Note */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-clinical-200 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0062d2] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-navy-950 font-heading">
                  Biomedical Engineering & Quality Standards
                </h3>
                <p className="text-xs sm:text-sm text-clinical-600 mt-1 max-w-3xl">
                  Panakeia Medtech designs, develops, and manufactures clinical-grade medical equipment compliant with ISO 13485:2016, ISO 9001:2015, and CDSCO standards at its manufacturing campus in Visakhapatnam, Andhra Pradesh, India.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
