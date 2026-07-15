import type { FeaturedContent } from "@/types";

const yt = (id: string) => ({
  href: `https://www.youtube.com/watch?v=${id}`,
  thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  embedSrc: `https://www.youtube-nocookie.com/embed/${id}`,
});

export const featuredContent: FeaturedContent[] = [
  {
    id: "level-3-bars",
    title: "Level 3 Bar Routine — Through a Judge's Eyes",
    platform: "youtube",
    description: "Full compulsory bar routine breakdown from a judge's perspective",
    ...yt("mMon79hVmS8"),
  },
  {
    id: "cast-deductions",
    title: "Know These Cast Deductions",
    platform: "youtube",
    description: "Deductions of the day: cast angles by level",
    ...yt("iPyMwnVXQnk"),
  },
  {
    id: "become-a-judge",
    title: "How to Become a Gymnastics Judge",
    platform: "youtube",
    description: "Episode 1: where to start and how to study",
    ...yt("Dv92Wwg_NQ8"),
  },
  {
    id: "vault-judging",
    title: "Level 4 & 5 Vault — Judge's Perspective",
    platform: "youtube",
    description: "Front handspring vault deductions explained",
    ...yt("AL0idQQ_XdA"),
  },
  {
    id: "level-3-deductions",
    title: "Level 3 Bar Routine — What Are the Deductions?",
    platform: "youtube",
    description: "Spotting common bar deductions in compulsory routines",
    ...yt("Nsq2-LI9vfw"),
  },
  {
    id: "d1-texas",
    title: "Why Is There No D1 Gymnastics in Texas?",
    platform: "youtube",
    description: "NCAA gymnastics, Texas clubs, and the case for a home-state team",
    ...yt("pw9Kh5_WR3k"),
  },
];
