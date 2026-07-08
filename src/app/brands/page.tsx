import Link from "next/link";
import { ArrowRight, Camera, Clapperboard, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { SocialLinks } from "@/components/SocialLinks";
import { ServiceProcessFlow } from "@/components/ServiceProcessFlow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { portfolioPhotos, portfolioVideos } from "@/data/portfolio";
import {
  ugcConfig,
  ugcDeliverables,
  ugcFocusAreas,
  ugcProcessSteps,
  ugcWhyBraie,
} from "@/data/ugc";
import { socialLinks } from "@/data/socialLinks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "For Brands — UGC & Social Media",
  description:
    "Partner with Braie Speed Swann for UGC videos, photos, and social content. 4+ years creating lifestyle, beauty, fitness, wellness, and sports content for brands.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/30 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/50 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {ugcConfig.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {ugcConfig.headline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {ugcConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact?type=brand-partnership">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-secondary shadow-xl ring-1 ring-border/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.heroImage}
              alt="Braie Speed Swann — UGC creator"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Focus Areas"
          title="Content that fits your category"
          description="Braie creates UGC across verticals where authenticity and performance matter."
          className="mb-8"
        />
        <div className="flex flex-wrap gap-3">
          {ugcFocusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Deliverables"
            title="What brands get"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {ugcDeliverables.map((item, i) => {
              const icons = [Clapperboard, Camera, Sparkles];
              const Icon = icons[i] ?? Clapperboard;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
                >
                  <Icon className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Process"
            title="How brand partnerships work"
            description="From brief to delivered assets — simple and clear."
          />
          <ServiceProcessFlow steps={ugcProcessSteps} />
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Braie"
            title="Creator + strategist, not just talent"
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {ugcWhyBraie.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured video & photo work"
          description="Sample UGC videos and lifestyle photos from recent brand collaborations — all hosted right here."
          className="mb-10"
        />
        <PortfolioGallery videos={portfolioVideos} photos={portfolioPhotos} />
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/videos">
              Watch Creator Content
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 flex justify-center">
          <SocialLinks links={socialLinks} />
        </div>
      </section>

      <div className="pb-16">
        <CTASection
          title="Ready to create with Braie?"
          description={`${ugcConfig.yearsExperience} years of UGC experience. Let's talk about your next campaign.`}
          primaryLabel="Inquire About a Collaboration"
          primaryHref="/contact?type=brand-partnership"
          secondaryLabel={`Email ${siteConfig.email}`}
          secondaryHref={`mailto:${siteConfig.email}`}
        />
      </div>
    </>
  );
}
