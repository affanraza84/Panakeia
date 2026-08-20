import mongoose, { Schema, Model } from "mongoose";
import { IEnquiry } from "@/types";

const EnquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: [20, "Phone number cannot exceed 20 characters"],
    },
    hospitalOrOrg: {
      type: String,
      trim: true,
      maxlength: [150, "Hospital / Organization name cannot exceed 150 characters"],
    },
    city: {
      type: String,
      trim: true,
      maxlength: [100, "City cannot exceed 100 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [3000, "Message cannot exceed 3000 characters"],
    },
    type: {
      type: String,
      required: [true, "Enquiry type is required"],
      enum: {
        values: ["general", "distributor", "oem", "product-enquiry"],
        message: "{VALUE} is not a valid enquiry type",
      },
      default: "general",
    },
    productSlug: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: ["new", "contacted", "closed"],
        message: "{VALUE} is not a valid enquiry status",
      },
      default: "new",
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for admin enquiry processing sorted by latest
EnquirySchema.index({ status: 1, createdAt: -1 });

export const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);
