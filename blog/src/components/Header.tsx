import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">Sam&apos;s Blog</h1>
      </Link>
      <ul className="flex gap-4">
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/contact"}>contact</Link>
      </ul>
    </div>
  );
}
