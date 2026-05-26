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

const PAGE_TITLE = 'About Us';
const PAGE_DESCRIPTION = `Learn about ${site.brand} — our doctors, our approach, and our commitment to creating beautiful, healthy smiles in East Brunswick.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/about',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
];

const sections = [
  {
    title: 'Why Choose Us',
    description:
      'What sets our practice apart — from board-certified doctors to transparent pricing.',
    href: '/about/why-choose-us',
  },
  {
    title: 'Meet the Doctors',
    description:
      'Get to know Dr. Fleer and Dr. Lin, the orthodontists behind every smile.',
    href: '/about/doctors',
  },
  {
    title: 'Blog',
    description:
      'Patient education, treatment guides, and updates from the practice.',
    href: '/blog',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/about',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container size="narrow">
          <article className="flex flex-col gap-6">
            <Heading as="h1" size="xl">
              About {site.brand}
            </Heading>
            <Text size="xl" tone="muted">
              We believe everyone deserves a healthy, confident smile. Our
              practice combines modern orthodontic technology with a warm,
              patient-first approach. Whether you&apos;re 12 or 52, we have a
              solution that fits your lifestyle and your budget.
            </Text>
            <Text size="lg" tone="muted">
              {/* TODO: Replace with practice-specific copy */}
              For more than 20 years, our team has served the East Brunswick
              community — sponsoring local schools, supporting community
              events, and treating thousands of families. We take the same
              care with your visit as we do with your treatment plan: every
              detail thought through, every question answered.
            </Text>
          </article>
        </Container>
      </Section>

      <Section spacing="md" tone="muted">
        <Container>
          <header className="flex flex-col gap-3 mb-12">
            <Heading as="h2" size="lg">
              Explore
            </Heading>
          </header>
          <Grid cols={3} gap="md">
            {sections.map((s) => (
              <article
                key={s.href}
                className="border-2 border-border bg-surface rounded-xl p-6 flex flex-col gap-3"
              >
                <Heading as="h3" size="sm">
                  <Link
                    href={s.href}
                    className="hover:text-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </Heading>
                <Text tone="muted">{s.description}</Text>
                <Link
                  href={s.href}
                  className="mt-auto text-accent font-semibold hover:underline"
                >
                  Read more →
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
