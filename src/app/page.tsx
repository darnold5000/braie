import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { ResourceCard } from "@/components/ResourceCard";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FeaturedContentGrid } from "@/components/FeaturedContentGrid";
import { Button } from "@/components/ui/button";
import { brandBio, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { resources } from "@/data/resources";
import { featuredContent } from "@/data/featuredContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gymnastics Judge, Creator & Routine Breakdown Specialist",
  description:
    "Get gymnastics routine breakdowns, judging insights, meet prep resources, and curated gymnastics favorites from Braie.",
  path: "/",
});

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);
  const featuredProducts = products.filter((p) => p.featured);
  const featuredResources = resources.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="About"
            title="Judging insights from someone who's been there"
            description={brandBio.short}
          />
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              From Elite and NCAA All-American experience to coaching, judging,
              and creating the Braie-kdown series — I help the gymnastics
              community understand scoring and perform with confidence.
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

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="How I can help"
              description="Routine breakdowns, judging Q&A, meet prep, and brand collaborations."
            />
            <Button asChild variant="ghost" className="rounded-full shrink-0">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Shop"
            title="Braie's favorites"
            description="Books, gear, and meet-day essentials I recommend."
          />
          <Button asChild variant="ghost" className="rounded-full shrink-0">
            <Link href="/shop">Browse the shop</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Resources"
              title="Guides, journals & free downloads"
              description="Score sheets, meet prep checklists, and level-specific tips."
            />
            <Button asChild variant="ghost" className="rounded-full shrink-0">
              <Link href="/resources">All resources</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Content"
          title="Follow for gymnastics judging tips"
          description="Braie-kdowns, deduction explainers, and coaching content on Instagram, TikTok, and YouTube."
          className="mb-10"
        />
        <FeaturedContentGrid items={featuredContent.slice(0, 6)} />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-border/70 bg-card p-8 sm:p-10">
          <SectionHeading
            eyebrow="Newsletter"
            title="Get judging tips in your inbox"
            description="Occasional updates on new Braie-kdowns, resources, and routine review openings."
            className="mb-6"
          />
          <NewsletterSignup />
        </div>
      </section>

      <div className="pb-16">
        <CTASection
          title="Ready for feedback on your routine?"
          description={`Send in a practice video and get a detailed Braie-kdown-style analysis. ${siteConfig.routineBreakdownPrice}.`}
          primaryLabel="Book a Routine Breakdown"
          primaryHref="/routine-breakdowns"
          secondaryLabel="Ask a Question"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}
