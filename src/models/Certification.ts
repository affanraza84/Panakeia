import mongoose, { Schema, Model } from "mongoose";
import { ICertification } from "@/types";

const CertificationSchema = new Schema<ICertification>(
  {
    title: {
      type: String,
      required: [true, "Certification title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    number: {
      type: String,
      trim: true,
      maxlength: [100, "Number cannot exceed 100 characters"],
    },
    issuedBy: {
      type: String,
      required: [true, "Issuing authority is required"],
      trim: true,
      maxlength: [200, "Issuing authority cannot exceed 200 characters"],
    },
    documentUrl: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: {
        values: ["active", "pending"],
        message: "{VALUE} is not a valid certification status",
      },
      default: "active",
      index: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1500, "Description cannot exceed 1500 characters"],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index
CertificationSchema.index({ status: 1, order: 1 });

export const Certification: Model<ICertification> =
  mongoose.models.Certification ||
  mongoose.model<ICertification>("Certification", CertificationSchema);
