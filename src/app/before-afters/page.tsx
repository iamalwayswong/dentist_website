import type { Metadata } from 'next';
import {
  BeforeAfterCase,
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

const PAGE_TITLE = 'Before & Afters';
const PAGE_DESCRIPTION = `Real patient transformations at ${site.brand}. See how braces, Invisalign, and our other treatments create life-changing smiles.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/before-afters',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Before & Afters', href: '/before-afters' },
];

/* TODO: Replace with real patient case photos. Currently using treatment
   stock images as placeholders so the page renders. */
const cases = [
  {
    patientLabel: 'Patient 1',
    treatment: 'Traditional Braces',
    treatedBy: 'Dr. Fleer',
    image: '/images/treatment-braces.png',
  },
  {
    patientLabel: 'Patient 2',
    treatment: 'Invisalign',
    treatedBy: 'Dr. Lin',
    image: '/images/treatment-invisalign.png',
  },
  {
    patientLabel: 'Patient 3',
    treatment: 'Teen Orthodontics',
    treatedBy: 'Dr. Fleer',
    image: '/images/treatment-teen.png',
  },
  {
    patientLabel: 'Patient 4',
    treatment: 'Traditional Braces',
    treatedBy: 'Dr. Lin',
    image: '/images/treatment-braces.png',
  },
  {
    patientLabel: 'Patient 5',
    treatment: 'Invisalign',
    treatedBy: 'Dr. Fleer',
    image: '/images/treatment-invisalign.png',
  },
  {
    patientLabel: 'Patient 6',
    treatment: 'Retainers',
    treatedBy: 'Dr. Lin',
    image: '/images/treatment-retainers.png',
  },
];

export default function BeforeAftersPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/before-afters',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
            <Heading as="h1" size="xl">
              Real transformations, real patients
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[640px]">
              From mild crowding to complex bite issues, here&apos;s a look
              at what&apos;s possible. Whether you&apos;re a child, teen, or
              adult — we&apos;ve got you covered.
            </Text>
          </header>

          <Grid cols={2} gap="lg">
            {cases.map((c) => (
              <BeforeAfterCase
                key={c.patientLabel}
                patientLabel={c.patientLabel}
                treatment={c.treatment}
                treatedBy={c.treatedBy}
                beforeSmile={{
                  src: c.image,
                  alt: `${c.patientLabel} smile before ${c.treatment} treatment`,
                }}
                beforeDetail={{
                  src: c.image,
                  alt: `${c.patientLabel} teeth detail before ${c.treatment} treatment`,
                }}
                afterSmile={{
                  src: c.image,
                  alt: `${c.patientLabel} smile after ${c.treatment} treatment`,
                }}
                afterDetail={{
                  src: c.image,
                  alt: `${c.patientLabel} teeth detail after ${c.treatment} treatment`,
                }}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection
        title="Your transformation starts here"
        description="Book a free consultation to see what's possible for your smile."
      />
    </>
  );
}
