import type { Metadata } from 'next';
import { SITE_URL, site } from '@/site.config';

type BuildMetadataOptions = {
  /**
   * Page title. By default the root layout templates this as "{title} — {brand}".
   * Pass `absoluteTitle: true` to skip the template (used on the home page).
   */
  title: string;
  description: string;
  /** Route path, e.g. '/about'. Used to build canonical + OG URLs. */
  path: string;
  absoluteTitle?: boolean;
  /** Optional OG image path (defaults to /og.png if you provide one). */
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  ogImage,
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = absoluteTitle ? title : `${title} — ${site.brand}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: site.brand,
      locale: site.locale,
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(site.twitterHandle && { creator: site.twitterHandle }),
      ...(ogImage && { images: [ogImage] }),
    },
  };
}
