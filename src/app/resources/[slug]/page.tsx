import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getResourceArticles, getResourceBySlug } from "@/lib/resources";
import { getProducts } from "@/lib/data";
import { CATEGORY_SEO, absUrl, safeJsonLd, SITE_URL } from "@/lib/seo";
import {
  ChevronRight,
  Home,
  Clock,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Building2,
} from "lucide-react";
import { IProduct } from "@/types";

export const revalidate = 3600;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getResourceArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Panakeia Medtech",
    };
  }

  const url = absUrl(`/resources/${article.slug}`);

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url,
      siteName: "Panakeia Medtech",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts: IProduct[] = article.relatedProductSlugs
    .map((pSlug) => allProducts.find((p) => p.slug === pSlug))
    .filter((p): p is IProduct => p !== undefined);

  const categoryConfig = Object.values(CATEGORY_SEO).find(
    (c) => c.slug === article.relatedCategorySlug
  );

  const articleUrl = absUrl(`/resources/${article.slug}`);

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
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url: articleUrl,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "Panakeia Medtech Clinical Engineering Team",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Panakeia Medtech Private Limited",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absUrl("/image/logo-transparent.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const faqJsonLd =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="bg-slate-50 min-h-screen py-8 lg:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
        />
      )}

      <Container>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-clinical-500 mb-8 font-medium flex-wrap"
        >
          <Link href="/" className="hover:text-navy-950 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-clinical-300" />
          <Link href="/resources" className="hover:text-navy-950">
            Clinical Resources
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-clinical-300" />
          <span className="text-navy-950 font-semibold truncate max-w-xs sm:max-w-md">
            {article.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-clinical-200 shadow-sm">
            {/* Category & Metadata header */}
            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              <span className="px-3 py-1 rounded-full bg-med-teal-50 text-med-teal-800 font-semibold border border-med-teal-200/60 font-mono">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                Updated {article.updatedAt}
              </span>
              <span className="flex items-center gap-1 text-slate-500 font-mono">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-navy-950 leading-tight mb-6">
              {article.title}
            </h1>

            {/* Executive Summary Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border-l-4 border-med-teal-500 mb-8">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {article.summary}
              </p>
            </div>

            {/* Article Sections */}
            <div className="space-y-10 text-slate-700">
              {article.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-950 font-heading">
                    {section.heading}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    {section.body}
                  </p>
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2 mt-3 pl-1">
                      {section.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Clinical FAQs Accordion / Section */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-clinical-200">
                <h3 className="text-xl font-bold text-navy-950 font-heading mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-med-teal-600" />
                  <span>Frequently Asked Clinical Questions</span>
                </h3>
                <div className="space-y-4">
                  {article.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 rounded-2xl bg-slate-50 border border-clinical-200/80"
                    >
                      <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-clinical-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-10 pt-6 border-t border-clinical-100">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-xs font-bold text-med-teal-700 hover:text-med-teal-900 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Clinical Resources</span>
              </Link>
            </div>
          </article>

          {/* Right Sidebar: Related Equipment & Actions */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Related Equipment Box */}
            {relatedProducts.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-clinical-200 shadow-xs">
                <h3 className="text-base font-bold text-navy-950 font-heading mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0062d2]" />
                  <span>Relevant Panakeia Systems</span>
                </h3>
                <div className="space-y-3">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="p-3.5 rounded-xl border border-clinical-200 hover:border-med-teal-400 hover:shadow-xs transition-all flex flex-col group bg-slate-50/50"
                    >
                      <span className="text-xs font-bold text-navy-950 group-hover:text-med-teal-600 transition-colors">
                        {p.name}
                      </span>
                      <span className="text-[11px] text-clinical-600 mt-1 line-clamp-2">
                        {p.tagline}
                      </span>
                      <span className="text-[11px] font-semibold text-med-teal-700 inline-flex items-center gap-1 mt-2">
                        <span>View System</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>

                {categoryConfig && (
                  <div className="mt-5 pt-4 border-t border-clinical-100">
                    <Link
                      href={`/products/category/${categoryConfig.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-med-teal-700 transition-colors"
                    >
                      <span>Explore {categoryConfig.h1}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Facility & Procurement Card */}
            <div className="bg-gradient-to-br from-navy-950 to-slate-900 rounded-3xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 text-med-teal-400 text-xs font-mono mb-3">
                <Building2 className="w-4 h-4" />
                <span>Indigenous Manufacturing</span>
              </div>
              <h4 className="text-base font-bold font-heading mb-2">
                Need Turnkey OT or ICU Equipment Planning?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Our senior biomedical engineering team in Visakhapatnam, Andhra Pradesh assists hospital administrators, OT heads, and clinicians with technical evaluations and layout configurations.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-med-teal-500 hover:bg-med-teal-400 text-navy-950 font-bold text-xs transition-colors shadow-sm"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
