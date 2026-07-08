import { SectionHeading } from "@/components/SectionHeading";
import { ResourceCard } from "@/components/ResourceCard";
import { resources } from "@/data/resources";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Resources",
  description:
    "Free and paid gymnastics resources — score sheet guides, meet prep checklists, competition journals, and judging tip series.",
  path: "/resources",
});

export default function ResourcesPage() {
  const freeResources = resources.filter((r) => r.type === "free");
  const paidResources = resources.filter((r) => r.type === "paid");

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Resources"
          title="Guides, journals & downloads"
          description="Tools to help gymnasts, parents, and coaches understand scoring and stay organized all season."
          className="mb-12"
        />

        <div className="mb-14">
          <h3 className="mb-6 text-xl font-semibold">Free Resources</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {freeResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">Books & Paid Resources</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paidResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
