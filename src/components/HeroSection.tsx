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
            Former NCAA All-American · Judge · Creator
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Helping the gymnastics community learn, improve, and connect.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I&apos;m Braie—a former NCAA All-American gymnast, gymnastics judge, and
            creator. Through educational content, routine reviews, product
            recommendations, and brand partnerships, I share trusted insights that
            help athletes, parents, coaches, and the companies that serve them.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/learn">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/braie-kdowns">Get a Braie-kdown</Link>
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
          <div className="aspect-square overflow-hidden rounded-3xl bg-secondary shadow-xl ring-1 ring-border/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.heroImage}
              alt="Braie Speed Swann"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
