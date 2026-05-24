import type { Metadata } from 'next';
import { Container, Heading, Section, Text } from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL, site } from '@/site.config';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = `Learn about ${site.brand} — our doctors, our approach, and our commitment to your dental health.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/about',
});

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `${PAGE_TITLE} — ${site.brand}`,
  url: new URL('/about', SITE_URL).toString(),
  description: PAGE_DESCRIPTION,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <Section spacing="lg">
        <Container size="narrow">
          <article className="flex flex-col gap-6">
            <Heading as="h1" size="xl">
              About {site.brand}
            </Heading>
            <Text size="lg" tone="muted">
              We believe everyone deserves a healthy, confident smile. Our
              practice combines modern orthodontic technology with a warm,
              patient-first approach.
            </Text>
            <Text>
              Placeholder copy — real content will be filled in once Figma
              designs for the about page are finalized.
            </Text>
          </article>
        </Container>
      </Section>
    </>
  );
}
