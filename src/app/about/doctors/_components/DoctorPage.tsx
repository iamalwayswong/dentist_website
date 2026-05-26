import Image from 'next/image';
import {
  Breadcrumb,
  Container,
  CTASection,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { personSchema } from '@/lib/schemas';

export type DoctorPageData = {
  slug: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  credentials: readonly string[];
  education: readonly string[];
};

export function DoctorPage({ data }: { data: DoctorPageData }) {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Doctors', href: '/about/doctors' },
    { label: data.name, href: `/about/doctors/${data.slug}` },
  ];

  return (
    <>
      <JsonLd data={personSchema(data)} />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-[400px] shrink-0">
              <Image
                src={data.image}
                alt={`Photo of ${data.name}`}
                width={400}
                height={400}
                className="rounded-xl object-cover w-full aspect-square"
                priority
              />
            </div>
            <div className="flex flex-col gap-6">
              <Text
                size="xl"
                tone="accent"
                weight="semibold"
                className="uppercase"
              >
                Meet
              </Text>
              <Heading as="h1" size="xl">
                {data.name}
              </Heading>
              <Text size="xl" tone="accent" weight="semibold">
                {data.title}
              </Text>
              <Text size="lg" tone="muted">
                {data.bio}
              </Text>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <Heading as="h2" size="sm">
                    Education
                  </Heading>
                  <ul className="flex flex-col gap-1">
                    {data.education.map((e) => (
                      <li key={e} className="text-base text-fg-muted">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <Heading as="h2" size="sm">
                    Credentials
                  </Heading>
                  <ul className="flex flex-col gap-1">
                    {data.credentials.map((c) => (
                      <li key={c} className="text-base text-fg-muted">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" tone="muted">
        <Container size="narrow">
          <div className="flex flex-col gap-4">
            <Heading as="h2" size="lg">
              A note from {data.name.split(' ').slice(-1)[0]}
            </Heading>
            <Text size="lg" tone="muted">
              {/* TODO: Replace with practice-specific copy */}
              Every patient I see brings a unique story and a unique smile.
              My role is to listen first — understand your goals, your
              concerns, your lifestyle — and then design a treatment plan
              that gets you the smile you want with as little disruption as
              possible. I&apos;m grateful to do this work, and even more
              grateful for the patients and families who&apos;ve trusted me
              with their care.
            </Text>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Book a consultation with ${data.name}`}
        description="First consultations are always free. We'll review your goals and walk you through every option."
      />
    </>
  );
}
