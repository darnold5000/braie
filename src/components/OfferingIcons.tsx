import Link from "next/link";
import { ArrowRight, BookOpen, Camera, ClipboardList } from "lucide-react";
import { homepageOfferings } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const iconMap = {
  clipboard: ClipboardList,
  book: BookOpen,
  camera: Camera,
};

export function OfferingIcons() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Work With Braie"
        title="Judging education, routine reviews, and more"
        description="The main ways athletes, parents, coaches, and brands connect with Braie."
        className="mb-10"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {homepageOfferings.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-border/70 bg-card p-8 text-center shadow-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <Button asChild variant="ghost" className="mt-5 rounded-full">
                <Link href={item.href}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
