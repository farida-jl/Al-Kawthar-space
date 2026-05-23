import { ClientPosts } from "@/components/ClientPosts";

export default function ReflectionsPage() {
  return (
    <section className="page-shell py-12">
      <div className="mb-9 max-w-3xl">
        <p className="eyebrow">Reflections</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink">
          Stories, journals, and reminders from the sisterhood.
        </h1>
        <p className="mt-4 leading-8 text-muted">
          Read reflections across Quran, healing, faith, motherhood, work, personal growth,
          and community service. Like, comment, or keep posts for later.
        </p>
      </div>
      <ClientPosts />
    </section>
  );
}
