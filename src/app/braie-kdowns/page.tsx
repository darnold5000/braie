import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { RoutineBreakdownForm } from "@/components/RoutineBreakdownForm";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { FeedbackExample } from "@/components/FeedbackExample";
import {
  CheckCircle2,
  ClipboardList,
  Sparkles,
  Upload,
  Video,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Braie-kdowns",
  description:
    "Get a personalized Braie-kdown from USAG judge Braie Speed Swann. Detailed video analysis covering start value, execution, composition, artistry, and deductions.",
  path: "/braie-kdowns",
});

const feedbackCategories = [
  {
    title: "Start Value",
    description: "Skill values, connections, and composition requirements for your level.",
  },
  {
    title: "Execution",
    description: "Form, amplitude, and technique deductions judges commonly take.",
  },
  {
    title: "Composition",
    description: "Routine construction, special requirements, and missing elements.",
  },
  {
    title: "Artistry",
    description: "Presentation, choreography, and performance quality on beam and floor.",
  },
  {
    title: "Deductions to Watch",
    description: "The biggest score impact areas and how to fix them before meet day.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Submit your video",
    description: "Share a practice routine link or email your video directly.",
  },
  {
    icon: Video,
    title: "Get your Braie-kdown",
    description: "Recorded analysis from a coach and judge's perspective.",
  },
  {
    icon: ClipboardList,
    title: "Review & apply",
    description: "Actionable feedback sent within 7–14 business days (Mondays).",
  },
];

const faqs = [
  {
    q: "Can you score my meet routine?",
    a: "Critiques are analysis only. Per judging code of conduct, I cannot provide final scores for routines already judged at an official meet.",
  },
  {
    q: "What videos work best?",
    a: "Practice routines filmed from a clear angle work great. Competition footage is fine for critique purposes, but scores cannot be reassigned.",
  },
  {
    q: "How do I pay?",
    a: `Venmo ${siteConfig.venmo} at ${siteConfig.routineBreakdownPrice}. Payment details are included after you submit your request.`,
  },
];

export default function BraieKdownsPage() {
  return (
    <>
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Braie-kdowns"
            title="Your routine, through Braie's eyes"
            description={`Personalized video analysis from a judge and former NCAA All-American. Reviews sent every Monday.`}
            className="mx-auto text-center"
            align="center"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Why Braie-kdowns"
          title="Judge-level feedback you can actually use"
          description="This isn't a generic comment — it's the same lens Braie uses in her educational content, applied to your athlete's routine."
          className="mb-8"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feedbackCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{cat.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <FeedbackExample />

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title="Three simple steps"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-card p-6 shadow-sm">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <step.icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Pricing"
              title="Submit your routine"
              description={`${siteConfig.routineBreakdownPrice}. Fill out the form and include a shareable video link — or email your video directly.`}
            />
            <div className="mt-6 rounded-2xl bg-accent/50 p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 text-primary" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Direct email option</p>
                  <a
                    href={`mailto:${siteConfig.videoReviewEmail}`}
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {siteConfig.videoReviewEmail}
                  </a>
                </div>
              </div>
            </div>

            <Accordion className="mt-8">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
            <RoutineBreakdownForm />
          </div>
        </div>
      </section>
    </>
  );
}
