import Link from "next/link";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";
import { SocialLinks } from "@/components/SocialLinks";
import { Separator } from "@/components/ui/separator";

const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/routine-breakdowns", label: "Routine Breakdowns" },
  { href: "/shop", label: "Shop" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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
              <li>Routine reviews: {siteConfig.routineBreakdownPrice}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <p className="text-xs">
            Affiliate links may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            Built &amp; powered by{" "}
            <a
              href="https://hiresignalworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Signal Works
            </a>
          </p>
          <p className="mt-1.5 text-xs text-muted-foreground/80">
            Website • Hosting • Security • SEO • Analytics • Ongoing Improvements
          </p>
        </div>
      </div>
    </footer>
  );
}
