import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { credibilityStats, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { socialLinks } from "@/data/socialLinks";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/60 via-background to-background" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Judge · Creator · Educator
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Understand Gymnastics Like a Judge
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Former NCAA All-American gymnast, gymnastics judge, and creator
            helping athletes, parents, and coaches decode scoring and improve
            performance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/routine-breakdowns">
                Get a Routine Review
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/videos">Watch Braie-kdowns</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {credibilityStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-card/80 px-3 py-3 text-center backdrop-blur-sm"
              >
                <p className="text-sm font-bold text-foreground">{stat.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <SocialLinks links={socialLinks.slice(0, 4)} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-xl ring-1 ring-border/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.heroImage}
              alt="Braie Speed Swann"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border/50 sm:-left-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Routine Reviews
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {siteConfig.routineBreakdownPrice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
