import type { Metadata } from 'next';
import {
  Breadcrumb,
  Button,
  Container,
  Heading,
  Input,
  Section,
  Select,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { webPageSchema } from '@/lib/schemas';
import { practice, site } from '@/site.config';

const PAGE_TITLE = 'Free Consultation';
const PAGE_DESCRIPTION = `Book your free in-office orthodontic consultation at ${site.brand}. No cost, no pressure — just a clear look at your options.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/new-patients/free-consult',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Free Consultation', href: '/new-patients/free-consult' },
];

const treatmentOptions = [
  { value: 'unsure', label: 'Not sure yet' },
  { value: 'braces', label: 'Traditional braces' },
  { value: 'invisalign', label: 'Invisalign' },
  { value: 'retainers', label: 'Retainers' },
  { value: 'teen', label: 'Teen orthodontics' },
];

const ageRangeOptions = [
  { value: 'under-13', label: 'Under 13' },
  { value: '13-17', label: '13–17' },
  { value: '18-30', label: '18–30' },
  { value: '30-plus', label: '30+' },
];

export default function FreeConsultPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/new-patients/free-consult',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg" tone="accent">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Form */}
            <div className="w-full lg:w-1/2 border-2 border-border-strong rounded-xl p-5 sm:p-10 bg-bg">
              <Heading as="h1" size="lg" className="mb-2">
                Book your free consultation
              </Heading>
              <Text tone="muted" className="mb-6">
                Tell us a little about yourself and our team will reach out
                to confirm a time that works.
              </Text>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="First name" name="firstName" placeholder="Jane" />
                  <Input label="Last name" name="lastName" placeholder="Smith" />
                </div>
                <Input
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="janesmith@email.com"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Phone number"
                    name="phone"
                    type="tel"
                    placeholder="(000) 000-0000"
                  />
                  <Select
                    label="Patient age range"
                    name="ageRange"
                    placeholder="Select age range"
                    options={ageRangeOptions}
                  />
                </div>
                <Select
                  label="I'm interested in"
                  name="treatment"
                  placeholder="Select a treatment"
                  options={treatmentOptions}
                />
                <label className="flex flex-col gap-2">
                  <span className="text-base font-semibold text-accent">
                    Anything we should know? (optional)
                  </span>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Share any specific goals or questions."
                    className="rounded-md border-2 border-border bg-surface px-4 py-3 text-base text-fg placeholder:text-fg-subtle"
                  />
                </label>
                <Button type="submit" size="lg" className="self-start mt-2">
                  Send my request
                </Button>
              </form>
            </div>

            {/* Side info */}
            <div className="flex flex-col gap-8 lg:pt-8">
              <div>
                <Heading as="h2" size="xl">
                  Let&apos;s start your smile journey
                </Heading>
                <Text size="xl" tone="muted" className="mt-4 max-w-[466px]">
                  Your first consultation is completely free. No pressure,
                  no sales — just an honest look at your options with one of
                  our board-certified orthodontists.
                </Text>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  'Free in-office exam and digital scan',
                  'Custom treatment plan with timeline',
                  'Written quote with no hidden fees',
                  'Answers to every question you have',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg text-fg-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="text-accent font-bold shrink-0"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-2 border-border rounded-xl p-5 bg-surface">
                <Text size="sm" tone="muted">
                  Prefer to call? Reach us at{' '}
                  <a
                    href={`tel:${practice.phone}`}
                    className="text-accent font-semibold hover:underline"
                  >
                    {practice.phone}
                  </a>
                  .
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
