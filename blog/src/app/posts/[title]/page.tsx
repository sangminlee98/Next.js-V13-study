import { getPostData } from "@/service/posts";

type Props = {
  params: {
    title: string;
  };
};

export default async function PostPage({ params: { title } }: Props) {
  const post = await getPostData(title);
  return (
    <div>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </div>
  );
}
