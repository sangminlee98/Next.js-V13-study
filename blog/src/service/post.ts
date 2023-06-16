import { readFile } from "fs/promises";
import path from "path";

export async function getPost(title: string): Promise<string> {
  const filePath = path.join(process.cwd(), "data", "posts", `${title}.md`);
  const post = await readFile(filePath, "utf-8");

  return post;
}
