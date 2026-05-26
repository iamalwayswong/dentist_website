import type { Metadata } from 'next';
import {
  Breadcrumb,
  Container,
  CTASection,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { webPageSchema } from '@/lib/schemas';
import { site } from '@/site.config';

const PAGE_TITLE = 'Your First Visit';
const PAGE_DESCRIPTION = `What to expect at your first visit to ${site.brand} — exam, digital scans, treatment plan, and a clear next step.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/new-patients/first-visit',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Your First Visit', href: '/new-patients/first-visit' },
];

/* TODO: Replace with practice-specific copy */
const steps = [
  {
    title: 'Warm welcome',
    description:
      "Our front desk team greets you, confirms paperwork, and gets you settled. Plan on about 60 minutes for the full visit.",
  },
  {
    title: 'Medical & dental history',
    description:
      "We review your overall health, any prior orthodontic work, and ask about your goals — what you'd like to change about your smile.",
  },
  {
    title: 'Exam & digital scan',
    description:
      "The orthodontist completes a clinical exam. We may take a quick 3D digital scan and a few X-rays (depending on your case).",
  },
  {
    title: 'Treatment plan',
    description:
      "Together we review options — braces, Invisalign, retainers — and the orthodontist recommends the best fit. You'll see expected timeline and visual previews.",
  },
  {
    title: 'Financing review',
    description:
      "We walk through total cost, insurance coverage, and payment plans. Everything in writing — no surprises later.",
  },
  {
    title: 'Next steps',
    description:
      "You leave with a clear understanding of what's next. No pressure to start same-day. Many patients want to talk it over at home, and we welcome that.",
  },
];

export default function FirstVisitPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/new-patients/first-visit',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container size="narrow">
          <header className="flex flex-col gap-6 mb-12">
            <Heading as="h1" size="xl">
              Your first visit
            </Heading>
            <Text size="xl" tone="muted">
              Most first visits take about an hour. Here&apos;s exactly what
              happens, step by step, so you know what to expect.
            </Text>
          </header>

          <ol className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="border-2 border-border rounded-xl p-6 flex gap-4"
              >
                <span className="text-accent text-3xl font-bold shrink-0">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <Heading as="h2" size="sm">
                    {step.title}
                  </Heading>
                  <Text tone="muted">{step.description}</Text>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
