export type Service = {
  id: string;
  title: string;
  description: string;
  audience: string;
  turnaround: string;
  price?: string;
  showPrice?: boolean;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  mostPopular?: boolean;
  processSteps?: { title: string; description: string }[];
};

export type ProductCategory =
  | "judging-critiques"
  | "event-packages"
  | "guides"
  | "amazon-favorites";

export type Product = {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  imageUrl: string;
  affiliateUrl: string;
  price?: string;
  featured?: boolean;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  type: "free" | "paid";
  price?: string;
  ctaLabel: string;
  href: string;
  imageUrl?: string;
  waitlist?: boolean;
};

export type SocialLink = {
  platform: string;
  label: string;
  href: string;
  icon: "instagram" | "tiktok" | "youtube" | "facebook" | "pinterest" | "email" | "linkedin";
};

export type FeaturedContent = {
  id: string;
  title: string;
  platform: "instagram" | "tiktok" | "youtube";
  href: string;
  thumbnailUrl: string;
  description?: string;
  /** iframe src for in-site playback (YouTube nocookie, Instagram/TikTok embed, etc.) */
  embedSrc?: string;
};

export type InquiryType =
  | "routine-breakdown"
  | "judging-question"
  | "brand-partnership"
  | "general";
