import type { Metadata } from 'next';
import {
  Breadcrumb,
  Button,
  Container,
  CTASection,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { webPageSchema } from '@/lib/schemas';
import { practice, site } from '@/site.config';

const PAGE_TITLE = 'Patient Forms';
const PAGE_DESCRIPTION = `Download new patient paperwork for ${site.brand}. Complete it at home to save time at your first visit.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/new-patients/forms',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Patient Forms', href: '/new-patients/forms' },
];

/* TODO: Replace with real form links when forms are ready */
const forms = [
  {
    title: 'New Patient Intake',
    description: 'Medical history, contact info, and insurance details.',
    href: '#',
  },
  {
    title: 'HIPAA Consent',
    description:
      'Authorization for use and disclosure of protected health information.',
    href: '#',
  },
  {
    title: 'Financial Agreement',
    description: 'Payment terms and financial responsibility acknowledgment.',
    href: '#',
  },
];

export default function FormsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/new-patients/forms',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container size="narrow">
          <header className="flex flex-col gap-6 mb-12">
            <Heading as="h1" size="xl">
              Patient forms
            </Heading>
            <Text size="xl" tone="muted">
              Save time at your first visit by completing your paperwork
              ahead of time. Print, fill out, and bring with you — or we can
              email a secure online version.
            </Text>
          </header>

          <ul className="flex flex-col gap-4">
            {forms.map((f) => (
              <li
                key={f.title}
                className="border-2 border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex flex-col gap-1">
                  <Heading as="h2" size="sm">
                    {f.title}
                  </Heading>
                  <Text size="sm" tone="muted">
                    {f.description}
                  </Text>
                </div>
                <Button href={f.href} variant="secondary" className="shrink-0">
                  Download PDF
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-2 border-accent rounded-xl p-6 bg-bg-accent">
            <Heading as="h2" size="sm" className="mb-2">
              Need help?
            </Heading>
            <Text tone="muted">
              Call us at {practice.phone} or email {practice.email} and
              we&apos;ll email you secure online versions of any form.
            </Text>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
