const retreats = [
  {
    title: "Stillness and Quran Weekend",
    date: "June 21, 2026",
    topic: "Gentle recitation, journaling, and guided reflection.",
  },
  {
    title: "Healing Through Dua",
    date: "July 12, 2026",
    topic: "A quiet session for grief, hope, and returning to Allah.",
  },
  {
    title: "Barakah Planning Circle",
    date: "August 9, 2026",
    topic: "Purposeful life planning rooted in worship and service.",
  },
];

export default function RetreatsPage() {
  return (
    <section className="page-shell py-12">
      <div className="grid gap-8 rounded-lg bg-brown-base p-6 text-white sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage-light">
            Retreat sessions
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight">
            Gather for reflection, renewal, and sisterhood.
          </h1>
          <p className="mt-5 leading-8 text-brown-pale">
            Retreat sessions create room to slow down, reconnect with Allah,
            and share meaningful space with sisters who are also seeking growth.
          </p>
        </div>
        <div className="grid gap-4">
          {retreats.map((retreat) => (
            <article className="rounded-lg bg-white p-5 text-ink" key={retreat.title}>
              <p className="text-sm font-semibold text-steel-base">{retreat.date}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">{retreat.title}</h2>
              <p className="mt-3 leading-7 text-muted">{retreat.topic}</p>
              <button className="btn-primary mt-5" type="button">
                Reserve Interest
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
