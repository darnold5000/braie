import type { Service } from "@/types";
import { siteConfig } from "./site";

export const services: Service[] = [
  {
    id: "routine-breakdown",
    title: "Custom Routine Breakdown",
    description:
      "Send your practice routine video and receive a detailed Braie-kdown-style analysis covering start value, execution, composition, artistry, and deductions to watch — recorded from a coach and judge's perspective.",
    audience: "Gymnasts, parents, and coaches at any level",
    turnaround: "7–14 business days · Reviews sent Mondays",
    price: siteConfig.routineBreakdownPrice,
    showPrice: true,
    ctaLabel: "Request a Breakdown",
    ctaHref: "/routine-breakdowns",
    featured: true,
  },
  {
    id: "judge-qa",
    title: "Judge Q&A Session",
    description:
      "Book a live one-on-one session to ask judging questions, discuss scoring, or get guidance on code interpretations. Perfect for aspiring judges, coaches, and curious parents.",
    audience: "Coaches, future judges, and parents",
    turnaround: "Book via Smeeple",
    price: siteConfig.consultationPrice,
    showPrice: true,
    ctaLabel: "Book on Smeeple",
    ctaHref: siteConfig.smeepleUrl,
    featured: true,
  },
  {
    id: "meet-prep",
    title: "Meet Prep Review",
    description:
      "Get feedback on meet readiness — from routine polish to mental prep tips. I'll help you identify the deductions most likely to show up on meet day.",
    audience: "Competitive gymnasts and their coaches",
    turnaround: "7–14 business days",
    price: siteConfig.routineBreakdownPrice,
    showPrice: true,
    ctaLabel: "Get Meet Prep Help",
    ctaHref: "/routine-breakdowns",
    featured: true,
  },
  {
    id: "choreography-feedback",
    title: "Choreography & Routine Feedback",
    description:
      "Feedback on routine construction, composition requirements, and artistry elements. Understand what judges look for beyond the skills themselves.",
    audience: "Coaches and choreographers",
    turnaround: "7–14 business days",
    ctaLabel: "Request Feedback",
    ctaHref: "/routine-breakdowns",
  },
  {
    id: "brand-collab",
    title: "Brand Collaboration Inquiry",
    description:
      "Partner with Braie for UGC content, social campaigns, and brand storytelling. 4+ years creating lifestyle, parenting, fitness, beauty, and sports content for major brands.",
    audience: "Brands and marketing teams",
    turnaround: "Response within 3–5 business days",
    ctaLabel: "Inquire About Collabs",
    ctaHref: "/contact?type=brand-partnership",
  },
];
