import type { Metadata } from 'next';
import {
  BlogCard,
  Breadcrumb,
  Container,
  CTASection,
  Grid,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { webPageSchema } from '@/lib/schemas';
import { getAllPosts } from '@/lib/blog';
import { site } from '@/site.config';

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION = `Patient education, treatment guides, and updates from the team at ${site.brand}.`;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/blog',
});

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
];

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: '/blog',
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container>
          <header className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
            <Heading as="h1" size="xl">
              From the practice
            </Heading>
            <Text size="xl" tone="muted" className="max-w-[640px]">
              Treatment guides, parent resources, and notes from our doctors.
            </Text>
          </header>

          {posts.length === 0 ? (
            <Text tone="muted" className="text-center">
              No posts yet. Check back soon.
            </Text>
          ) : (
            <Grid cols={3} gap="lg">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </Grid>
          )}
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
