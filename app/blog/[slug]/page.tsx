import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, formatDate, getBlogPost } from "@/lib/content";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main id="main">
      <article>
        <header className="mx-auto max-w-3xl px-6 pb-10 pt-32 md:px-8">
          <Link
            href="/#journal"
            className="text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-secondary"
          >
            ← Journal
          </Link>
          <time
            dateTime={post.date}
            className="mt-8 block text-[10px] uppercase tracking-[0.15em] text-muted"
          >
            {formatDate(post.date)}
          </time>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <ul className="mt-6 flex flex-wrap gap-4">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="text-[10px] uppercase tracking-[0.18em] text-primary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden bg-neutral-800">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-2xl space-y-6 px-6 py-16 text-lg leading-relaxed text-muted md:px-8">
          {post.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <div className="pt-8">
            <Button asChild variant="outlined">
              <Link href="/#contact">Work with ADWA</Link>
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}
