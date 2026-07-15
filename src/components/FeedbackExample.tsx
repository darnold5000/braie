"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const sampleVideo = {
  title: "Level 3 Bar Routine — Through a Judge's Eyes",
  description: "From the Score Notes series on YouTube",
  embedSrc: "https://www.youtube-nocookie.com/embed/mMon79hVmS8",
  thumbnailUrl: "https://img.youtube.com/vi/mMon79hVmS8/hqdefault.jpg",
};

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
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-secondary/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Example"
          title="See what a Score Note looks like"
          description="Real feedback format — timestamped deductions with coach and judge tips you can act on."
          className="mb-10"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
            <div className="relative aspect-video bg-secondary">
              {playing && sampleVideo.embedSrc ? (
                <iframe
                  src={`${sampleVideo.embedSrc}?rel=0`}
                  title={sampleVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => sampleVideo.embedSrc && setPlaying(true)}
                  className="group relative flex h-full w-full items-center justify-center"
                  aria-label={sampleVideo.embedSrc ? `Play ${sampleVideo.title}` : sampleVideo.title}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sampleVideo.thumbnailUrl}
                    alt={sampleVideo.title}
                    className="h-full w-full object-cover"
                  />
                  {sampleVideo.embedSrc ? (
                    <span className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/30">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-primary shadow-lg">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </span>
                    </span>
                  ) : null}
                </button>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-foreground">{sampleVideo.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{sampleVideo.description}</p>
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
