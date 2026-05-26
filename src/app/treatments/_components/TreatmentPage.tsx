import Image from 'next/image';
import {
  Breadcrumb,
  Container,
  CTASection,
  FAQ,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, type FAQItem } from '@/lib/schemas';

export type TreatmentPageData = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  /** Hero subheading */
  intro: string;
  /** "How it works" steps */
  steps: { title: string; description: string }[];
  /** Who this treatment is for */
  bestFor: string[];
  /** Benefits highlighted as cards */
  benefits: { title: string; description: string }[];
  /** FAQ for FAQPage schema */
  faqs: FAQItem[];
};

export function TreatmentPage({ data }: { data: TreatmentPageData }) {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Treatments', href: '/treatments' },
    { label: data.name, href: `/treatments/${data.slug}` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(data)} />
      <Breadcrumb crumbs={crumbs} />

      {/* Hero */}
      <Section spacing="lg">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex flex-col gap-6 lg:max-w-[586px]">
              <Text
                size="xl"
                weight="semibold"
                tone="accent"
                className="uppercase"
              >
                Treatment
              </Text>
              <Heading as="h1" size="xl">
                {data.name}
              </Heading>
              <Text size="xl" tone="muted">
                {data.intro}
              </Text>
            </div>
            <div className="relative w-full lg:w-[532px] shrink-0">
              <Image
                src={data.image}
                alt={`${data.name} treatment at Main St Orthodontics`}
                width={532}
                height={532}
                className="rounded-xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section spacing="md" tone="muted">
        <Container>
          <header className="flex flex-col gap-3 mb-12 max-w-[640px]">
            <Heading as="h2" size="lg">
              How {data.name} works
            </Heading>
            <Text size="lg" tone="muted">
              A clear, step-by-step look at what to expect during treatment.
            </Text>
          </header>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.steps.map((step, i) => (
              <li
                key={step.title}
                className="bg-surface rounded-xl p-6 flex flex-col gap-3"
              >
                <span className="text-accent text-3xl font-bold">{i + 1}</span>
                <Heading as="h3" size="sm">
                  {step.title}
                </Heading>
                <Text tone="muted">{step.description}</Text>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Best for + Benefits */}
      <Section spacing="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <Heading as="h2" size="lg">
                Who it&apos;s for
              </Heading>
              <ul className="flex flex-col gap-3">
                {data.bestFor.map((item) => (
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
            </div>
            <div className="flex flex-col gap-4">
              <Heading as="h2" size="lg">
                Benefits
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="border-2 border-border rounded-xl p-5 flex flex-col gap-2"
                  >
                    <Heading as="h3" size="sm">
                      {b.title}
                    </Heading>
                    <Text size="sm" tone="muted">
                      {b.description}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="lg" tone="muted">
        <Container size="narrow">
          <FAQ items={data.faqs} title={`${data.name} FAQs`} />
        </Container>
      </Section>

      <CTASection
        title={`Ready to explore ${data.name}?`}
        description="Your first consultation is completely free. Book a visit and we'll walk you through your options."
      />
    </>
  );
}
