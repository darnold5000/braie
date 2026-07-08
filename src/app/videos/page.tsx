import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedContentGrid } from "@/components/FeaturedContentGrid";
import { CTASection } from "@/components/CTASection";
import { SocialLinks } from "@/components/SocialLinks";
import { featuredContent } from "@/data/featuredContent";
import { socialLinks } from "@/data/socialLinks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Latest Videos",
  description:
    "Watch Braie-kdowns, judging explainers, and gymnastics education on Instagram, TikTok, and YouTube.",
  path: "/videos",
});

export default function VideosPage() {
  return (
    <>
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Videos"
            title="Latest from Braie"
            description="The Braie-kdown series — showing the gymnastics community how judges see routines, deductions, and scoring."
            className="mx-auto max-w-2xl text-center"
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <SocialLinks links={socialLinks.slice(0, 3)} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FeaturedContentGrid items={featuredContent} />
      </section>

      <div className="pb-16">
        <CTASection
          title="Want feedback on your own routine?"
          description="Get a personalized video breakdown from a judge's perspective."
          primaryLabel="Get a Braie-kdown"
          primaryHref="/braie-kdowns"
          secondaryLabel="Explore Learn"
          secondaryHref="/learn"
        />
      </div>
    </>
  );
}
