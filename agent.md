# Agent Instructions for Al-Kawthar Space

## Role

You are working on Al-Kawthar Space, a Muslimah-focused reflection and community web app. Treat the product with respect, calmness, and care. The app should support sincere storytelling, sisterhood, healing, Islamic reminders, learning, and personal growth.

## Current Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v3
- React client components where localStorage is needed
- localStorage-only persistence

Do not add a backend, database, authentication system, payment provider, or heavy external dependency unless explicitly requested.

## Product Principles

- Build the actual usable app, not a marketing-only page.
- Preserve privacy-first flows, especially anonymous posting.
- Keep the tone respectful and Muslimah-centered.
- Avoid generic placeholder copy when writing user-facing text.
- Favor calm utility over loud social-media patterns.

## Visual Direction

Use the brand palette from `color_branding.md` and Tailwind tokens from `tailwind.config.ts`.

Important tokens:

- `brown-base`: primary brand surface
- `sage-base`: main action/accent
- `steel-base`: highlight/focus
- `ivory`: page background
- `ink`: primary text
- `muted`: secondary text

Keep layouts responsive, readable, and uncluttered. Avoid decorative excess and ensure text does not overlap on mobile.

## Data Rules

All user data is stored in localStorage through `lib/storage.ts`.

Use the existing helpers:

- `getPosts`, `addPost`, `savePosts`
- `getLikes`, `toggleLike`
- `getSavedPosts`, `toggleSavedPost`
- `getComments`, `addComment`
- `getJoinedCommunities`, `toggleCommunity`

Keep types aligned with `lib/types.ts`.

## Code Guidelines

- Follow existing component patterns in `components/`.
- Use `page-shell`, `soft-card`, `btn-primary`, `btn-secondary`, `input-field`, and `eyebrow` classes from `app/globals.css` when appropriate.
- Keep client components marked with `"use client"` only when they need state, events, localStorage, or browser APIs.
- Do not break static rendering for pages that do not need browser state.
- Keep markdown support simple unless asked to expand it.

## Validation

Before finishing code work, run:

```bash
npm run lint
npm run build
```

If testing the app manually, run:

```bash
npm run dev
```

The local app normally runs at `http://localhost:3000`.
