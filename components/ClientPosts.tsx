"use client";

import { useEffect, useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import { getPosts, getSavedPosts } from "@/lib/storage";
import type { ReflectionPost } from "@/lib/types";

type ClientPostsProps = {
  mode?: "all" | "saved";
};

export function ClientPosts({ mode = "all" }: ClientPostsProps) {
  const [posts, setPosts] = useState<ReflectionPost[]>([]);
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    const hydrate = () => {
      setPosts(getPosts());
      setSaved(getSavedPosts());
    };

    hydrate();
    window.addEventListener("alkawthar-storage", hydrate);
    return () => window.removeEventListener("alkawthar-storage", hydrate);
  }, []);

  const visiblePosts = useMemo(() => {
    if (mode === "saved") {
      return posts.filter((post) => saved.includes(post.id));
    }
    return posts;
  }, [mode, posts, saved]);

  if (visiblePosts.length === 0) {
    return (
      <div className="soft-card px-6 py-12 text-center">
        <p className="font-display text-3xl font-semibold text-ink">
          No saved reflections yet
        </p>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">
          Keep reflections for later from the Reflections page and they will gather here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {visiblePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
