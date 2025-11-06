import { create } from "zustand";
import { Blog } from "@/generated/prisma/client";
import { BlogWithUsers } from "@/@types/Blog";

export type BlogState = {
  blogs: Blog[];
  blogSelected: BlogWithUsers | null;
};

export type BlogAction = {
  setBlog: (blogs: Blog[]) => void;
  setBlogSelected: (blog: BlogWithUsers | null) => void;
};

export const BlogStore = create<BlogState & BlogAction>((set) => ({
  blogs: [],
  blogSelected: null,
  setBlog: (blogs) => set({ blogs }),
  setBlogSelected: (blogSelected) => set({ blogSelected }),
}));
