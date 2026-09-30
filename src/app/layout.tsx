import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SessionEngagementPrompt } from "@/components/auth/SessionEngagementPrompt";
import { SITE_URL, SITE_NAME, safeJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Panakeia Medtech | Indigenous Anaesthesia & Critical Care Solutions",
    template: "%s | Panakeia Medtech",
  },
  description:
    "Panakeia Medtech is an indigenous Indian critical care equipment manufacturer in Visakhapatnam, where all parts and components are manufactured in-house by Panakeia itself. Specializing in high-precision Anaesthesia Workstations and ICU Ventilators.",
  keywords: [
    "panakeia",
    "Panakeia",
    "Panakeia Medtech",
    "Panakeia Medtech Pvt Ltd",
    "Panakeia Medtech Private Limited",
    "Medtech",
    "Amtz",
    "AMTZ",
    "AMTZ Visakhapatnam",
    "Anaesthesia Workstation India",
    "ICU Ventilator Manufacturer India",
    "Indigenous Medical Devices",
    "In-House Medical Device Manufacturer",
    "MSME Registered Medical Device",
    "Operation Theatre Equipment India",
  ],
  authors: [{ name: "Panakeia Medtech Private Limited" }],
  creator: "Panakeia Medtech Private Limited",
  publisher: "Panakeia Medtech Private Limited",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: "Panakeia Medtech | Indigenous Anaesthesia & Critical Care Solutions",
    description:
      "Precision-engineered Indian Anaesthesia Workstations & Ventilators with 100% parts manufactured by Panakeia itself.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Panakeia Medtech Private Limited",
  alternateName: [
    "Panakeia",
    "Panakeia Medtech",
    "Panakeia Medtech Pvt Ltd",
    "Panakeia Medtech Pvt. Ltd.",
  ],
  url: SITE_URL,
  logo: `${SITE_URL}/image/logo-transparent.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Panakeia Manufacturing Facility, Pragati Maidan",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "530031",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9811340469",
    contactType: "sales",
    email: "panakeia.india@gmail.com",
  },
  sameAs: [
    "https://www.instagram.com/panakeiamedtechpvt.ltd",
    "https://x.com/PanakeiaMedtech",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#0d9488", // med-teal-600
          colorBackground: "#ffffff",
          borderRadius: "0.75rem",
        },
      }}
    >
      <html
        lang="en"
        className={`${inter.variable} ${jakarta.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      >
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(organizationJsonLd),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(webSiteJsonLd),
            }}
          />
        </head>
        <body className="min-h-full flex flex-col bg-white text-clinical-900 font-sans">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <SessionEngagementPrompt />
        </body>
      </html>
    </ClerkProvider>
  );
}
