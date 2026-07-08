"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import type { FeaturedContent } from "@/types";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/SocialLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type FeaturedContentGridProps = {
  items: FeaturedContent[];
};

const platformLabels: Record<FeaturedContent["platform"], string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
};

function PlatformIcon({ platform }: { platform: FeaturedContent["platform"] }) {
  const className = "h-3.5 w-3.5";
  if (platform === "youtube") return <YouTubeIcon className={className} />;
  if (platform === "instagram") return <InstagramIcon className={className} />;
  return <TikTokIcon className={className} />;
}

function FeaturedContentCard({ item }: { item: FeaturedContent }) {
  const [playing, setPlaying] = useState(false);
  const canPlayInline = Boolean(item.embedSrc);

  return (
    <article className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all hover:shadow-md">
      <div
        className={`relative overflow-hidden bg-secondary ${
          playing ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        {playing && item.embedSrc ? (
          <iframe
            src={`${item.embedSrc}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => canPlayInline && setPlaying(true)}
            className="group relative flex h-full w-full cursor-pointer items-center justify-center text-left"
            aria-label={`Play ${item.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className="max-h-full max-w-full object-contain"
            />
            {canPlayInline && (
              <span className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-primary shadow-lg">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>
              </span>
            )}
          </button>
        )}
        <Badge className="absolute left-3 top-3 gap-1 bg-background/90 text-foreground backdrop-blur-sm">
          <PlatformIcon platform={item.platform} />
          {platformLabels[item.platform]}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{item.title}</h3>
        {item.description && (
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {item.description}
          </p>
        )}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mt-3 h-auto px-0 text-primary hover:bg-transparent"
        >
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            Open on {platformLabels[item.platform]}
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </article>
  );
}

export function FeaturedContentGrid({ items }: FeaturedContentGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <FeaturedContentCard key={item.id} item={item} />
      ))}
    </div>
  );
}
