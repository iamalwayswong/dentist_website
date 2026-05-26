import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

async function readMarkdownFiles() {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files.filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = await readMarkdownFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = await fs.readFile(path.join(POSTS_DIR, file), 'utf-8');
      const { data } = matter(raw);
      return { slug, ...(data as BlogFrontmatter) };
    }),
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const raw = await fs.readFile(
      path.join(POSTS_DIR, `${slug}.md`),
      'utf-8',
    );
    const { data, content } = matter(raw);
    const processed = await remark().use(html).process(content);
    return {
      slug,
      contentHtml: processed.toString(),
      ...(data as BlogFrontmatter),
    };
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const files = await readMarkdownFiles();
  return files.map((f) => f.replace(/\.md$/, ''));
}
