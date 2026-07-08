"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  products,
  productCategoryLabels,
} from "@/data/products";
import type { ProductCategory } from "@/types";

export default function ShopClient() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");

  const filtered = useMemo(() => {
    if (category === "all") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  const categories = Object.entries(productCategoryLabels) as [
    ProductCategory,
    string,
  ][];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Shop"
          title="Braie's personal favorites"
          description="Level breakdowns, event packages, and books — curated from her Stan store and Amazon."
          className="mb-8"
        />

      <Tabs
        value={category}
        onValueChange={(v) => setCategory((v ?? "all") as ProductCategory | "all")}
        className="mb-10"
      >
        <TabsList className="h-auto flex-wrap justify-start gap-1 bg-secondary/60 p-1">
          <TabsTrigger value="all" className="rounded-full">
            All
          </TabsTrigger>
          {categories.map(([key, label]) => (
            <TabsTrigger key={key} value={key} className="rounded-full">
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Digital products open on{" "}
        <a
          href="https://stan.store/JudgeBraie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-2 hover:underline"
        >
          stan.store/JudgeBraie
        </a>
        . Amazon links may earn a commission at no extra cost to you.
      </p>
    </section>
  );
}
