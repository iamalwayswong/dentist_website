import type { NavLink, FooterSection } from '@/design-system';

/**
 * Public site URL. Set NEXT_PUBLIC_SITE_URL in production deploys so
 * canonical/OG/sitemap URLs resolve correctly. Falls back to localhost for dev.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const site = {
  brand: 'Main St Orthodontics',
  tagline: 'Your best smile starts here.',
  description:
    'At Main St Orthodontics, we combine expert care with the latest technology to give you a confident, healthy smile — at every age.',
  locale: 'en_US',
  twitterHandle: undefined as string | undefined,
  copyright: `© ${new Date().getFullYear()}`,
};

export const primaryNav: NavLink[] = [
  { label: 'New Patients', href: '#' },
  { label: 'About Us', href: '/about' },
  { label: 'Before & Afters', href: '#' },
  { label: 'Our Treatments', href: '#' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Practice',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];
