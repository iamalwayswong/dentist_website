import type { Metadata } from 'next';
import {
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
import { SITE_URL, site } from '@/site.config';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION = `Get in touch with ${site.brand}. Book an appointment, ask a question, or request a free consultation.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/contact',
});

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `${PAGE_TITLE} — ${site.brand}`,
  url: new URL('/contact', SITE_URL).toString(),
  description: PAGE_DESCRIPTION,
};

const treatmentOptions = [
  { value: 'braces', label: 'Traditional braces' },
  { value: 'invisalign', label: 'Invisalign' },
  { value: 'retainers', label: 'Retainers' },
  { value: 'teen', label: 'Teen orthodontics' },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <Section spacing="lg">
        <Container size="narrow">
          <header className="flex flex-col gap-6 mb-12">
            <Heading as="h1" size="xl">
              Get in touch
            </Heading>
            <Text size="lg" tone="muted">
              Have a question or ready to book a free consultation? Fill out the
              form below and our team will get back to you shortly.
            </Text>
          </header>
          <form className="flex flex-col gap-5 border-2 border-border-strong rounded-xl p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                label="First name"
                name="firstName"
                placeholder="Jane"
              />
              <Input
                label="Last name"
                name="lastName"
                placeholder="Smith"
              />
            </div>
            <Input
              label="Email address"
              name="email"
              type="email"
              placeholder="janesmith@email.com"
            />
            <Input
              label="Phone number"
              name="phone"
              type="tel"
              placeholder="(000) 000-0000"
            />
            <Select
              label="I'm interested in"
              name="treatment"
              placeholder="Select a treatment"
              options={treatmentOptions}
            />
            <label className="flex flex-col gap-2">
              <span className="text-base font-semibold text-accent">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us how we can help."
                className="rounded-md border border-border bg-surface px-4 py-3 text-base text-fg placeholder:text-fg-subtle"
              />
            </label>
            <Button type="submit" size="lg" className="self-start">
              Send message
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
