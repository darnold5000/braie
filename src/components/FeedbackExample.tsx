import { SectionHeading } from "@/components/SectionHeading";

const sampleFeedback = [
  {
    timestamp: "0:18",
    note: "Bent knees on Pak salto",
    deduction: "-0.10",
    tip: "Keep hips open before release for a cleaner line.",
  },
  {
    timestamp: "0:32",
    note: "Low cast angle",
    deduction: "-0.20",
    tip: "Drive shoulders over the bar earlier in the cast.",
  },
  {
    timestamp: "0:48",
    note: "Foot form on dismount",
    deduction: "-0.10",
    tip: "Point toes and hold shape through the landing.",
  },
];

export function FeedbackExample() {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Example"
          title="See what a Braie-kdown looks like"
          description="Real feedback format — timestamped deductions with coach and judge tips you can act on."
          className="mb-10"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
            <div className="aspect-video bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.youtube.com/vi/iPyMwnVXQnk/hqdefault.jpg"
                alt="Sample routine breakdown"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-foreground">
                Level 3 Bar Routine — Sample Clip
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                From the Braie-kdown series on YouTube
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {sampleFeedback.map((item) => (
              <div
                key={item.timestamp}
                className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.timestamp}
                  </span>
                  <span className="text-sm font-bold text-destructive">
                    {item.deduction}
                  </span>
                </div>
                <p className="mt-3 font-medium text-foreground">{item.note}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Coach tip: </span>
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
