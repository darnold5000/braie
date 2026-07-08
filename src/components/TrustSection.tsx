import { Handshake, Scale, Trophy, Video } from "lucide-react";
import { trustCards } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap = {
  trophy: Trophy,
  scale: Scale,
  video: Video,
  handshake: Handshake,
};

export function TrustSection() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credibility"
          title="Why the gymnastics community trusts Braie"
          description="Real credentials behind every breakdown, guide, and Braie-kdown."
          align="center"
          className="mx-auto mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
