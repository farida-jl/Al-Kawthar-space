import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 bg-brown-base text-white">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <p className="font-display text-3xl font-semibold">Al-Kawthar Space</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-brown-pale">
            A safe space for Muslimahs to share their experiences while connecting
            with other Muslimahs, finding inspiration, seeking healing, gaining
            knowledge, and growing in both imaan and life.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link className="text-sm font-semibold text-white hover:text-sage-light" href="/write">
            Write
          </Link>
          <Link className="text-sm font-semibold text-white hover:text-sage-light" href="/communities">
            Communities
          </Link>
          <Link className="text-sm font-semibold text-white hover:text-sage-light" href="/donate">
            Donate
          </Link>
        </div>
      </div>
    </footer>
  );
}
