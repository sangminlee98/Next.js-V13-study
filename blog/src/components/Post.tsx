import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

type PostProps = {
  title: string;
  created_at: Date;
  desc: string;
  category: string;
  image_url: string;
};

export default function Post({
  title,
  created_at,
  desc,
  category,
  image_url,
}: PostProps) {
  return (
    <li className="flex flex-col h-96 rounded-md shadow-md cursor-pointer hover:opacity-80">
      <div className="relative h-2/3">
        <Image
          className="object-fill rounded-t-md"
          fill
          src={image_url}
          alt="이미지"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-1 py-2 px-4">
        <p className="self-end text-xs">
          {dayjs(created_at).format("YYYY-MM-DD")}
        </p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{desc}</p>
        <span className="bg-lime-200 px-2 py-1 text-xs rounded-md">
          {category}
        </span>
      </div>
    </li>
  );
}
