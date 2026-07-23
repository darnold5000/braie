import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    robots: { index: false, follow: false },
  };
}
