import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Breadcrumb,
  Container,
  CTASection,
  Grid,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { webPageSchema } from '@/lib/schemas';
import { site } from '@/site.config';

const PAGE_TITLE = 'New Patients';
const PAGE_DESCRIPTION = `Everything you need to know before your first visit to ${site.brand} — what to expect, financing options, and how to book a free consultation.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/new-patients',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'New Patients', href: '/new-patients' },
];

const resources = [
  {
    title: 'Your First Visit',
    description:
      'A walkthrough of what to expect during your free consultation — exam, scans, treatment options, and timeline.',
    href: '/new-patients/first-visit',
  },
  {
    title: 'Patient Forms',
    description:
      'Download and complete your new patient paperwork ahead of time to save time at your visit.',
    href: '/new-patients/forms',
  },
  {
    title: 'Financing & Insurance',
    description:
      'Transparent pricing, interest-free payment plans, and acceptance of major insurance providers.',
    href: '/new-patients/financing',
  },
  {
    title: 'Free Consultation',
    description:
      "Book your free in-office consultation. We'll review your goals and walk through every treatment option.",
    href: '/new-patients/free-consult',
  },
];

export default function NewPatientsHubPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/new-patients',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
            <Heading as="h1" size="xl">
              Welcome to Main St Orthodontics
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[640px]">
              We&apos;re thrilled you&apos;re considering us for your
              orthodontic care. Here&apos;s everything you need to know
              before your first visit.
            </Text>
          </header>

          <Grid cols={2} gap="lg">
            {resources.map((r) => (
              <article
                key={r.href}
                className="border-2 border-border rounded-xl p-6 flex flex-col gap-3"
              >
                <Heading as="h2" size="md">
                  <Link
                    href={r.href}
                    className="hover:text-accent transition-colors"
                  >
                    {r.title}
                  </Link>
                </Heading>
                <Text size="lg" tone="muted">
                  {r.description}
                </Text>
                <Link
                  href={r.href}
                  className="mt-auto text-accent font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
