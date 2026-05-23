---
name: al-kawthar-space
description: Use when working on the Al-Kawthar Space web app, a Next.js, TypeScript, Tailwind, localStorage-based Muslimah reflection and community platform.
---

# Al-Kawthar Space Skill

## Project Purpose

Al-Kawthar Space is a safe digital sanctuary for Muslimahs to share reflections, journals, articles, and stories while connecting with other Muslimahs, finding inspiration, seeking healing, gaining knowledge, and growing in both imaan and life.

The experience should feel calm, respectful, privacy-first, elegant, and spiritually grounded.

## Technical Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v3
- Client-side localStorage for all user data
- No backend, database, auth, or payment integration

## App Structure

- `app/page.tsx`: Home page
- `app/reflections/page.tsx`: Reflection/blog list
- `app/reflections/[id]/page.tsx`: Reflection detail and comments
- `app/write/page.tsx`: Create reflection form
- `app/communities/page.tsx`: Community cards and join state
- `app/saved/page.tsx`: Saved reflections
- `app/retreats/page.tsx`: Retreat session promotion
- `app/shop/page.tsx`: Digital goods
- `app/donate/page.tsx`: Donation UI
- `components/`: Shared UI components
- `lib/data.ts`: Communities and seed posts
- `lib/storage.ts`: localStorage helpers and keys
- `lib/types.ts`: Shared TypeScript types
- `lib/markdown.tsx`: Lightweight markdown rendering

## LocalStorage Keys

Use these keys consistently:

- `alkawthar_posts`
- `alkawthar_saved_posts`
- `alkawthar_likes`
- `alkawthar_comments`
- `alkawthar_joined_communities`

## Branding

Follow `color_branding.md`.

Core colors:

- Soft Brown: `#8B6F5E`
- Sage Green: `#71896F`
- Steel Blue: `#6593A6`
- Mist: `#D8DFE1`
- Ivory background: `#F8F4F1`
- Dark text: `#3D2E27`
- Muted text: `#8A7A72`

Preferred typography:

- Display: Cormorant Garamond style, with Georgia fallback
- Body/UI: Jost style, with system sans fallback

## Design Rules

- Keep the UI minimal, warm, peaceful, feminine but mature, and trustworthy.
- Avoid loud social-media styling, clutter, heavy dark layouts, generic SaaS visuals, and excessive Islamic decoration.
- Prioritize mobile-first responsive layouts.
- Use accessible contrast and readable type.
- Do not place primary content behind auth or backend assumptions.
- Preserve the privacy-first option for anonymous reflection posts.

## Development Workflow

1. Read nearby files before changing behavior.
2. Keep edits scoped to the requested feature.
3. Prefer existing helpers in `lib/storage.ts`, `lib/data.ts`, and `lib/types.ts`.
4. Add reusable components only when repetition or clarity justifies them.
5. Validate with:

```bash
npm run lint
npm run build
```

Use `npm run dev` for local testing.
