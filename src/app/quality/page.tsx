import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { Badge } from "@/components/ui/Badge";
import { getCertifications } from "@/lib/data";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Award,
  Layers,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality, Standards & Regulatory Compliance",
  description:
    "Review Panakeia Medtech's quality certifications, MSME registration, and CDSCO regulatory compliance.",
};

export const revalidate = 3600;

export default async function QualityPage() {
  const certifications = await getCertifications();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30" />
        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Regulatory Transparency
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Quality Assurance & Regulatory Standing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-clinical-200 leading-relaxed">
            Panakeia upholds stringent quality assurance standards and full regulatory compliance under the Medical Device Rules (MDR) governed by CDSCO.
          </p>
        </Container>
      </section>

      {/* Critical Regulatory Statement Box */}
      <section className="py-8 bg-clinical-50 border-b border-clinical-200">
        <Container className="max-w-4xl">
          <div className="bg-white rounded-xl border-l-4 border-l-med-teal-500 border border-clinical-200 p-6 shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-med-teal-50 text-med-teal-600 shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-clinical-700">
                <h3 className="font-bold text-navy-950 text-base font-heading">
                  Statutory Regulatory Standing Disclosure
                </h3>
                <p className="leading-relaxed">
                  Panakeia Medtech Private Limited maintains active <strong>CDSCO Medical Device Regulatory Compliance</strong> for the design, examination, evaluation, and performance testing of critical care devices (Anaesthesia Workstations & Ventilators).
                </p>
                <p className="leading-relaxed">
                  Our state-of-the-art in-house Visakhapatnam manufacturing facility operates under rigorous quality management and regulatory standards, where all device parts and assemblies are produced directly by Panakeia itself. We maintain strict factual adherence to national and international medical device regulations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Accreditations & Recognitions"
            title="Current Regulatory Credentials & Registrations"
            description="All active and pending regulatory credentials maintained by Panakeia Medtech Private Limited."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} certification={cert} />
            ))}
          </div>
        </Container>
      </section>

      {/* Testing & Verification Protocol */}
      <section className="py-16 lg:py-20 bg-clinical-50 border-t border-clinical-200">
        <Container>
          <SectionHeading
            eyebrow="Testing Standards"
            title="Multi-Stage Clinical Safety & Calibration Protocol"
            description="Every unit and component manufactured in-house by Panakeia itself undergoes thorough multi-point pneumatic and electrical verification before dispatch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-clinical-200 shadow-2xs">
              <div className="text-xl font-bold font-mono text-med-teal-600 mb-2">01</div>
              <h4 className="font-bold text-navy-950 text-sm font-heading mb-2">
                Pneumatic Pressure Testing
              </h4>
              <p className="text-xs text-clinical-600 leading-relaxed">
                High-pressure pipeline testing up to 800 kPa, leak rate decay verification, and anti-hypoxic mechanical interlock verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-clinical-200 shadow-2xs">
              <div className="text-xl font-bold font-mono text-med-teal-600 mb-2">02</div>
              <h4 className="font-bold text-navy-950 text-sm font-heading mb-2">
                IEC 60601-1 Electrical Safety
              </h4>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Earth leakage current, dielectric breakdown insulation resistance, and secondary power supply battery endurance stress tests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-clinical-200 shadow-2xs">
              <div className="text-xl font-bold font-mono text-med-teal-600 mb-2">03</div>
              <h4 className="font-bold text-navy-950 text-sm font-heading mb-2">
                Flow & Tidal Volume Precision
              </h4>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Micro-calibrated against certified reference gas flow analyzers across ambient temperature and barometric variations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-clinical-200 shadow-2xs">
              <div className="text-xl font-bold font-mono text-med-teal-600 mb-2">04</div>
              <h4 className="font-bold text-navy-950 text-sm font-heading mb-2">
                Continuous 72-Hour Burn-In
              </h4>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Extended mechanical ventilation cycling on artificial lung simulators under continuous maximum respiratory resistance.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
