import Link from "next/link";
import type { ReflectionPost } from "@/lib/types";
import { PostActions } from "@/components/PostActions";

type PostCardProps = {
  post: ReflectionPost;
};

export function PostCard({ post }: PostCardProps) {
  const excerpt = post.content.replace(/[#*_>-]/g, "").slice(0, 150);

  return (
    <article className="soft-card overflow-hidden">
      {post.imageUrl ? (
        <div
          className="h-52 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.imageUrl})` }}
          aria-label=""
        />
      ) : null}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          <span className="rounded-full bg-sage-pale px-3 py-1 text-sage-base">{post.category}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <Link href={`/reflections/${post.id}`}>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink transition hover:text-brown-base">
            {post.title}
          </h2>
        </Link>
        <p className="mt-2 text-sm font-semibold text-brown-base">
          {post.anonymous ? "Anonymous" : post.author}
        </p>
        <p className="mt-4 leading-7 text-ink">{excerpt}{post.content.length > 150 ? "..." : ""}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.hashtags.map((tag) => (
            <span className="rounded-full bg-brown-pale px-3 py-1 text-xs font-semibold text-brown-base" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <PostActions postId={post.id} />
          <Link className="text-sm font-semibold text-sage-base hover:text-brown-base" href={`/reflections/${post.id}`}>
            Read reflection
          </Link>
        </div>
      </div>
    </article>
  );
}
