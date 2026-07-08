import type { FeaturedContent } from "@/types";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/SocialLinks";
import { Badge } from "@/components/ui/badge";

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

export function FeaturedContentGrid({ items }: FeaturedContentGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="relative aspect-video overflow-hidden bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Badge className="absolute left-3 top-3 gap-1 bg-background/90 text-foreground backdrop-blur-sm">
              <PlatformIcon platform={item.platform} />
              {platformLabels[item.platform]}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-foreground group-hover:text-primary">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
