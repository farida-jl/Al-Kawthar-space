const products = [
  {
    name: "Reflection Journal PDF",
    description: "A printable journal for Quran reflections, gratitude, dua, and weekly review.",
    price: "$9",
  },
  {
    name: "Digital Planner",
    description: "A calm planning system for worship, home, study, work, and personal goals.",
    price: "$14",
  },
  {
    name: "Ramadan Reflection Workbook",
    description: "Guided prompts for daily reflection, habit tracking, and meaningful worship.",
    price: "$12",
  },
  {
    name: "Healing Prompts Journal",
    description: "Gentle writing prompts for processing hardship with faith, hope, and care.",
    price: "$8",
  },
];

export default function ShopPage() {
  return (
    <section className="page-shell py-12">
      <div className="mb-9 max-w-3xl">
        <p className="eyebrow">Digital goods</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink">
          Reflection tools for a softer routine.
        </h1>
        <p className="mt-4 leading-8 text-muted">
          Simple downloadable resources that support journaling, planning, healing,
          and spiritual reflection.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article className="soft-card flex min-h-72 flex-col p-6" key={product.name}>
            <p className="text-sm font-semibold text-steel-base">{product.price}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
              {product.name}
            </h2>
            <p className="mt-3 flex-1 leading-7 text-muted">{product.description}</p>
            <button className="btn-primary mt-6" type="button">
              View Product
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
