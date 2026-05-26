import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Breadcrumb,
  Container,
  CTASection,
  Heading,
  Section,
  Text,
} from '@/design-system';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { articleSchema } from '@/lib/schemas';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogImage: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${slug}` },
  ];

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <Breadcrumb crumbs={crumbs} />

      <Section spacing="lg">
        <Container size="narrow">
          <article className="flex flex-col gap-8">
            <header className="flex flex-col gap-4">
              <Text size="sm" tone="accent" weight="semibold">
                {formattedDate} · {post.author}
              </Text>
              <Heading as="h1" size="xl">
                {post.title}
              </Heading>
              <Text size="xl" tone="muted">
                {post.excerpt}
              </Text>
            </header>

            {post.coverImage && (
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 760px) 100vw, 760px"
                  priority
                />
              </div>
            )}

            <div
              className="prose-blog flex flex-col gap-4 text-lg text-fg-muted leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
