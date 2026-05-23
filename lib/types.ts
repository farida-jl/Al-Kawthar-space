export type CommunityName =
  | "Quran Reflection"
  | "Teaching Quran from the Start / Tajweed"
  | "Hadith"
  | "Basic Foundation of Islam"
  | "Healing + Health Support"
  | "Struggles in Faith"
  | "Hardships and Ease"
  | "Parenting / Mom"
  | "Career Growth"
  | "Personal Development"
  | "Community Service"
  | "Financial Growth / Investment / Upper Hands";

export type ReflectionPost = {
  id: string;
  title: string;
  author: string;
  anonymous: boolean;
  date: string;
  category: CommunityName;
  hashtags: string[];
  content: string;
  imageUrl?: string;
};

export type Comment = {
  id: string;
  postId: string;
  name: string;
  message: string;
  date: string;
};

export type Community = {
  name: CommunityName;
  description: string;
};
