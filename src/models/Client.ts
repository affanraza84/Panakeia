import mongoose, { Schema, Model } from "mongoose";
import { IClient } from "@/types";

const ClientSchema = new Schema<IClient>(
  {
    name: {
      type: String,
      required: [true, "Hospital or client name is required"],
      trim: true,
      maxlength: [150, "Client name cannot exceed 150 characters"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      maxlength: [100, "City cannot exceed 100 characters"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
      maxlength: [100, "State cannot exceed 100 characters"],
    },
    logoUrl: {
      type: String,
      trim: true,
    },
    testimonial: {
      type: String,
      trim: true,
      maxlength: [1500, "Testimonial cannot exceed 1500 characters"],
    },
    doctorName: {
      type: String,
      trim: true,
      maxlength: [120, "Doctor name cannot exceed 120 characters"],
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound Index:
ClientSchema.index({ featured: 1, state: 1 });

export const Client: Model<IClient> =
  mongoose.models.Client || mongoose.model<IClient>("Client", ClientSchema);
