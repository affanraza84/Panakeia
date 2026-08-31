import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SessionEngagementPrompt } from "@/components/auth/SessionEngagementPrompt";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://panakeiamedtech.com"
  ),
  title: {
    default: "Panakeia Medtech | Indigenous Anaesthesia & Critical Care Solutions",
    template: "%s | Panakeia Medtech",
  },
  description:
    "Panakeia Medtech is an indigenous Indian critical care equipment manufacturer in Visakhapatnam, where all parts and components are manufactured in-house by Panakeia itself. Specializing in high-precision Anaesthesia Workstations and ICU Ventilators.",
  keywords: [
    "Anaesthesia Workstation India",
    "ICU Ventilator Manufacturer India",
    "Indigenous Medical Devices",
    "In-House Medical Device Manufacturer",
    "DPIIT Recognized Medical Device",
    "Operation Theatre Equipment India",
    "Panakeia Medtech",
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
    url: "https://panakeiamedtech.com",
    siteName: "Panakeia Medtech",
    title: "Panakeia Medtech | Indigenous Anaesthesia & Critical Care Solutions",
    description:
      "Precision-engineered Indian Anaesthesia Workstations & Ventilators with 100% parts manufactured by Panakeia itself.",
  },
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
