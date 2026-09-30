import { MetadataRoute } from "next";
import { getProducts } from "@/lib/data";
import { CATEGORY_SEO, SITE_URL } from "@/lib/seo";
import { getResourceArticles } from "@/lib/resources";
import { ProductCategory } from "@/types";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const products = await getProducts();
  const articles = getResourceArticles();

  // 1. Static Core Landing Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl },
    { url: `${baseUrl}/products` },
    { url: `${baseUrl}/resources` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/quality` },
    { url: `${baseUrl}/clients` },
    { url: `${baseUrl}/careers` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/privacy` },
  ];

  // 2. Equipment Category Landing Pages
  const categoryKeys = Object.keys(CATEGORY_SEO) as ProductCategory[];
  const categoryRoutes: MetadataRoute.Sitemap = categoryKeys.map((catKey) => {
    const config = CATEGORY_SEO[catKey];
    return {
      url: `${baseUrl}/products/category/${config.slug}`,
    };
  });

  // 3. Product Detail Pages with truthful, stable lastModified
  const productRoutes: MetadataRoute.Sitemap = products.map((p) => {
    const rawDate = p.updatedAt || p.createdAt;
    const lastModified = rawDate ? new Date(rawDate) : undefined;
    return {
      url: `${baseUrl}/products/${p.slug}`,
      ...(lastModified && !isNaN(lastModified.getTime()) ? { lastModified } : {}),
    };
  });

  // 4. Clinical Resources & Guides
  const resourceRoutes: MetadataRoute.Sitemap = articles.map((article) => {
    const rawDate = article.updatedAt || article.publishedAt;
    const lastModified = rawDate ? new Date(rawDate) : undefined;
    return {
      url: `${baseUrl}/resources/${article.slug}`,
      ...(lastModified && !isNaN(lastModified.getTime()) ? { lastModified } : {}),
    };
  });

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...resourceRoutes,
  ];
}
