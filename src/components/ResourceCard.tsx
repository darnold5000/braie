import type { Resource } from "@/types";
import { ArrowRight } from "lucide-react";
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

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const isExternal = resource.href.startsWith("http");

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-border/70 shadow-sm transition-shadow hover:shadow-md">
      {resource.imageUrl && (
        <div className="aspect-[16/10] overflow-hidden bg-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant={resource.type === "free" ? "secondary" : "default"}>
            {resource.type === "free" ? "Free" : resource.price ?? "Paid"}
          </Badge>
        </div>
        <CardTitle className="text-xl">{resource.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="w-full rounded-full">
          {isExternal ? (
            <a href={resource.href} target="_blank" rel="noopener noreferrer">
              {resource.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <a href={resource.href}>
              {resource.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          )}
        </Button>
      </CardFooter>
      <CardContent className="hidden" />
    </Card>
  );
}
