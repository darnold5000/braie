import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";
import { SocialLinks } from "@/components/SocialLinks";
import { Separator } from "@/components/ui/separator";

const footerNav = mainNavItems.filter((item) => item.href !== "/");

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-semibold text-foreground">
              {siteConfig.fullName}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="mt-5">
              <SocialLinks links={socialLinks} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.smeepleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Book on Smeeple
                </a>
              </li>
              <li>Score Notes: {siteConfig.routineBreakdownPrice}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <p className="text-xs">
            Digital products on{" "}
            <a
              href={siteConfig.stanStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              Stan
            </a>
            . Amazon links may earn a commission.
          </p>
        </div>
      </div>

      <div className="border-t border-border/40 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-3 sm:flex-row sm:px-6">
          <p className="text-xs text-muted-foreground">
            Powered by{" "}
            <a
              href="https://hiresignalworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Signal Works
            </a>
          </p>
          <a
            href="https://hiresignalworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <span>Hosting · Security · SEO · Analytics · Monthly Improvements</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
