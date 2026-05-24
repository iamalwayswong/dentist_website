import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Section,
  Select,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL, site } from '@/site.config';

/* ─── SEO ──────────────────────────────────────────────────────────── */

const PAGE_DESCRIPTION = site.description;

export const metadata: Metadata = buildMetadata({
  title: `${site.brand} — ${site.tagline}`,
  description: PAGE_DESCRIPTION,
  path: '/',
  absoluteTitle: true,
});

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: site.brand,
  url: SITE_URL,
  description: site.description,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.brand,
  url: SITE_URL,
};

/* ─── Data ─────────────────────────────────────────────────────────── */

const stats = [
  {
    icon: '/images/icon-certified.png',
    title: 'Board certified',
    subtitle: 'Orthodontists',
  },
  {
    icon: '/images/icon-patients.png',
    title: '5000+ patients',
    subtitle: 'Treated & smiling',
  },
  {
    icon: '/images/icon-stars.png',
    title: '4.9/5 stars',
    subtitle: '200+ Google reviews',
  },
  {
    icon: '/images/icon-years.png',
    title: '20+ years',
    subtitle: 'Serving East Brunswick',
  },
];

const treatments = [
  {
    image: '/images/treatment-braces.png',
    title: 'Traditional braces',
    description:
      'Proven, effective and more comfortable than ever. Metal or ceramic options available.',
  },
  {
    image: '/images/treatment-invisalign.png',
    title: 'Invisalign',
    description:
      "Clear, removable aligners that straighten your teeth without anyone knowing you're wearing them.",
  },
  {
    image: '/images/treatment-retainers.png',
    title: 'Retainers',
    description:
      'Custom-fit retainers to protect your results and keep your smile looking its best for years to come.',
  },
  {
    image: '/images/treatment-teen.png',
    title: 'Teen orthodontics',
    description:
      'Flexible treatment plans designed around busy teen schedules, sports and social lives.',
  },
];

const testimonials = [
  {
    quote:
      "I was nervous about getting braces as an adult, but Dr. Lin made the whole process so easy. My smile has completely changed my confidence — I only wish I'd done it sooner.",
  },
  {
    quote:
      "I've been a patient of Dr. Fleer's since I was a child, and even now as an adult, I wouldn't trust anyone else with my smile. From the very first visit, the warmth and professionalism of the entire team made a lasting impression. They truly treat you like family, not just another patient.",
  },
  {
    quote:
      "The free consultation sold me immediately. No pressure, completely transparent about costs, and Dr. Li clearly loves what he does. Best decision I've made for my health.",
  },
];

const doctors = [
  {
    image: '/images/doctor-fleer.png',
    name: 'Dr. Marshall Fleer',
    credentials: ['Dentistry school', 'Other certifications'],
    bio: 'Dr. Marshall Fleer loves being an orthodontist. He is a Diplomate of the American Board of Orthodontics and has specialized in orthodontics in central New Jersey for 25 years.',
  },
  {
    image: '/images/doctor-lin.png',
    name: 'Dr. Christopher Lin',
    credentials: ['Dentistry school', 'Other certifications'],
    bio: 'Dr. Christopher Lin combines art and science to create stunning smiles and build strong relationships with his patients and their families from diverse backgrounds and abilities.',
  },
];

const treatmentOptions = [
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

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <JsonLd data={[dentistSchema, websiteSchema]} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left copy */}
            <div className="flex flex-col gap-6 lg:max-w-[586px]">
              <Text
                as="p"
                size="xl"
                weight="semibold"
                tone="accent"
                className="uppercase"
              >
                Free consultation available
              </Text>
              <Heading as="h1" size="xl">
                Your best smile starts here
              </Heading>
              <div className="flex flex-col gap-4">
                <Text size="xl" tone="muted" className="leading-normal">
                  At Main St Orthodontics, we combine expert care with the
                  latest technology to give you a confident, healthy smile — at
                  every age.
                </Text>
                <Text size="xl" tone="muted" className="leading-normal">
                  Braces, Invisalign and more, all tailored to you.
                </Text>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button href="/contact" size="lg">
                  Book my free consultation
                </Button>
                <Button href="#treatments" size="lg" variant="secondary">
                  Explore services
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative w-full lg:w-[532px] shrink-0">
              <Image
                src="/images/hero.png"
                alt="Patient smiling in dental chair at Main St Orthodontics"
                width={532}
                height={700}
                className="rounded-xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Stats bar ──────────────────────────────────────────────── */}
      <Section spacing="sm" tone="muted">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.title} className="flex items-start gap-3">
                <Image
                  src={stat.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="shrink-0 mt-1"
                />
                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-fg">
                    {stat.title}
                  </p>
                  <p className="text-base sm:text-xl font-semibold text-accent">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Treatments ─────────────────────────────────────────────── */}
      <Section spacing="lg" className="scroll-mt-24" as="section">
        <Container>
          <div id="treatments" className="scroll-mt-24" />
          <header className="flex flex-col items-center text-center gap-4 mb-8 sm:mb-16">
            <Heading as="h2" size="xl">
              Treatments tailored to you
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[586px]">
              Whether you&apos;re 12 or 52, we have a solution that fits your
              lifestyle and budget.
            </Text>
          </header>
          <Grid cols={2} gap="lg">
            {treatments.map((t) => (
              <article
                key={t.title}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-2 border-border rounded-xl p-4 sm:p-6"
              >
                <Image
                  src={t.image}
                  alt={t.title}
                  width={216}
                  height={216}
                  className="rounded-xl object-cover shrink-0 w-full h-48 sm:w-[216px] sm:h-[216px]"
                />
                <div className="flex flex-col justify-center gap-2">
                  <Heading as="h3" size="md">
                    {t.title}
                  </Heading>
                  <Text size="xl" tone="muted">
                    {t.description}
                  </Text>
                </div>
              </article>
            ))}
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="#" variant="ghost" size="lg">
              Learn more →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <Section spacing="md" tone="warm">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-12">
            <Heading as="h2" size="xl">
              Real results from real people
            </Heading>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="bg-surface rounded-xl p-8 flex flex-col"
              >
                <Text
                  as="p"
                  size="xl"
                  tone="muted"
                  className="italic leading-7"
                >
                  {t.quote}
                </Text>
              </blockquote>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button href="#" variant="ghost" size="lg">
              See before &amp; afters →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Doctors ────────────────────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-8 sm:mb-16">
            <Heading as="h2" size="xl">
              Meet our Doctors
            </Heading>
          </header>
          <Grid cols={2} gap="lg">
            {doctors.map((doc) => (
              <article
                key={doc.name}
                className="border-2 border-border rounded-xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <Image
                    src={doc.image}
                    alt={`Photo of ${doc.name}`}
                    width={216}
                    height={216}
                    className="rounded-xl object-cover shrink-0 w-full h-48 sm:w-[216px] sm:h-[216px]"
                  />
                  <div className="flex flex-col gap-2 pt-0 sm:pt-4 items-center sm:items-start">
                    <Heading as="h3" size="md">
                      {doc.name}
                    </Heading>
                    {doc.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2">
                        <Image
                          src="/images/icon-certified.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                        <Text
                          size="xl"
                          weight="semibold"
                          className="text-accent"
                        >
                          {cred}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
                <Text size="xl" tone="muted">
                  {doc.bio}
                </Text>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── Contact / CTA ──────────────────────────────────────────── */}
      <Section spacing="lg" tone="accent">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Form card */}
            <div className="w-full lg:w-1/2 border-2 border-border-strong rounded-xl p-5 sm:p-10 bg-bg-accent">
              <Heading as="h3" size="md" className="mb-6 sm:mb-8">
                Request a free consultation
              </Heading>
              <form className="flex flex-col gap-5">
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
                    placeholder="Under 13"
                    options={ageRangeOptions}
                  />
                </div>
                <Select
                  label="I'm interested in"
                  name="treatment"
                  placeholder="Traditional braces"
                  options={treatmentOptions}
                />
                <Button type="submit" size="lg" className="self-start mt-2">
                  Send my request
                </Button>
              </form>
            </div>

            {/* Right copy */}
            <div className="flex flex-col gap-6 lg:pt-16">
              <Heading as="h2" size="xl">
                Let&apos;s start your smile journey
              </Heading>
              <Text size="xl" tone="muted" className="max-w-[466px]">
                Your first consultation is completely free. Reach out and
                we&apos;ll find a time that works for your schedule.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
