import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Heart, Scale } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { brandBio, siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Maren Cole — former Elite and NCAA All-American gymnast, USAG judge, educator, and creator behind the Score Note series.",
  path: "/about",
});

const highlights = [
  {
    icon: Award,
    title: "Elite & NCAA All-American",
    description:
      "Full-ride gymnast at the a Division I program. 2017 Regional Vault Champion and National Championships qualifier.",
  },
  {
    icon: Scale,
    title: "Judge & Educator",
    description:
      "USAG judge and educator helping the gymnastics community understand scoring from the inside.",
  },
  {
    icon: GraduationCap,
    title: "Sports Communication",
    description:
      "BS in Sports Management with a Communications minor — combining athletic expertise with clear, accessible teaching.",
  },
  {
    icon: Heart,
    title: "Creator & Mom",
    description:
      "4+ years of UGC content creation across lifestyle, parenting, fitness, and sports — plus a first-time mom perspective.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="About Maren"
              title={siteConfig.fullName}
              description={brandBio.short}
            />
            <div className="aspect-square overflow-hidden rounded-3xl bg-secondary shadow-lg ring-1 ring-border/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.heroImage}
                alt="Maren Cole"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="prose prose-neutral max-w-none">
          {brandBio.full.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-4 text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
            >
              <item.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-accent/40 p-8">
          <h3 className="text-xl font-semibold">Mission</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Helping athletes and parents understand scoring — breaking down routines,
            explaining deductions, and making judging concepts accessible through
            the Score Note series and personalized feedback.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <Link href="/braie-kdowns">
                Get a Score Note
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-lg font-semibold">Follow along</h3>
          <SocialLinks links={socialLinks} />
        </div>
      </section>

      <div className="pb-16">
        <CTASection
          title="Let's work together"
          description="Routine reviews, judging questions, or brand partnerships — I'd love to hear from you."
          primaryLabel="Contact Maren"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </div>
    </>
  );
}
