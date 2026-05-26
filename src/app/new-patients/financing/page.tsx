import type { Metadata } from 'next';
import {
  Breadcrumb,
  Container,
  CTASection,
  FAQ,
  Grid,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { webPageSchema } from '@/lib/schemas';
import { practice, site } from '@/site.config';

const PAGE_TITLE = 'Financing & Insurance';
const PAGE_DESCRIPTION = `Transparent pricing and flexible payment plans at ${site.brand}. We accept most major insurance providers and offer interest-free financing.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/new-patients/financing',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Financing', href: '/new-patients/financing' },
];

/* TODO: Replace with practice-specific copy */
const highlights = [
  {
    title: 'Interest-free payment plans',
    description:
      'Monthly plans that fit your budget — no interest, no hidden fees. Choose 12, 24, or custom payment lengths.',
  },
  {
    title: 'Paid-in-full discount',
    description:
      'Pay your treatment total upfront and receive a discount. Ask us about current offers at your consultation.',
  },
  {
    title: 'HSA / FSA accepted',
    description:
      'Use your pre-tax health spending dollars toward orthodontic care.',
  },
  {
    title: 'Most major insurance',
    description:
      "We're in-network with most large carriers. We handle the paperwork and bill your insurance directly.",
  },
];

const faqs = [
  {
    question: 'How much does orthodontic treatment cost?',
    answer:
      'Cost varies based on the complexity of your case and treatment type. Most braces and Invisalign cases range from $4,000–$7,500. You receive a complete, written quote during your free consultation — no surprises.',
  },
  {
    question: 'Do you accept my insurance?',
    answer: `We accept ${practice.insuranceAccepted.join(', ')}, and many others. Bring your insurance card to your consultation and we'll verify coverage on the spot.`,
  },
  {
    question: 'Can I use a Health Savings Account (HSA)?',
    answer:
      "Yes. Orthodontic treatment is HSA- and FSA-eligible for both you and your dependents. We'll provide receipts and any documentation your plan requires.",
  },
  {
    question: 'What if I lose my job during treatment?',
    answer:
      "Reach out — we genuinely understand. We can pause payments, adjust your plan, or work out a longer payoff period. The goal is to finish your treatment, not to add stress.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/new-patients/financing',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <header className="flex flex-col gap-6 mb-12 max-w-[640px]">
            <Heading as="h1" size="xl">
              Financing & insurance
            </Heading>
            <Text size="xl" tone="muted">
              We believe a great smile shouldn&apos;t require financial
              stress. Here&apos;s how we keep treatment affordable for every
              family.
            </Text>
          </header>

          <Grid cols={2} gap="lg">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="border-2 border-border rounded-xl p-6 flex flex-col gap-3"
              >
                <Heading as="h2" size="md">
                  {h.title}
                </Heading>
                <Text tone="muted">{h.description}</Text>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section spacing="md" tone="muted">
        <Container>
          <Heading as="h2" size="lg" className="mb-6">
            Insurance providers we accept
          </Heading>
          <ul className="flex flex-wrap gap-3">
            {practice.insuranceAccepted.map((ins) => (
              <li
                key={ins}
                className="bg-surface border-2 border-border rounded-full px-4 py-2 text-base font-medium text-fg"
              >
                {ins}
              </li>
            ))}
          </ul>
          <Text className="mt-6" tone="muted" size="sm">
            Don&apos;t see your insurance? Call us at {practice.phone} — we
            often work with out-of-network plans too.
          </Text>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="narrow">
          <FAQ items={faqs} title="Financing FAQs" />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
