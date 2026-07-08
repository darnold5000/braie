import type { Product, ProductCategory } from "@/types";

export const productCategoryLabels: Record<ProductCategory, string> = {
  "gymnastics-gear": "Gymnastics Gear",
  "meet-day-essentials": "Meet Day Essentials",
  "training-tools": "Training Tools",
  "bags-accessories": "Bags & Accessories",
  "judge-favorites": "Judge Favorites",
  "amazon-favorites": "Amazon Favorites",
};

export const products: Product[] = [
  {
    id: "competition-journal",
    title: "My Gymnastics Competition Journal",
    description:
      "Meet logs, placing trackers, and goal-setting pages designed by Braie for gymnasts who want to stay organized all season.",
    category: "amazon-favorites",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
    affiliateUrl:
      "https://www.amazon.com/My-Gymnastics-Competition-Journal-gymnasts/dp/B09JJGTPMT",
    featured: true,
  },
  {
    id: "training-journal",
    title: "My Gymnastics Training Journal",
    description:
      "Practice logs and goal-setting workbook to help gymnasts track progress and stay motivated between meets.",
    category: "amazon-favorites",
    imageUrl:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=600&fit=crop",
    affiliateUrl:
      "https://www.amazon.com/Gymnastics-Training-Journal-Practice-Setting/dp/B09RJTJQH9",
    featured: true,
  },
  {
    id: "i-can-i-will",
    title: "I Can, I Will — Children's Confidence Book",
    description:
      "An inspiring children's book about confidence in sports, written by Braie to encourage young athletes.",
    category: "amazon-favorites",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    affiliateUrl:
      "https://www.amazon.com/can-will-Childrens-Confidence-Sports/dp/B09GZ98YC1",
    featured: true,
  },
  {
    id: "grip-bag",
    title: "Grip Bag & Wrist Care Kit",
    description:
      "Keep grips, tape, and pre-wrap organized in a compact bag — a meet-day must-have.",
    category: "meet-day-essentials",
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=gymnastics+grip+bag",
  },
  {
    id: "water-bottle",
    title: "Insulated Gym Bottle",
    description:
      "Stay hydrated through long practice sessions and all-day meets with a leak-proof insulated bottle.",
    category: "meet-day-essentials",
    imageUrl:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=insulated+water+bottle+gym",
  },
  {
    id: "resistance-bands",
    title: "Resistance Band Set",
    description:
      "Essential for conditioning, flexibility, and at-home strength work between gym days.",
    category: "training-tools",
    imageUrl:
      "https://images.unsplash.com/photo-1598289431512-b97afb0531dd?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=resistance+bands+set",
  },
  {
    id: "foam-roller",
    title: "Foam Roller",
    description:
      "Recovery tool for sore muscles after hard training — a coach and judge favorite for athlete self-care.",
    category: "training-tools",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=foam+roller",
  },
  {
    id: "leotard",
    title: "Competition Leotard",
    description:
      "Classic, comfortable leotard styles that hold up through routines and meet-day nerves.",
    category: "gymnastics-gear",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=girls+gymnastics+leotard",
  },
  {
    id: "gym-bag",
    title: "Multi-Compartment Gym Bag",
    description:
      "Room for leos, shoes, snacks, and meet essentials — built for long competition days.",
    category: "bags-accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=gymnastics+gym+bag",
  },
  {
    id: "clipboard",
    title: "Judge Clipboard & Pen Set",
    description:
      "A sturdy clipboard for score sheets and notes — perfect for aspiring judges and coaches.",
    category: "judge-favorites",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=coaching+clipboard",
  },
  {
    id: "hair-kit",
    title: "Meet Day Hair Kit",
    description:
      "Bun makers, gel, and bobby pins to keep competition hair secure through every routine.",
    category: "meet-day-essentials",
    imageUrl:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=gymnastics+bun+maker",
  },
  {
    id: "chalk",
    title: "Gym Chalk & Hand Care",
    description:
      "Better grip for bars and a little extra confidence on release moves.",
    category: "gymnastics-gear",
    imageUrl:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=600&fit=crop",
    affiliateUrl: "https://www.amazon.com/s?k=gymnastics+chalk",
  },
];
