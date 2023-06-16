import { getPost } from "@/service/post";

type Props = {
  params: {
    title: string;
  };
};

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.title);
  return (
    <div>
      <pre>{post}</pre>
    </div>
  );
}
