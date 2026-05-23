import { ClientPosts } from "@/components/ClientPosts";

export default function SavedPage() {
  return (
    <section className="page-shell py-12">
      <div className="mb-9 max-w-3xl">
        <p className="eyebrow">Kept for later</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink">
          Your saved reflections.
        </h1>
        <p className="mt-4 leading-8 text-muted">
          A quiet reading list for reminders, stories, and prompts you want to return to.
        </p>
      </div>
      <ClientPosts mode="saved" />
    </section>
  );
}
