import fs from "fs";
import path from "path";
import type { PortfolioPhoto, PortfolioVideo } from "@/data/portfolio";

const IMAGE_DIR = path.join(process.cwd(), "public/portfolio/images");
const VIDEO_DIR = path.join(process.cwd(), "public/portfolio/videos");

const videoMeta: Record<string, { title: string; poster?: string }> = {
  "09c9596669d0f9e1605b4d0fca994f58": {
    title: "Featured UGC reel",
    poster: "a30d7e7f441dc6f132877a1dec6d713c.jpg",
  },
  "116688b5d8dcc0c27c51f55a4d0552fa": { title: "UGC video 1" },
  "2c86d3136edf29fbac6b3a19702cc993": { title: "UGC video 2" },
  "3f49c9c7f826adbadc17df333e6fe417": { title: "UGC video 3" },
  "5866bd39f4b33bd5226980fc0b608c40": { title: "UGC video 4" },
  "618e2f9fdb9568315f0bd5386524f16e": { title: "UGC video 5" },
  "78c4589cde34bb4b032a740f49e6dde3": { title: "UGC video 6" },
  "b0d9d8ce72ba7abc322ad89cdaab7d61": { title: "UGC video 7" },
  "e2cf37bd92003003d0de94ae5db34b51": { title: "UGC video 8" },
  "f56aacceb53c5e0733c2f498d4866440": { title: "UGC video 9" },
};

function listFiles(dir: string, pattern: RegExp): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => pattern.test(file))
    .sort();
}

export function getPortfolioPhotos(): PortfolioPhoto[] {
  return listFiles(IMAGE_DIR, /\.(jpe?g|png|webp)$/i).map((file) => ({
    id: file.replace(/\.[^.]+$/, ""),
    src: `/portfolio/images/${file}`,
    alt: "Braie Speed Swann UGC content",
  }));
}

export function getPortfolioVideos(): PortfolioVideo[] {
  const imageFiles = new Set(listFiles(IMAGE_DIR, /\.(jpe?g|png|webp)$/i));

  return listFiles(VIDEO_DIR, /\.mp4$/i).map((file, index) => {
    const id = file.replace(/\.[^.]+$/, "");
    const meta = videoMeta[id];
    const posterFile = meta?.poster;
    const poster =
      posterFile && imageFiles.has(posterFile)
        ? `/portfolio/images/${posterFile}`
        : null;

    return {
      id,
      src: `/portfolio/videos/${file}`,
      poster,
      title: meta?.title ?? `UGC video ${index + 1}`,
    };
  });
}
