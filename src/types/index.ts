export type ProductCategory = "anaesthesia" | "ventilator";

export interface IProductSpec {
  label: string;
  value: string;
}

export interface IProduct {
  _id?: string;
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  features: string[];
  specs: IProductSpec[];
  images: string[];
  brochurePdfUrl?: string;
  order: number;
  published: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface IClient {
  _id?: string;
  name: string;
  city: string;
  state: string;
  logoUrl?: string;
  testimonial?: string;
  doctorName?: string;
  featured: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export type CertificationStatus = "active" | "pending";

export interface ICertification {
  _id?: string;
  title: string;
  number?: string;
  issuedBy: string;
  documentUrl?: string;
  status: CertificationStatus;
  description?: string;
  order?: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export type EnquiryType = "general" | "distributor" | "oem" | "product-enquiry";
export type EnquiryStatus = "new" | "contacted" | "closed";

export interface IEnquiry {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  hospitalOrOrg?: string;
  city?: string;
  message: string;
  type: EnquiryType;
  productSlug?: string;
  createdAt: Date;
  status: EnquiryStatus;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  details?: Record<string, string[]>;
}
