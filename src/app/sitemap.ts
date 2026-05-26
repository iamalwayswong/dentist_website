import type { MetadataRoute } from 'next';
import { SITE_URL, treatments, doctors } from '@/site.config';
import { getAllSlugs } from '@/lib/blog';

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const staticRoutes: Route[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/why-choose-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/doctors', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/treatments', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/before-afters', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/reviews', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/new-patients', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/new-patients/first-visit', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/new-patients/financing', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/new-patients/forms', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/new-patients/free-consult', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const fixed = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: new URL(`/treatments/${t.slug}`, SITE_URL).toString(),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: new URL(`/about/doctors/${d.slug}`, SITE_URL).toString(),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogSlugs = await getAllSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: new URL(`/blog/${slug}`, SITE_URL).toString(),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...fixed, ...treatmentRoutes, ...doctorRoutes, ...blogRoutes];
}
