import { createPageMetadata } from "@/lib/metadata";
import ShopClient from "./ShopClient";

export const metadata = createPageMetadata({
  title: "Shop",
  description:
    "Shop Maren's curated gymnastics favorites — gear, meet-day essentials, training tools, judge picks, and Amazon book recommendations.",
  path: "/shop",
});

export default function ShopPage() {
  return <ShopClient />;
}
