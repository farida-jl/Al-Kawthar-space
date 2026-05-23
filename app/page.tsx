import Link from "next/link";

const pillars = [
  {
    title: "Safe Digital Sanctuary",
    body: "A curated, judgment-free space where Muslimahs can share with dignity and care.",
  },
  {
    title: "Authentic Storytelling",
    body: "Deep, soulful reflections beyond aesthetic-only content and quick reactions.",
  },
  {
    title: "Spiritual Connection",
    body: "Peer reminders, reflection prompts, and sisterhood that encourage daily mindfulness.",
  },
  {
    title: "Privacy-First Design",
    body: "Anonymous sharing options help sisters speak with honesty while protecting vulnerability.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-brown-base text-white">
        <div className="page-shell grid min-h-[calc(100vh-4rem)] gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage-light">
              Safe space for Muslimahs
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Al-Kawthar Space
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brown-pale">
              A safe space for Muslimahs to share their experiences while connecting
              with other Muslimahs, finding inspiration, seeking healing, gaining
              knowledge, and growing in both imaan and life.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary bg-sage-base hover:bg-sage-mid" href="/reflections">
                Explore Reflections
              </Link>
              <Link className="btn-secondary border-white/20 bg-white text-ink" href="/write">
                Write a Reflection
              </Link>
              <Link className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white hover:text-ink" href="/communities">
                Join a Community
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/10 p-6">
            <p className="font-display text-4xl font-semibold text-sage-light">
              An abundant stream of support, reminders, reflections, and shared wisdom.
            </p>
            <div className="mt-8 grid gap-3">
              {["Reflect", "Heal", "Learn", "Grow"].map((word) => (
                <div className="rounded-md bg-white/10 px-4 py-3 text-sm font-semibold" key={word}>
                  {word} with sincerity and sisterhood
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-16">
        <p className="eyebrow">What we offer</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            A slower, more intentional place to be heard.
          </h2>
          <p className="leading-8 text-muted">
            Al-Kawthar Space is designed for reflection, care, and meaningful connection.
            It supports vulnerable storytelling without turning sisterhood into noise.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article className="soft-card p-6" key={pillar.title}>
              <div className="mb-5 h-11 w-11 rounded-md bg-mist-pale ring-1 ring-[rgba(61,46,39,0.08)]" />
              <h3 className="font-display text-2xl font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
