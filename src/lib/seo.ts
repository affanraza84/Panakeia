import { ProductCategory } from "@/types";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const SITE_URL: string = (
  process.env.NODE_ENV === "production" && (!envUrl || envUrl.includes("localhost"))
    ? "https://panakeiacare.com"
    : envUrl || "https://panakeiacare.com"
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
      "Explore indigenous Anaesthesia Workstations and anesthesia machines engineered in Visakhapatnam by Panakeia Medtech with 100% in-house manufactured parts, integrated digital ventilators, and fail-safe safety systems.",
    intro:
      "Panakeia Medtech manufactures clinical-grade anaesthesia machines and advanced anesthesia workstations indigenously at its dedicated medical device facility in Visakhapatnam, Andhra Pradesh. Built to eliminate dependence on costly imported hardware, every structural, mechanical, and pneumatic assembly is manufactured 100% in-house by Panakeia itself. Our anaesthesia delivery portfolio spans agile two-gas anaesthesia systems engineered with anti-hypoxic mechanical guards for secondary hospitals, heavy-duty mobile anaesthesia trolleys with precision flowmeters, and high-acuity three-gas anesthesia workstations featuring digital pneumatic gas blending and integrated color touchscreen ventilators. Designed in collaboration with senior anaesthesiologists, each anesthesia machine incorporates tool-free Selectatec-compatible dual vaporizer manifolds, active gas scavenging (AGSS) interfaces, heated breathing circuits, and multi-waveform spirometry to safeguard patient outcomes during general, thoracic, and cardiac surgical procedures.",
    faqs: [
      {
        question: "What is the difference between a two-gas and three-gas anaesthesia system?",
        answer:
          "A two-gas anaesthesia system delivers Oxygen (O2) and Nitrous Oxide (N2O) with a mechanical anti-hypoxic safety guard maintaining at least 25% oxygen, optimized for daycare centers and secondary surgical suites. A three-gas workstation delivers O2, N2O, and Medical Air with dual cascade flowmeters, integrated digital ventilation, and multi-waveform loops, engineered for high-acuity surgical theaters requiring medical air blending and complex pulmonary mechanics.",
      },
      {
        question: "Where are Panakeia anaesthesia workstations manufactured?",
        answer:
          "All Panakeia anaesthesia workstations, anesthesia delivery frames, and pneumatic components are manufactured 100% in-house at Panakeia's dedicated biomedical engineering facility in Visakhapatnam, Andhra Pradesh, India.",
      },
      {
        question: "What safety features are integrated into Panakeia anaesthesia machines?",
        answer:
          "Panakeia workstations incorporate mechanical anti-hypoxic linking (maintaining ≥25% O2), active anaesthetic gas scavenging system (AGSS) interfaces to eliminate OR pollution, recessed emergency oxygen flush controls, fail-safe audio-visual alarms, and internal battery autonomy for uninterrupted surgical ventilation.",
      },
      {
        question: "Which ventilation modes are supported on Panakeia integrated anaesthesia ventilators?",
        answer:
          "Depending on the model, our integrated workstations support Volume Control (VCV), Pressure Control (PCV), Synchronized Intermittent Mandatory Ventilation (SIMV-V, SIMV-P), Pressure Support (PSV/CPAP), PRVC, and Manual/Spontaneous breathing modes for both adult and paediatric patients.",
      },
    ],
  },
  ventilator: {
    category: "ventilator",
    slug: "ventilators",
    h1: "ICU, Portable & Anaesthesia Ventilators",
    title: "ICU Ventilator & Portable Ventilator Manufacturer in India",
    description:
      "High-performance turbine-driven ICU ventilators, portable ventilators, and anaesthesia ventilators manufactured indigenously in India by Panakeia Medtech for adult and paediatric critical care.",
    intro:
      "Panakeia Medtech engineers advanced medical ventilators indigenously in Visakhapatnam to deliver dependable life support across intensive care units, emergency transport, and surgical suites. Our critical care ventilator portfolio features high-performance blower-turbine ICU ventilators capable of generating responsive peak flow up to 240 L/min without requiring external medical air compressors or central pipeline gas dependencies. Designed for adult and paediatric patients, our intensive care platforms provide comprehensive invasive and non-invasive ventilation (NIV), High Flow Nasal Cannula (HFNC) oxygen therapy, and real-time pulmonary diagnostic metrics including P0.1, Auto-PEEP, and RSBI. For surgical suites, our dedicated ANAEVENT anaesthesia ventilator delivers precise ascending bellows tidal volume control with touchscreen waveform loops. In addition, our lightweight portable and transport ventilator architectures ensure continuous, synchronized respiratory support during inter-departmental transport and ambulance care.",
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
        question: "What is the role of the ANAEVENT anaesthesia ventilator?",
        answer:
          "The ANAEVENT is a dedicated anaesthesia ventilator indigenously manufactured with all parts produced by Panakeia itself. It features a graduated ascending silicone bellows assembly (calibrated from 300 to 1200 mL), color touchscreen waveforms, and pneumatic flow micro-control for seamless surgical integration.",
      },
      {
        question: "What battery backup do Panakeia ventilators offer during patient transport?",
        answer:
          "Our ICU ventilators feature hot-swappable dual lithium-ion battery architectures providing 4+ hours of uninterrupted clinical operation during power disruptions or inter-departmental transport.",
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
      "Panakeia Medtech provides precision physiological monitoring solutions designed for continuous, high-fidelity monitoring across operation theatres, intensive care units, and diagnostic cardiology clinics. Indigenously manufactured at our Visakhapatnam facility, our multi-parameter patient monitors deliver multi-lead ECG acquisition with 23 arrhythmia classifications and ST-segment telemetry, anti-motion SpO2 perfusion tracking with low-perfusion compensation, smart NIBP with dual overpressure safety relief, dual-channel temperature monitoring, and modular expansion for Dual Invasive Blood Pressure (IBP) and End-Tidal Carbon Dioxide (EtCO2) gas monitoring. Alongside multi-parameter patient monitors, Panakeia produces 12-channel diagnostic ECG workstations equipped with high-resolution color displays, simultaneous 12-lead acquisition, advanced baseline-drift filtration, and integrated high-resolution thermal array recorders for rapid clinical assessment.",
    faqs: [
      {
        question: "What physiological parameters do Panakeia patient monitors track?",
        answer:
          "Panakeia multi-parameter patient monitors track 3/5-lead ECG with arrhythmia analysis and ST segment detection, anti-motion SpO2 with perfusion index, NIBP, Dual Temperature, and Respiration, with modular support for Dual IBP and End-Tidal CO2 (EtCO2) gas monitoring.",
      },
      {
        question: "Are Panakeia diagnostic ECG machines equipped with automated analysis?",
        answer:
          "Yes. Our 12-channel diagnostic ECG workstations incorporate automated interpretation algorithms with real-time arrhythmia detection, interval calculations (PR, QRS, QT/QTc), and built-in thermal array printing.",
      },
      {
        question: "How do Panakeia monitors handle patient motion and low perfusion?",
        answer:
          "Our monitors integrate advanced anti-motion digital filtering and low-perfusion SpO2 algorithms that maintain accurate pulse oximetry readings and perfusion index (PI) telemetry even during patient movement or vasoconstriction.",
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
      "Panakeia Medtech manufactures indigenously engineered syringe pumps and volumetric infusion pump platforms tailored for critical care, anaesthesia induction, neonatal care, and oncology suites. Built around high-precision micro-step motor driving mechanisms, our pumps deliver ultra-accurate flow rates ranging from 0.01 mL/h to 1500 mL/h for syringe delivery and up to 2000 mL/h for volumetric infusion. The platform features automatic syringe brand and size recognition for standard 2mL through 60mL syringes, multiple dosing modes (rate, time, body-weight, and bolus delivery), and an integrated comprehensive drug library with customizable concentration presets. For clinical safety, a 12-level dynamic pressure sensor continuously monitors line occlusion and automatically activates an anti-bolus pressure relief mechanism to eliminate dangerous bolus delivery when an occlusion is cleared.",
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
      {
        question: "Can Panakeia infusion pumps be stacked on standard IV poles?",
        answer:
          "Yes. The pumps utilize a modular interlocking chassis that allows multiple syringe and infusion units to be securely stacked into multi-channel medication towers powered through integrated dual battery and AC architecture.",
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
      "Panakeia Medtech delivers ruggedized emergency trauma resuscitation kits and high-definition video laryngoscopy platforms engineered for rapid airway access across emergency departments, crash carts, intensive care units, and ambulance services. Housed in heavy-duty IP67 waterproof, dustproof, and shockproof copolymer hard cases with custom foam organizers, our emergency kits provide 100% medical-grade autoclavable silicone manual resuscitators for adult and paediatric patients, fiber-optic LED laryngoscopes with multi-sized stainless steel blades, non-rebreathing oxygen reservoirs, cushioned anatomical face masks, and color-coded Guedel airways. For difficult airway management, Panakeia's HD Digital Video Laryngoscope features an anti-fog 2.0-megapixel optical sensor, high-luminance cold LED illumination, and a 180° tiltable monitor that enables rapid visualization of the vocal cords and glottis during emergency intubations.",
    faqs: [
      {
        question: "What is included in the Panakeia Emergency Resuscitation & Airway Kit?",
        answer:
          "The kit includes autoclavable medical-grade silicone adult (1500mL) and paediatric (550mL) manual resuscitators, a stainless steel fiber-optic LED laryngoscope with 4 blades, cushioned silicone masks (sizes 0-5), color-coded Guedel airways, Magill intubation forceps, stylets, and manual suction housed in an IP67 waterproof hard-shell case.",
      },
      {
        question: "How does the Panakeia HD Video Laryngoscope assist with difficult intubations?",
        answer:
          "It features an anti-fog CMOS camera, high-luminance cold LED illumination (≥800 Lux), and a 180° tiltable HD monitor, enabling clear visualization of the vocal cords and glottis even in challenging anatomical conditions.",
      },
      {
        question: "Are the components in Panakeia resuscitation kits autoclavable?",
        answer:
          "Yes. The adult and paediatric silicone manual resuscitators, face masks, and laryngoscope blades are made of medical-grade autoclavable silicone and surgical stainless steel compliant with ISO 10651-4 and CE/CDSCO guidelines.",
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
