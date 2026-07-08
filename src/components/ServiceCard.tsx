import Link from "next/link";
import type { Service } from "@/types";
import { ArrowRight, Clock, Users } from "lucide-react";
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
import { ServiceProcessFlow } from "@/components/ServiceProcessFlow";

type ServiceCardProps = {
  service: Service;
  showProcess?: boolean;
};

export function ServiceCard({ service, showProcess = true }: ServiceCardProps) {
  const isExternal = service.ctaHref.startsWith("http");

  return (
    <Card className="relative flex h-full flex-col overflow-hidden rounded-2xl border-border/70 shadow-sm transition-shadow hover:shadow-md">
      {service.mostPopular && (
        <div className="absolute -right-8 top-5 z-10 rotate-45 bg-primary px-10 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-md">
          Most Popular
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-3 pr-6">
          <CardTitle className="text-xl">{service.title}</CardTitle>
          {service.featured && !service.mostPopular && (
            <Badge variant="secondary">Popular</Badge>
          )}
        </div>
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-3">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{service.audience}</span>
        </div>
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{service.turnaround}</span>
        </div>
        {service.showPrice && service.price && (
          <p className="text-sm font-semibold text-foreground">{service.price}</p>
        )}
        {showProcess && service.processSteps && (
          <ServiceProcessFlow steps={service.processSteps} />
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full rounded-full">
          {isExternal ? (
            <a href={service.ctaHref} target="_blank" rel="noopener noreferrer">
              {service.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <Link href={service.ctaHref}>
              {service.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
