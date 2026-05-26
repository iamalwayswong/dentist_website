import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Breadcrumb,
  Button,
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
import { treatments, site } from '@/site.config';

const PAGE_TITLE = 'Our Treatments';
const PAGE_DESCRIPTION = `Explore the full range of orthodontic treatments at ${site.brand} — from traditional braces to clear aligners, retainers, and teen-specific care.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/treatments',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Treatments', href: '/treatments' },
];

export default function TreatmentsHubPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/treatments',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
            <Heading as="h1" size="xl">
              Treatments tailored to you
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[640px]">
              Whether you&apos;re 12 or 52, we have a solution that fits your
              lifestyle and budget. Explore each treatment to find the right
              fit.
            </Text>
          </header>

          <Grid cols={2} gap="lg">
            {treatments.map((t) => (
              <article
                key={t.slug}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-2 border-border rounded-xl p-4 sm:p-6"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={216}
                  height={216}
                  className="rounded-xl object-cover shrink-0 w-full h-48 sm:w-[216px] sm:h-[216px]"
                />
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <Heading as="h2" size="md">
                      {t.name}
                    </Heading>
                    <Text size="xl" tone="muted">
                      {t.shortDescription}
                    </Text>
                  </div>
                  <Button
                    href={`/treatments/${t.slug}`}
                    variant="secondary"
                    className="self-start"
                  >
                    Learn more →
                  </Button>
                </div>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
