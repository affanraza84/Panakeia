import mongoose from "mongoose";
import { Product } from "../src/models/Product";
import { Client } from "../src/models/Client";
import { Certification } from "../src/models/Certification";
import { IProduct, IClient, ICertification } from "../src/types";

const seedProducts: Omit<IProduct, "_id" | "createdAt" | "updatedAt">[] = [
  {
    slug: "panakeia-aesthetica-700",
    name: "Panakeia Aesthetica 700",
    category: "anaesthesia",
    tagline: "Integrated Advanced Anaesthesia Delivery System for Multi-Speciality Operating Theatres",
    description:
      "The Panakeia Aesthetica 700 is an indigenously manufactured, high-acuity anaesthesia workstation built at the AMTZ facility. Designed for complex surgical environments, it combines digital gas mixing, precision pneumatic ventilation, and an integrated 12.1-inch color touchscreen display. Built with medical-grade materials, modular vaporizer architecture, and comprehensive gas monitoring interfaces to guarantee uncompromised patient safety during long-duration surgeries.",
    features: [
      "12.1-inch High-Resolution Color Touchscreen with 3 simultaneous waveform displays (P-T, F-T, V-T) and spirometry loops",
      "Digital Electronic Gas Flow Control with mechanical backup flowmeters for total fail-safe redundancy",
      "Advanced ventilation modes: VCV, PCV, SIMV-V, SIMV-P, PSV/CPAP, PRVC, and Manual/Spontaneous",
      "Integrated Heated Breathing System (absorber canister) prevents condensation and ensures optimal gas conditioning",
      "Dual Selectatec-compatible tool-free vaporizer mounting bar with interlock mechanism",
      "Active Anaesthetic Gas Scavenging System (AGSS) interface ensuring zero OT theatre pollution",
      "Integrated Auxiliary Common Gas Outlet (ACGO) for open-circuit Jackson Rees/Bain circuit procedures",
      "180-minute hot-swappable internal lithium-ion battery backup with dual battery bay",
    ],
    specs: [
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV-V, SIMV-P, PSV, PRVC, Manual, Bypass" },
      { label: "Tidal Volume Range", value: "10 mL to 1,600 mL (Adult, Paediatric & Infant)" },
      { label: "Respiratory Rate", value: "2 to 100 breaths per minute" },
      { label: "I:E Ratio", value: "4:1 to 1:8 (micro-step adjustment)" },
      { label: "PEEP Range", value: "OFF, 3 to 30 cmH2O (electronic precision valve)" },
      { label: "Inspiratory Pressure (Pinsp)", value: "5 to 70 cmH2O" },
      { label: "Pressure Support (Psupp)", value: "0 to 60 cmH2O" },
      { label: "Flow Trigger / Pressure Trigger", value: "0.5 to 15 L/min / -20 to -0.5 cmH2O" },
      { label: "Gas Supply Inputs", value: "O2, N2O, Medical Air (280 kPa – 600 kPa) + Pin-index Yokes" },
      { label: "Absorber Capacity", value: "1.8 Liters dual-chamber with quick-release bypass lever" },
      { label: "Display", value: "12.1-inch color TFT anti-glare capacitive touchscreen" },
      { label: "Battery Autonomy", value: "180 minutes under full mechanical ventilation" },
      { label: "Manufacturing Standard", value: "ISO 80601-2-13, IEC 60601-1, CDSCO Test License Compliant" },
    ],
    images: [
      "/images/products/aesthetica-700-front.webp",
      "/images/products/aesthetica-700-side.webp",
      "/images/products/aesthetica-700-screen.webp",
    ],
    brochurePdfUrl: "/brochures/panakeia-aesthetica-700-specsheet.pdf",
    order: 1,
    published: true,
  },
  {
    slug: "panakeia-aesthetica-500",
    name: "Panakeia Aesthetica 500",
    category: "anaesthesia",
    tagline: "Compact Precision Anaesthesia Workstation for Daycare & Secondary Surgical Centers",
    description:
      "The Panakeia Aesthetica 500 provides uncompromising critical care anaesthesia delivery in an agile, space-efficient footprint. Engineered specifically for day-care surgical clinics, district hospitals, and secondary surgical suites, it offers pneumatic reliability, low-flow anaesthesia precision, and anti-hypoxic mechanical guards designed for high OT turnover.",
    features: [
      "8.4-inch color LCD display providing real-time pressure, volume, and airway resistance metrics",
      "Pneumatically driven, electronically controlled ventilator engineered for low maintenance",
      "Hypoxic Guard System maintaining minimum 25% O2 concentration across all N2O flow settings",
      "Single-action quick-release 1.5L CO2 absorber system with autoclavable components",
      "Selectatec compatible single/dual interlock vaporizer rail",
      "Ergonomic stainless-steel writing shelf and heavy-duty castors with central locking brake",
      "Auxiliary O2 flowmeter and suction unit integration directly on trolley frame",
      "120-minute battery backup with rapid smart recharge circuit",
    ],
    specs: [
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV, Manual, Spontaneous" },
      { label: "Tidal Volume Range", value: "20 mL to 1,500 mL" },
      { label: "Respiratory Rate", value: "4 to 80 bpm" },
      { label: "I:E Ratio", value: "3:1 to 1:6" },
      { label: "PEEP", value: "Integrated mechanical valve 0 to 20 cmH2O" },
      { label: "Gas Flowmeter", value: "Dual tube cascade: O2 (0.05-10 L/min), N2O (0.05-10 L/min), Air optional" },
      { label: "O2 Flush Rate", value: "35 to 75 L/min with safety collar" },
      { label: "Battery Life", value: "120 minutes continuous run time" },
      { label: "Dimensions & Weight", value: "1350mm (H) x 700mm (W) x 650mm (D), 85 kg" },
    ],
    images: [
      "/images/products/aesthetica-500-front.webp",
      "/images/products/aesthetica-500-angle.webp",
    ],
    brochurePdfUrl: "/brochures/panakeia-aesthetica-500-specsheet.pdf",
    order: 2,
    published: true,
  },
  {
    slug: "panakeia-respi-icu-900",
    name: "Panakeia RespiCare ICU 900",
    category: "ventilator",
    tagline: "Turbine-Driven Multi-Functional Critical Care Ventilator for Adult, Paediatric & Neonatal ICU",
    description:
      "The Panakeia RespiCare ICU 900 represents indigenous Indian manufacturing excellence in intensive care ventilation. Featuring an ultra-quiet blower turbine that operates independently of central high-pressure medical air supplies, the ICU 900 delivers seamless transition from invasive ventilation to High-Flow Nasal Cannula (HFNC) and non-invasive masks.",
    features: [
      "15.6-inch Full HD capacitive touchscreen with 360-degree high-visibility alarm beacon bar",
      "Ultra-quiet high-performance blower turbine (rated for 40,000 operational hours) requiring zero external compressed air",
      "Comprehensive Invasive & Non-Invasive Modes: V-A/C, P-A/C, V-SIMV, P-SIMV, CPAP/PSV, DuoLevel, APRV, PRVC, HFNC",
      "Integrated High-Flow Oxygen Therapy (HFNC) with flow delivery from 2 to 80 L/min and precise FiO2 titration (21-100%)",
      "Advanced Pulmonary Diagnostics: RSBI (Rapid Shallow Breathing Index), P0.1, NIF, Auto-PEEP, Static Compliance & Resistance loops",
      "Integrated ultrasonic mesh nebulizer interface synchronized with inspiratory phase",
      "Intelligent weaning assistant protocol with real-time breathing effort analytics",
      "Dual hot-swappable batteries providing up to 240 minutes of uninterrupted mobile/ICU operation",
    ],
    specs: [
      { label: "Patient Demographics", value: "Adult, Paediatric, and Neonatal (with micro-flow sensor)" },
      { label: "Tidal Volume Range", value: "2 mL to 2,000 mL" },
      { label: "Respiratory Rate", value: "1 to 120 bpm (Neonatal mode up to 150 bpm)" },
      { label: "Inspiratory Flow", value: "Up to 240 L/min (turbine max delivery)" },
      { label: "Peak Pressure Range", value: "1 to 100 cmH2O" },
      { label: "PEEP / CPAP", value: "0 to 50 cmH2O" },
      { label: "FiO2 Range", value: "21% to 100% (paramagnetic or ultrasonic O2 sensor)" },
      { label: "Trigger Mechanism", value: "Flow trigger: 0.2-15 L/min; Pressure trigger: -20 to -0.5 cmH2O" },
      { label: "High Flow Oxygen Therapy", value: "2 - 80 L/min, Temperature 31-37°C with external active humidifier" },
      { label: "Screen", value: "15.6-inch color capacitive multi-touch display, tilt-adjustable" },
      { label: "Communication Ports", value: "RS232, RJ45 Ethernet, USB, Nurse Call interface, HL7 compliant" },
      { label: "Battery Capacity", value: "4 hours internal dual lithium battery pack" },
    ],
    images: [
      "/images/products/respicare-900-front.webp",
      "/images/products/respicare-900-screen.webp",
      "/images/products/respicare-900-cart.webp",
    ],
    brochurePdfUrl: "/brochures/panakeia-respicare-900-specsheet.pdf",
    order: 3,
    published: true,
  },
  {
    slug: "panakeia-respi-transport-300",
    name: "Panakeia RespiCare Transport 300",
    category: "ventilator",
    tagline: "Ruggedized Emergency & Intra-Hospital Transport Ventilator with Turbine Technology",
    description:
      "Engineered for ambulance transfers, air evacuations, disaster response, and inter-departmental hospital transfers, the RespiCare Transport 300 delivers ICU-grade mechanical ventilation in a lightweight 4.5kg chassis. Certified for shock, drop, vibration, and water resistance, it ensures clinical continuity from accident scene to ICU bed.",
    features: [
      "Ultra-compact 4.5kg chassis with MIL-STD-810G shock and vibration certification",
      "Turbine-driven air generation eliminates dependency on compressed gas cylinders during mobile transit",
      "IPX4 all-weather water and fluid resistance for emergency pre-hospital deployment",
      "7-inch sunlight-readable high-contrast color touchscreen operable with medical gloves",
      "Modes: VCV, PCV, SIMV, CPAP/PSV, Emergency CPR quick-start protocol",
      "Integrated O2 concentration blender (40% to 100% titration) with low-pressure oxygen enrichment",
      "6-hour total battery run-time with hot-swappable secondary battery module",
      "Universal ambulance mounting bracket with 12V DC vehicular power input",
    ],
    specs: [
      { label: "Patient Population", value: "Adult & Paediatric (> 3.5 kg)" },
      { label: "Tidal Volume", value: "50 mL to 1,500 mL" },
      { label: "Respiratory Rate", value: "4 to 60 bpm" },
      { label: "Inspiratory Pressure", value: "5 to 60 cmH2O" },
      { label: "PEEP", value: "0 to 25 cmH2O" },
      { label: "FiO2 Range", value: "40% to 100% or 21% ambient air titration" },
      { label: "Ingress Protection", value: "IPX4 water-splash resistant" },
      { label: "Battery Life", value: "Up to 6 hours continuous turbine operation" },
      { label: "Weight", value: "4.5 kg (excluding cylinder and mounting kit)" },
    ],
    images: [
      "/images/products/respicare-300-front.webp",
      "/images/products/respicare-300-side.webp",
    ],
    brochurePdfUrl: "/brochures/panakeia-respicare-300-specsheet.pdf",
    order: 4,
    published: true,
  },
];

const seedClients: Omit<IClient, "_id" | "createdAt" | "updatedAt">[] = [
  {
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

const seedCertifications: Omit<ICertification, "_id" | "createdAt" | "updatedAt">[] = [
  {
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
    title: "ISO 13485:2016 Medical Devices Quality Management System",
    number: "ISO13485-MED-9042",
    issuedBy: "TUV / Accredited Medical Device Registrar",
    documentUrl: "/docs/iso-13485-certificate.pdf",
    status: "active",
    description:
      "Comprehensive quality management system covering design, manufacturing, assembly, calibration, and servicing of anaesthesia systems and life-support ventilators.",
    order: 5,
  },
  {
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

export async function runSeed(mongoUri?: string) {
  const uri = mongoUri || process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is required to run seed script");
  }

  console.log(`Connecting to MongoDB at: ${uri.replace(/\/\/.*@/, "//<credentials>@")}`);
  await mongoose.connect(uri);

  console.log("Connected. Seeding collections...");

  // 1. Seed Products
  await Product.deleteMany({});
  const insertedProducts = await Product.insertMany(seedProducts);
  console.log(`Seeded ${insertedProducts.length} Products.`);

  // 2. Seed Clients
  await Client.deleteMany({});
  const insertedClients = await Client.insertMany(seedClients);
  console.log(`Seeded ${insertedClients.length} Clients.`);

  // 3. Seed Certifications
  await Certification.deleteMany({});
  const insertedCertifications = await Certification.insertMany(seedCertifications);
  console.log(`Seeded ${insertedCertifications.length} Certifications.`);

  console.log("Database seeding completed successfully!");
  return {
    products: insertedProducts.length,
    clients: insertedClients.length,
    certifications: insertedCertifications.length,
  };
}

if (require.main === module) {
  runSeed()
    .then(() => {
      console.log("Finished!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Seed failed:", err);
      process.exit(1);
    });
}
