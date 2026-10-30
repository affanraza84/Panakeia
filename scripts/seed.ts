import mongoose from "mongoose";
import { Product } from "../src/models/Product";
import { Client } from "../src/models/Client";
import { Certification } from "../src/models/Certification";
import { IProduct, IClient, ICertification } from "../src/types";

const seedProducts: Omit<IProduct, "_id" | "createdAt" | "updatedAt">[] = [
  {
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
      "Battery as per standard 3.5 hrs (hot-swappable internal lithium-ion battery backup with dual battery bay)",
    ],
    specs: [
      { label: "Gas Inputs", value: "3 Gases: O2, N2O, Medical Air (280 - 600 kPa)" },
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV-V, SIMV-P, PSV, PRVC, Manual" },
      { label: "Tidal Volume Range", value: "10 mL to 1,600 mL (Adult & Paediatric)" },
      { label: "Absorber Capacity", value: "1.8 Liters dual-chamber with quick-release bypass" },
      { label: "Display", value: "12.1\" Color TFT anti-glare capacitive touchscreen" },
      { label: "Battery Autonomy", value: "Battery as per standard 3.5 hrs (under full mechanical ventilation)" },
      { label: "Manufacturing Standard", value: "ISO 80601-2-13, IEC 60601-1, CDSCO Compliant" },
    ],
    images: [
      "/image/three-gas-system-advanced-anaesthesia-workstation.jpeg",
    ],
    brochurePdfUrl: "/pdfs/anaesthesia-workstation.pdf",
    order: 1,
    published: true,
  },
  {
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
      "Battery as per standard 3.5 hrs with rapid smart recharge circuit",
    ],
    specs: [
      { label: "Gas Inputs", value: "2 Gases: O2 & N2O with Pin-Index Yokes" },
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV, Manual, Spontaneous" },
      { label: "Tidal Volume Range", value: "20 mL to 1,500 mL" },
      { label: "Safety System", value: "Mechanical Hypoxic Guard (maintains ≥25% O2)" },
      { label: "CO2 Absorber", value: "1.5L Autoclavable Quick-Release Canister" },
      { label: "Battery Life", value: "Battery as per standard 3.5 hrs continuous run time" },
      { label: "Dimensions & Weight", value: "1350mm (H) x 700mm (W) x 650mm (D), 85 kg" },
    ],
    images: [
      "/image/two-gas-system-basic-anaesthesia-workstation.jpeg",
    ],
    brochurePdfUrl: "/pdfs/anaesthesia-workstation.pdf",
    order: 2,
    published: true,
  },
  {
    slug: "basic-premium-anaesthesia-machine",
    name: "Basic Premium Anaesthesia Workstation",
    category: "anaesthesia",
    tagline: "Ruggedized Ergonomic Anaesthesia Delivery Workstation with Modular Monitor Mounting & Precision Vaporizers",
    description:
      "A versatile, heavy-duty clinical anaesthesia workstation designed for seamless reliability across general surgical theaters. Equipped with a robust stainless-steel chassis, high-precision dual flowmeter cascade, integrated drawer storage, and multi-parameter vital signs monitor mounting arm.",
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
      "/image/basic-premium-anaesthesia-machine.jpeg",
    ],
    brochurePdfUrl: "/pdfs/premium-anaesthesia-machine.pdf",
    order: 3,
    published: true,
  },
  {
    slug: "icu-critical-care-ventilator",
    name: "Advanced ICU Critical Care Ventilator",
    category: "ventilator",
    tagline: "Turbine-Driven Multi-Functional Intensive Care Ventilator for Adult & Paediatric Life Support",
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
      { label: "Patient Group", value: "Adult & Paediatric" },
      { label: "Tidal Volume", value: "10 mL to 2,000 mL" },
      { label: "Peak Flow", value: "Up to 240 L/min (high-speed turbine response)" },
      { label: "PEEP / CPAP", value: "0 to 50 cmH2O electronic precision valve" },
      { label: "FiO2 Range", value: "21% to 100% titration" },
      { label: "Display", value: "15.6\" Full HD multi-touch color screen" },
      { label: "Battery Run Time", value: "4+ Hours hot-swappable dual lithium battery pack" },
    ],
    images: [
      "/image/icu-ventilator.jpeg",
    ],
    brochurePdfUrl: "/pdfs/icu-ventilator.pdf",
    order: 4,
    published: true,
  },
  {
    slug: "savel-electro-portable-ventilator",
    name: "SAVEL ELECTRO Portable Transport Ventilator",
    category: "ventilator",
    tagline: "Microprocessor-Controlled Emergency & Transport Ventilator with 7-Inch Touchscreen & Up to 6-Hour Battery Backup",
    description:
      "Indigenously developed at Panakeia's AMTZ Visakhapatnam manufacturing facility, the SAVEL ELECTRO (SAVE Series) is a rugged, compact portable ventilator engineered for emergency ambulances, trauma resuscitation, military & field hospitals, and inter-hospital transport. Features microprocessor electronic flow generation, comprehensive volume and pressure modes, electronic FiO2 mixing (21%-100%), real-time waveform display, and up to 6 hours of continuous rechargeable battery backup.",
    features: [
      "7-inch High-Resolution Color TFT Touchscreen interface with real-time pressure, flow, and volume curves",
      "Versatile multi-mode ventilation: CMV/AV (VC), CMV/AV (PC), SIMV (VC), SIMV (PC), CPAP, PSV, and optional NIV",
      "Electronic FiO2 controller delivering precise oxygen concentration titration from 21% to 100%",
      "Comprehensive patient monitoring: Tidal Volume, Peak Inspiratory Pressure (PIP), PEEP, Rate, FiO2, Expiratory Time, I:E Ratio",
      "High-performance flow generator delivering inspiratory flow up to 120 L/min and PIP up to 60 cmH2O",
      "Built-in programmable apnea backup ventilation and automatic panel lock safety feature",
      "Compact and rugged lightweight chassis (approx. 5.5 kg) engineered for harsh field and transport conditions",
      "High-capacity Li-ion rechargeable battery delivering up to 6 hours of continuous field life support",
    ],
    specs: [
      { label: "Source Operating Pressure", value: "40 to 60 PSI (Oxygen at 3 to 4 bar + external/internal air)" },
      { label: "Functional Type", value: "Microprocessor-driven flow generator ventilator" },
      { label: "Ventilation Modes", value: "CMV/AV (VC), CMV/AV (PC), SIMV (VC), SIMV (PC), CPAP, PSV, NIV (Optional)" },
      { label: "Tidal Volume Range", value: "50 mL to 1500 mL (Adult & Paediatric)" },
      { label: "Respiratory Rate", value: "5 to 40 BPM (Inspiratory Time: 0.3 to 5.0 sec)" },
      { label: "Oxygen Concentration", value: "21% to 100% electronically controlled" },
      { label: "Inspiratory Flow & Pressure", value: "Flow: up to 120 L/min | PIP: 10 to 60 cmH2O" },
      { label: "PEEP / CPAP", value: "0 to 20 cmH2O (Trigger Sensitivity: 0 to -10 cmH2O below CPAP)" },
      { label: "Pressure Support", value: "0 to 40 cmH2O" },
      { label: "Display Size", value: "7-Inch Color TFT Touchscreen with live curves" },
      { label: "Battery Backup", value: "Rechargeable Lithium-Ion (up to 6 hours continuous field autonomy)" },
      { label: "Dimensions & Weight", value: "220 (H) x 280 (W) x 200 (D) mm, Approx. 5.5 kg" },
      { label: "Applications", value: "Ambulance, Emergency Trauma, Field Hospitals, Intra-Hospital Transport" },
      { label: "Certifications", value: "ISO 9001:2015, ISO 13485:2016, CE & CDSCO Certified" },
    ],
    images: [
      "/image/savel-electro-portable-ventilator.jpeg",
    ],
    brochurePdfUrl: "/pdfs/portable-ventilator-savel.pdf",
    order: 5,
    published: true,
  },
  {
    slug: "anaevent-anaesthesia-ventilator",
    name: "ANAEVENT Ascending Bellows Anaesthesia Ventilator",
    category: "ventilator",
    tagline: "Versatile Ascending Bellows Anaesthesia Ventilator with 7-Inch Touchscreen for Operation Theatres",
    description:
      "The Panakeia ANAEVENT is a versatile, microprocessor-based, electronically controlled and pneumatically driven ascending bellows ventilator specifically designed for operation theatres. Calibrated for both low and high flow anaesthetic applications, it supports IPPV, Manual, PCV, PSV, and SIMV modes for adult and pediatric patients with clear calibrated bellows (300 to 1200 mL), real-time pressure-time graph telemetry, and universal compatibility with any anaesthesia machine frame.",
    features: [
      "7-inch Color Touchscreen Display with real-time Peak Pressure & Pressure-Time waveforms",
      "Clear ascending silicone bellows lung cylinder calibrated up to 1200 mL with high accuracy calibration",
      "Electronically controlled pneumatic drive (Oxygen or Air at 60 PSI) for both low and high flow anaesthesia",
      "Ventilation modes: IPPV, Manual, Standby, with optional PCV, PSV, and SIMV modes",
      "Compatible with all breathing circuits: Open circuit, Closed circuit circle absorber, and Bain's circuit",
      "Automatic panel lock and comprehensive safety alarms (Apnea, High/Low Pressure, Power Failure)",
      "Battery as per standard 3.5 hrs (hot-swappable internal rechargeable battery delivering continuous surgical ventilation backup)",
      "Compact ergonomic chassis (280x280x150 mm, 5 kg) suitable for top-shelf workstation mounting or trolley attachment",
    ],
    specs: [
      { label: "Operating Drive Pressure", value: "60 PSI (Pneumatically driven by Oxygen or Air)" },
      { label: "Ventilation Modes", value: "IPPV, Manual, Standby (Optional: PCV, PSV & SIMV)" },
      { label: "Tidal Volume Range", value: "50 mL to 1200 mL (Bellows graduated 300 to 1200 mL)" },
      { label: "Respiratory Frequency", value: "0 to 80 BPM" },
      { label: "Inspiratory Time & I:E Ratio", value: "Insp. Time: 0 to 5.0s | I:E Ratio: Programmable" },
      { label: "PIP Limit", value: "10 to 60 cmH2O with Pressure-Time monitoring" },
      { label: "Display", value: "7\" Color Touchscreen with live curves" },
      { label: "Battery Autonomy", value: "Battery as per standard 3.5 hrs continuous runtime" },
      { label: "Dimensions & Weight", value: "280 x 280 x 150 mm | 5 kg" },
      { label: "Compatibility", value: "Universal compatibility with any standard Anaesthesia Workstation" },
      { label: "Certifications", value: "ISO 9001:2015, ISO 13485:2016, CE & CDSCO Certified" },
    ],
    images: [
      "/image/anaevent-anaesthesia-ventilator.jpeg",
      "/image/anaevent-anaesthesia-ventilator-2.jpeg",
    ],
    brochurePdfUrl: "/pdfs/anaevent-anaesthesia-ventilator.pdf",
    order: 6,
    published: true,
  },
  {
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
      "/image/multi-para-monitor-1.jpeg",
      "/image/multi-para-monitor-2.jpeg",
      "/image/multi-para-monitor-3.jpeg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 7,
    published: true,
  },
  {
    slug: "12-channel-diagnostic-ecg-machine",
    name: "12-Channel Diagnostic ECG Machine",
    category: "monitoring",
    tagline: "Indigenously Engineered 12-Lead Diagnostic ECG Workstation with High-Resolution Color Display & Automated Waveform Analysis",
    description:
      "Indigenously engineered for diagnostic accuracy in high-acuity cardiology units, emergency departments, and intensive care clinics. Featuring simultaneous 12-lead acquisition, high-fidelity digital filtering, real-time waveform preview, built-in thermal array printing, and comprehensive arrhythmia detection.",
    features: [
      "Simultaneous 12-lead acquisition with advanced anti-baseline drift and digital noise filtration",
      "High-resolution color TFT display with live 12-channel waveform preview",
      "Automated ECG interpretation algorithm with real-time arrhythmia detection and interval measurements (PR, QRS, QT/QTc)",
      "Built-in high-resolution thermal array recorder with multiple printout formats",
      "Comprehensive internal patient record storage with USB data export",
      "High-capacity internal rechargeable lithium-ion battery supporting up to 4+ hours of continuous operation",
    ],
    specs: [
      { label: "Lead Acquisition", value: "Simultaneous 12-Lead Standard Acquisition" },
      { label: "Input Circuit", value: "Defibrillation-proof floating input protection" },
      { label: "Display", value: "7\" High-Resolution Color TFT Display" },
      { label: "Sampling Rate", value: "High-Frequency 1000 Hz Digital Sampling" },
      { label: "Filter System", value: "AC, EMG, DFT Baseline Wander & Low-Pass Filters" },
      { label: "Recorder", value: "High-Resolution Built-in Thermal Array Printer" },
      { label: "Battery Autonomy", value: "4+ Hours Continuous Recording Backup" },
    ],
    images: [
      "/image/ecg-machine.jpeg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 8,
    published: true,
  },
  {
    slug: "pan-flow-syringe-pump",
    name: "High-Precision Syringe Pump",
    category: "infusion",
    tagline: "Micro-Infusion Syringe Pump with Automatic Syringe Size Calibration & Dynamic Anti-Bolus Occlusion Guard",
    description:
      "Indigenously engineered for neonatal ICUs, surgical anaesthesia delivery, and critical care medication protocols. Features high-resolution stepper motor drive control for ultra-precise micro-infusion down to 0.01 mL/h, automatic syringe size recognition from 2mL to 60mL, 12-level dynamic pressure sensing with automatic anti-bolus pressure relief, and an integrated comprehensive drug library.",
    features: [
      "Micro-step motor driving mechanism delivering accurate flow rates from 0.01 mL/h to 1500.00 mL/h",
      "Automatic syringe brand and size recognition for standard 2mL, 5mL, 10mL, 20mL, 30mL, and 50/60mL syringes",
      "Integrated Comprehensive Drug Library with customizable concentration limits and dose-rate calculation",
      "Dynamic Occlusion Pressure Detection with 12 selectable sensitivity thresholds and automatic anti-bolus pressure relief",
      "Multiple infusion modes: Rate Mode, Time Mode, Body Weight Mode, and Programmable Bolus Mode",
      "Clear, high-contrast digital display with real-time telemetry and 360-degree top visual alarm bar",
      "High-capacity rechargeable lithium-ion battery delivering 6+ hours of uninterrupted operation",
    ],
    specs: [
      { label: "Flow Rate Range", value: "0.01 to 1500.00 mL/h (Increment: 0.01 mL/h)" },
      { label: "Infusion Accuracy", value: "±2% (Mechanical driving accuracy: ±1%)" },
      { label: "Compatible Syringes", value: "2mL, 5mL, 10mL, 20mL, 30mL, 50/60mL standard syringes" },
      { label: "Infusion Modes", value: "Flow Rate, Time, Body-Weight Dose, Bolus Delivery" },
      { label: "Bolus Rate", value: "100 to 1500 mL/h (Automatic / Manual Bolus)" },
      { label: "Occlusion Detection", value: "12-Level Dynamic Pressure Sensor with Anti-Bolus Relief" },
      { label: "Battery Autonomy", value: "6+ Hours continuous runtime @ 25 mL/h" },
      { label: "Standards", value: "ISO 13485:2016, IEC 60601-1, CDSCO Certified" },
    ],
    images: [
      "/image/pan-flow-syringe-pump.jpeg",
      "/image/syringe-pump.jpeg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 9,
    published: true,
  },
  {
    slug: "volumetric-infusion-pump",
    name: "Volumetric Infusion Pump",
    category: "infusion",
    tagline: "High-Accuracy Volumetric IV Infusion Platform with Ultrasonic Air-in-Line Detection & Multi-Drip Rate Control",
    description:
      "An indigenously developed smart volumetric IV infusion pump engineered for continuous intravenous fluid and medication administration across intensive care wards, oncology units, and postoperative recovery suites. Built with high-precision peristaltic driving fingers, dual ultrasonic air bubble detection, anti-free-flow clamp mechanism, and real-time pressure monitoring.",
    features: [
      "Peristaltic micro-pump delivery mechanism supporting flow rates from 0.1 mL/h to 2000.00 mL/h",
      "High precision delivery (±3%) compatible with standard universal and dedicated IV infusion sets",
      "Dual ultrasonic air-in-line sensor detecting single bubbles down to 25 microliters and cumulative air accumulation",
      "Automated anti-free-flow safety clamp mechanism preventing accidental gravity fluid run when door is opened",
      "12-Level dynamic upstream and downstream occlusion pressure monitoring with rapid audio-visual alerts",
      "Comprehensive drug library with programmable safe dosing boundaries and VTBI (Volume to be Infused) tracker",
      "Rechargeable internal lithium battery providing 6+ hours of continuous mobile infusion",
    ],
    specs: [
      { label: "Flow Rate Range", value: "0.1 to 2000.00 mL/h (Micro-adjustment: 0.1 mL/h)" },
      { label: "Infusion Accuracy", value: "±3% with calibrated standard IV tubing" },
      { label: "Delivery Modes", value: "Rate Mode, Time Mode, Drip Rate Mode, Weight Mode" },
      { label: "Air Bubble Detection", value: "Dual Ultrasonic Sensor (Sensitivity: 25 μL to 800 μL)" },
      { label: "Occlusion Pressure", value: "12 Levels adjustable (Upstream & Downstream)" },
      { label: "KVO (Keep Vein Open)", value: "0.1 to 5.0 mL/h adjustable" },
      { label: "Battery Autonomy", value: "6+ Hours continuous runtime @ 25 mL/h" },
      { label: "Standards Compliance", value: "IEC 60601-2-24, ISO 13485:2016, CDSCO Compliant" },
    ],
    images: [
      "/image/volumetric-infusion-pump.jpeg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 10,
    published: true,
  },
  {
    slug: "syringe-infusion-pump",
    name: "Syringe & Volumetric Infusion Pump Workstation",
    category: "infusion",
    tagline: "High-Precision Micro-Infusion & Syringe Delivery System with Comprehensive Drug Library and Anti-Bolus Safety",
    description:
      "An indigenously developed smart dual-channel infusion and syringe pump platform engineered for critical care, postoperative care, oncology, and anaesthesia delivery. Featuring ultra-precise stepper motor drive mechanics, automatic syringe size detection (2ml to 60ml), real-time dynamic pressure monitoring, and programmable dose-rate calculators for fail-safe intravenous medication administration.",
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
      "/image/syringe-infusion-pump.jpeg",
      "/image/pan-flow-syringe-pump.jpeg",
      "/image/volumetric-infusion-pump.jpeg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 11,
    published: true,
  },
  {
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
      "/image/Emergency-Resuscitation-&-Airway-Kit2.jpeg",
      "/image/Emergency-Resuscitation-&-Airway-Kit.jpeg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 12,
    published: true,
  },
  {
    slug: "hd-video-laryngoscope-system",
    name: "HD Digital Video Laryngoscope System",
    category: "emergency",
    tagline: "High-Definition Portable Airway Visualization Platform with Anti-Fog Camera and Ergonomic Interchangeable Blades",
    description:
      "Indigenously engineered for difficult airway management and rapid tracheal intubation across Emergency Departments, ICUs, and Operation Theatres. Features a high-definition anti-glare color display, ultra-bright medical LED illumination, real-time image and video capture telemetry, anti-fog optical lens technology, and reusable clinical titanium/stainless steel blades.",
    features: [
      "High-Definition anti-glare medical-grade color monitor with 180° rotation and tilt adjustability",
      "Instant anti-fog optical CMOS sensor delivering high-contrast visualization of the vocal cords and glottis",
      "One-touch real-time photo recording and HD video telemetry for clinical documentation and teaching",
      "Ergonomic rechargeable handle with 4+ hours continuous operation and fast USB charging",
      "Interchangeable blade series: Macintosh, Miller, and hyper-curved difficult airway blades (Adult, Paediatric, Infant)",
      "High-grade waterproof IPX8 immersible blade construction for standard autoclaving and chemical sterilization",
    ],
    specs: [
      { label: "Display Resolution", value: "HD Color TFT Monitor (1024 x 768 px) with Anti-Glare Coating" },
      { label: "Camera Sensor", value: "2.0 Megapixel CMOS Anti-Fog Optical Lens" },
      { label: "Illumination", value: "High-Luminance Medical Cold LED (≥800 Lux)" },
      { label: "Angle of View", value: "66° Wide-Angle Clinical Field of View" },
      { label: "Blade Compatibility", value: "Macintosh 1, 2, 3, 4 & Difficult Airway Hyper-Curved D-Blade" },
      { label: "Battery Autonomy", value: "4+ Hours Continuous Runtime with Rechargeable Lithium Battery" },
      { label: "Sterilization", value: "IPX8 Autoclavable Blades & Gas Sterilization Safe" },
    ],
    images: [
      "/image/video-laryngoscope.jpg",
      "/image/video-laryngoscope-blades-set.jpeg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 13,
    published: true,
  },
  {
    slug: "breathing-circuit",
    name: "Breathing Circuit",
    category: "accessories",
    tagline: "Autoclavable Medical-Grade Corrugated Breathing Circuit for ICU Ventilators & Anaesthesia Workstations",
    description:
      "Autoclavable medical-grade corrugated circuit providing low compliance and leak-free ventilation delivery across mechanical ventilators and anaesthesia workstations. Constructed with platinum-cured silicone tubing, reinforced corrugated ribs, dual transparent water traps, and standard 22mm/15mm conical connectors.",
    features: [
      "Autoclavable platinum-cured silicone with reinforced corrugated ribs",
      "Universal 22mm / 15mm ISO 5356-1 standard gas-tight conical connectors",
      "Integrated dual water-traps preventing condensation buildup in ventilator loops",
      "High-efficiency electrostatic bacterial-viral HME filter compatibility",
      "Compatible with low-flow and high-flow anaesthesia and ICU ventilators",
    ],
    specs: [
      { label: "Material Composition", value: "Platinum-Cured Medical Silicone & Polypropylene" },
      { label: "Standard Connection", value: "22mm OD / 15mm ID ISO 5356-1 Conical" },
      { label: "Autoclave Tolerance", value: "Steam Autoclavable at 134°C (>50 Cycles)" },
      { label: "Loop Resistance", value: "<0.2 kPa at 60 L/min flow" },
      { label: "Compliance", value: "<1.0 mL/kPa per meter tubing" },
      { label: "Compatibility", value: "All Standard ICU Ventilators & Anaesthesia Workstations" },
    ],
    images: [
      "/image/accessories/breathing-circuit.png",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 14,
    published: true,
  },
  {
    slug: "bains-circuit",
    name: "Bains Circuit",
    category: "accessories",
    tagline: "Coaxial Mapleson D Breathing System with Precision APL Valve and Natural Gas Warming",
    description:
      "Coaxial Mapleson D breathing system featuring inner fresh-gas line and outer corrugated reservoir for low-resistance spontaneous and controlled patient ventilation. Designed for daycare surgery and operating theatres with low apparatus dead space and precise scavenging compatibility.",
    features: [
      "Coaxial tube-within-a-tube design providing natural inspired gas warming",
      "Integrated precision adjustable pressure-limiting (APL) safety valve",
      "2.0-Liter antistatic latex-free reservoir breathing bag with standard bushing",
      "Instant manual to spontaneous transition control for daycare and high-throughput OTs",
      "Standard 22mm machine-end connector with transparent outer limb for visual monitoring",
    ],
    specs: [
      { label: "Circuit Classification", value: "Mapleson D Coaxial Breathing System" },
      { label: "Reservoir Bag", value: "2.0 Litre Latex-Free Antistatic Neoprene" },
      { label: "APL Valve Range", value: "0 to 60 cmH2O with Quick-Release Dump" },
      { label: "Fresh Gas Tube", value: "Inner Transparent Kink-Resistant Micro-Bore Tube" },
      { label: "Connectors", value: "Standard 22mm / 15mm ISO 5356-1" },
    ],
    images: [
      "/image/accessories/bains-circuit.png",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 15,
    published: true,
  },
  {
    slug: "jackson-rees-circuit",
    name: "Jackson-Rees Circuit",
    category: "accessories",
    tagline: "Mapleson F Pediatric Breathing Circuit with Open Reservoir Tail-Bleed Valve for Infant Airway Care",
    description:
      "Specialized Mapleson F pediatric breathing circuit with tail-bleed open reservoir bag delivering ultra-low dead space and immediate respiratory response. Specially calibrated for infants, neonates, and pediatric surgical patients requiring sensitive tactile ventilation feedback.",
    features: [
      "Specially engineered for pediatric, infant, and neonatal critical airway management",
      "Ultra-lightweight corrugated limb minimizing traction on endotracheal tubes",
      "Tail-valve bleed port providing direct tactile feedback of spontaneous breathing",
      "Minimal mechanical dead space ensuring accurate tidal gas exchange",
      "Autoclavable silicone construction with pediatric 0.5L / 1.0L reservoir bags",
    ],
    specs: [
      { label: "Circuit Classification", value: "Mapleson F (Jackson-Rees Modification)" },
      { label: "Reservoir Bag", value: "0.5 L / 1.0 L Open Tail-Bleed Latex-Free Silicone" },
      { label: "Dead Space", value: "<5 mL at Patient Y-Piece" },
      { label: "Patient Connection", value: "15 mm ID Lightweight Swivel Connector" },
      { label: "Application", value: "Neonatal & Paediatric Surgery / Transport" },
    ],
    images: [
      "/image/accessories/jackson-rees-circuit.jpg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 16,
    published: true,
  },
  {
    slug: "laryngoscope",
    name: "Laryngoscope",
    category: "accessories",
    tagline: "Surgical-Grade Stainless Steel LED Laryngoscope Set with Macintosh & Miller Blades",
    description:
      "Surgical-grade stainless steel laryngoscope set with interchangeable Macintosh and Miller cold LED fiber-optic blades. Engineered with anti-glare satin finish, IPX8 waterproof sealing, and high-intensity cold white illumination for clear vocal cord exposure in routine and emergency intubations.",
    features: [
      "Medical 316L surgical stainless steel blades with anti-glare satin finish (Sizes 1-4)",
      "High-intensity cold white medical LED illumination delivering ≥800 Lux brightness",
      "Ergonomic knurled anti-slip handle with fast-twist battery access bay",
      "Autoclavable and high-level chemical disinfection compatible (IPX8 rated)",
      "Gold-plated electrical contacts ensuring instantaneous flicker-free light transmission",
    ],
    specs: [
      { label: "Blade Profiles", value: "Macintosh (Sizes 1, 2, 3, 4) & Miller (Sizes 0, 1, 2, 3)" },
      { label: "Illumination Source", value: "Cold White LED / Fiber-Optic Core (≥800 Lux)" },
      { label: "Material", value: "AISI 316L Medical-Grade Surgical Stainless Steel" },
      { label: "Handle Type", value: "Ergonomic Knurled Grip Standard 'C' Size / Slim Handle" },
      { label: "Sterilization", value: "Steam Autoclavable at 134°C, EtO Gas, Cidex Safe" },
    ],
    images: [
      "/image/accessories/laryngoscope.jpg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 17,
    published: true,
  },
  {
    slug: "video-laryngoscope",
    name: "Video Laryngoscope",
    category: "accessories",
    tagline: "High-Definition Digital Airway Visualization Platform with Anti-Fog CMOS Sensor & Tilting Color Screen",
    description:
      "High-definition digital video airway visualization platform with anti-fog CMOS micro-camera and rotating color monitor. Provides clear glottic exposure during emergency intubation, difficult airway scenarios, and ICU clinical training.",
    features: [
      "2.0 Megapixel anti-fog optical CMOS sensor for clear vocal cord exposure",
      "Multi-angle tilt and swivel high-resolution color TFT clinical monitor",
      "One-touch real-time photo recording and HD video telemetry for teaching",
      "Rechargeable ergonomic handle providing 4+ hours of continuous runtime",
      "Universal quick-lock blade mount compatible with adult and pediatric blades",
    ],
    specs: [
      { label: "Display", value: "3.5-inch High-Resolution Color TFT LCD (Multi-Angle Tilt)" },
      { label: "Camera Resolution", value: "2.0 MP CMOS Anti-Fog Optical Lens" },
      { label: "Battery Runtime", value: "≥4 Hours Continuous Operation (Rechargeable Li-Ion)" },
      { label: "Recording", value: "Integrated Photo & Video Telemetry Storage" },
      { label: "Blade Compatibility", value: "Macintosh, Miller & Difficult Airway D-Blade" },
    ],
    images: [
      "/image/accessories/video-laryngoscope.jpg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 18,
    published: true,
  },
  {
    slug: "bipap-tube",
    name: "Bipap Tube",
    category: "accessories",
    tagline: "Universal 22mm Smooth-Bore Flexible Tubing for BiPAP and CPAP Non-Invasive Positive Pressure Therapy",
    description:
      "Universal 22mm smooth-bore flexible tubing engineered for BiPAP and CPAP non-invasive positive pressure therapy. Features ultra-low airflow resistance, crush-resistant helical ribbing, and gas-tight medical silicone end cuffs for whisper-quiet and reliable pressure delivery.",
    features: [
      "Smooth internal bore reducing airflow turbulence and acoustic noise",
      "Soft medical silicone 22mm end cuffs forming gas-tight seal on all standard ports",
      "Crush-resistant helical outer ribbing preventing accidental occlusion",
      "Biocompatible latex-free clinical polymer suitable for continuous respiratory therapy",
      "Lightweight and flexible design preventing pull and dislodgement during sleep",
    ],
    specs: [
      { label: "Inner Diameter", value: "Standard 22 mm Smooth Internal Bore" },
      { label: "Length", value: "1.8 Meters (6 Feet) Standard Clinical Length" },
      { label: "End Cuffs", value: "Dual 22 mm ID Medical-Grade Silicone Soft Cuffs" },
      { label: "Therapy Range", value: "4 to 30 cmH2O BiPAP / CPAP Positive Pressure" },
      { label: "Material", value: "Biocompatible Non-Toxic Polyolefin / Silicone (Latex-Free)" },
    ],
    images: [
      "/image/accessories/bipap-tube.jpg",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 19,
    published: true,
  },
  {
    slug: "bipap-mask",
    name: "Bipap Mask",
    category: "accessories",
    tagline: "Ergonomic Full-Face Non-Invasive Ventilation Mask with Liquid Silicone Cushion & Swivel Elbow",
    description:
      "Ergonomic full-face non-invasive ventilation mask with dual-wall liquid silicone cushion and 360-degree swivel elbow. Delivers an airtight, non-pinching seal for acute and chronic BiPAP/NIV therapy with integrated oxygen ports and anti-asphyxia safety valve.",
    features: [
      "Dual-wall liquid silicone facial cushion auto-seals without bridge pressure",
      "360-degree double-swivel elbow connector with anti-asphyxia emergency valve",
      "Adjustable 4-point breathable headgear with quick-release magnetic/snap clips",
      "Dual built-in luer ports for oxygen enrichment and airway pressure monitoring",
      "Ultra-quiet diffuse exhalation vent directing exhausted air away from patient",
    ],
    specs: [
      { label: "Mask Type", value: "Full-Face Non-Invasive Ventilation (NIV) Mask" },
      { label: "Cushion Material", value: "100% Medical-Grade Liquid Silicone Rubber (LSR)" },
      { label: "Pressure Range", value: "3 to 40 cmH2O" },
      { label: "Safety Feature", value: "Built-In Anti-Asphyxia Valve (AAV)" },
      { label: "Headgear", value: "4-Point Breathable Neoprene-Free Adjustable Harness" },
    ],
    images: [
      "/image/accessories/bipap-mask.png",
    ],
    brochurePdfUrl: "/pdfs/panakeia-new-booklet.pdf",
    order: 20,
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
      "Panakeia's Aesthetica anaesthesia workstation demonstrated remarkable stability during high-risk cardiac and neuro cases. Having 100% in-house parts manufacturing by Panakeia itself ensures parts availability within hours rather than weeks.",
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
    doctorName: "Dr. P. V. Ramanathan, Chief Anaesthetist & OT Director",
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
    title: "Make in India MedTech Enterprise Recognition",
    issuedBy: "Government of India MedTech & Make in India Initiative",
    documentUrl: "/docs/make-in-india-recognition.pdf",
    status: "active",
    description:
      "Recognized indigenous medical technology manufacturing entity under Make in India initiative for advancing indigenous critical care OT & ICU equipment design.",
    order: 1,
  },
  {
    title: "CDSCO Medical Device Regulatory Compliance",
    issuedBy: "Central Drugs Standard Control Organization (CDSCO), Directorate General of Health Services",
    documentUrl: "/docs/cdsco-compliance.pdf",
    status: "active",
    description:
      "Adherence to CDSCO regulatory standards for examination, testing, and performance validation of Anaesthesia Workstations and Ventilators at our dedicated in-house manufacturing facility.",
    order: 2,
  },
  {
    title: "Medical Device Manufacturing Standards Compliance",
    issuedBy: "State Drugs Control Administration & CDSCO Regulatory Framework",
    documentUrl: "/docs/mfg-standards-compliance.pdf",
    status: "active",
    description:
      "Facility validation, safety protocols, and rigorous quality audit adherence across the Panakeia in-house manufacturing unit.",
    order: 3,
  },
  {
    title: "MSME Udyam Registration",
    issuedBy: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    documentUrl: "/docs/msme-registration.pdf",
    status: "active",
    description:
      "Registered manufacturing enterprise contributing to India's self-reliance in high-precision critical care biomedical engineering.",
    order: 4,
  },
  {
    title: "ISO 13485:2016 Medical Devices Quality Management System",
    issuedBy: "TUV / Accredited Medical Device Registrar",
    documentUrl: "/docs/iso-13485-certificate.pdf",
    status: "active",
    description:
      "Comprehensive quality management system covering design, manufacturing, assembly, calibration, and servicing of anaesthesia systems and life-support ventilators.",
    order: 5,
  },
  {
    title: "Panakeia In-House Manufacturing Facility",
    issuedBy: "Panakeia Medtech Manufacturing Division, Visakhapatnam",
    documentUrl: "/docs/panakeia-facility-cert.pdf",
    status: "active",
    description:
      "Dedicated state-of-the-art facility with all components and parts manufactured in-house by Panakeia itself, featuring rapid prototyping, EMI/EMC compliance testing, and biomaterial testing laboratories.",
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
