import { Suspense } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import type { InquiryType } from "@/types";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Maren for routine breakdowns, judging questions, brand partnerships, and general inquiries.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ type?: string }>;
};

function ContactFormWrapper({ defaultType }: { defaultType?: InquiryType }) {
  return <ContactForm defaultInquiryType={defaultType} />;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const validTypes: InquiryType[] = [
    "routine-breakdown",
    "judging-question",
    "brand-partnership",
    "general",
  ];
  const defaultType = validTypes.includes(params.type as InquiryType)
    ? (params.type as InquiryType)
    : undefined;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Questions about routine breakdowns, judging, brand collabs, or anything gymnastics — send a message."
          />

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 transition-colors hover:border-primary/30"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
              </div>
            </a>
            <a
              href={siteConfig.smeepleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 transition-colors hover:border-primary/30"
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Book a live session</p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.consultationPrice} on Smeeple
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
          <Suspense fallback={<ContactForm />}>
            <ContactFormWrapper defaultType={defaultType} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
