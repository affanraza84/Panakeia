import { ProductCategory } from "@/types";

export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://panakeiamedtech.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Panakeia Medtech";

/**
 * Converts a relative or absolute path into a fully qualified absolute URL.
 * Preserves already-absolute URLs.
 */
export function absUrl(path?: string | null): string {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export interface CategoryFaq {
  question: string;
  answer: string;
}

export interface CategorySeoConfig {
  category: ProductCategory;
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  faqs: CategoryFaq[];
}

export const CATEGORY_SEO: Record<ProductCategory, CategorySeoConfig> = {
  anaesthesia: {
    category: "anaesthesia",
    slug: "anaesthesia-machines",
    h1: "Anaesthesia (Anesthesia) Machines & Workstations",
    title: "Anesthesia Machine & Workstation Manufacturer in India",
    description:
      "Explore indigenous Anaesthesia Workstations engineered in Visakhapatnam by Panakeia Medtech with 100% in-house manufactured parts, integrated digital ventilators, and fail-safe safety systems.",
    intro:
      "Panakeia Medtech manufactures high-precision Anaesthesia Workstations and machines indigenously at its dedicated facility in Visakhapatnam. Every critical component—including pneumatic gas blending systems, dual Selectatec vaporizer manifolds, integrated touchscreen ventilators, and heated breathing circuits—is manufactured in-house to ensure exceptional reliability and rapid parts availability.",
    faqs: [
      {
        question: "Where are Panakeia anaesthesia workstations manufactured?",
        answer:
          "All Panakeia anaesthesia workstations and their mechanical and pneumatic components are manufactured 100% in-house at Panakeia's dedicated facility in Visakhapatnam, Andhra Pradesh, India.",
      },
      {
        question: "What safety features are integrated into Panakeia anaesthesia workstations?",
        answer:
          "Panakeia anaesthesia workstations incorporate anti-hypoxic safety guards ensuring a minimum of 25% oxygen concentration, active anaesthetic gas scavenging system (AGSS) interfaces, mechanical fail-safe backups, emergency oxygen flushes, and comprehensive audio-visual alarm telemetry.",
      },
      {
        question: "Which ventilation modes are supported on Panakeia anaesthesia workstations?",
        answer:
          "Depending on the model, our workstations support advanced ventilation modes including Volume Control (VCV), Pressure Control (PCV), Synchronized Intermittent Mandatory Ventilation (SIMV-V, SIMV-P), Pressure Support Ventilation (PSV/CPAP), PRVC, and Manual/Spontaneous modes for adult and paediatric patients.",
      },
    ],
  },
  ventilator: {
    category: "ventilator",
    slug: "ventilators",
    h1: "ICU, Portable & Anaesthesia Ventilators",
    title: "ICU Ventilator & Portable Ventilator Manufacturer in India",
    description:
      "High-performance turbine-driven ICU ventilators and anaesthesia ventilators manufactured indigenously in India by Panakeia Medtech for adult and paediatric critical care.",
    intro:
      "Panakeia Medtech engineers advanced critical care ventilators indigenously in Visakhapatnam. Featuring ultra-quiet blower turbine technology, our ventilators eliminate reliance on compressed air cylinders while delivering invasive and non-invasive ventilation (NIV & HFNC) with comprehensive pulmonary mechanics telemetry.",
    faqs: [
      {
        question: "Do Panakeia ICU ventilators require external medical air compressors?",
        answer:
          "No. Panakeia's advanced ICU critical care ventilators utilize an ultra-quiet, high-performance internal blower turbine rated for up to 40,000 hours, eliminating the requirement for external compressed air infrastructure.",
      },
      {
        question: "Can Panakeia ventilators deliver High Flow Oxygen Therapy (HFNC)?",
        answer:
          "Yes. Our ICU ventilators include integrated High Flow Nasal Cannula (HFNC) therapy with adjustable flow rates from 2 to 80 L/min and precise FiO2 titration from 21% to 100%.",
      },
      {
        question: "What battery backup do Panakeia ventilators offer?",
        answer:
          "Our ventilators feature hot-swappable dual lithium-ion battery architectures providing 4+ hours of uninterrupted clinical operation during power interruptions or inter-departmental transport.",
      },
    ],
  },
  monitoring: {
    category: "monitoring",
    slug: "patient-monitors",
    h1: "Patient Monitors & Gas Monitoring",
    title: "Multi-Parameter Patient Monitor Manufacturer in India",
    description:
      "Indigenously developed multi-parameter patient monitors and 12-channel diagnostic ECG machines by Panakeia Medtech for intensive care and surgical suites.",
    intro:
      "Panakeia Medtech provides precision physiological monitoring solutions designed for continuous, high-fidelity monitoring in operation theatres and critical care units. Our monitoring range includes multi-parameter monitors with anti-motion SpO2 and arrhythmia analysis, alongside 12-lead diagnostic ECG workstations.",
    faqs: [
      {
        question: "What physiological parameters do Panakeia patient monitors track?",
        answer:
          "Panakeia multi-parameter patient monitors track 3/5-lead ECG with arrhythmia analysis and ST segment detection, anti-motion SpO2 with perfusion index, NIBP, Dual Temperature, and Respiration, with modular support for Dual IBP and End-Tidal CO2 (EtCO2).",
      },
      {
        question: "Are Panakeia diagnostic ECG machines equipped with automated analysis?",
        answer:
          "Yes. Our 12-channel diagnostic ECG workstations incorporate automated interpretation algorithms with real-time arrhythmia detection, interval calculations (PR, QRS, QT/QTc), and built-in thermal array printing.",
      },
    ],
  },
  infusion: {
    category: "infusion",
    slug: "syringe-infusion-pumps",
    h1: "Syringe Pumps & Infusion Pumps",
    title: "Syringe Pump & Infusion Pump Manufacturer in India",
    description:
      "High-precision syringe pumps and volumetric infusion systems manufactured by Panakeia Medtech with micro-step precision and dynamic occlusion protection.",
    intro:
      "Panakeia Medtech manufactures indigenously engineered syringe and volumetric infusion pump platforms for critical care, anaesthesia, and oncology suites. Built with precision stepper motor drives, multi-channel modular interlock chassis, and comprehensive drug libraries to ensure fail-safe medication delivery.",
    faqs: [
      {
        question: "What syringe sizes are compatible with Panakeia syringe pumps?",
        answer:
          "Panakeia syringe pumps feature automatic brand and size recognition for standard 2mL, 5mL, 10mL, 20mL, 30mL, and 50/60mL syringes.",
      },
      {
        question: "How does the pump prevent accidental bolus delivery during occlusion clearing?",
        answer:
          "The system features dynamic occlusion pressure detection with 12 configurable sensitivity thresholds and an automated anti-bolus mechanism that relieves accumulated line pressure upon occlusion detection.",
      },
    ],
  },
  emergency: {
    category: "emergency",
    slug: "emergency-resuscitation-kits",
    h1: "Emergency Resuscitation & Airway Kits",
    title: "Emergency Kit & Resuscitation Kit Supplier in India",
    description:
      "Field-ready emergency resuscitation kits and HD digital video laryngoscope systems manufactured and supplied across India by Panakeia Medtech.",
    intro:
      "Panakeia Medtech provides ruggedized emergency trauma resuscitation kits and high-definition video laryngoscopy platforms engineered for rapid airway access across emergency departments, crash carts, ICUs, and ambulance services.",
    faqs: [
      {
        question: "What is included in the Panakeia Emergency Resuscitation & Airway Kit?",
        answer:
          "The kit includes autoclavable medical-grade silicone adult and paediatric manual resuscitators, a stainless steel fiber-optic LED laryngoscope with multi-sized blades, cushioned anatomical masks, color-coded Guedel airways, intubation forceps, and manual suction housed in an IP67 waterproof copolymer hard-shell case.",
      },
      {
        question: "How does the Panakeia HD Video Laryngoscope assist with difficult intubations?",
        answer:
          "It features an anti-fog CMOS camera, high-luminance cold LED illumination, and a 180° tiltable HD monitor, enabling clear visualization of the vocal cords and glottis even in challenging anatomical conditions.",
      },
    ],
  },
};

/**
 * Returns the ProductCategory matching a given URL category slug.
 */
export function categoryFromSlug(slug: string): ProductCategory | undefined {
  const entry = Object.values(CATEGORY_SEO).find((c) => c.slug === slug);
  return entry ? entry.category : undefined;
}

/**
 * Safely serializes JSON-LD structured data by escaping `<` to prevent XSS.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
