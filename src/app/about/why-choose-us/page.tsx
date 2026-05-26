import type { Metadata } from 'next';
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

const PAGE_TITLE = 'Why Choose Us';
const PAGE_DESCRIPTION = `What makes ${site.brand} different — from our board-certified doctors to our patient-first approach and modern technology.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/about/why-choose-us',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Why Choose Us', href: '/about/why-choose-us' },
];

/* TODO: Replace with practice-specific copy */
const reasons = [
  {
    title: 'Board-certified specialists',
    description:
      'Both of our doctors are Diplomates of the American Board of Orthodontics — a credential earned by fewer than 30% of practicing orthodontists.',
  },
  {
    title: 'Modern technology',
    description:
      'Digital scans replace messy impressions. 3D treatment planning means you see your future smile before treatment begins.',
  },
  {
    title: 'A team that cares',
    description:
      'From the front desk to clinical staff, every team member is trained to make your visit comfortable and unhurried.',
  },
  {
    title: 'Transparent pricing',
    description:
      'No surprise costs. We walk through every line item at your free consultation and offer flexible payment plans.',
  },
  {
    title: 'Full-service treatments',
    description:
      'Braces, Invisalign, retainers, and more — one practice, one record, one team for the full journey.',
  },
  {
    title: 'Community-focused',
    description:
      'Proudly serving East Brunswick and surrounding areas for 20+ years. We sponsor local schools, sports, and community events.',
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/about/why-choose-us',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
            <Heading as="h1" size="xl">
              Why patients choose Main St
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[640px]">
              Modern technology, board-certified doctors, and a team that
              genuinely cares about every smile that walks through our door.
            </Text>
          </header>

          <Grid cols={3} gap="md">
            {reasons.map((r) => (
              <article
                key={r.title}
                className="border-2 border-border rounded-xl p-6 flex flex-col gap-3"
              >
                <Heading as="h2" size="sm">
                  {r.title}
                </Heading>
                <Text tone="muted">{r.description}</Text>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
