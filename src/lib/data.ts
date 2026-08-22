import { connectToDatabase } from "./mongodb";
import { Product } from "@/models/Product";
import { Client } from "@/models/Client";
import { Certification } from "@/models/Certification";
import { IProduct, IClient, ICertification } from "@/types";

export const fallbackProducts: IProduct[] = [
  {
    _id: "prod-1",
    slug: "three-gas-system-advanced-anaesthesia-workstation",
    name: "Three-Gas System Advanced Anaesthesia Workstation",
    category: "anaesthesia",
    tagline: "High-Acuity Digital O2/N2O/Air Workstation with Integrated Touchscreen Ventilator for Multi-Speciality OT",
    description:
      "Indigenously manufactured at the AMTZ medical technology zone, this advanced three-gas anaesthesia workstation integrates digital pneumatic gas blending with an intuitive color touchscreen monitor. Features dual vaporizer Selectatec manifold, active gas scavenging (AGSS), and fail-safe mechanical backups for complex cardiac and neuro surgical suites.",
    features: [
      "12.1-inch Color High-Resolution Touchscreen with simultaneous P-T, F-T, V-T loops and spirometry",
      "Three-Gas Delivery System (O2, N2O, Air) with cascade electronic flowmeters and mechanical backup",
      "Advanced ventilation modes: VCV, PCV, SIMV-V, SIMV-P, PSV/CPAP, PRVC, and Manual/Spontaneous",
      "Integrated heated breathing system with 1.8L dual-chamber CO2 absorber canister",
      "Dual Selectatec-compatible tool-free vaporizer mounting bar with interlock mechanism",
      "Active Anaesthetic Gas Scavenging System (AGSS) interface ensuring zero OT pollution",
      "180-minute hot-swappable internal lithium-ion battery backup with dual battery bay",
    ],
    specs: [
      { label: "Gas Inputs", value: "3 Gases: O2, N2O, Medical Air (280 - 600 kPa)" },
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV-V, SIMV-P, PSV, PRVC, Manual" },
      { label: "Tidal Volume Range", value: "10 mL to 1,600 mL (Adult, Paediatric & Infant)" },
      { label: "Absorber Capacity", value: "1.8 Liters dual-chamber with quick-release bypass" },
      { label: "Display", value: "12.1\" Color TFT anti-glare capacitive touchscreen" },
      { label: "Battery Autonomy", value: "180 minutes under full mechanical ventilation" },
      { label: "Manufacturing Standard", value: "ISO 80601-2-13, IEC 60601-1, CDSCO MD-13 Compliant" },
    ],
    images: [
      "/images/products/three-gas-system-advanced-anaesthesia-workstation.jpeg",
      "/image/three-gas-system-advanced-anaesthesia-workstation.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-three-gas-specsheet.pdf",
    order: 1,
    published: true,
  },
  {
    _id: "prod-2",
    slug: "two-gas-system-basic-anaesthesia-workstation",
    name: "Two-Gas System Basic Anaesthesia Workstation",
    category: "anaesthesia",
    tagline: "Compact Precision O2/N2O Anaesthesia System with Hypoxic Guard for Daycare & Secondary Surgical Centers",
    description:
      "The Two-Gas System Anaesthesia Workstation delivers dependable critical care volatile delivery in an agile, space-efficient frame. Engineered for high OT throughput in daycare centers and district hospitals, featuring anti-hypoxic mechanical linking and quick-release autoclavable absorber systems.",
    features: [
      "Dual-tube flowmeter cascade for Oxygen and Nitrous Oxide with anti-hypoxic safety guard (min 25% O2)",
      "Pneumatically driven, electronically monitored ventilator with real-time pressure & volume telemetry",
      "Single-action quick-release 1.5L CO2 absorber system with autoclavable components",
      "Selectatec compatible tool-free vaporizer rail with interlock mechanism",
      "Ergonomic writing shelf, auxiliary common gas outlet (ACGO), and central locking castors",
      "Integrated emergency O2 flush (35-75 L/min) with recessed protective collar",
      "120-minute battery backup with rapid smart recharge circuit",
    ],
    specs: [
      { label: "Gas Inputs", value: "2 Gases: O2 & N2O with Pin-Index Yokes" },
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV, Manual, Spontaneous" },
      { label: "Tidal Volume Range", value: "20 mL to 1,500 mL" },
      { label: "Safety System", value: "Mechanical Hypoxic Guard (maintains ≥25% O2)" },
      { label: "CO2 Absorber", value: "1.5L Autoclavable Quick-Release Canister" },
      { label: "Battery Life", value: "120 minutes continuous run time" },
      { label: "Dimensions & Weight", value: "1350mm (H) x 700mm (W) x 650mm (D), 85 kg" },
    ],
    images: [
      "/images/products/two-gas-system-basic-anaesthesia-workstation.jpeg",
      "/image/two-gas-system-basic-anaesthesia-workstation.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-two-gas-specsheet.pdf",
    order: 2,
    published: true,
  },
  {
    _id: "prod-3",
    slug: "basic-premium-anaesthesia-machine",
    name: "Basic Premium Anaesthesia Machine",
    category: "anaesthesia",
    tagline: "Ruggedized Ergonomic Anaesthesia Delivery Machine with Modular Monitor Mounting & Precision Vaporizers",
    description:
      "A versatile, heavy-duty clinical anaesthesia machine designed for seamless reliability across general surgical theaters. Equipped with a robust stainless-steel chassis, high-precision dual flowmeter cascade, integrated drawer storage, and multi-parameter vital signs monitor mounting arm.",
    features: [
      "Precision dual gas flowmeter with fine micro-adjustment for low-flow anaesthetic delivery",
      "Overhead monitor swivel arm accommodating 10-15\" multi-parameter patient monitors",
      "Heavy-duty hospital-grade mobile trolley with anti-static antilock wheels",
      "Integrated large-volume drawer storage unit for endotracheal tubes, circuits, and pharmaceuticals",
      "Auxiliary oxygen and suction unit directly integrated onto the trolley frame",
      "Autoclavable patient breathing manifold with adjustable APL safety valve",
    ],
    specs: [
      { label: "Gas Supply", value: "O2 & N2O pipeline + auxiliary cylinder yokes" },
      { label: "Flowmeter Range", value: "Dual cascade 0.05-10 L/min for precise low flow" },
      { label: "Vaporizer Mount", value: "Selectatec bar with interlock system" },
      { label: "Structure", value: "Medical-grade powder-coated steel & anti-microbial ABS" },
      { label: "Storage", value: "3 Spacious full-extension locking drawers" },
      { label: "Mobility", value: "4 Heavy-duty antistatic castors with foot brakes" },
    ],
    images: [
      "/images/products/basic-premium-anaesthesia-machine.jpeg",
      "/image/basic-premium-anaesthesia-machine.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-premium-anaesthesia-specsheet.pdf",
    order: 3,
    published: true,
  },
  {
    _id: "prod-4",
    slug: "icu-critical-care-ventilator",
    name: "Advanced ICU Critical Care Ventilator",
    category: "ventilator",
    tagline: "Turbine-Driven Multi-Functional Intensive Care Ventilator for Adult, Paediatric & Neonatal Life Support",
    description:
      "An advanced indigenously engineered intensive care ventilator designed for high-acuity ICUs and emergency trauma wards. Powered by an ultra-quiet blower turbine that eliminates compressed air cylinder dependencies, it delivers high-performance invasive and non-invasive ventilation (NIV & HFNC).",
    features: [
      "15.6-inch High-Resolution Tiltable Capacitive Touchscreen with 360-degree top alarm beacon bar",
      "Ultra-quiet high-performance blower turbine (rated for 40,000 hrs) requiring zero external air compressors",
      "Modes: V-A/C, P-A/C, V-SIMV, P-SIMV, CPAP/PSV, DuoLevel, APRV, PRVC, HFNC (High Flow Nasal Cannula)",
      "High Flow Oxygen Therapy (HFNC) with flow rate from 2 to 80 L/min and precise FiO2 titration (21-100%)",
      "Comprehensive Pulmonary Mechanics: P0.1, NIF, Auto-PEEP, RSBI, Static Compliance & Resistance loops",
      "Hot-swappable dual battery system delivering over 4 hours of uninterrupted intensive care operation",
    ],
    specs: [
      { label: "Patient Group", value: "Adult, Paediatric, and Neonatal" },
      { label: "Tidal Volume", value: "2 mL to 2,000 mL" },
      { label: "Peak Flow", value: "Up to 240 L/min (high-speed turbine response)" },
      { label: "PEEP / CPAP", value: "0 to 50 cmH2O electronic precision valve" },
      { label: "FiO2 Range", value: "21% to 100% titration" },
      { label: "Display", value: "15.6\" Full HD multi-touch color screen" },
      { label: "Battery Run Time", value: "4+ Hours hot-swappable dual lithium battery pack" },
    ],
    images: [
      "/images/products/icu-ventilator.jpeg",
      "/image/icu-ventilator.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-icu-ventilator-specsheet.pdf",
    order: 4,
    published: true,
  },
];

export const fallbackClients: IClient[] = [
  {
    _id: "client-1",
    name: "Apollo Speciality Hospitals",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    logoUrl: "/images/clients/apollo-logo.webp",
    testimonial:
      "Panakeia's Aesthetica anaesthesia workstation demonstrated remarkable stability during high-risk cardiac and neuro cases. Having an indigenous manufacturing facility right in AMTZ ensures parts availability within hours rather than weeks.",
    doctorName: "Dr. K. Srinivas Rao, MD (Anaesthesiology), Senior Consultant",
    featured: true,
  },
  {
    _id: "client-2",
    name: "Manipal Hospital",
    city: "Bengaluru",
    state: "Karnataka",
    logoUrl: "/images/clients/manipal-logo.webp",
    testimonial:
      "The RespiCare ICU 900 turbine ventilator provides clinical precision on par with top European systems, but with intuitive controls and remarkably responsive local technical support.",
    doctorName: "Dr. Arvind Menon, Head of Critical Care Medicine",
    featured: true,
  },
  {
    _id: "client-3",
    name: "Yashoda Super Speciality Hospital",
    city: "Hyderabad",
    state: "Telangana",
    logoUrl: "/images/clients/yashoda-logo.webp",
    testimonial:
      "Indigenous manufacturing in critical care has reached maturity with Panakeia. Their devices offer unmatched pneumatic precision and low total cost of ownership for high-volume surgical departments.",
    doctorName: "Dr. P. V. Ramanathan, Chief Anesthetist & OT Director",
    featured: true,
  },
  {
    _id: "client-4",
    name: "CARE Hospitals",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    logoUrl: "/images/clients/care-logo.webp",
    testimonial:
      "We evaluated the Aesthetica workstation in our trauma OT suites. The gas scavenging system, responsive vaporizer manifold, and crisp UI earned unanimous appreciation from our anaesthesia team.",
    doctorName: "Dr. S. Meenakshi, Senior Consultant Anaesthetist",
    featured: true,
  },
  {
    _id: "client-5",
    name: "KIMS Health",
    city: "Thiruvananthapuram",
    state: "Kerala",
    logoUrl: "/images/clients/kims-logo.webp",
    testimonial:
      "The turbine performance of the Panakeia ICU ventilator allows seamless patient mobility and zero downtime. A commendable milestone for Indian medtech engineering.",
    doctorName: "Dr. R. Rajesh, Medical Superintendent & Critical Care Specialist",
    featured: false,
  },
  {
    _id: "client-6",
    name: "Narayana Institute of Cardiac Sciences",
    city: "Bengaluru",
    state: "Karnataka",
    logoUrl: "/images/clients/narayana-logo.webp",
    testimonial:
      "Panakeia brings deep clinical insights into their hardware ergonomics. The flow control and ventilator loops are exceptionally accurate.",
    doctorName: "Dr. V. Chandrasekhar, Consultant Anaesthesiologist",
    featured: false,
  },
];

export const fallbackCertifications: ICertification[] = [
  {
    _id: "cert-1",
    title: "DPIIT Recognition — Make in India MedTech Enterprise",
    number: "DIPP114820",
    issuedBy: "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry",
    documentUrl: "/docs/dpiit-recognition.pdf",
    status: "active",
    description:
      "Recognized indigenous medical technology manufacturing entity under Startup India / Make in India initiative for advancing indigenous critical care OT & ICU equipment design.",
    order: 1,
  },
  {
    _id: "cert-2",
    title: "CDSCO Medical Device Test License (Form MD-13)",
    number: "TL/MD/2024/00892",
    issuedBy: "Central Drugs Standard Control Organization (CDSCO), Directorate General of Health Services",
    documentUrl: "/docs/cdsco-test-license.pdf",
    status: "active",
    description:
      "Granted CDSCO Medical Device Test License for examination, testing, and performance validation of Anaesthesia Workstations and Ventilators. Commercial manufacturing license application is in active audit progress at the AMTZ facility.",
    order: 2,
  },
  {
    _id: "cert-3",
    title: "Commercial Medical Device Manufacturing License (Form MD-9)",
    number: "Application Ref: AMTZ/MFG/2024/MD9-412",
    issuedBy: "State Drugs Control Administration & CDSCO Joint Inspection Cell",
    documentUrl: "/docs/mfg-license-application.pdf",
    status: "pending",
    description:
      "Commercial Manufacturing License application currently under final facility validation and statutory audit at the Andhra Pradesh Medtech Zone (AMTZ) manufacturing unit.",
    order: 3,
  },
  {
    _id: "cert-4",
    title: "MSME Udyam Registration",
    number: "UDYAM-AP-10-0048291",
    issuedBy: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    documentUrl: "/docs/msme-registration.pdf",
    status: "active",
    description:
      "Registered manufacturing enterprise contributing to India's self-reliance in high-precision critical care biomedical engineering.",
    order: 4,
  },
  {
    _id: "cert-5",
    title: "ISO 13485:2016 Medical Devices Quality Management System",
    number: "ISO13485-MED-9042",
    issuedBy: "Accredited Medical Device Registrar",
    documentUrl: "/docs/iso-13485-certificate.pdf",
    status: "active",
    description:
      "Comprehensive quality management system covering design, manufacturing, assembly, calibration, and servicing of anaesthesia systems and life-support ventilators.",
    order: 5,
  },
  {
    _id: "cert-6",
    title: "AMTZ Resident Manufacturing Anchor Facility",
    number: "AMTZ-UNIT-A84",
    issuedBy: "Andhra Pradesh Medtech Zone (AMTZ), Visakhapatnam",
    documentUrl: "/docs/amtz-resident-cert.pdf",
    status: "active",
    description:
      "Resident manufacturing unit at Asia's premier medical device cluster with in-house access to 3D rapid prototyping, EMI/EMC compliance testing, and biomaterial laboratories.",
    order: 6,
  },
];

export async function getProducts(options?: { category?: string }): Promise<IProduct[]> {
  try {
    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const query: Record<string, unknown> = { published: true };
      if (options?.category) {
        query.category = options.category;
      }
      const products = await Product.find(query).sort({ order: 1 }).lean<IProduct[]>();
      if (products && products.length > 0) {
        return JSON.parse(JSON.stringify(products));
      }
    }
  } catch (err) {
    console.warn("[Data Service] Database query fallback to seed data:", err);
  }

  if (options?.category) {
    return fallbackProducts.filter((p) => p.category === options.category);
  }
  return fallbackProducts;
}

export async function getProductBySlug(slug: string): Promise<IProduct | null> {
  try {
    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const product = await Product.findOne({ slug: slug.toLowerCase(), published: true }).lean<IProduct>();
      if (product) {
        return JSON.parse(JSON.stringify(product));
      }
    }
  } catch (err) {
    console.warn("[Data Service] Database lookup fallback to seed data:", err);
  }

  const found = fallbackProducts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
  return found || null;
}

export async function getClients(options?: { featured?: boolean }): Promise<IClient[]> {
  try {
    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const query: Record<string, unknown> = {};
      if (options?.featured !== undefined) {
        query.featured = options.featured;
      }
      const clients = await Client.find(query).sort({ featured: -1, createdAt: -1 }).lean<IClient[]>();
      if (clients && clients.length > 0) {
        return JSON.parse(JSON.stringify(clients));
      }
    }
  } catch (err) {
    console.warn("[Data Service] Clients database query fallback to seed data:", err);
  }

  if (options?.featured !== undefined) {
    return fallbackClients.filter((c) => c.featured === options.featured);
  }
  return fallbackClients;
}

export async function getCertifications(): Promise<ICertification[]> {
  try {
    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const certs = await Certification.find({}).sort({ order: 1 }).lean<ICertification[]>();
      if (certs && certs.length > 0) {
        return JSON.parse(JSON.stringify(certs));
      }
    }
  } catch (err) {
    console.warn("[Data Service] Certifications database query fallback to seed data:", err);
  }

  return fallbackCertifications;
}
