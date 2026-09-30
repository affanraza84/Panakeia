export interface ResourceSection {
  heading: string;
  body: string;
  bulletPoints?: string[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  category: string;
  targetKeyword: string;
  relatedCategorySlug: string;
  relatedProductSlugs: string[];
  summary: string;
  sections: ResourceSection[];
  faqs: { question: string; answer: string }[];
}

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "two-gas-vs-three-gas-anaesthesia-workstation",
    title: "Two-Gas vs Three-Gas Anaesthesia Workstations: Clinical Comparison & OT Selection Guide",
    seoTitle: "Two-Gas vs Three-Gas Anaesthesia Workstations Comparison | Panakeia Medtech",
    metaDescription: "Understand the clinical differences between two-gas (O2/N2O) and three-gas (O2/N2O/Air) anaesthesia machines. Compare hypoxic guards, ventilation, and OT suitability.",
    publishedAt: "2026-08-15",
    updatedAt: "2026-09-20",
    readTime: "7 min read",
    category: "Anaesthesia & Operation Theatre",
    targetKeyword: "two-gas vs three-gas anaesthesia machine",
    relatedCategorySlug: "anaesthesia-machines",
    relatedProductSlugs: [
      "three-gas-system-advanced-anaesthesia-workstation",
      "two-gas-system-basic-anaesthesia-workstation",
    ],
    summary:
      "Selecting the appropriate anaesthesia delivery platform is one of the most critical decisions for hospital procurement and clinical anaesthesiology departments. While two-gas systems deliver Oxygen and Nitrous Oxide with mechanical anti-hypoxic guards for secondary surgical centers, three-gas workstations introduce Medical Air blending, digital touchscreen ventilation, and advanced spirometry loops essential for tertiary and multi-speciality operation theatres.",
    sections: [
      {
        heading: "1. Core Pneumatic Architecture & Gas Inputs",
        body: "The fundamental distinction between the systems begins at the gas pipeline and cylinder yoke interfaces. A standard two-gas workstation operates on Oxygen (O2) and Nitrous Oxide (N2O). A pneumatic ratio controller or mechanical hypoxic guard links the two gas flows, preventing the delivery of hypoxic gas mixtures below 25% oxygen concentration. In contrast, a three-gas anaesthesia workstation incorporates a third dedicated medical gas line: Medical Air (compressed medical air at 280–600 kPa). This allows the anaesthetist to blend Oxygen with Medical Air rather than Nitrous Oxide, providing precise FiO2 titration without exposing patients to volatile expansion hazards associated with N2O in prolonged bowel, thoracic, or neurosurgical procedures.",
        bulletPoints: [
          "Two-Gas Systems: Oxygen (O2) and Nitrous Oxide (N2O) with mechanical hypoxic safeguard.",
          "Three-Gas Workstations: O2, N2O, and Medical Air with digital or dual-cascade rotameters.",
          "Clinical Advantage of Medical Air: Essential for patients requiring air-oxygen mixtures without nitrous oxide exposure.",
        ],
      },
      {
        heading: "2. Ventilation Capabilities & Spirometry Monitoring",
        body: "Modern anaesthesia workstations have transitioned from purely pneumatic gas rotameters into full critical care respiratory platforms. Two-gas units generally feature compact, pneumatically driven electronic ventilators supporting fundamental modes like Volume-Controlled Ventilation (VCV) and Pressure-Controlled Ventilation (PCV) with manual bag/spontaneous override. High-acuity three-gas workstations integrate multi-mode digital ventilators equipped with Pressure Support Ventilation (PSV), Synchronized Intermittent Mandatory Ventilation (SIMV-V, SIMV-P), and Pressure-Regulated Volume Control (PRVC). Furthermore, they feature capacitive color touchscreens capable of plotting real-time Pressure-Volume (P-V) loops and Flow-Volume (F-V) loops, enabling continuous assessment of dynamic lung compliance during laparoscopy or chest retraction.",
        bulletPoints: [
          "Advanced Ventilation Modes: PRVC, SIMV-P, and PSV with electronic PEEP for restrictive or obstructive pulmonary conditions.",
          "Real-Time Waveforms: Simultaneous pressure-time, flow-time, volume-time curves, and spirometry loops.",
          "Tidal Volume Precision: Capabilities reaching 10 mL to 1,600 mL, providing safe coverage from paediatric to adult patient demographics.",
        ],
      },
      {
        heading: "3. Surgical Acuity & Clinical Department Suitability",
        body: "Procurement decisions should align with the clinical acuity profile of the hospital. For daycare surgical centers, district general hospitals, ophthalmology, and routine general surgery, a rugged, space-efficient two-gas workstation like the Panakeia Two-Gas System provides high throughput reliability with low operational complexity. Conversely, tertiary multi-speciality operating rooms, cardiac surgery suites, neurosurgical theatres, and pediatric surgical units require the comprehensive telemetry, active gas scavenging (AGSS), and precise gas-titration capabilities of a three-gas digital workstation.",
        bulletPoints: [
          "Secondary Hospitals & Daycare Centers: Optimal fit for agile two-gas workstations with quick-release absorbers.",
          "Tertiary OT & Trauma Centers: Essential requirement for three-gas workstations with integrated digital ventilators.",
          "Environmental OT Safety: Dual Selectatec tool-free vaporizer mounts with interlocking safety pins and active AGSS to eliminate trace gas contamination.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Medical Air be added to a two-gas anaesthesia machine later?",
        answer: "Retrofitting medical air onto a dedicated two-gas chassis is generally not recommended or approved by clinical engineering standards, because gas manifold blocks, hypoxic safety linkage mechanisms, and flowmeter cascades are calibrated specifically during factory fabrication. Hospitals anticipating multi-speciality expansions should specify three-gas workstations at initial procurement.",
      },
      {
        question: "How does the mechanical hypoxic guard safeguard patient safety?",
        answer: "A mechanical hypoxic guard links the Oxygen and Nitrous Oxide flowmeter spindles via a mechanical gear or chain mechanism. If the clinician adjusts Nitrous Oxide upwards, the guard automatically opens the Oxygen flow to ensure that the delivered gas mixture never drops below approximately 25% O2.",
      },
    ],
  },
  {
    slug: "how-to-choose-an-icu-ventilator",
    title: "How to Choose an ICU Ventilator: Key Clinical Modes & Procurement Checklist",
    seoTitle: "How to Choose an ICU Ventilator: Clinical Modes & Evaluation Guide | Panakeia",
    metaDescription: "A clinical guide on evaluating ICU ventilators for intensive care units. Compare invasive vs non-invasive modes, turbine reliability, lung mechanics, and battery life.",
    publishedAt: "2026-08-20",
    updatedAt: "2026-09-22",
    readTime: "8 min read",
    category: "Critical Care & ICU",
    targetKeyword: "how to choose an ICU ventilator",
    relatedCategorySlug: "ventilators",
    relatedProductSlugs: [
      "icu-critical-care-ventilator",
      "anaevent-anaesthesia-ventilator",
    ],
    summary:
      "Procuring ventilators for an Intensive Care Unit requires balancing clinical versatility, gas source autonomy, lung-protective ventilation mechanics, and long-term serviceability. This guide outlines the essential clinical modes, drive mechanics, and evaluation parameters biomedical teams and intensivists must verify before commissioning critical care ventilators.",
    sections: [
      {
        heading: "1. Drive Mechanics: Turbine-Driven vs Compressor vs High-Pressure Pipeline",
        body: "One of the most consequential architectural choices in ICU ventilator selection is the gas drive mechanism. Traditional ventilators require uninterrupted high-pressure wall gas supplies for both Medical Air and Oxygen (280–600 kPa). During hospital gas line fluctuations or in disaster response environments, this requirement can limit deployment. Modern advanced ICU ventilators, such as the Panakeia ICU Critical Care Ventilator, incorporate internal high-performance medical blowers or turbine drive systems that generate clinical inspiratory pressures up to 100 cmH2O independently from ambient room air, requiring only standard low-pressure or pipeline oxygen.",
        bulletPoints: [
          "Turbine-Driven Autonomy: Operates independently of hospital compressed air systems, ensuring mobility across step-down units and intra-hospital transport.",
          "Peak Flow Delivery: High-response turbines can deliver peak inspiratory flows exceeding 200 L/min, vital for dyspneic ARDS patients.",
          "Low-Pressure Oxygen Compatibility: Capable of blending oxygen from low-pressure concentrators as well as centralized medical gas pipelines.",
        ],
      },
      {
        heading: "2. Essential Clinical Modes: From Full Support to Weaning",
        body: "An ICU ventilator must accommodate patients across the entire spectrum of acute respiratory distress—from complete neuromuscular blockade to spontaneous breathing trials. The core ventilation portfolio must include Volume-Controlled Ventilation (VCV), Pressure-Controlled Ventilation (PCV), Synchronized Intermittent Mandatory Ventilation (SIMV with Volume and Pressure targets), Continuous Positive Airway Pressure with Pressure Support (CPAP/PSV), and dual-mode automated regulation such as Pressure Regulated Volume Control (PRVC). Non-Invasive Ventilation (NIV) with dynamic leak compensation is equally indispensable to avert intubation in COPD exacerbations.",
        bulletPoints: [
          "Mandatory Modes: VCV, PCV, PRVC for precise tidal volume delivery with pressure deceleration.",
          "Spontaneous & Weaning Modes: PSV/CPAP, DuoLevel/Bi-vent, and automated Apnea backup ventilation.",
          "Non-Invasive (NIV): High-level baseline leak compensation (up to 60 L/min) to prevent nuisance triggering.",
        ],
      },
      {
        heading: "3. Diagnostic Lung Mechanics & Safety Alarms",
        body: "Intensivists rely on real-time respiratory mechanics to titrate lung-protective ventilation and avert Ventilator-Induced Lung Injury (VILI). Critical parameters include static and dynamic compliance (Cstat, Cdyn), airway resistance (Rins, Rexp), intrinsic PEEP (Auto-PEEP), and rapid shallow breathing index (RSBI). The user interface must present high-resolution pressure-time, flow-time, and volume-time waveforms with simultaneous P-V and F-V loop superimposition to detect patient-ventilator dyssynchrony.",
        bulletPoints: [
          "Comprehensive Diagnostic Tools: Static compliance, airway resistance, negative inspiratory force (NIF), and P0.1 measurement.",
          "Audio-Visual Alarm Systems: 360-degree top visual alarm bar with configurable high/low pressure, apnea, disconnect, and power fault alerts.",
          "Battery Autonomy: Minimum 3–4 hours of continuous hot-swappable internal lithium-ion runtime to safeguard against power interruptions.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is PRVC and why is it important in ICU ventilation?",
        answer: "Pressure-Regulated Volume Control (PRVC) combines the safety of volume control with the lung-protective benefits of pressure control. The ventilator delivers a preset target tidal volume using the lowest possible inspiratory pressure, adjusting pressure breath-by-breath based on patient lung mechanics.",
      },
      {
        question: "How important is leak compensation in non-invasive ventilation (NIV)?",
        answer: "Dynamic leak compensation is critical in NIV. Without it, mask leaks cause auto-triggering or failure to cycle into exhalation, leading to patient-ventilator asynchrony and discomfort that can cause NIV failure.",
      },
    ],
  },
  {
    slug: "operation-theatre-setup-checklist",
    title: "Operation Theatre Setup Checklist: Essential Anaesthesia, Monitoring & Life Support Equipment",
    seoTitle: "Operation Theatre Setup Checklist: Essential OT Equipment | Panakeia",
    metaDescription: "A comprehensive checklist for hospital operation theatre setups in India. Essential anaesthesia workstations, patient monitors, resuscitation kits, and pumps.",
    publishedAt: "2026-08-25",
    updatedAt: "2026-09-25",
    readTime: "9 min read",
    category: "Hospital Procurement & OT Planning",
    targetKeyword: "operation theatre equipment checklist",
    relatedCategorySlug: "anaesthesia-machines",
    relatedProductSlugs: [
      "three-gas-system-advanced-anaesthesia-workstation",
      "multi-para-patient-monitor",
      "emergency-resuscitation-kit",
      "syringe-infusion-pump",
      "hd-video-laryngoscope-system",
    ],
    summary:
      "Commissioning a modern surgical operating suite requires precise coordination of medical gas distribution, precision volatile delivery workstations, multi-parameter vital signs telemetry, emergency airway carts, and micro-infusion drug delivery towers. This guide presents an essential equipment checklist grounded in Indian hospital standards and clinical safety protocols.",
    sections: [
      {
        heading: "1. Primary Anaesthesia Delivery & Gas Scavenging Station",
        body: "The core of the surgical suite is the anaesthesia workstation. Modern OT engineering standards mandate a workstation equipped with dual or triple medical gas inputs (O2, N2O, Medical Air), pin-index safety cylinder yokes, cascade flowmeters with anti-hypoxic guards, integrated mechanical or electronic ventilators, and dual Selectatec-compatible tool-free vaporizer manifolds with interlock bars. Equally critical is an Active Anaesthetic Gas Scavenging System (AGSS) to capture exhaled nitrous oxide and halogenated volatile agents, ensuring OT staff are not exposed to hazardous occupational gas levels.",
        bulletPoints: [
          "Anaesthesia Delivery System: Three-Gas or Two-Gas workstation with minimum 2-hour battery backup.",
          "Vaporizer Station: Tool-free Selectatec manifold supporting Isoflurane and Sevoflurane vaporizers.",
          "Breathing Circuit Assembly: Heated breathing circuit with quick-release autoclavable 1.5L+ CO2 absorber canister.",
          "Active Gas Scavenging: Dedicated AGSS receiver and transfer tubing vented to hospital exhaust.",
        ],
      },
      {
        heading: "2. Physiological Monitoring & Diagnostic ECG",
        body: "Continuous multi-parameter monitoring is legally and clinically non-negotiable for every general and regional anaesthetic procedure. The OT monitoring console must deliver continuous real-time waveforms for 5-lead ECG with automated ST-segment and arrhythmia detection, motion-tolerant SpO2 with perfusion index, non-invasive blood pressure (NIBP) with overpressure dump valves, and dual-channel core temperature telemetry. For complex cases, dual invasive blood pressure (IBP) and sidestream/mainstream End-Tidal CO2 (EtCO2) capnography must be integrated directly into the display.",
        bulletPoints: [
          "Multi-Parameter Monitor: 12.1-inch or larger anti-glare touchscreen mounted on the workstation swivel arm.",
          "Standard Parameters: ECG (arrhythmia analysis), SpO2 (anti-motion), NIBP, 2-Channel Temp, Respiration.",
          "High-Acuity Options: Dual IBP channels for arterial line monitoring and Microstream EtCO2 for capnography.",
          "Diagnostic ECG: Dedicated 12-channel diagnostic ECG machine with thermal array recorder on standby for preoperative cardiac clearance.",
        ],
      },
      {
        heading: "3. Airway Management & Emergency Resuscitation (Code Blue)",
        body: "Difficult airway emergencies require immediate, organized response tools. Every operating room suite must have an instantly accessible emergency airway cart and portable resuscitation kit. Essential components include medical-grade autoclavable silicone manual resuscitators (both adult and paediatric volumes), multiple Macintosh and Miller laryngoscope blades, and an HD digital video laryngoscope with anti-fog optical CMOS technology to visualize the glottis during challenging intubations.",
        bulletPoints: [
          "Emergency Resuscitation Kit: IP67 hard case containing adult/paediatric silicone resuscitators, Guedel airways, stylets, and manual suction.",
          "Video Laryngoscope: HD color screen, anti-fog camera, and hyper-curved D-blades for Cormack-Lehane Grade III/IV airways.",
          "Suction Systems: Dual medical pipeline vacuum regulators and auxiliary mobile electric suction pumps.",
        ],
      },
      {
        heading: "4. Precision Intravenous Drug Delivery Towers",
        body: "Maintaining Total Intravenous Anaesthesia (TIVA), administering muscle relaxants, and delivering vasoactive inotropic infusions require micro-rate accuracy. Operation theatres should be equipped with stackable syringe and volumetric infusion pumps featuring dynamic occlusion sensing, anti-bolus pressure relief, and comprehensive drug libraries with dosing limits to prevent accidental medication errors.",
        bulletPoints: [
          "Syringe Infusion Pumps: Micro-flow calibration from 0.01 mL/h to 1500 mL/h with auto-syringe size recognition.",
          "Volumetric Pumps: Dual IV infusion delivery for volume expansion, blood administration, and crystalloid management.",
          "Safety Features: Dynamic occlusion pressure monitoring with rapid automatic pressure release to eliminate bolus risk.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the recommended number of syringe pumps per OT suite?",
        answer: "For general surgical suites, 2 to 3 dedicated syringe pumps per theatre are standard to deliver muscle relaxants, analgesics, and inotropic infusions simultaneously. For cardiac and neurosurgical suites, 4 to 6 stackable units per theatre are standard.",
      },
      {
        question: "Why is an active AGSS system necessary in addition to OT laminar flow?",
        answer: "Laminar airflow circulates sterile air downward over the surgical site to minimize infection, but it does not remove heavy halogenated anaesthetic gases or nitrous oxide from the room. An active AGSS connects directly to the anaesthesia machine's exhaust valve to pump waste gas safely outside the hospital building.",
      },
    ],
  },
];

export function getResourceArticles(): ResourceArticle[] {
  return RESOURCE_ARTICLES;
}

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return RESOURCE_ARTICLES.find((a) => a.slug === slug);
}
