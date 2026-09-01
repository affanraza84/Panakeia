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
      "Indigenously engineered with all parts manufactured directly by Panakeia itself, this advanced three-gas anaesthesia workstation integrates digital pneumatic gas blending with an intuitive color touchscreen monitor. Features dual vaporizer Selectatec manifold, active gas scavenging (AGSS), and fail-safe mechanical backups for complex cardiac and neuro surgical suites.",
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
      { label: "Manufacturing Standard", value: "ISO 80601-2-13, IEC 60601-1, CDSCO Compliant" },
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
  {
    _id: "prod-5",
    slug: "multi-para-patient-monitor",
    name: "Multi-Parameter Patient Monitor",
    category: "monitoring",
    tagline: "High-Precision 12.1\" Multi-Parameter Vital Signs Monitor with Anti-Motion SpO2 & Arrhythmia Analysis",
    description:
      "Indigenously engineered for continuous real-time physiological monitoring across high-acuity surgical theaters and intensive care units. Provides high-fidelity monitoring of ECG (3/5-lead with ST segment analysis and arrhythmia detection), SpO2 with anti-motion perfusion index, NIBP, Respiration, Temperature, and optional Dual IBP and End-Tidal CO2 (EtCO2). Equipped with a glare-free color touchscreen, intuitive alarm management, and central nursing station connectivity.",
    features: [
      "12.1-inch High-Resolution Anti-Glare Color Touchscreen with customizable multi-waveform display",
      "Advanced ECG Analysis: 3/5-lead ECG with 23 arrhythmia classifications and real-time ST-segment analysis",
      "Anti-motion & Low-perfusion SpO2 technology with pulse modulation tone and perfusion index (PI)",
      "Smart NIBP measurement with dual over-pressure protection and automatic interval cycles",
      "Dual-channel temperature monitoring, respiration impedance telemetry, and optional EtCO2 / IBP modules",
      "360-degree top visual alarm light bar with multi-level audible clinical alerts",
      "High-capacity rechargeable lithium-ion battery delivering 4+ hours continuous monitoring",
    ],
    specs: [
      { label: "Display", value: "12.1\" Color TFT Capacitive Touchscreen (800x600 px)" },
      { label: "Parameters Monitored", value: "ECG, SpO2, NIBP, Respiration, 2-Temp, Pulse Rate, Optional: IBP, EtCO2" },
      { label: "ECG Leads", value: "3/5 Lead with Arrhythmia & ST Analysis" },
      { label: "SpO2 Range", value: "0 - 100% (Resolution: 1%, Accuracy: ±2%)" },
      { label: "NIBP Range", value: "10 - 270 mmHg with Overpressure Safety Release" },
      { label: "Trend Storage", value: "160 hours tabular & graphic trends, 1000 NIBP records" },
      { label: "Battery Autonomy", value: "4+ Hours Lithium-Ion Internal Pack" },
    ],
    images: [
      "/images/products/multi-para-patient-monitor.jpeg",
      "/image/multi-para-patient-monitor.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-patient-monitor-specsheet.pdf",
    order: 5,
    published: true,
  },
  {
    _id: "prod-6",
    slug: "syringe-infusion-pump",
    name: "Syringe & Volumetric Infusion Pump System",
    category: "infusion",
    tagline: "High-Precision Micro-Infusion & Syringe Delivery System with Comprehensive Drug Library and Anti-Bolus Safety",
    description:
      "An indigenously developed smart dual-channel infusion and syringe pump platform engineered for critical care, neonatal intensive care, oncology, and anaesthesia delivery. Featuring ultra-precise stepper motor drive mechanics, automatic syringe size detection (2ml to 60ml), real-time dynamic pressure monitoring, and programmable dose-rate calculators for fail-safe intravenous medication administration.",
    features: [
      "High-precision micro-step motor driving technology delivering accurate infusion rates from 0.01 mL/h to 1500 mL/h",
      "Automatic syringe brand and size recognition (compatible with standard 2mL, 5mL, 10mL, 20mL, 30mL, 50/60mL syringes)",
      "Dual infusion mode support: Flow Rate mode, Time mode, Body Weight mode, and Multi-Rate dose profiles",
      "Integrated Comprehensive Drug Library with custom concentration presets and hard/soft dosing limits",
      "Dynamic Occlusion Pressure Detection with 12 selectable sensitivity levels and automatic anti-bolus pressure relief",
      "Stackable modular interlock chassis for multi-channel drug administration towers on standard IV poles",
      "Dual power architecture with up to 6 hours continuous battery operation per unit",
    ],
    specs: [
      { label: "Flow Rate Range", value: "0.01 - 1500.00 mL/h (Syringe) / 0.1 - 2000.00 mL/h (Infusion)" },
      { label: "Infusion Accuracy", value: "±2% (Mechanical Precision: ±1%)" },
      { label: "Syringe Compatibility", value: "2mL, 5mL, 10mL, 20mL, 30mL, 50/60mL standard syringes" },
      { label: "Delivery Modes", value: "Rate Mode, Time Mode, Weight-based Dose Mode, Bolus Mode" },
      { label: "Occlusion Levels", value: "12 Configurable pressure thresholds with Anti-Bolus" },
      { label: "Display", value: "Bright 3.5\" Color LCD with intuitive status indicators" },
      { label: "Battery Life", value: "6+ Hours continuous runtime @ 25 mL/h" },
    ],
    images: [
      "/images/products/syringe-infusion-pump.jpeg",
      "/image/syringe-infusion-pump.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-infusion-pump-specsheet.pdf",
    order: 6,
    published: true,
  },
  {
    _id: "prod-7",
    slug: "emergency-resuscitation-kit",
    name: "Emergency Resuscitation & Airway Kit",
    category: "emergency",
    tagline: "Comprehensive Clinical-Grade Trauma & Resuscitation Kit in Ruggedized Waterproof Hard-Shell Case",
    description:
      "A fully equipped, field-ready emergency trauma and airway resuscitation system designed for rapid-response clinical teams, emergency departments, crash carts, and ambulance transport. Housed in an ultra-durable, waterproof, impact-resistant Pelican-style protective case with custom high-density foam organizing slots. Includes clinical autoclavable adult and pediatric silicon manual resuscitators, fiber-optic LED laryngoscope blade set, endotracheal intubation supplies, manual suction units, and vital airway accessories.",
    features: [
      "100% Medical-grade silicone autoclavable manual resuscitators (Adult 1500mL & Paediatric 550mL) with pressure relief valves",
      "Stainless steel Macintosh / Miller fiber-optic LED laryngoscope set with 4 multi-sized interchangeable blades",
      "Oxygen reservoir bag assembly with high-flow oxygen supply tubing and non-rebreathing valve manifold",
      "Full range of silicone anatomical face masks (Sizes 0 to 5) with soft inflatable air cushions",
      "Color-coded Guedel oropharyngeal and nasopharyngeal airway assortment (Sizes 00 to 5)",
      "Endotracheal intubation accessories: stylets, Magill intubation forceps, manual suction catheter, and silicone bite block",
      "Heavy-duty IP67 waterproof, dustproof, and shockproof high-visibility copolymer protective case with secure latches",
    ],
    specs: [
      { label: "Resuscitator Volume", value: "Adult (1500 mL) & Paediatric (550 mL) Autoclavable Silicone" },
      { label: "Laryngoscope Blades", value: "Stainless Steel Fiber-Optic Blades (Sizes 1, 2, 3, 4) + LED Handle" },
      { label: "Face Mask Assortment", value: "Sizes 0, 1, 2, 3, 4, 5 Medical Silicone Cushioned" },
      { label: "Airway Management", value: "Color-Coded Guedel Airways + Stylet + Magill Forceps" },
      { label: "Suction & Delivery", value: "Manual Hand Suction Unit + Oxygen Reservoir & Tubing" },
      { label: "Carrying Case", value: "Heavy-Duty IP67 Military-Grade Hard Case with Custom Foam" },
      { label: "Standards & Compliance", value: "ISO 10651-4, CE / CDSCO Compliant" },
    ],
    images: [
      "/images/products/emergency-resuscitation-kit.jpeg",
      "/image/emergency-resuscitation-kit.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-resuscitation-kit-specsheet.pdf",
    order: 7,
    published: true,
  },
  {
    _id: "prod-8",
    slug: "anaevent-anaesthesia-ventilator",
    name: "ANAEVENT Anaesthesia Ventilator",
    category: "anaesthesia",
    tagline: "High-Precision Touchscreen Anaesthesia Ventilator with Calibrated Ascending Bellows & Electronic Telemetry",
    description:
      "Indigenously developed with all parts manufactured directly by Panakeia itself, the Panakeia ANAEVENT is a compact, high-precision anaesthesia ventilator designed for seamless integration with surgical anaesthesia delivery platforms. Featuring a clear vertical ascending bellows system calibrated up to 1200 mL, a crisp color multi-parameter touchscreen with real-time waveform loops, pneumatic flow micro-control, and fail-safe clinical alarms for surgical safety.",
    features: [
      "Ascending graduated silicone bellows cylinder (300 mL to 1200 mL calibrated tidal volume)",
      "High-resolution color touchscreen interface displaying real-time pressure, flow, and volume curves",
      "Comprehensive ventilation modes: VCV, PCV, SIMV-V, SIMV-P, PSV, Manual, and Spontaneous",
      "Dual-circuit pneumatic drive with integrated electronic pressure monitoring & low-flow support",
      "Comprehensive clinical safety alarms: Apnea, High/Low Peak Pressure, Low Tidal Volume, and Power Failure",
      "Compact ergonomic white chassis designed for top-shelf workstation mounting or mobile trolley integration",
      "Hot-swappable internal rechargeable battery delivering continuous surgical ventilation backup",
    ],
    specs: [
      { label: "Drive Mechanism", value: "Pneumatically driven, electronically controlled" },
      { label: "Tidal Volume Range", value: "20 mL to 1,400 mL (Calibrated Bellows 300-1200 mL)" },
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV-V, SIMV-P, PSV, Manual, Spontaneous" },
      { label: "Display", value: "7\" Color LCD Touchscreen with real-time waveforms" },
      { label: "Pressure Limits", value: "High P: 10-80 cmH2O, Low P: 0-20 cmH2O" },
      { label: "Battery Autonomy", value: "180+ Minutes rechargeable internal pack" },
      { label: "Origin & Standards", value: "100% In-House Panakeia Manufacturing, ISO 80601-2-13" },
    ],
    images: [
      "/images/products/anaevent-anaesthesia-ventilator.jpeg",
      "/images/products/anaevent-anaesthesia-ventilator-2.jpeg",
      "/image/anaevent-anaesthesia-ventilator.jpeg",
      "/image/anaevent-anaesthesia-ventilator-2.jpeg",
    ],
    brochurePdfUrl: "/brochures/panakeia-anaevent-specsheet.pdf",
    order: 8,
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
      "Panakeia's Aesthetica anaesthesia workstation demonstrated remarkable stability during high-risk cardiac and neuro cases. Having 100% in-house parts manufacturing by Panakeia itself ensures parts availability within hours rather than weeks.",
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
    doctorName: "Dr. P. V. Ramanathan, Chief Anaesthetist & OT Director",
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
    issuedBy: "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry",
    documentUrl: "/docs/dpiit-recognition.pdf",
    status: "active",
    description:
      "Recognized indigenous medical technology manufacturing entity under Startup India / Make in India initiative for advancing indigenous critical care OT & ICU equipment design.",
    order: 1,
  },
  {
    _id: "cert-2",
    title: "CDSCO Medical Device Regulatory Compliance",
    issuedBy: "Central Drugs Standard Control Organization (CDSCO), Directorate General of Health Services",
    documentUrl: "/docs/cdsco-compliance.pdf",
    status: "active",
    description:
      "Adherence to CDSCO regulatory standards for examination, testing, and performance validation of Anaesthesia Workstations and Ventilators at our dedicated in-house manufacturing facility.",
    order: 2,
  },
  {
    _id: "cert-3",
    title: "Medical Device Manufacturing Standards Compliance",
    issuedBy: "State Drugs Control Administration & CDSCO Regulatory Framework",
    documentUrl: "/docs/mfg-standards-compliance.pdf",
    status: "active",
    description:
      "Facility validation, safety protocols, and rigorous quality audit adherence across the Panakeia in-house manufacturing unit.",
    order: 3,
  },
  {
    _id: "cert-4",
    title: "MSME Udyam Registration",
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
    issuedBy: "Accredited Medical Device Registrar",
    documentUrl: "/docs/iso-13485-certificate.pdf",
    status: "active",
    description:
      "Comprehensive quality management system covering design, manufacturing, assembly, calibration, and servicing of anaesthesia systems and life-support ventilators.",
    order: 5,
  },
  {
    _id: "cert-6",
    title: "Panakeia In-House Manufacturing Facility",
    issuedBy: "Panakeia Medtech Manufacturing Division, Visakhapatnam",
    documentUrl: "/docs/panakeia-facility-cert.pdf",
    status: "active",
    description:
      "Dedicated state-of-the-art facility with all components and parts manufactured in-house by Panakeia itself, featuring rapid prototyping, EMI/EMC compliance testing, and biomaterial testing laboratories.",
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
