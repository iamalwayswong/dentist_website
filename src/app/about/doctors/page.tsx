import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
import { doctors, site } from '@/site.config';

const PAGE_TITLE = 'Meet Our Doctors';
const PAGE_DESCRIPTION = `Meet the orthodontists behind ${site.brand} — board-certified specialists with decades of combined experience.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/about/doctors',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Meet Our Doctors', href: '/about/doctors' },
];

export default function DoctorsIndexPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/about/doctors',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
            <Heading as="h1" size="xl">
              Meet our doctors
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[640px]">
              Board-certified orthodontists who combine clinical excellence
              with a genuinely warm, family-first approach to care.
            </Text>
          </header>

          <Grid cols={2} gap="lg">
            {doctors.map((doc) => (
              <article
                key={doc.slug}
                className="border-2 border-border rounded-xl p-6 flex flex-col gap-4"
              >
                <Link href={`/about/doctors/${doc.slug}`}>
                  <Image
                    src={doc.image}
                    alt={`Photo of ${doc.name}`}
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-square"
                  />
                </Link>
                <div className="flex flex-col gap-2">
                  <Heading as="h2" size="md">
                    <Link
                      href={`/about/doctors/${doc.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {doc.name}
                    </Link>
                  </Heading>
                  <Text size="lg" tone="accent" weight="semibold">
                    {doc.title}
                  </Text>
                  <Text tone="muted">{doc.bio}</Text>
                </div>
                <Button
                  href={`/about/doctors/${doc.slug}`}
                  variant="secondary"
                  className="self-start mt-2"
                >
                  Read full bio →
                </Button>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
