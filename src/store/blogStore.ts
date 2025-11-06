import { create } from "zustand";
import { Blog } from "@/generated/prisma/client";

export type BlogState = {
  blog: Blog | null;
};

export type BlogAction = {
  setBlog: (blog: Blog | null) => void;
};

export const BlogStore = create<BlogState & BlogAction>((set) => ({
  blog: null,
  setBlog: (blog) => set({ blog }),
}));
