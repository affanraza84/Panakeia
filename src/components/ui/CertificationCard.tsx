"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ICertification } from "@/types";
import { Badge } from "./Badge";
import { ShieldCheck, Clock, FileCheck, CheckCircle, ExternalLink } from "lucide-react";
import { badgePopVariant } from "@/lib/animations";

interface CertificationCardProps {
  certification: ICertification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = certification.status === "active";

  return (
    <motion.div
      variants={badgePopVariant}
      className={`bg-white rounded-xl border p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between ${
        isActive ? "border-clinical-200 hover:border-emerald-300" : "border-amber-200 bg-amber-50/20"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isActive ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
              }`}
            >
              {isActive ? (
                <ShieldCheck className="w-5 h-5" />
              ) : (
                <Clock className="w-5 h-5" />
              )}
            </div>
            <div>
              <Badge variant={isActive ? "active" : "pending"}>
                {isActive ? "Verified / Active" : "In-Process / Audit"}
              </Badge>
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-navy-950 font-heading leading-snug">
          {certification.title}
        </h3>

        <p className="mt-2 text-xs font-medium text-clinical-500">
          <span className="font-semibold text-clinical-700">Issued by:</span> {certification.issuedBy}
        </p>

        <p className="mt-3 text-xs text-clinical-600 leading-relaxed">
          {certification.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-clinical-100 flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1 text-clinical-500">
          <FileCheck className="w-3.5 h-3.5 text-med-teal-500" />
          Panakeia Quality Cell
        </span>

        {isActive ? (
          <span className="text-emerald-700 font-medium inline-flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> Factual Status
          </span>
        ) : (
          <span className="text-amber-800 font-medium inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Final Audit
          </span>
        )}
      </div>
    </motion.div>
  );
}
