import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { socialLinks } from "@/data/socialLinks";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/80 via-background to-background" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Former Elite & NCAA All-American
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.fullName}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Braie-kdowns, judging insights, and personalized routine feedback
            for gymnasts, parents, and coaches.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/routine-breakdowns">
                Book a Routine Breakdown
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/shop">Shop My Favorites</Link>
            </Button>
          </div>
          <div className="mt-8">
            <SocialLinks links={socialLinks.slice(0, 4)} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-xl ring-1 ring-border/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=1000&fit=crop"
              alt="Gymnastics athlete training"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border/50 sm:-left-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Video Critiques
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
