import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { OfferingIcons } from "@/components/OfferingIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ResourceCard } from "@/components/ResourceCard";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FeaturedContentGrid } from "@/components/FeaturedContentGrid";
import { Button } from "@/components/ui/button";
import { brandBio, siteConfig } from "@/data/site";
import { products } from "@/data/products";
import { resources } from "@/data/resources";
import { featuredContent } from "@/data/featuredContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Former NCAA All-American · Judge · Creator",
  description:
    "Maren Cole helps the gymnastics community learn, improve, and connect — through educational content, Score Notes, product recommendations, and brand partnerships.",
  path: "/",
});

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);
  const featuredLearn = resources.slice(0, 3);

  return (
    <>
      <HeroSection />
      <TrustSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Meet Maren"
            title="Trusted insights for the whole gymnastics community"
            description="From free education and Score Notes to product picks and brand partnerships — everything Maren shares is built to help people learn, improve, and connect."
          />
          <div className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              {brandBio.short}
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/about">
                Read My Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <OfferingIcons />

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Learn"
              title="Free guides & judging tips"
              description="Downloads, worksheets, and education from Maren's library — the same ideas behind her videos."
            />
            <Button asChild variant="ghost" className="shrink-0 rounded-full">
              <Link href="/learn">Explore Learn</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredLearn.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Videos"
            title="Don't take my word for it — watch"
            description="Score Notes, deduction explainers, and judging education on Instagram, TikTok, and YouTube."
          />
          <Button asChild variant="ghost" className="shrink-0 rounded-full">
            <Link href="/videos">All videos</Link>
          </Button>
        </div>
        <FeaturedContentGrid items={featuredContent.slice(0, 6)} />
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Shop"
              title="Maren's favorites"
              description="Meet essentials, equipment picks, level breakdowns, and affiliate favorites."
            />
            <Button asChild variant="ghost" className="shrink-0 rounded-full">
              <Link href="/shop">Browse the shop</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-border/70 bg-card p-8 sm:p-10">
          <SectionHeading
            eyebrow="Newsletter"
            title="Judging tips in your inbox"
            description="New Score Notes, learn page drops, and openings for personalized feedback."
            className="mb-6"
          />
          <NewsletterSignup />
        </div>
      </section>

      <div className="pb-16">
        <CTASection
          title="Ready for your own Score Note?"
          description={`Send in a practice video and get detailed judge-level analysis. ${siteConfig.routineBreakdownPrice}.`}
          primaryLabel="Get a Score Note"
          primaryHref="/braie-kdowns"
          secondaryLabel="Watch Videos"
          secondaryHref="/videos"
        />
      </div>
    </>
  );
}
