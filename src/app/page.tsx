import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BlogCard,
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Section,
  Select,
  Text,
} from '@/design-system';
import { buildMetadata } from '@/lib/seo';
import { site, treatments, doctors } from '@/site.config';
import { getAllPosts } from '@/lib/blog';

/* ─── SEO ──────────────────────────────────────────────────────────── */

const PAGE_DESCRIPTION = site.description;

export const metadata: Metadata = buildMetadata({
  title: `${site.brand} — ${site.tagline}`,
  description: PAGE_DESCRIPTION,
  path: '/',
  absoluteTitle: true,
});

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

const featureCards = [
  {
    title: 'Free first consultation',
    description:
      'Exam, digital scan, and a custom treatment plan — all at no cost and no pressure.',
    href: '/new-patients/free-consult',
    cta: 'Book a consult',
  },
  {
    title: 'Modern technology',
    description:
      '3D digital scans, treatment previews, and the latest bracket and aligner systems.',
    href: '/about/why-choose-us',
    cta: 'Learn more',
  },
  {
    title: 'Smiles for all ages',
    description:
      'From a child’s first visit at age 7 to adult treatment — we have an option for you.',
    href: '/treatments',
    cta: 'See treatments',
  },
  {
    title: 'Flexible financing',
    description:
      'Interest-free payment plans, HSA/FSA accepted, and most major insurance.',
    href: '/new-patients/financing',
    cta: 'View financing',
  },
];

const journeySteps = [
  {
    number: '01',
    title: 'Free consultation',
    description:
      'Meet our team, get a free exam, and walk through every option that fits your goals.',
    href: '/new-patients/free-consult',
    cta: 'Book now',
  },
  {
    number: '02',
    title: 'Digital scan & plan',
    description:
      'A quick 3D scan replaces messy impressions. See your future smile before treatment begins.',
    href: '/new-patients/first-visit',
    cta: 'What to expect',
  },
  {
    number: '03',
    title: 'Begin treatment',
    description:
      'Braces, Invisalign, or another option — we’ll guide you every step of the way to a confident smile.',
    href: '/treatments',
    cta: 'Explore options',
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
      "The free consultation sold me immediately. No pressure, completely transparent about costs, and Dr. Lin clearly loves what he does. Best decision I've made for my health.",
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

export default async function HomePage() {
  const latestPosts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex flex-col gap-6 lg:max-w-[586px]">
              <Link
                href="/new-patients/free-consult"
                className="self-start hover:opacity-80 transition-opacity"
              >
                <Text
                  as="span"
                  size="xl"
                  weight="semibold"
                  tone="accent"
                  className="uppercase"
                >
                  Free consultation available →
                </Text>
              </Link>
              <Heading as="h1" size="xl">
                Your best smile starts here
              </Heading>
              <div className="flex flex-col gap-4">
                <Text size="xl" tone="muted" className="leading-normal">
                  At Main St Orthodontics, we combine expert care with the
                  latest technology to give you a confident, healthy smile —
                  at every age.
                </Text>
                <Text size="xl" tone="muted" className="leading-normal">
                  Braces, Invisalign and more, all tailored to you.
                </Text>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button href="/new-patients/free-consult" size="lg">
                  Book my free consultation
                </Button>
                <Button href="/treatments" size="lg" variant="secondary">
                  Explore services
                </Button>
              </div>
            </div>

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

      {/* ── Why patients choose us — 4 feature cards ───────────────── */}
      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-4 mb-8 sm:mb-12">
            <Heading as="h2" size="xl">
              Why patients choose us
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[640px]">
              Modern care, transparent pricing, and a team that makes every
              visit feel easy.
            </Text>
          </header>
          <Grid cols={4} gap="md">
            {featureCards.map((card) => (
              <article
                key={card.href}
                className="border-2 border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-colors"
              >
                <Heading as="h3" size="sm">
                  {card.title}
                </Heading>
                <Text tone="muted">{card.description}</Text>
                <Link
                  href={card.href}
                  className="mt-auto text-accent font-semibold hover:underline"
                >
                  {card.cta} →
                </Link>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── Treatments ─────────────────────────────────────────────── */}
      <Section spacing="lg" tone="muted">
        <Container>
          <header className="flex flex-col items-center text-center gap-4 mb-8 sm:mb-16">
            <Heading as="h2" size="xl">
              Treatments tailored to you
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[586px]">
              Whether you&apos;re 12 or 52, we have a solution that fits
              your lifestyle and budget.
            </Text>
          </header>
          <Grid cols={2} gap="lg">
            {treatments.map((t) => (
              <article
                key={t.slug}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-2 border-border bg-surface rounded-xl p-4 sm:p-6 hover:border-accent transition-colors"
              >
                <Link
                  href={`/treatments/${t.slug}`}
                  className="shrink-0 block"
                  aria-label={`Learn more about ${t.name}`}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={216}
                    height={216}
                    className="rounded-xl object-cover w-full h-48 sm:w-[216px] sm:h-[216px]"
                  />
                </Link>
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <Heading as="h3" size="md">
                      <Link
                        href={`/treatments/${t.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {t.name}
                      </Link>
                    </Heading>
                    <Text size="xl" tone="muted">
                      {t.shortDescription}
                    </Text>
                  </div>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="text-accent font-semibold hover:underline self-start"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/treatments" variant="ghost" size="lg">
              View all treatments →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 3-step journey ─────────────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-4 mb-8 sm:mb-16">
            <Heading as="h2" size="xl">
              3 simple steps to your new smile
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[586px]">
              From the first visit to your final reveal — here&apos;s what
              your journey looks like.
            </Text>
          </header>
          <Grid cols={3} gap="lg">
            {journeySteps.map((step) => (
              <article
                key={step.number}
                className="border-2 border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-colors"
              >
                <span className="text-accent text-4xl font-bold">
                  {step.number}
                </span>
                <Heading as="h3" size="md">
                  {step.title}
                </Heading>
                <Text size="lg" tone="muted">
                  {step.description}
                </Text>
                <Link
                  href={step.href}
                  className="mt-auto text-accent font-semibold hover:underline"
                >
                  {step.cta} →
                </Link>
              </article>
            ))}
          </Grid>
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button href="/reviews" variant="ghost" size="lg">
              Read all reviews →
            </Button>
            <Button href="/before-afters" variant="ghost" size="lg">
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
                key={doc.slug}
                className="border-2 border-border rounded-xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 hover:border-accent transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <Link
                    href={`/about/doctors/${doc.slug}`}
                    className="shrink-0 block"
                    aria-label={`Read full bio for ${doc.name}`}
                  >
                    <Image
                      src={doc.image}
                      alt={`Photo of ${doc.name}`}
                      width={216}
                      height={216}
                      className="rounded-xl object-cover w-full h-48 sm:w-[216px] sm:h-[216px]"
                    />
                  </Link>
                  <div className="flex flex-col gap-2 pt-0 sm:pt-4 items-center sm:items-start">
                    <Heading as="h3" size="md">
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
                  </div>
                </div>
                <Text size="lg" tone="muted">
                  {doc.bio}
                </Text>
                <Link
                  href={`/about/doctors/${doc.slug}`}
                  className="text-accent font-semibold hover:underline self-start"
                >
                  Read full bio →
                </Link>
              </article>
            ))}
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/about/doctors" variant="ghost" size="lg">
              Meet the team →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Blog teaser ────────────────────────────────────────────── */}
      {latestPosts.length > 0 && (
        <Section spacing="lg" tone="muted">
          <Container>
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
              <div className="flex flex-col gap-2">
                <Heading as="h2" size="xl">
                  From the practice
                </Heading>
                <Text size="lg" tone="muted">
                  Treatment guides, parent resources, and notes from our
                  doctors.
                </Text>
              </div>
              <Link
                href="/blog"
                className="text-accent font-semibold hover:underline whitespace-nowrap"
              >
                View all posts →
              </Link>
            </header>
            <Grid cols={3} gap="lg">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      {/* ── Contact / CTA ──────────────────────────────────────────── */}
      <Section spacing="lg" tone="accent">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
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

            <div className="flex flex-col gap-6 lg:pt-16">
              <Heading as="h2" size="xl">
                Let&apos;s start your smile journey
              </Heading>
              <Text size="xl" tone="muted" className="max-w-[466px]">
                Your first consultation is completely free. Reach out and
                we&apos;ll find a time that works for your schedule.
              </Text>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button href="/new-patients" variant="secondary">
                  New patient info →
                </Button>
                <Button href="/contact" variant="ghost">
                  Other ways to reach us →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
