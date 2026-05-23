"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/reflections", label: "Reflections" },
  { href: "/write", label: "Write" },
  { href: "/communities", label: "Communities" },
  { href: "/saved", label: "Saved" },
  { href: "/retreats", label: "Retreats" },
  { href: "/shop", label: "Shop" },
  { href: "/donate", label: "Donate" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(61,46,39,0.10)] bg-ivory/95 backdrop-blur">
      <nav className="page-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brown-base font-display text-2xl font-semibold text-white">
            ك
          </span>
          <span>
            <span className="block font-display text-2xl font-semibold leading-none text-ink">
              Al-Kawthar
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Space
            </span>
          </span>
        </Link>

        <button
          className="rounded-md border border-[rgba(61,46,39,0.14)] px-3 py-2 text-sm font-semibold text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-semibold text-ink transition hover:bg-brown-pale hover:text-brown-base"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open ? (
        <div className="page-shell grid gap-1 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink transition hover:bg-brown-pale"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
