# Panakeia Medtech — Indigenous Critical Care & Anaesthesia Solutions

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)](#license)
[![Made in India](https://img.shields.io/badge/Made%20in-India%20🇮🇳-orange?style=flat-square)](#manufacturing--infrastructure)

> **Official web portal and digital clinical showcase for Panakeia Medtech Private Limited** — an indigenous medical device manufacturer with all parts and systems manufactured in-house by Panakeia itself in Visakhapatnam.

---

## 🏥 Overview

Panakeia Medtech bridges a critical gap in Indian healthcare: eliminating heavy dependency on imported, exorbitantly priced Operating Theatre (OT) and Intensive Care Unit (ICU) life-support equipment. 

Engineered by clinical veterans with **30+ years of high-acuity surgical experience**, Panakeia systems are tailored specifically to the operational realities of Indian hospitals—withstanding voltage fluctuations, ambient humidity extremes, and varied pipeline gas pressures while delivering sub-48-hour domestic spare parts support.

---

## 🎯 Corporate Philosophy

- **Aim**: Engineer indigenously developed, world-class Anaesthesia Delivery Systems and ICU Ventilators that eliminate foreign import reliance, ensuring clinical safety and affordable life-cycle costs.
- **Objective**: Maintain zero-downtime mechanical backups, guarantee sub-48h spares dispatch with all replacement parts manufactured in-house by Panakeia itself, and continuously innovate with active inputs from senior clinicians.
- **Vision**: Establish Panakeia Medtech as the premier benchmark for critical care innovation across India, Asia, and emerging global healthcare markets.
- **Mission**: Equip clinicians with dependable, certified, and fail-safe anaesthesia and respiratory workstations that protect human life in high-stress surgical moments.

---

## 🏆 Product Portfolio

| Device | Category | Primary Focus | Key Specifications |
| :--- | :--- | :--- | :--- |
| **Panakeia Aesthetica 700** | Anaesthesia Workstation | High-Acuity Multi-Speciality OT | 12.1" Touchscreen, Digital Gas Flow + Mechanical Backup, Dual Selectatec Vaporizer Rail, Heated Absorber, AGSS |
| **Panakeia Aesthetica 500** | Anaesthesia Workstation | Daycare & Secondary Surgical Centers | 8.4" Color LCD, Pneumatic Reliability, Anti-Hypoxic Mechanical Guard, 1.5L Quick-Release Absorber |
| **Panakeia RespiCare ICU 900** | Intensive Care Ventilator | Adult & Paediatric ICU | 15.6" FHD Touchscreen, 40,000h Ultra-Quiet Turbine (Zero Central Air Needed), HFNC & Lung Dynamics |
| **Panakeia RespiCare Transport 300** | Mobile & Emergency Ventilator | Ambulance, Trauma & Intra-Hospital | 7" High-Brightness Display, Internal Blower, 8-Hour Battery Life, Ruggedized Anti-Shock Housing |

---

## 🏅 Awards & Recognitions

- **VCCI Excellence Awards 2024** — *"Star of Industry: Innovation in Medical Devices"* presented by The Vizagapatam Chamber of Commerce & Industry.
- **VCCI Award of Recognition 2024** — Presented by Ms. Sandhya Devanathan (MD & VP, Meta India) for pioneering indigenous medtech manufacturing.
- **ISO 13485:2016 Certification** — Medical Devices Quality Management System accredited by Kalam Institute of Health Technology (KIHT) & UAF.
- **ISO 9001:2015 Certification** — Quality Management System certified by EuroPaCert.
- **DPIIT Recognized Medical Device Enterprise** — Government of India Make in India & Startup India initiative.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack and Incremental Static Regeneration (ISR).
- **Frontend & UI**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion), [Lucide React](https://lucide.dev/).
- **Database & State**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) with built-in offline static dataset fallbacks (`src/lib/data.ts`).
- **Communications**: [Nodemailer](https://nodemailer.com/) for instant commercial quotation and clinical enquiry dispatch.
- **SEO & Compliance**: Schema.org `MedicalOrganization` JSON-LD, automated OpenGraph metadata, `robots.ts`, dynamic `sitemap.ts`.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or later (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`
- **MongoDB** (Optional for local dev — fallback data automatically active if database URI is absent)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/affanraza84/Panakeia.git
   cd Panakeia
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your configuration credentials:
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/panakeia?retryWrites=true&w=majority

   # Email Configuration (Nodemailer)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-app-specific-password
   ENQUIRY_RECIPIENT_EMAIL=procurement@panakeiamedtech.com

   # Next.js Revalidation Secret
   REVALIDATION_SECRET=your-secure-secret-token

   # Public Base URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Project Structure

```text
Panakeia/
├── public/
│   ├── brochures/           # PDF specsheets and brochures
│   ├── image/               # Company logo, awards, and certification plaques
│   ├── images/
│   │   ├── clients/         # Hospital partner logos
│   │   └── products/        # High-res medical workstation images
│   └── video/               # Hero background video assets
├── src/
│   ├── app/
│   │   ├── about/           # About Us, Founder Story, In-House Manufacturing & Philosophy
│   │   ├── api/             # API routes (products, clients, enquiries, certifications)
│   │   ├── clients/         # Hospital installations and clinical testimonials
│   │   ├── contact/         # Commercial quote requests and RFQ forms
│   │   ├── products/        # Product catalog and dynamic [slug] detail pages
│   │   ├── quality/         # Regulatory compliance and quality certifications
│   │   ├── layout.tsx       # Root application layout
│   │   └── page.tsx         # Main landing page
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, and structural components
│   │   └── ui/              # Button, Badge, AwardsSection, ProductCard, etc.
│   ├── lib/                 # Database connection, static datasets, utility functions
│   ├── models/              # Mongoose schemas (Product, Client, Certification, Enquiry)
│   └── types/               # TypeScript interfaces and definitions
├── .env.example             # Template environment variables
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and build scripts
└── README.md                # Project documentation
```

---

## 🏭 Manufacturing & Contact Information

**Panakeia Medtech Private Limited**  
- **Facility Address**: Panakeia Manufacturing Facility, Pragati Maidan, VM Steel Project S.O., Visakhapatnam, Andhra Pradesh – 530031, India  
- **Phone**: [+91-9811340469](tel:+919811340469)  
- **Clinical & Procurement Email**: [contact@panakeiamedtech.com](mailto:contact@panakeiamedtech.com)  
- **Website**: [https://panakeiamedtech.com](https://panakeiamedtech.com)

---

## 📄 License

Copyright © 2026 Panakeia Medtech Private Limited. All Rights Reserved.  
Proprietary medical technology design and digital assets.
