import { Post, PostData } from "@/types/posts";
import { readFile } from "fs/promises";
import path from "path";

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const posts: Post[] = JSON.parse(await readFile(filePath, "utf-8"));
  const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();

  return allPosts.filter((post) => !post.featured);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();

  return allPosts.filter((post) => post.featured);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const allPosts = await getAllPosts();
  const metadata = allPosts.find((post) => post.path === fileName);

  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, "utf-8");

  return { ...metadata, content };
}
