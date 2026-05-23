import type { Community, ReflectionPost } from "@/lib/types";

export const communities: Community[] = [
  {
    name: "Quran Reflection",
    description: "Slow reflections on ayat, personal lessons, and reminders for the heart.",
  },
  {
    name: "Teaching Quran from the Start / Tajweed",
    description: "A gentle space for sisters learning recitation foundations and tajweed.",
  },
  {
    name: "Hadith",
    description: "Discuss prophetic guidance and how it can shape daily character.",
  },
  {
    name: "Basic Foundation of Islam",
    description: "Foundational knowledge for reverts, beginners, and sisters revisiting essentials.",
  },
  {
    name: "Healing + Health Support",
    description: "Compassionate reflections around healing, wellness, and emotional steadiness.",
  },
  {
    name: "Struggles in Faith",
    description: "A private-feeling circle for honest conversations about holding onto faith.",
  },
  {
    name: "Hardships and Ease",
    description: "Stories of sabr, gratitude, dua, and finding ease through difficulty.",
  },
  {
    name: "Parenting / Mom",
    description: "Support for mothers raising families with intention, mercy, and faith.",
  },
  {
    name: "Career Growth",
    description: "Encouragement for purposeful work, leadership, and halal ambition.",
  },
  {
    name: "Personal Development",
    description: "Habits, self-reflection, and growth rooted in spiritual alignment.",
  },
  {
    name: "Community Service",
    description: "Ideas and reflections for serving others with humility and care.",
  },
  {
    name: "Financial Growth / Investment / Upper Hands",
    description: "Conversations about provision, stewardship, generosity, and building capacity.",
  },
];

export const samplePosts: ReflectionPost[] = [
  {
    id: "sample-quran-reflection",
    title: "Returning to the Quran in a noisy season",
    author: "Maryam",
    anonymous: false,
    date: "2026-05-01",
    category: "Quran Reflection",
    hashtags: ["quran", "stillness", "imaan"],
    imageUrl:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80",
    content:
      "Some seasons make the heart feel scattered. I started again with one page after Fajr, not to finish quickly, but to listen.\n\n## What changed\n\nThe consistency softened something in me. I began writing one sentence after recitation: *What is Allah teaching me today?*\n\nThat small practice became an anchor.",
  },
  {
    id: "sample-healing",
    title: "Healing without rushing the heart",
    author: "Anonymous",
    anonymous: true,
    date: "2026-05-06",
    category: "Healing + Health Support",
    hashtags: ["healing", "dua", "sabr"],
    content:
      "I used to think healing meant feeling better immediately. Now I am learning that some healing is quiet obedience: making wudu, praying two rakah, asking Allah to hold what I cannot explain.\n\n- Rest can be worship when the body needs mercy.\n- Boundaries can be part of amanah.\n- Dua can be honest and unfinished.",
  },
  {
    id: "sample-career",
    title: "Ambition with barakah",
    author: "Safiyyah",
    anonymous: false,
    date: "2026-05-10",
    category: "Career Growth",
    hashtags: ["career", "barakah", "purpose"],
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    content:
      "Career growth does not have to mean becoming hard. I am learning to pursue excellence while keeping my salah, family, and inner life protected.\n\n## A reminder\n\nRizq is from Allah, and effort is still part of our trust.",
  },
];
