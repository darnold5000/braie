import Link from "next/link";
import { ArrowRight, BookOpen, Download, GraduationCap, Play } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ResourceCard } from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { resources } from "@/data/resources";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Learn",
  description:
    "Learn gymnastics judging with Braie Speed Swann — free guides, downloads, judging tips, parent resources, and published books.",
  path: "/learn",
});

const learnSections = [
  {
    icon: Download,
    title: "Free guides & downloads",
    description: "Score sheet guides, meet prep checklists, and worksheets — built for gymnasts, parents, and coaches.",
  },
  {
    icon: GraduationCap,
    title: "Judging tips & education",
    description: "Level-by-level breakdowns and deduction explainers from Braie's Braie-kdown series.",
  },
  {
    icon: BookOpen,
    title: "Books & journals",
    description: "Published workbooks and Braie's children's book on confidence in sports.",
  },
];

export default function LearnPage() {
  const freeResources = resources.filter((r) => r.type === "free");
  const paidResources = resources.filter((r) => r.type === "paid");
  const judgingTips = freeResources.filter((r) =>
    ["level-tips", "become-a-judge"].includes(r.id),
  );
  const guidesAndDownloads = freeResources.filter(
    (r) => !["level-tips", "become-a-judge"].includes(r.id),
  );

  return (
    <>
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Learn with Braie"
            title="Gymnastics education, explained"
            description="Braie's educational hub — free resources, judging tips, downloads, and books to help the gymnastics community understand scoring."
            className="mx-auto max-w-3xl text-center"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {learnSections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-border/70 bg-card p-6 text-center shadow-sm"
              >
                <section.icon className="mx-auto mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Free guides"
          title="Downloads & worksheets"
          description="Practical tools to stay organized and understand meet scoring."
          className="mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guidesAndDownloads.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Judging tips"
              title="Watch & learn with Braie"
              description="The Braie-kdown series on YouTube, Instagram, and TikTok — level breakdowns, deductions, and judging education."
            />
            <Button asChild variant="outline" className="shrink-0 rounded-full">
              <Link href="/videos">
                All videos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {judgingTips.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-6">
            <Play className="h-8 w-8 shrink-0 text-primary" />
            <div className="flex-1">
              <p className="font-medium text-foreground">How to Become a Gymnastics Judge</p>
              <p className="text-sm text-muted-foreground">
                Braie&apos;s multi-episode YouTube series — where to start, how to study, and judging tips.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-full">
              <a
                href="https://www.youtube.com/@BraieSwann"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch series
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Books"
          title="Published books & journals"
          description="Workbooks and reading for gymnasts and families — also available in the shop."
          className="mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paidResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/shop">
              Browse shop & PDF library
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
