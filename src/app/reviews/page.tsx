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

const PAGE_TITLE = 'Reviews';
const PAGE_DESCRIPTION = `Read what our patients have to say about ${site.brand}. Real reviews from real families across East Brunswick.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/reviews',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Reviews', href: '/reviews' },
];

/* TODO: Replace with real patient reviews */
const reviews = [
  {
    quote:
      "I've been a patient of Dr. Fleer's since I was a child, and even now as an adult, I wouldn't trust anyone else with my smile. From the very first visit, the warmth and professionalism of the entire team made a lasting impression.",
    author: 'Sarah M.',
    rating: 5,
    source: 'Google',
  },
  {
    quote:
      "I was nervous about getting braces as an adult, but Dr. Lin made the whole process so easy. My smile has completely changed my confidence — I only wish I'd done it sooner.",
    author: 'Michael R.',
    rating: 5,
    source: 'Google',
  },
  {
    quote:
      "The free consultation sold me immediately. No pressure, completely transparent about costs, and Dr. Lin clearly loves what he does. Best decision I've made for my health.",
    author: 'Priya K.',
    rating: 5,
    source: 'Yelp',
  },
  {
    quote:
      "Both of my kids had braces here and the experience was amazing. They actually look forward to their appointments. The staff is so kind and patient.",
    author: 'Jennifer T.',
    rating: 5,
    source: 'Google',
  },
  {
    quote:
      "Modern technology, friendly staff, and beautiful results. Worth every penny. They treated me like family from day one.",
    author: 'Daniel B.',
    rating: 5,
    source: 'Google',
  },
  {
    quote:
      "Dr. Fleer is the best in central New Jersey. Period. He's been doing this for decades and it shows — calm, gentle, and explains everything in plain English.",
    author: 'Elena R.',
    rating: 5,
    source: 'Google',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={i < count ? 'text-warning' : 'text-fg-subtle'}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/reviews',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg" tone="warm">
        <Container>
          <header className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-16">
            <Heading as="h1" size="xl">
              Real results from real people
            </Heading>
            <div className="flex flex-col items-center gap-2">
              <Stars count={Math.round(practice.aggregateRating.ratingValue)} />
              <Text size="xl" tone="accent" weight="semibold">
                {practice.aggregateRating.ratingValue}/5 ·{' '}
                {practice.aggregateRating.reviewCount}+ reviews
              </Text>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="bg-surface rounded-xl p-6 flex flex-col gap-4"
              >
                <Stars count={r.rating} />
                <Text size="lg" tone="muted" className="italic leading-7">
                  {r.quote}
                </Text>
                <footer className="mt-auto">
                  <Text weight="semibold">{r.author}</Text>
                  <Text size="sm" tone="subtle">
                    via {r.source}
                  </Text>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button href="#" variant="ghost" size="lg">
              Leave a review →
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
