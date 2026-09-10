"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { enquirySchema, EnquiryFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  Building2,
  Stethoscope,
  Cpu,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Check,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabKey = "employment" | "internships" | "training";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  badge: string;
}

const JOB_POSITIONS: JobPosition[] = [
  {
    id: "biomedical-embedded-eng",
    title: "Biomedical Embedded Systems & Firmware Engineer",
    department: "R&D & Engineering",
    location: "Visakhapatnam (On-site)",
    type: "Full-Time",
    experience: "2 - 6 Years",
    summary:
      "Lead firmware development, digital signal processing, sensor integration (flow, pressure, FiO2), and safety-critical control loops for our Anaesthesia Workstations and ICU Ventilators.",
    responsibilities: [
      "Develop embedded C/C++ firmware on ARM Cortex-M microcontrollers for real-time ventilator cycle control.",
      "Integrate high-precision pressure transducers, ultrasonic flow sensors, and electronic gas mixing valves.",
      "Implement fail-safe watchdog mechanisms, alarm topologies, and compliance with IEC 60601-1-8 medical alarm standards.",
      "Collaborate with mechanical and clinical teams to calibrate lung mechanics and patient-trigger responsiveness.",
    ],
    requirements: [
      "B.Tech/M.Tech in Biomedical Engineering, Electronics (ECE), or Embedded Systems.",
      "Proven track record in safety-critical firmware development, RTOS (FreeRTOS/Zephyr), and hardware debugging.",
      "Familiarity with medical device lifecycle (IEC 62304) and sensor interfacing via I2C/SPI/CAN.",
    ],
    badge: "Immediate Requirement",
  },
  {
    id: "clinical-specialist-ot-icu",
    title: "Critical Care Clinical Application Specialist",
    department: "Clinical Affairs & Field Demonstrations",
    location: "Visakhapatnam / Regional (Hybrid Field)",
    type: "Full-Time",
    experience: "1 - 5 Years",
    summary:
      "Bridge medical technology and surgical practice by providing in-theatre demonstration, clinical trials support, doctor onboarding, and protocol optimization for Anaesthesiologists and Intensivists.",
    responsibilities: [
      "Conduct live clinical demonstrations and training workshops for Anaesthesiologists, Intensivists, and OT staff.",
      "Lead hospital product evaluations, trial handovers, and collect actionable physician feedback for R&D.",
      "Assist in bedside troubleshooting during complex surgeries and ICU ventilator ventilatory mode tuning.",
      "Author clinical application notes, training manuals, and interactive physician quick-reference guides.",
    ],
    requirements: [
      "Degree/Diploma in Biomedical Engineering, Anaesthesia Technology, Respiratory Care, or Nursing / MBBS.",
      "Strong clinical communication skills and confidence presenting in sterile Operating Room environments.",
      "In-depth understanding of ventilatory modes (VCV, PCV, SIMV, PSV, PRVC) and anaesthesia circuit thermodynamics.",
    ],
    badge: "High Growth Role",
  },
  {
    id: "medical-sales-manager",
    title: "Regional Medical Sales & Business Development Manager",
    department: "Medical Sales & Institutional Accounts",
    location: "South / West / North India (Regional)",
    type: "Full-Time",
    experience: "3 - 8 Years",
    summary:
      "Drive institutional sales of indigenous Anaesthesia Workstations and ICU Ventilators to corporate hospital chains, government medical colleges, and tender procurement desks.",
    responsibilities: [
      "Identify, engage, and close device procurement deals with Hospital Directors, Purchase Committees, and Heads of Anaesthesia.",
      "Manage government tender workflows, GeM (Government e-Marketplace) bidding, and technical specification compliance.",
      "Expand and supervise regional medical distributor networks, ensuring rigorous dealer training and revenue targets.",
      "Represent Panakeia at state and national anaesthesiology and critical care conferences (ISA, ISCCM).",
    ],
    requirements: [
      "Proven sales track record in capital medical equipment (OT / ICU / Patient Monitoring).",
      "Established relationships with hospital management, purchase heads, and key opinion leader (KOL) anaesthesiologists.",
      "Exceptional consultative negotiation, technical presentation, and territory mapping capabilities.",
    ],
    badge: "Performance Incentives",
  },
  {
    id: "qa-regulatory-engineer",
    title: "Quality Assurance & Regulatory Compliance Engineer",
    department: "Quality & Compliance",
    location: "Visakhapatnam (On-site)",
    type: "Full-Time",
    experience: "2 - 5 Years",
    summary:
      "Ensure end-to-end ISO 13485:2016 compliance, CDSCO Class C/D medical device documentation, factory device validation, and electrical safety testing (IEC 60601-1).",
    responsibilities: [
      "Maintain Design History Files (DHF), Device Master Records (DMR), and Risk Management files (ISO 14971).",
      "Oversee incoming raw material inspection, in-process testing, calibration logs, and final device batch release.",
      "Coordinate regulatory submissions and liaison with CDSCO notified bodies and testing laboratories.",
      "Lead internal quality audits, CAPA investigations, and root-cause analysis for production variances.",
    ],
    requirements: [
      "Degree in Biomedical Engineering, Mechanical, or Quality Engineering.",
      "Deep understanding of CDSCO Medical Device Rules (MDR 2017), ISO 13485, and IEC safety standards.",
      "Detail-oriented mindset with rigorous documentation rigor.",
    ],
    badge: "Core QA Team",
  },
  {
    id: "precision-mechanical-engineer",
    title: "Precision Mechanical & Fluidics Design Engineer",
    department: "Manufacturing & R&D",
    location: "Visakhapatnam (On-site)",
    type: "Full-Time",
    experience: "1 - 4 Years",
    summary:
      "Design precision CNC machined manifold blocks, vaporizer mounts, pneumatic flow paths, and ergonomic workstation chassis using 3D CAD and fluid simulation.",
    responsibilities: [
      "Design and optimize high-pressure gas manifolds, rotameter flow assemblies, and breathing circuit interfaces.",
      "Produce production-ready 2D/3D GD&T drawings for in-house CNC milling and sheet metal fabrication.",
      "Perform pneumatic flow simulations, leak testing, and burst pressure validations on anaesthesia delivery pathways.",
      "Collaborate with manufacturing technicians on assembly jigs, fixtures, and ergonomic improvements.",
    ],
    requirements: [
      "B.Tech/Diploma in Mechanical Engineering or Mechatronics.",
      "Proficiency in SolidWorks / Fusion 360, tolerance analysis, and CNC manufacturing feasibility.",
      "Knowledge of pneumatic valves, regulators, O-ring sealing, and medical-grade materials (SS316, Delrin, Anodized Al).",
    ],
    badge: "100% In-House R&D",
  },
];

interface InternshipProgram {
  title: string;
  duration: string;
  domain: string;
  description: string;
  highlights: string[];
  eligible: string;
  stipend: string;
}

const INTERNSHIPS: InternshipProgram[] = [
  {
    title: "Biomedical R&D & Embedded Systems Internship",
    duration: "3 to 6 Months",
    domain: "Hardware, Sensors & Firmware",
    description:
      "Work directly with our lead design engineers on live Anaesthesia Workstation and Ventilator R&D. Gain hands-on exposure to sensor calibration, PCB debugging, and safety-critical control coding.",
    highlights: [
      "Hands-on sensor calibration: Mass flow sensors, differential pressure transducers, paramagnetic O2 sensors.",
      "Work on actual clinical-grade electronics and safety firmware.",
      "Pre-Placement Offer (PPO) opportunity for top performers upon graduation.",
      "Official MedTech Innovation Project Certificate.",
    ],
    eligible: "3rd/4th Year B.Tech or M.Tech in Biomedical, ECE, EEE, or Instrumentation.",
    stipend: "Monthly Stipend Provided + Performance Bonus",
  },
  {
    title: "Clinical Application & Hospital Trials Internship",
    duration: "3 to 6 Months",
    domain: "Clinical Training & Doctor Demonstration",
    description:
      "Shadow experienced clinical specialists during hospital trials, surgical setups, and doctor demonstration sessions. Understand the exact clinical workflow of Anaesthesiologists and ICU Intensivists.",
    highlights: [
      "Direct exposure to hospital OT environments and critical care ICU units.",
      "Learn physiological ventilation mechanics and anaesthesia gas delivery dynamics.",
      "Develop high-impact technical presentation and doctor interaction skills.",
      "Certificate of Clinical Application Competency.",
    ],
    eligible: "Graduates / Final Year in Biomedical Engineering, Anaesthesia Tech, or Life Sciences.",
    stipend: "Monthly Stipend Provided + Travel Allowances",
  },
  {
    title: "Medical Device Sales & Market Intelligence Internship",
    duration: "2 to 4 Months",
    domain: "B2B MedTech Business & Healthcare Strategy",
    description:
      "Learn the nuances of medical equipment marketing, hospital tender pipelines, pricing economics, and distributor network management in the Indian critical care sector.",
    highlights: [
      "Understand hospital procurement cycles, tender documentation, and GeM bidding.",
      "Competitive benchmarking of global vs. indigenous Indian medical devices.",
      "Mentorship from sales leaders with 20+ years of high-volume medical capital sales.",
      "Fast-track entry into full-time Panakeia Business Development team.",
    ],
    eligible: "MBA, BBA, B.Tech Biomedical, or Healthcare Management students.",
    stipend: "Monthly Stipend + Achievement Incentives",
  },
];

interface TrainingModule {
  number: string;
  title: string;
  category: "product" | "sales" | "clinical";
  description: string;
  topics: string[];
}

const TRAINING_MODULES: TrainingModule[] = [
  {
    number: "01",
    title: "Critical Care Pneumatics & Anaesthesia Architecture",
    category: "product",
    description:
      "Deep dive into the internal engineering of modern anaesthesia workstations, pipeline gas systems, and fail-safe safety mechanisms.",
    topics: [
      "Pneumatic circuitry: High-pressure inlets (O2/N2O/Air), regulators, and manifold architecture.",
      "Electronic & mechanical rotameters, Hypoxic Guard anti-hypoxia interlock systems.",
      "Precision vaporizers (Isoflurane, Sevoflurane): Temperature compensation and wick physics.",
      "Circle absorber systems, carbon dioxide canister dynamics, and scavenging systems (AGSS).",
    ],
  },
  {
    number: "02",
    title: "ICU Ventilator Mechanics & Advanced Ventilatory Modes",
    category: "product",
    description:
      "Comprehensive mastery over turbine & pneumatic ventilator mechanics, patient-ventilator synchrony, and diagnostic loops.",
    topics: [
      "Core modes: Volume Control (VCV), Pressure Control (PCV), Pressure Support (PSV), SIMV, and PRVC.",
      "Flow triggers vs. Pressure triggers, rise time, expiratory sensitivity (Esens), and Auto-PEEP.",
      "Graphic scalar analysis: Pressure-Time, Flow-Time, Volume-Time curves, and Pressure-Volume loops.",
      "Sensor calibration, O2 cell diagnostics, valve maintenance, and electrical safety testing.",
    ],
  },
  {
    number: "03",
    title: "Operating Room & ICU Clinical Protocols (Doctor Readiness)",
    category: "clinical",
    description:
      "Master the sterile protocols, clinical etiquette, and physiological language required to converse authoritatively with Anaesthesiologists and Intensivists.",
    topics: [
      "OT zoning, aseptic techniques, and surgeon/anaesthetist workflow priorities.",
      "Pre-operative machine check protocols (checklist verification before induction).",
      "Troubleshooting critical intraoperative scenarios: Pipeline failure, high airway pressure, apnea alerts.",
      "Communicating device advantages using evidence-based clinical terminology.",
    ],
  },
  {
    number: "04",
    title: "Strategic Medical Sales, Tendering & Consultative Selling",
    category: "sales",
    description:
      "The complete playbook on navigating high-value capital medical equipment sales to hospital boards and government tenders.",
    topics: [
      "Mapping the hospital buying center: Trust building with HODs, Biomedical In-Charges, and Purchase Directors.",
      "Government procurement & GeM (Government e-Marketplace) compliance, tender preparation, and specs compliance.",
      "Conducting unbeatable live clinical demonstrations and handling skeptical objections.",
      "ROI calculators: Total Cost of Ownership (TCO), consumable savings, and in-house service uptime.",
    ],
  },
  {
    number: "05",
    title: "Quality, Standards & Regulatory Standing (CDSCO / ISO)",
    category: "product",
    description:
      "Essential regulatory literacy covering medical device safety standards, CE compliance, and audit preparation.",
    topics: [
      "ISO 13485:2016 quality management framework and traceability.",
      "CDSCO Class C/D medical device licensing and Medical Device Rules (MDR 2017).",
      "Electrical medical safety testing (IEC 60601-1) and alarm compliance (IEC 60601-1-8).",
      "Post-market clinical follow-up (PMCF) and vigilance reporting procedures.",
    ],
  },
];

const FAQS = [
  {
    q: "Where are the career and training programs located?",
    a: "Our primary R&D, manufacturing facility, and hands-on Training Academy are located at Visakhapatnam, Andhra Pradesh. For medical sales and clinical specialist roles, positions are available across regional zones (South, West, North, and Pan-India) with hybrid travel.",
  },
  {
    q: "Who is eligible to apply for Panakeia Internships?",
    a: "Undergraduate and postgraduate students pursuing Biomedical Engineering, Electronics & Communication (ECE), Mechanical Engineering, Mechatronics, Anaesthesia Technology, or Healthcare Management. Final-year students seeking 3-to-6 month capstone or industrial internship credits are strongly encouraged to apply.",
  },
  {
    q: "What is the Panakeia Products & Sales Training Academy?",
    a: "It is an intensive, practical training program designed for biomedical engineers, aspiring medical sales executives, dealer sales representatives, and hospital clinical staff. It equips participants with in-depth technical knowledge of Anaesthesia Workstations and ICU Ventilators, live OT etiquette, and consultative B2B medical sales mastery.",
  },
  {
    q: "Do you offer Pre-Placement Offers (PPOs) after the internship?",
    a: "Yes! A significant portion of our full-time engineering and clinical application hires originate from our internship batches. Exceptional interns who demonstrate clinical curiosity, engineering rigor, and ownership are extended full-time PPO packages prior to college graduation.",
  },
  {
    q: "What makes working at Panakeia different from multinational distributors?",
    a: "Unlike trading firms that merely box-shift imported devices, Panakeia is a 100% indigenous Indian manufacturer. Every manifold, circuit board, firmware algorithm, and mechanical chassis is designed, machined, and validated in-house by our team. You get to build real life-saving medical devices from the ground up, mentored by leaders with 35+ years in critical care.",
  },
];

export function CareersContentClient() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as TabKey) || "employment";

  const [activeTab, setActiveTab] = useState<TabKey>(
    ["employment", "internships", "training"].includes(initialTab)
      ? initialTab
      : "employment"
  );
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const formRef = useRef<HTMLDivElement>(null);

  // Application Form State
  const [applicationType, setApplicationType] = useState<
    "career-employment" | "career-internship" | "career-training"
  >("career-employment");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [formStartTime, setFormStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  // Sync tab with form selection
  useEffect(() => {
    if (activeTab === "employment") {
      setApplicationType("career-employment");
    } else if (activeTab === "internships") {
      setApplicationType("career-internship");
    } else if (activeTab === "training") {
      setApplicationType("career-training");
    }
  }, [activeTab]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      hospitalOrOrg: "",
      city: "",
      message: "",
      type: "career-employment",
      productSlug: "",
      hp: "",
    },
  });

  const handleApplyForJob = (job: JobPosition) => {
    setActiveTab("employment");
    setApplicationType("career-employment");
    setValue("type", "career-employment");
    setValue("hospitalOrOrg", "Applicant for: " + job.title);
    setValue(
      "message",
      `I am applying for the position of "${job.title}" (${job.location}).\n\nExperience: ${job.experience}\nKey Strengths: \nLinkedIn / Portfolio URL: `
    );
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApplyForInternship = (internship: InternshipProgram) => {
    setActiveTab("internships");
    setApplicationType("career-internship");
    setValue("type", "career-internship");
    setValue("hospitalOrOrg", "Internship Candidate: " + internship.title);
    setValue(
      "message",
      `I am applying for the "${internship.title}" (${internship.duration}).\n\nCollege / University: \nYear of Study / Degree: \nAreas of Interest: \nLinkedIn / GitHub: `
    );
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegisterForTraining = (moduleTitle?: string) => {
    setActiveTab("training");
    setApplicationType("career-training");
    setValue("type", "career-training");
    setValue(
      "hospitalOrOrg",
      moduleTitle
        ? "Training Registration: " + moduleTitle
        : "Product & Sales Training Academy"
    );
    setValue(
      "message",
      `I would like to enroll in the Panakeia Products & Sales Training Academy.\n\nPreferred Track: Products & OT Clinical Training / Medical Sales Mastery\nCurrent Background / Company: \nLocation: `
    );
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setServerError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          type: applicationType,
          formStartTime,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.error ||
            "Failed to submit your application. Please try again or email careers@panakeiamedtech.com"
        );
        return;
      }

      setSubmitSuccess(true);
      setSubmissionId(result.data?.id || "Application-Received");
      reset();
      setFormStartTime(Date.now());
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Network error occurred. Please try again.";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 3 Core Pillars Navigation Bar */}
      <section className="relative z-20 -mt-8">
        <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-xl border border-clinical-200 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => setActiveTab("employment")}
              className={cn(
                "flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer",
                activeTab === "employment"
                  ? "bg-navy-950 text-white shadow-md shadow-navy-950/20 scale-[1.02]"
                  : "text-clinical-700 hover:text-navy-950 hover:bg-clinical-100/70"
              )}
            >
              <Briefcase className="w-4 h-4 text-med-teal-400" />
              <span>Full-Time Employment</span>
            </button>

            <button
              onClick={() => setActiveTab("internships")}
              className={cn(
                "flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer",
                activeTab === "internships"
                  ? "bg-navy-950 text-white shadow-md shadow-navy-950/20 scale-[1.02]"
                  : "text-clinical-700 hover:text-navy-950 hover:bg-clinical-100/70"
              )}
            >
              <GraduationCap className="w-4 h-4 text-med-teal-400" />
              <span>Internships & PPO</span>
            </button>

            <button
              onClick={() => setActiveTab("training")}
              className={cn(
                "flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer",
                activeTab === "training"
                  ? "bg-navy-950 text-white shadow-md shadow-navy-950/20 scale-[1.02]"
                  : "text-clinical-700 hover:text-navy-950 hover:bg-clinical-100/70"
              )}
            >
              <BookOpen className="w-4 h-4 text-med-teal-400" />
              <span>Products & Sales Training</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {/* ========================================================
            TAB 1: FULL-TIME EMPLOYMENT
           ======================================================== */}
        {activeTab === "employment" && (
          <motion.div
            key="employment"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-3">
                Current Openings
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Build Lifesaving Medical Hardware & Transform Clinical Care
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-clinical-600 leading-relaxed">
                Join our multidisciplinary engineering, clinical, and sales teams in Visakhapatnam. We offer high ownership, direct leadership access, competitive compensation, and the rare opportunity to build 100% indigenous critical care machines.
              </p>
            </div>

            {/* Job Openings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Job List (Left) */}
              <div className="lg:col-span-7 space-y-4">
                {JOB_POSITIONS.map((job) => {
                  const isSelected = selectedJob?.id === job.id;
                  return (
                    <div
                      key={job.id}
                      className={cn(
                        "p-5 rounded-2xl border transition-all duration-200 bg-white cursor-pointer hover:shadow-md",
                        isSelected
                          ? "border-med-teal-500 ring-2 ring-med-teal-500/20 shadow-md"
                          : "border-clinical-200 hover:border-med-teal-300"
                      )}
                      onClick={() => setSelectedJob(isSelected ? null : job)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-med-teal-700 bg-med-teal-50 px-2.5 py-0.5 rounded-md mb-2 border border-med-teal-200">
                            {job.department}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-navy-950 hover:text-med-teal-600 transition-colors">
                            {job.title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 shrink-0">
                          {job.badge}
                        </span>
                      </div>

                      <p className="text-xs text-clinical-600 mt-2 line-clamp-2 leading-relaxed">
                        {job.summary}
                      </p>

                      <div className="mt-4 pt-3 border-t border-clinical-100 flex flex-wrap items-center justify-between gap-3 text-xs text-clinical-500 font-medium">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-med-teal-600" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-med-teal-600" />
                            {job.experience}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApplyForJob(job);
                            }}
                            className="text-xs font-bold text-med-teal-700 hover:text-med-teal-800 flex items-center gap-1 group/btn"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Job Details Preview / Callout (Right) */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                {selectedJob ? (
                  <div className="bg-white rounded-2xl border border-clinical-200 p-6 shadow-lg space-y-5">
                    <div>
                      <span className="text-xs font-mono font-bold text-med-teal-600 uppercase tracking-wider block mb-1">
                        {selectedJob.department}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-navy-950">
                        {selectedJob.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-xs text-clinical-500">
                        <span>📍 {selectedJob.location}</span>
                        <span>•</span>
                        <span>💼 {selectedJob.type}</span>
                        <span>•</span>
                        <span>⏳ {selectedJob.experience}</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs text-clinical-700">
                      <h4 className="font-bold text-navy-950 uppercase tracking-wider text-[11px]">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                        {selectedJob.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 text-xs text-clinical-700">
                      <h4 className="font-bold text-navy-950 uppercase tracking-wider text-[11px]">
                        Requirements:
                      </h4>
                      <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                        {selectedJob.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-clinical-100 flex gap-3">
                      <Button
                        variant="primary"
                        className="w-full justify-center text-xs"
                        onClick={() => handleApplyForJob(selectedJob)}
                      >
                        Apply for this Role
                      </Button>
                      <Button
                        variant="outline"
                        className="text-xs"
                        onClick={() => setSelectedJob(null)}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-7 text-white shadow-xl space-y-5">
                    <div className="w-12 h-12 rounded-xl bg-med-teal-500/20 text-med-teal-300 flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white">
                      Why Build Your Career with Panakeia?
                    </h3>
                    <ul className="space-y-3 text-xs text-clinical-200 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>100% In-House R&D:</strong> We do not rebadge imported systems. You design, engineer, and manufacture real products.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>35+ Years Veteran Mentorship:</strong> Direct guidance from founders with decades of clinical & engineering leadership.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>Direct Hospital Impact:</strong> See your devices deployed in critical OTs and ICUs saving patients daily.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-med-teal-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>Fast-Track Growth:</strong> Meritocratic culture with rapid leadership avenues for driven individuals.
                        </span>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <Button
                        variant="primary"
                        className="w-full justify-center text-xs"
                        onClick={() => {
                          setValue(
                            "message",
                            "I am interested in exploring general full-time employment opportunities at Panakeia Medtech."
                          );
                          formRef.current?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Submit General Application
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            TAB 2: INTERNSHIPS & PPO PATHWAY
           ======================================================== */}
        {activeTab === "internships" && (
          <motion.div
            key="internships"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-3">
                Students & Recent Graduates
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Hands-On Medical Device Internships with Pre-Placement Offers (PPO)
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-clinical-600 leading-relaxed">
                Step outside the textbook. Gain real-world biomedical engineering, hospital clinical trial, and MedTech sales experience at our Visakhapatnam manufacturing facility.
              </p>
            </div>

            {/* Internship Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INTERNSHIPS.map((internship, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-clinical-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-med-teal-400 transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-med-teal-700 bg-med-teal-50 px-2.5 py-0.5 rounded-md border border-med-teal-200">
                        {internship.domain}
                      </span>
                      <span className="text-[11px] font-semibold text-clinical-500">
                        {internship.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-med-teal-600 transition-colors">
                      {internship.title}
                    </h3>

                    <p className="text-xs text-clinical-600 leading-relaxed">
                      {internship.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-clinical-100">
                      <div className="text-[11px] font-bold text-navy-950 uppercase tracking-wider">
                        Program Highlights:
                      </div>
                      <ul className="space-y-1.5 text-xs text-clinical-600">
                        {internship.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-med-teal-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 text-xs text-clinical-500">
                      <strong>Eligibility:</strong> {internship.eligible}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-clinical-100 space-y-3">
                    <div className="text-xs font-bold text-india-saffron flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{internship.stipend}</span>
                    </div>

                    <Button
                      variant="primary"
                      className="w-full justify-center text-xs"
                      onClick={() => handleApplyForInternship(internship)}
                    >
                      Apply for Internship
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Internship Pathway Banner */}
            <div className="bg-gradient-to-r from-med-teal-900 to-navy-900 rounded-2xl p-8 text-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                <div className="lg:col-span-3 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-med-teal-300 font-bold">
                    Fast-Track Career Acceleration
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    From Intern to Core Medical Device Engineer
                  </h3>
                  <p className="text-xs sm:text-sm text-clinical-200 leading-relaxed">
                    Over 60% of our high-performing interns receive full-time Pre-Placement Offers (PPOs) upon graduation. You work alongside industry veterans, participate in actual hospital clinical trials, and leave your mark on indigenous Indian healthcare.
                  </p>
                </div>
                <div className="lg:text-right">
                  <Button
                    variant="primary"
                    className="text-xs w-full sm:w-auto"
                    onClick={() => {
                      setValue(
                        "message",
                        "I am applying for an Industrial / Capstone Internship with Panakeia Medtech."
                      );
                      formRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Register for Internship
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            TAB 3: PRODUCTS & MEDICAL SALES TRAINING ACADEMY
           ======================================================== */}
        {activeTab === "training" && (
          <motion.div
            key="training"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-3">
                Panakeia MedTech Academy
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Products & Medical Sales Mastery Academy
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-clinical-600 leading-relaxed">
                An intensive, practice-driven training program bridging medical engineering, surgical operating theatre readiness, and consultative B2B medical sales. Designed for biomedical professionals, hospital sales executives, and channel partners.
              </p>
            </div>

            {/* Target Audience Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl border border-clinical-200 p-4 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-med-teal-50 text-med-teal-600 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-navy-950 mb-1">
                  Biomedical Engineers
                </h4>
                <p className="text-xs text-clinical-600">
                  Master pneumatic schematics, ventilator modes, calibration, and electrical safety standards.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-clinical-200 p-4 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-navy-50 text-navy-700 flex items-center justify-center mb-3">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-navy-950 mb-1">
                  Medical Sales Executives
                </h4>
                <p className="text-xs text-clinical-600">
                  Learn hospital purchase committee navigation, GeM tenders, live clinical demos, and ROI pitches.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-clinical-200 p-4 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-navy-950 mb-1">
                  Distributors & Dealers
                </h4>
                <p className="text-xs text-clinical-600">
                  Equip your sales and service reps with certified expertise to represent Panakeia equipment regionally.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-clinical-200 p-4 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-navy-950 mb-1">
                  OT & ICU Technicians
                </h4>
                <p className="text-xs text-clinical-600">
                  Gain clinical confidence in pre-op checks, ventilator alarms, gas scavenging, and preventive maintenance.
                </p>
              </div>
            </div>

            {/* Detailed Training Modules */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-heading text-navy-950">
                  Structured Curriculum & Lab Modules
                </h3>
                <span className="text-xs text-clinical-500 font-mono">
                  5 Core Modules • Hands-on Lab & Hospital Shadowing
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TRAINING_MODULES.map((mod) => (
                  <div
                    key={mod.number}
                    className="bg-white rounded-2xl border border-clinical-200 p-6 flex flex-col justify-between shadow-xs hover:border-med-teal-400 hover:shadow-md transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-med-teal-600 bg-med-teal-50 px-2 py-0.5 rounded border border-med-teal-200">
                          Module {mod.number}
                        </span>
                        <span
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                            mod.category === "product"
                              ? "bg-sky-50 text-sky-700"
                              : mod.category === "sales"
                              ? "bg-purple-50 text-purple-700"
                              : "bg-emerald-50 text-emerald-700"
                          )}
                        >
                          {mod.category}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-navy-950 leading-snug">
                        {mod.title}
                      </h4>

                      <p className="text-xs text-clinical-600 leading-relaxed">
                        {mod.description}
                      </p>

                      <div className="pt-3 border-t border-clinical-100 space-y-1.5">
                        <span className="text-[11px] font-bold text-navy-950 uppercase tracking-wider block">
                          Key Topics:
                        </span>
                        <ul className="space-y-1 text-xs text-clinical-600">
                          {mod.topics.map((t, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-med-teal-600 font-bold">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-clinical-100">
                      <button
                        onClick={() => handleRegisterForTraining(mod.title)}
                        className="text-xs font-bold text-med-teal-700 hover:text-med-teal-800 flex items-center justify-between w-full group/btn cursor-pointer"
                      >
                        <span>Enroll in Module</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification & Training Delivery Modes */}
            <div className="bg-clinical-50 rounded-2xl border border-clinical-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-med-teal-600 text-white flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-navy-950">
                    Industry-Recognized Certification
                  </h4>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    Participants who successfully complete the hands-on lab tests and hospital clinical shadow assessments receive an official Certificate of Competency in Critical Care Medical Device Technology & Sales.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-navy-950">
                    Live Visakhapatnam Hub Labs
                  </h4>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    Direct access to actual working anaesthesia workstations, lung simulators, calibration rigs, and ventilator test benches at our dedicated facility in Visakhapatnam.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-india-saffron text-white flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-navy-950">
                    Institutional & College Batches
                  </h4>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    We partner with engineering colleges and biomedical departments to run customized 3-to-5 day faculty development & student clinical immersion bootcamps.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          INTERACTIVE APPLICATION & TRAINING REGISTRATION FORM
         ======================================================== */}
      <section
        ref={formRef}
        id="apply-form"
        className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Badge variant="primary">Talent & Academy Portal</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white">
              Apply for Careers, Internships or Training
            </h2>
            <p className="text-xs sm:text-sm text-clinical-300 max-w-2xl mx-auto leading-relaxed">
              Submit your profile to our Talent Acquisition and Academy Admissions team. We review all applications and respond within 2-3 business days.
            </p>
          </div>

          {/* Form Selection Radio Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-1.5 bg-navy-900/80 rounded-2xl border border-navy-800">
            <button
              type="button"
              onClick={() => {
                setApplicationType("career-employment");
                setValue("type", "career-employment");
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                applicationType === "career-employment"
                  ? "bg-med-teal-600 text-white shadow-md"
                  : "text-clinical-400 hover:text-white"
              )}
            >
              Full-Time Career
            </button>
            <button
              type="button"
              onClick={() => {
                setApplicationType("career-internship");
                setValue("type", "career-internship");
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                applicationType === "career-internship"
                  ? "bg-med-teal-600 text-white shadow-md"
                  : "text-clinical-400 hover:text-white"
              )}
            >
              Internship & PPO
            </button>
            <button
              type="button"
              onClick={() => {
                setApplicationType("career-training");
                setValue("type", "career-training");
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                applicationType === "career-training"
                  ? "bg-med-teal-600 text-white shadow-md"
                  : "text-clinical-400 hover:text-white"
              )}
            >
              Product & Sales Training Academy
            </button>
          </div>

          {/* Success Message Banner */}
          {submitSuccess && (
            <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Application Successfully Received!
              </h3>
              <p className="text-xs text-emerald-200 max-w-md mx-auto">
                Thank you for your submission. Reference ID:{" "}
                <span className="font-mono font-bold text-white">
                  {submissionId}
                </span>
                . Our team will review your application and contact you directly.
              </p>
              <Button
                variant="outline"
                className="text-xs text-white border-emerald-500/50 hover:bg-emerald-900 cursor-pointer"
                onClick={() => setSubmitSuccess(null)}
              >
                Submit Another Application
              </Button>
            </div>
          )}

          {/* Error Message Banner */}
          {serverError && (
            <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Application Form */}
          {!submitSuccess && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot for bots */}
              <input type="text" {...register("hp")} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-clinical-200">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Dr. / Mr. / Ms. Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white text-xs sm:text-sm focus:outline-none focus:border-med-teal-400 focus:ring-1 focus:ring-med-teal-400 placeholder:text-clinical-500"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-clinical-200">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white text-xs sm:text-sm focus:outline-none focus:border-med-teal-400 focus:ring-1 focus:ring-med-teal-400 placeholder:text-clinical-500"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-clinical-200">
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white text-xs sm:text-sm focus:outline-none focus:border-med-teal-400 focus:ring-1 focus:ring-med-teal-400 placeholder:text-clinical-500"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Current Location / City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-clinical-200">
                    Current City / State
                  </label>
                  <input
                    type="text"
                    {...register("city")}
                    placeholder="e.g. Visakhapatnam, Hyderabad, Chennai"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white text-xs sm:text-sm focus:outline-none focus:border-med-teal-400 focus:ring-1 focus:ring-med-teal-400 placeholder:text-clinical-500"
                  />
                </div>

                {/* Organization / College / Target Role */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-clinical-200">
                    Target Role / College / Current Organization
                  </label>
                  <input
                    type="text"
                    {...register("hospitalOrOrg")}
                    placeholder="e.g. Biomedical Embedded Engineer / AU College of Engineering"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white text-xs sm:text-sm focus:outline-none focus:border-med-teal-400 focus:ring-1 focus:ring-med-teal-400 placeholder:text-clinical-500"
                  />
                </div>

                {/* Cover Note & Profile Statement */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-clinical-200">
                    Cover Note, Key Skills & Portfolio / LinkedIn Link <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about your background, why you want to join Panakeia Medtech, and share links to your LinkedIn profile or project portfolio..."
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white text-xs sm:text-sm focus:outline-none focus:border-med-teal-400 focus:ring-1 focus:ring-med-teal-400 placeholder:text-clinical-500 leading-relaxed"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-clinical-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-med-teal-400 shrink-0" />
                  <span>Your personal data and resume are kept strictly confidential.</span>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 text-xs sm:text-sm font-bold shadow-lg cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS (FAQ)
         ======================================================== */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <Badge variant="outline">Clarifications</Badge>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-clinical-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-navy-950 hover:text-med-teal-600 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-clinical-500 transition-transform duration-200 shrink-0",
                      isOpen && "rotate-180 text-med-teal-600"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-clinical-600 leading-relaxed border-t border-clinical-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          DIRECT TALENT & HR CONTACT STRIP
         ======================================================== */}
      <section className="bg-clinical-100 rounded-2xl border border-clinical-200 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold font-heading text-navy-950">
              Have Questions or Seeking Institutional Partnerships?
            </h4>
            <p className="text-xs text-clinical-600">
              Contact our Talent Acquisition desk or Academic Partnership coordinator directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 text-xs font-semibold">
            <a
              href="mailto:panakeia.india@gmail.com?subject=Careers%20Inquiry%20-%20Panakeia%20Medtech"
              className="px-4 py-2.5 rounded-xl bg-white border border-clinical-300 text-navy-950 hover:border-med-teal-500 hover:text-med-teal-600 shadow-2xs flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-med-teal-600" />
              <span>panakeia.india@gmail.com</span>
            </a>
            <a
              href="tel:+918008316238"
              className="px-4 py-2.5 rounded-xl bg-navy-950 text-white hover:bg-navy-900 shadow-2xs flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-med-teal-400" />
              <span>+91 80083 16238</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
