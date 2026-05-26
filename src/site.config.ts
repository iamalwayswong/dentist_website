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

/** Practice details used in LocalBusiness JSON-LD and contact pages. */
export const practice = {
  legalName: 'Main St Orthodontics',
  phone: '+1-000-000-0000',
  email: 'hello@mainstortho.example',
  address: {
    streetAddress: '123 Main St',
    addressLocality: 'East Rutherford',
    addressRegion: 'NJ',
    postalCode: '07073',
    addressCountry: 'US',
  },
  geo: {
    latitude: 40.8137,
    longitude: -74.0846,
  },
  openingHours: [
    { day: 'Monday', open: '09:00', close: '18:00' },
    { day: 'Tuesday', open: '09:00', close: '18:00' },
    { day: 'Wednesday', open: '09:00', close: '18:00' },
    { day: 'Thursday', open: '09:00', close: '18:00' },
    { day: 'Friday', open: '09:00', close: '18:00' },
    { day: 'Saturday', open: '09:00', close: '14:00' },
    { day: 'Sunday', open: '09:00', close: '14:00' },
  ],
  insuranceAccepted: [
    'Delta Dental',
    'Aetna',
    'Cigna',
    'MetLife',
    'Guardian',
  ],
  paymentAccepted: [
    'Cash',
    'Credit Card',
    'HSA/FSA',
    'Financing available',
  ],
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 200,
    bestRating: 5,
    worstRating: 1,
  },
};

/** Treatment catalog — single source of truth for service pages and schemas. */
export const treatments = [
  {
    slug: 'traditional-braces',
    name: 'Traditional Braces',
    shortDescription:
      'Proven, effective and more comfortable than ever. Metal or ceramic options available.',
    image: '/images/treatment-braces.png',
  },
  {
    slug: 'invisalign',
    name: 'Invisalign',
    shortDescription:
      "Clear, removable aligners that straighten your teeth without anyone knowing you're wearing them.",
    image: '/images/treatment-invisalign.png',
  },
  {
    slug: 'retainers',
    name: 'Retainers',
    shortDescription:
      'Custom-fit retainers to protect your results and keep your smile looking its best for years to come.',
    image: '/images/treatment-retainers.png',
  },
  {
    slug: 'teen-orthodontics',
    name: 'Teen Orthodontics',
    shortDescription:
      'Flexible treatment plans designed around busy teen schedules, sports and social lives.',
    image: '/images/treatment-teen.png',
  },
] as const;

export type TreatmentSlug = (typeof treatments)[number]['slug'];

/** Doctors — single source of truth for bio pages and schemas. */
export const doctors = [
  {
    slug: 'dr-fleer',
    name: 'Dr. Marshall Fleer',
    title: 'Orthodontist, DDS',
    image: '/images/doctor-fleer.png',
    bio: 'Dr. Marshall Fleer loves being an orthodontist. He is a Diplomate of the American Board of Orthodontics and has specialized in orthodontics in central New Jersey for 25 years.',
    credentials: [
      'Diplomate, American Board of Orthodontics',
      'Member, American Association of Orthodontists',
    ],
    education: [
      'DDS, University of Pennsylvania School of Dental Medicine',
      'Certificate in Orthodontics, Columbia University',
    ],
  },
  {
    slug: 'dr-lin',
    name: 'Dr. Christopher Lin',
    title: 'Orthodontist, DDS',
    image: '/images/doctor-lin.png',
    bio: 'Dr. Christopher Lin combines art and science to create stunning smiles and build strong relationships with his patients and their families from diverse backgrounds and abilities.',
    credentials: [
      'Diplomate, American Board of Orthodontics',
      'Member, American Association of Orthodontists',
    ],
    education: [
      'DDS, NYU College of Dentistry',
      'Certificate in Orthodontics, Rutgers School of Dental Medicine',
    ],
  },
] as const;

export type DoctorSlug = (typeof doctors)[number]['slug'];

/** Primary navigation. Supports nested children for dropdowns. */
export const primaryNav: NavLink[] = [
  {
    label: 'New Patients',
    href: '/new-patients',
    children: [
      { label: 'First Visit', href: '/new-patients/first-visit' },
      { label: 'Patient Forms', href: '/new-patients/forms' },
      { label: 'Financing', href: '/new-patients/financing' },
      { label: 'Free Consultation', href: '/new-patients/free-consult' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Why Choose Us', href: '/about/why-choose-us' },
      { label: 'Meet the Doctors', href: '/about/doctors' },
      { label: 'Dr. Fleer', href: '/about/doctors/dr-fleer' },
      { label: 'Dr. Lin', href: '/about/doctors/dr-lin' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    label: 'Treatments',
    href: '/treatments',
    children: [
      { label: 'Traditional Braces', href: '/treatments/traditional-braces' },
      { label: 'Invisalign', href: '/treatments/invisalign' },
      { label: 'Retainers', href: '/treatments/retainers' },
      { label: 'Teen Orthodontics', href: '/treatments/teen-orthodontics' },
    ],
  },
  { label: 'Before & Afters', href: '/before-afters' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Treatments',
    links: [
      { label: 'Traditional Braces', href: '/treatments/traditional-braces' },
      { label: 'Invisalign', href: '/treatments/invisalign' },
      { label: 'Retainers', href: '/treatments/retainers' },
      { label: 'Teen Orthodontics', href: '/treatments/teen-orthodontics' },
    ],
  },
  {
    title: 'New Patients',
    links: [
      { label: 'First Visit', href: '/new-patients/first-visit' },
      { label: 'Forms', href: '/new-patients/forms' },
      { label: 'Financing', href: '/new-patients/financing' },
      { label: 'Free Consultation', href: '/new-patients/free-consult' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Why Choose Us', href: '/about/why-choose-us' },
      { label: 'Dr. Fleer', href: '/about/doctors/dr-fleer' },
      { label: 'Dr. Lin', href: '/about/doctors/dr-lin' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Before & Afters', href: '/before-afters' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
