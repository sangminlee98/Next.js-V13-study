import React from "react";
import Post from "./Post";

const DUMMY = [
  {
    id: 1,
    title: "2023년 리뷰",
    created_at: new Date(),
    desc: "2023년 한해 동안 배운 기술들, 생각들 정리",
    category: "my story",
    image_url: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "리액트 18버전!",
    created_at: new Date(),
    desc: "리액트 18에 추가된 사항들 정리",
    category: "frontend",
    image_url: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "리액트 Best Practice!",
    created_at: new Date(),
    desc: "리액트를 정확하게 사용하는 방법들을 정리",
    category: "frontend",
    image_url: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "Node 프로 팁!",
    created_at: new Date(),
    desc: "노드를 프로처럼 사용하기 위한 모든 팁들을 정리!",
    category: "backend",
    image_url: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "자바스크립트 10가지 프로 팁!",
    created_at: new Date(),
    desc: "프로처럼 자바스크립트 사용할 수 있는 10가지 팁",
    category: "javascript",
    image_url: "https://picsum.photos/200",
  },
];

export default function Posts() {
  return (
    <ul className="mt-2 grid gap-4 grid-cols-3">
      {DUMMY.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          created_at={post.created_at}
          desc={post.desc}
          category={post.category}
          image_url={post.image_url}
        />
      ))}
    </ul>
  );
}
