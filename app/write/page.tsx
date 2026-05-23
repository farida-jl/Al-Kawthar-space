"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { communities } from "@/lib/data";
import { addPost } from "@/lib/storage";
import type { CommunityName } from "@/lib/types";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [category, setCategory] = useState<CommunityName>(communities[0].name);
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addPost({
      id: `${Date.now()}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      title,
      author: anonymous ? "Anonymous" : author || "Sister",
      anonymous,
      content,
      imageUrl: imageUrl || undefined,
      category,
      hashtags: hashtags
        .split(",")
        .map((tag) => tag.trim().replace(/^#/, ""))
        .filter(Boolean),
      date: new Date().toISOString().slice(0, 10),
    });

    setTitle("");
    setAuthor("");
    setAnonymous(false);
    setContent("");
    setImageUrl("");
    setHashtags("");
    setCategory(communities[0].name);
    setSaved(true);
  }

  return (
    <section className="page-shell py-12">
      <div className="mb-9 max-w-3xl">
        <p className="eyebrow">Write</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink">
          Share a reflection with care.
        </h1>
        <p className="mt-4 leading-8 text-muted">
          Markdown is supported for headings, emphasis, bold text, and simple lists.
          Anonymous sharing is available for sensitive reflections.
        </p>
      </div>

      <form className="soft-card grid gap-5 p-5 sm:p-7" onSubmit={handleSubmit}>
        {saved ? (
          <div className="rounded-md bg-sage-pale px-4 py-3 text-sm font-semibold text-sage-base">
            Your reflection was saved. <Link className="underline" href="/reflections">View it in Reflections.</Link>
          </div>
        ) : null}

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Title
          <input className="input-field" required value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Author name
            <input
              className="input-field"
              disabled={anonymous}
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              placeholder="Your name or pen name"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Community
            <select
              className="input-field"
              value={category}
              onChange={(event) => setCategory(event.target.value as CommunityName)}
            >
              {communities.map((community) => (
                <option key={community.name} value={community.name}>
                  {community.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="flex items-center gap-3 text-sm font-semibold text-ink">
          <input
            checked={anonymous}
            className="h-5 w-5 accent-sage-base"
            onChange={(event) => setAnonymous(event.target.checked)}
            type="checkbox"
          />
          Share anonymously
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Content
          <textarea
            className="input-field min-h-72 resize-y leading-7"
            required
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder={"Write your reflection...\n\n## A heading\n\n- A gentle lesson\n- A dua to remember"}
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Image URL
            <input
              className="input-field"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              placeholder="https://..."
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Hashtags
            <input
              className="input-field"
              value={hashtags}
              onChange={(event) => setHashtags(event.target.value)}
              placeholder="quran, healing, sabr"
            />
          </label>
        </div>

        <button className="btn-primary w-full sm:w-fit" type="submit">
          Publish Reflection
        </button>
      </form>
    </section>
  );
}
