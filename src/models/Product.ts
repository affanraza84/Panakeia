import mongoose, { Schema, Model } from "mongoose";
import { IProduct } from "@/types";

const ProductSpecSchema = new Schema(
  {
    label: {
      type: String,
      required: [true, "Spec label is required"],
      trim: true,
      maxlength: [100, "Spec label cannot exceed 100 characters"],
    },
    value: {
      type: String,
      required: [true, "Spec value is required"],
      trim: true,
      maxlength: [300, "Spec value cannot exceed 300 characters"],
    },
  },
  { _id: false }
);

const ProductSchema = new Schema<IProduct>(
  {
    slug: {
      type: String,
      required: [true, "Product slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: [100, "Slug cannot exceed 100 characters"],
      match: [/^[a-z0-9-]+$/, "Slug must only contain lowercase alphanumeric characters and hyphens"],
    },
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [150, "Product name cannot exceed 150 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["anaesthesia", "ventilator"],
        message: "{VALUE} is not a supported product category",
      },
    },
    tagline: {
      type: String,
      required: [true, "Product tagline is required"],
      trim: true,
      maxlength: [250, "Tagline cannot exceed 250 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      maxlength: [3000, "Description cannot exceed 3000 characters"],
    },
    features: {
      type: [String],
      required: [true, "At least one feature is required"],
      validate: [
        (val: string[]) => Array.isArray(val) && val.length > 0,
        "Product must have at least one feature item",
      ],
    },
    specs: {
      type: [ProductSpecSchema],
      default: [],
    },
    images: {
      type: [String],
      required: [true, "At least one product image is required"],
      validate: [
        (val: string[]) => Array.isArray(val) && val.length > 0,
        "Product must have at least one image URL",
      ],
    },
    brochurePdfUrl: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes:
// 1. slug is unique (created via unique: true)
// 2. Compound index for public listings sorted by order:
ProductSchema.index({ published: 1, category: 1, order: 1 });

export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
