"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { PortfolioPhoto, PortfolioVideo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

type PortfolioGalleryProps = {
  videos: PortfolioVideo[];
  photos: PortfolioPhoto[];
};

export function PortfolioGallery({ videos, photos }: PortfolioGalleryProps) {
  const [activePhoto, setActivePhoto] = useState<PortfolioPhoto | null>(null);

  return (
    <div className="space-y-14">
      <div>
        <h3 className="mb-6 text-lg font-semibold text-foreground">Video work</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
            >
              <video
                src={video.src}
                poster={video.poster ?? undefined}
                controls
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full bg-secondary object-cover sm:aspect-video"
              >
                <track kind="captions" />
              </video>
              <p className="px-4 py-3 text-sm font-medium text-foreground">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-semibold text-foreground">Photo work</h3>
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {photos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActivePhoto(photo)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
          onClick={() => setActivePhoto(null)}
        >
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute right-4 top-4 rounded-full"
            onClick={() => setActivePhoto(null)}
            aria-label="Close preview"
          >
            <X className="h-4 w-4" />
          </Button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
