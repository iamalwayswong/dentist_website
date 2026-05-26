/**
 * JSON-LD schema builders for SEO.
 *
 * Each function returns a plain object that can be passed to <JsonLd data={...} />.
 * Builders read from site.config so all NAP / practice data has a single source.
 */

import { SITE_URL, site, practice, treatments, doctors } from '@/site.config';

/* ─── LocalBusiness / Dentist ──────────────────────────────────────── */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'LocalBusiness'],
    '@id': `${SITE_URL}#business`,
    name: practice.legalName,
    url: SITE_URL,
    description: site.description,
    telephone: practice.phone,
    email: practice.email,
    image: `${SITE_URL}/images/logo-badge.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: practice.address.streetAddress,
      addressLocality: practice.address.addressLocality,
      addressRegion: practice.address.addressRegion,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: practice.geo.latitude,
      longitude: practice.geo.longitude,
    },
    openingHoursSpecification: practice.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    priceRange: '$$',
    paymentAccepted: practice.paymentAccepted.join(', '),
    currenciesAccepted: 'USD',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: practice.aggregateRating.ratingValue,
      reviewCount: practice.aggregateRating.reviewCount,
      bestRating: practice.aggregateRating.bestRating,
      worstRating: practice.aggregateRating.worstRating,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Orthodontic Treatments',
      itemListElement: treatments.map((t, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: t.name,
          url: `${SITE_URL}/treatments/${t.slug}`,
        },
      })),
    },
  };
}

/* ─── WebSite ──────────────────────────────────────────────────────── */

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: site.brand,
    url: SITE_URL,
    description: site.description,
    publisher: { '@id': `${SITE_URL}#business` },
  };
}

/* ─── Service (treatment pages) ────────────────────────────────────── */

type TreatmentInput = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
};

export function serviceSchema(t: TreatmentInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: t.name,
    description: t.shortDescription,
    url: `${SITE_URL}/treatments/${t.slug}`,
    image: `${SITE_URL}${t.image}`,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    provider: { '@id': `${SITE_URL}#business` },
  };
}

/* ─── Person (doctor bios) ─────────────────────────────────────────── */

type DoctorInput = {
  slug: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  credentials: readonly string[];
  education: readonly string[];
};

export function personSchema(d: DoctorInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: d.name,
    jobTitle: d.title,
    description: d.bio,
    image: `${SITE_URL}${d.image}`,
    url: `${SITE_URL}/about/doctors/${d.slug}`,
    worksFor: { '@id': `${SITE_URL}#business` },
    hasCredential: d.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c,
    })),
    alumniOf: d.education.map((e) => ({
      '@type': 'EducationalOrganization',
      name: e,
    })),
  };
}

/* ─── BreadcrumbList ──────────────────────────────────────────────── */

export type Crumb = { label: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: new URL(c.href, SITE_URL).toString(),
    })),
  };
}

/* ─── FAQPage ──────────────────────────────────────────────────────── */

export type FAQItem = { question: string; answer: string };

export function faqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/* ─── Article (blog posts) ─────────────────────────────────────────── */

type ArticleInput = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage?: string;
};

export function articleSchema(post: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: { '@id': `${SITE_URL}#business` },
    image: post.coverImage
      ? `${SITE_URL}${post.coverImage}`
      : `${SITE_URL}/images/logo-badge.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

/* ─── WebPage (generic) ────────────────────────────────────────────── */

export function webPageSchema({
  title,
  description,
  path,
  breadcrumbs,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: Crumb[];
}) {
  const url = new URL(path, SITE_URL).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: { '@id': `${SITE_URL}#website` },
    ...(breadcrumbs && {
      breadcrumb: { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb` },
    }),
  };
}

/* ─── Re-exports for convenience ───────────────────────────────────── */

export { treatments, doctors };
