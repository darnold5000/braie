import type { Product } from "@/types";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productCategoryLabels } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

function affiliateCtaLabel(url: string) {
  if (url.includes("stan.store")) return "Buy on Stan";
  if (url.includes("amazon.com")) return "View on Amazon";
  return "Visit Affiliate Link";
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border-border/70 shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="outline" className="w-fit">
            {productCategoryLabels[product.category]}
          </Badge>
          {product.price && (
            <Badge variant="secondary" className="w-fit">
              {product.price}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg leading-snug">{product.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="w-full rounded-full">
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            {affiliateCtaLabel(product.affiliateUrl)}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
      <CardContent className="hidden" />
    </Card>
  );
}
