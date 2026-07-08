import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Routine breakdowns, judge Q&A sessions, meet prep reviews, choreography feedback, and brand collaborations with Braie Speed Swann.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Work With Braie"
          description="Routine reviews are the main offering. Q&A sessions, meet prep, and brand collaborations are also available."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <div className="pb-16">
        <CTASection
          title="Not sure which service fits?"
          description="Send a message and I'll point you in the right direction."
          primaryLabel="Contact Braie"
          primaryHref="/contact"
          secondaryLabel="Routine Breakdowns"
          secondaryHref="/routine-breakdowns"
        />
      </div>
    </>
  );
}
