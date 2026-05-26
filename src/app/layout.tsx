import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Footer, Nav } from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, websiteSchema } from '@/lib/schemas';
import { primaryNav, site, SITE_URL } from '@/site.config';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans-raw',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-raw',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.brand,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.brand,
    locale: site.locale,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-tooltip focus:bg-surface focus:text-fg focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md"
        >
          Skip to main content
        </a>
        <Nav links={primaryNav} logoSrc="/images/logo-nav.png" />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer
          brand={site.brand}
          copyright={site.copyright}
          logoBadgeSrc="/images/logo-badge.png"
          infoItems={[
            {
              icon: '/images/icon-location.png',
              label: 'Address',
              lines: ['123 Main St', 'East Rutherford, NJ'],
            },
            {
              icon: '/images/icon-phone.png',
              label: 'Phone',
              lines: ['(000) 000-0000'],
            },
            {
              icon: '/images/icon-hours.png',
              label: 'Office Hours',
              lines: ['Mon-Fri 9am-6pm', 'Sat-Sun 9am-2pm'],
            },
          ]}
        />
      </body>
    </html>
  );
}
