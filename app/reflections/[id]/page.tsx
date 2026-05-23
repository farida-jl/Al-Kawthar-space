"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { PostActions } from "@/components/PostActions";
import { renderMarkdown } from "@/lib/markdown";
import { addComment, getComments, getPosts } from "@/lib/storage";
import type { Comment, ReflectionPost } from "@/lib/types";

type DetailPageProps = {
  params: {
    id: string;
  };
};

export default function ReflectionDetailPage({ params }: DetailPageProps) {
  const [post, setPost] = useState<ReflectionPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hydrate = () => {
      setPost(getPosts().find((item) => item.id === params.id) ?? null);
      setComments(getComments().filter((comment) => comment.postId === params.id));
    };

    hydrate();
    window.addEventListener("alkawthar-storage", hydrate);
    return () => window.removeEventListener("alkawthar-storage", hydrate);
  }, [params.id]);

  const content = useMemo(() => (post ? renderMarkdown(post.content) : null), [post]);

  function handleComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }

    setComments(
      addComment({
        id: `${Date.now()}`,
        postId: params.id,
        name: name.trim() || "Anonymous",
        message,
        date: new Date().toISOString().slice(0, 10),
      }).filter((comment) => comment.postId === params.id),
    );
    setName("");
    setMessage("");
  }

  if (!post) {
    return (
      <section className="page-shell py-16">
        <div className="soft-card p-8 text-center">
          <h1 className="font-display text-4xl font-semibold text-ink">Reflection not found</h1>
          <Link className="btn-primary mt-6" href="/reflections">
            Return to Reflections
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell py-12">
      <article className="mx-auto max-w-4xl">
        <Link className="text-sm font-semibold text-sage-base hover:text-brown-base" href="/reflections">
          Back to reflections
        </Link>
        <div className="mt-6 overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-[rgba(61,46,39,0.10)]">
          {post.imageUrl ? (
            <div
              className="h-72 bg-cover bg-center sm:h-96"
              style={{ backgroundImage: `url(${post.imageUrl})` }}
            />
          ) : null}
          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              <span className="rounded-full bg-sage-pale px-3 py-1 text-sage-base">{post.category}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink">
              {post.title}
            </h1>
            <p className="mt-3 text-sm font-semibold text-brown-base">
              {post.anonymous ? "Anonymous" : post.author}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.hashtags.map((tag) => (
                <span className="rounded-full bg-brown-pale px-3 py-1 text-xs font-semibold text-brown-base" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-7 border-t border-[rgba(61,46,39,0.10)] pt-7">{content}</div>
            <div className="mt-8">
              <PostActions postId={post.id} />
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-lg bg-mist-pale p-5 sm:p-7">
          <h2 className="font-display text-3xl font-semibold text-ink">Comments</h2>
          <form className="mt-5 grid gap-4" onSubmit={handleComment}>
            <input
              className="input-field"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name or Anonymous"
            />
            <textarea
              className="input-field min-h-28 resize-y"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Share a respectful response..."
            />
            <button className="btn-primary w-full sm:w-fit" type="submit">
              Add Comment
            </button>
          </form>

          <div className="mt-7 grid gap-3">
            {comments.length === 0 ? (
              <p className="rounded-md bg-white px-4 py-4 text-sm text-muted">
                No comments yet. Begin the conversation with care.
              </p>
            ) : (
              comments.map((comment) => (
                <div className="rounded-md bg-white p-4" key={comment.id}>
                  <div className="flex flex-wrap justify-between gap-2 text-sm">
                    <p className="font-semibold text-ink">{comment.name}</p>
                    <p className="text-muted">{new Date(comment.date).toLocaleDateString()}</p>
                  </div>
                  <p className="mt-2 leading-7 text-ink">{comment.message}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </article>
    </section>
  );
}
