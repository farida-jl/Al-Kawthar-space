"use client";

import { samplePosts } from "@/lib/data";
import type { Comment, ReflectionPost } from "@/lib/types";

export const storageKeys = {
  posts: "alkawthar_posts",
  savedPosts: "alkawthar_saved_posts",
  likes: "alkawthar_likes",
  comments: "alkawthar_comments",
  joinedCommunities: "alkawthar_joined_communities",
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("alkawthar-storage"));
}

export function getPosts() {
  const posts = readJson<ReflectionPost[]>(storageKeys.posts, []);
  if (posts.length > 0) {
    return posts;
  }
  writeJson(storageKeys.posts, samplePosts);
  return samplePosts;
}

export function savePosts(posts: ReflectionPost[]) {
  writeJson(storageKeys.posts, posts);
}

export function addPost(post: ReflectionPost) {
  savePosts([post, ...getPosts()]);
}

export function getLikes() {
  return readJson<Record<string, boolean>>(storageKeys.likes, {});
}

export function toggleLike(postId: string) {
  const likes = getLikes();
  likes[postId] = !likes[postId];
  writeJson(storageKeys.likes, likes);
  return likes;
}

export function getSavedPosts() {
  return readJson<string[]>(storageKeys.savedPosts, []);
}

export function toggleSavedPost(postId: string) {
  const saved = getSavedPosts();
  const next = saved.includes(postId)
    ? saved.filter((id) => id !== postId)
    : [postId, ...saved];
  writeJson(storageKeys.savedPosts, next);
  return next;
}

export function getComments() {
  return readJson<Comment[]>(storageKeys.comments, []);
}

export function addComment(comment: Comment) {
  const comments = [comment, ...getComments()];
  writeJson(storageKeys.comments, comments);
  return comments;
}

export function getJoinedCommunities() {
  return readJson<string[]>(storageKeys.joinedCommunities, []);
}

export function toggleCommunity(name: string) {
  const joined = getJoinedCommunities();
  const next = joined.includes(name)
    ? joined.filter((community) => community !== name)
    : [name, ...joined];
  writeJson(storageKeys.joinedCommunities, next);
  return next;
}
