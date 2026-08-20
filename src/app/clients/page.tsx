import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getClients } from "@/lib/data";
import {
  Building2,
  MapPin,
  Quote,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Installations & Hospital References",
  description:
    "Review hospital installation references and clinical feedback from senior anaesthesiologists and critical care specialists across India.",
};

export const revalidate = 3600;

export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern-dark opacity-30" />
        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Clinical References
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Hospital Installations & Clinician Feedback
          </h1>
          <p className="mt-4 text-base sm:text-lg text-clinical-200 leading-relaxed">
            Panakeia critical care platforms are evaluated and deployed across leading tertiary hospitals, emergency trauma centers, and high-volume surgical institutes.
          </p>
        </Container>
      </section>

      {/* Hospital Network Grid */}
      <section className="py-16 lg:py-24 bg-clinical-50/60 border-b border-clinical-200">
        <Container>
          <SectionHeading
            eyebrow="Clinical Footprint"
            title="Institutional Installations & OT Evaluations"
            description="Representative hospital networks across South and Central India evaluating and deploying Panakeia critical care technology."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-clinical-200 p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5 text-med-teal-600" />
                    </div>
                    {client.featured && (
                      <span className="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                        Primary Partner
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-navy-950 text-base font-heading">
                    {client.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-clinical-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-med-teal-500 shrink-0" />
                    <span>
                      {client.city}, {client.state}
                    </span>
                  </div>

                  {client.testimonial && (
                    <blockquote className="mt-4 p-3 bg-clinical-50 rounded-lg border border-clinical-100 text-xs text-clinical-700 italic leading-relaxed">
                      &ldquo;{client.testimonial}&rdquo;
                    </blockquote>
                  )}
                </div>

                {client.doctorName && (
                  <div className="mt-4 pt-3 border-t border-clinical-100 text-xs font-medium text-navy-900 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-med-teal-600 shrink-0" />
                    <span className="truncate">{client.doctorName}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hospital Procurement Evaluation Program */}
      <section className="py-16 bg-white">
        <Container className="max-w-4xl">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-med-teal-400">
                Hospital Clinical Demonstration
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Request an On-Site OT Clinical Trial
              </h3>
              <p className="text-xs sm:text-sm text-clinical-300 max-w-lg leading-relaxed">
                Hospital procurement committees and Anaesthesia HODs can schedule an on-site clinical evaluation with our clinical application specialists.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact?type=product-enquiry" variant="primary" size="lg">
                Schedule Evaluation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
