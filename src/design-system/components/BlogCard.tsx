import Link from 'next/link';
import Image from 'next/image';
import { Heading } from './Heading';
import { Text } from './Text';

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage?: string;
};

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  author,
  coverImage,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="border-2 border-border rounded-xl overflow-hidden flex flex-col">
      {coverImage && (
        <Link href={`/blog/${slug}`} className="block">
          <div className="relative aspect-[16/9]">
            <Image
              src={coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Link>
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <Text size="sm" tone="accent" weight="semibold">
          {formattedDate} · {author}
        </Text>
        <Heading as="h3" size="sm">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-accent transition-colors"
          >
            {title}
          </Link>
        </Heading>
        <Text tone="muted">{excerpt}</Text>
        <Link
          href={`/blog/${slug}`}
          className="mt-auto text-accent font-semibold hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
