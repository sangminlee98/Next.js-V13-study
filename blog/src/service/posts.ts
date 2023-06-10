import { Post } from "@/types/posts";
import { readFile } from "fs/promises";
import path from "path";

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const posts: Post[] = JSON.parse(await readFile(filePath, "utf-8"));
  const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();

  return allPosts.filter((post) => post.featured);
}
