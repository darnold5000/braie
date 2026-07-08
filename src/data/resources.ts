import type { Resource } from "@/types";

export const resources: Resource[] = [
  {
    id: "score-sheet-guide",
    title: "Parent Guide to Reading Score Sheets",
    description:
      "A plain-language walkthrough of how meet scores work — start value, execution, and what those numbers actually mean for your gymnast.",
    type: "free",
    ctaLabel: "Coming Soon",
    href: "/contact?type=judging-question",
  },
  {
    id: "meet-prep-checklist",
    title: "Meet Prep Checklist",
    description:
      "Everything to pack, practice, and review the week before a competition — from grips to mental prep.",
    type: "free",
    ctaLabel: "Coming Soon",
    href: "/contact?type=general",
  },
  {
    id: "competition-journal",
    title: "My Gymnastics Competition Journal",
    description:
      "Track meet results, set goals, and reflect on progress all season long. Available on Amazon.",
    type: "paid",
    price: "See Amazon",
    ctaLabel: "View on Amazon",
    href: "https://www.amazon.com/My-Gymnastics-Competition-Journal-gymnasts/dp/B09JJGTPMT",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
  },
  {
    id: "training-journal",
    title: "My Gymnastics Training Journal",
    description:
      "Practice logs and goal-setting pages to build consistency and accountability in training.",
    type: "paid",
    price: "See Amazon",
    ctaLabel: "View on Amazon",
    href: "https://www.amazon.com/Gymnastics-Training-Journal-Practice-Setting/dp/B09RJTJQH9",
    imageUrl:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop",
  },
  {
    id: "level-tips",
    title: "Level-Specific Judging Tips",
    description:
      "Follow the Braie-kdown series on Instagram and YouTube for level-by-level breakdowns of common deductions and skills.",
    type: "free",
    ctaLabel: "Watch on YouTube",
    href: "https://www.youtube.com/@BraieSwann",
  },
  {
    id: "routine-worksheet",
    title: "Routine Review Worksheet",
    description:
      "A self-guided worksheet to help gymnasts and coaches identify strengths and deduction patterns before sending in a video review.",
    type: "free",
    ctaLabel: "Request via Contact",
    href: "/contact?type=routine-breakdown",
  },
  {
    id: "i-can-i-will",
    title: "I Can, I Will",
    description:
      "Braie's children's book on building confidence through sports — perfect for young gymnasts and their families.",
    type: "paid",
    price: "See Amazon",
    ctaLabel: "View on Amazon",
    href: "https://www.amazon.com/can-will-Childrens-Confidence-Sports/dp/B09GZ98YC1",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    id: "become-a-judge",
    title: "How to Become a Gymnastics Judge (Series)",
    description:
      "Step-by-step guidance on getting started, studying the code, and building confidence as a new judge.",
    type: "free",
    ctaLabel: "Watch Episode 1",
    href: "https://www.youtube.com/watch?v=Dv92Wwg_NQ8",
  },
];
