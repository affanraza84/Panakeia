"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { enquirySchema, EnquiryFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  Send,
  MapPin,
  Clock,
  HelpCircle,
  FileCheck,
} from "lucide-react";

const ENQUIRY_TYPES = [
  { id: "general", label: "General & Institutional Enquiry" },
  { id: "product-enquiry", label: "Product Quotation & Clinical Demo" },
  { id: "distributor", label: "Distributor / Channel Partner Application" },
  { id: "oem", label: "OEM Manufacturing & Sub-Assembly" },
];

export function ContactFormClient() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";
  const prefilledType = searchParams.get("type") || (prefilledProduct ? "product-enquiry" : "general");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [shakeError, setShakeError] = useState(false);
  const [formStartTime, setFormStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
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
      message: prefilledProduct
        ? `Requesting technical quotation and on-site clinical demonstration for ${prefilledProduct}.`
        : "",
      type: (prefilledType as EnquiryFormData["type"]) || "general",
      productSlug: prefilledProduct,
      hp: "", // Honeypot
    },
  });

  const selectedType = watch("type");

  useEffect(() => {
    if (prefilledProduct) {
      setValue("productSlug", prefilledProduct);
      setValue("type", "product-enquiry");
      setValue(
        "message",
        `Requesting formal technical quotation and on-site clinical demonstration for ${prefilledProduct}.`
      );
    }
  }, [prefilledProduct, setValue]);

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
        body: JSON.stringify({ ...data, formStartTime }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.error || "Failed to submit enquiry. Please try again.");
        setShakeError(true);
        setTimeout(() => setShakeError(false), 500);
        return;
      }

      setSubmitSuccess(true);
      setSubmissionId(result.data?.id || "Lead Recorded");
      reset();
      setFormStartTime(Date.now());
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error. Please try again.";
      setServerError(message);
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Interactive Form */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-clinical-200 shadow-sm p-6 sm:p-10">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
            Submit a Procurement or Partnership Enquiry
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-clinical-600">
            Fill out the technical inquiry form below. Our clinical biomedical engineering team at AMTZ will respond within 24 business hours.
          </p>
        </div>

        {/* Success Confirmation Banner */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-start gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-sm">
                  Enquiry Submitted Successfully
                </strong>
                <p className="text-xs mt-1 text-emerald-800">
                  Thank you for reaching out. Your reference ID is{" "}
                  <code className="font-mono font-bold bg-emerald-100 px-1.5 py-0.5 rounded">
                    {submissionId}
                  </code>
                  . Our procurement specialist will contact you shortly.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Server Error Alert */}
        {serverError && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>{serverError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot hidden input for anti-bot protection (off-screen, aria-hidden) */}
          <div
            style={{
              position: "absolute",
              opacity: 0,
              zIndex: -1,
              pointerEvents: "none",
              left: "-9999px",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <label htmlFor="hp_field">Leave this field blank</label>
            <input
              id="hp_field"
              type="text"
              {...register("hp")}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Enquiry Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-2">
              Enquiry Purpose <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ENQUIRY_TYPES.map((t) => (
                <label
                  key={t.id}
                  className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                    selectedType === t.id
                      ? "border-med-teal-500 bg-med-teal-50/50 text-navy-950 font-semibold"
                      : "border-clinical-200 hover:border-clinical-300 text-clinical-700 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    value={t.id}
                    {...register("type")}
                    className="text-med-teal-600 focus:ring-med-teal-500"
                  />
                  <span>{t.label}</span>
                </label>
              ))}
            </div>
            {errors.type && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.type.message}
              </p>
            )}
          </div>

          {/* Product Slug (Visible if product-enquiry) */}
          {selectedType === "product-enquiry" && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-1.5">
                Product Model of Interest
              </label>
              <input
                type="text"
                {...register("productSlug")}
                placeholder="e.g. panakeia-aesthetica-700"
                className="w-full px-4 py-2.5 rounded-lg border border-clinical-300 focus:border-med-teal-500 focus:ring-2 focus:ring-med-teal-500/20 text-xs font-mono transition-colors outline-none bg-clinical-50/50"
              />
            </div>
          )}

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Dr. Rajesh Kumar"
                className={`w-full px-4 py-2.5 rounded-lg border text-xs sm:text-sm transition-colors outline-none ${
                  errors.name
                    ? "border-rose-400 focus:ring-rose-500/20"
                    : "border-clinical-300 focus:border-med-teal-500 focus:ring-2 focus:ring-med-teal-500/20"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-1.5">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="r.kumar@hospital.org"
                className={`w-full px-4 py-2.5 rounded-lg border text-xs sm:text-sm transition-colors outline-none ${
                  errors.email
                    ? "border-rose-400 focus:ring-rose-500/20"
                    : "border-clinical-300 focus:border-med-teal-500 focus:ring-2 focus:ring-med-teal-500/20"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Hospital/Org Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-1.5">
                Contact Phone <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="+91 98450 12345"
                className={`w-full px-4 py-2.5 rounded-lg border text-xs sm:text-sm transition-colors outline-none ${
                  errors.phone
                    ? "border-rose-400 focus:ring-rose-500/20"
                    : "border-clinical-300 focus:border-med-teal-500 focus:ring-2 focus:ring-med-teal-500/20"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-1.5">
                Hospital / Organization
              </label>
              <input
                type="text"
                {...register("hospitalOrOrg")}
                placeholder="e.g. City Care Super Speciality"
                className="w-full px-4 py-2.5 rounded-lg border border-clinical-300 focus:border-med-teal-500 focus:ring-2 focus:ring-med-teal-500/20 text-xs sm:text-sm transition-colors outline-none"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-1.5">
              City / State
            </label>
            <input
              type="text"
              {...register("city")}
              placeholder="e.g. Visakhapatnam, Andhra Pradesh"
              className="w-full px-4 py-2.5 rounded-lg border border-clinical-300 focus:border-med-teal-500 focus:ring-2 focus:ring-med-teal-500/20 text-xs sm:text-sm transition-colors outline-none"
            />
          </div>

          {/* Message / Requirements */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-clinical-700 mb-1.5">
              Detailed Specification or Requirements <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Please provide details regarding your hospital bed capacity, OT requirements, tender specifications, or dealership region..."
              className={`w-full px-4 py-2.5 rounded-lg border text-xs sm:text-sm transition-colors outline-none ${
                errors.message
                  ? "border-rose-400 focus:ring-rose-500/20"
                  : "border-clinical-300 focus:border-med-teal-500 focus:ring-2 focus:ring-med-teal-500/20"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-600 font-medium">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Dynamic Submit Button */}
          <motion.div
            animate={shakeError ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full shadow-md"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              {isSubmitting ? "Transmitting Lead to AMTZ Desk..." : "Submit Commercial Enquiry"}
            </Button>
          </motion.div>

          <p className="text-center text-[11px] text-clinical-500">
            By submitting, you agree to our{" "}
            <Link
              href="/privacy"
              className="text-med-teal-600 hover:underline font-semibold"
            >
              Privacy Policy
            </Link>
            . Form protected by rate limiting (5 req/min) and anti-spam verification.
          </p>
        </form>
      </div>

      {/* Right Column: Contact Information & AMTZ Coordinates */}
      <div className="lg:col-span-5 space-y-6">
        {/* Direct Contacts Box */}
        <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-med-teal-400 block mb-1">
              Direct Contact Channels
            </span>
            <h3 className="text-xl font-bold font-heading text-white">
              Panakeia Medtech Private Limited
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-clinical-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-med-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">
                  Manufacturing Facility & Registered Office:
                </strong>
                <span>
                  C-20, IHUB Building, AMTZ Campus, Pragati Maidan, Visakhapatnam - 530031, Andhra Pradesh, India.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-med-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">
                  General & Procurement Inquiries:
                </strong>
                <a
                  href="mailto:panakeia.india@gmail.com"
                  className="text-med-teal-300 hover:underline font-mono text-xs"
                >
                  panakeia.india@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-med-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">
                  Procurement & Clinical Support Desk:
                </strong>
                <a
                  href="tel:+919811340469"
                  className="text-med-teal-300 hover:underline font-mono"
                >
                  +91-9811340469
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-med-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">
                  Operating Hours:
                </strong>
                <span>Monday – Saturday: 09:00 AM – 06:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Distributor & Dealership Inquiry Note */}
        <div className="bg-clinical-50 rounded-2xl border border-clinical-200 p-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950">
            <Building2 className="w-4 h-4 text-med-teal-600" />
            <span>State Distribution Network</span>
          </div>
          <p className="text-xs text-clinical-700 leading-relaxed">
            We are actively empaneling regional biomedical distributors across North, Western, and Eastern healthcare corridors in India. Select &ldquo;Distributor / Channel Partner Application&rdquo; in the enquiry form.
          </p>
        </div>
      </div>
    </div>
  );
}
