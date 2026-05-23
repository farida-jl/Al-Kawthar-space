"use client";

import { useEffect, useState } from "react";
import {
  getComments,
  getLikes,
  getSavedPosts,
  toggleLike,
  toggleSavedPost,
} from "@/lib/storage";

type PostActionsProps = {
  postId: string;
  compact?: boolean;
};

export function PostActions({ postId, compact = false }: PostActionsProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const hydrate = () => {
      setLiked(Boolean(getLikes()[postId]));
      setSaved(getSavedPosts().includes(postId));
      setCommentCount(getComments().filter((comment) => comment.postId === postId).length);
    };

    hydrate();
    window.addEventListener("alkawthar-storage", hydrate);
    return () => window.removeEventListener("alkawthar-storage", hydrate);
  }, [postId]);

  const buttonClass =
    "rounded-md border border-[rgba(61,46,39,0.12)] px-3 py-2 text-sm font-semibold transition hover:border-sage-base hover:text-sage-base";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        className={`${buttonClass} ${liked ? "bg-sage-pale text-sage-base" : "bg-white text-ink"}`}
        onClick={() => setLiked(Boolean(toggleLike(postId)[postId]))}
        type="button"
      >
        {liked ? "Liked" : "Like"}
      </button>
      <span className={compact ? "sr-only" : "rounded-md bg-mist-pale px-3 py-2 text-sm text-muted"}>
        {commentCount} comments
      </span>
      <button
        className={`${buttonClass} ${saved ? "bg-steel-pale text-steel-base" : "bg-white text-ink"}`}
        onClick={() => setSaved(toggleSavedPost(postId).includes(postId))}
        type="button"
      >
        {saved ? "Kept" : "Keep"}
      </button>
    </div>
  );
}
