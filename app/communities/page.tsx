"use client";

import { useEffect, useState } from "react";
import { communities } from "@/lib/data";
import { getJoinedCommunities, toggleCommunity } from "@/lib/storage";

export default function CommunitiesPage() {
  const [joined, setJoined] = useState<string[]>([]);

  useEffect(() => {
    const hydrate = () => setJoined(getJoinedCommunities());
    hydrate();
    window.addEventListener("alkawthar-storage", hydrate);
    return () => window.removeEventListener("alkawthar-storage", hydrate);
  }, []);

  return (
    <section className="page-shell py-12">
      <div className="mb-9 max-w-3xl">
        <p className="eyebrow">Community circles</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink">
          Join the circles that meet your season.
        </h1>
        <p className="mt-4 leading-8 text-muted">
          Each community is designed to feel like a focused, respectful space for
          reflection, learning, support, and growth.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => {
          const isJoined = joined.includes(community.name);
          return (
            <article className="soft-card flex min-h-64 flex-col p-6" key={community.name}>
              <div className="mb-5 h-11 w-11 rounded-md bg-sage-pale" />
              <h2 className="font-display text-3xl font-semibold leading-tight text-ink">
                {community.name}
              </h2>
              <p className="mt-3 flex-1 leading-7 text-muted">{community.description}</p>
              <button
                className={isJoined ? "btn-secondary mt-6" : "btn-primary mt-6"}
                onClick={() => setJoined(toggleCommunity(community.name))}
                type="button"
              >
                {isJoined ? "Joined" : "Join Community"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
