import profileImage from "@/assets/profile.jpg";
import Posts from "@/components/Posts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col justify-center items-center gap-1 mt-20">
        <Image
          className="w-52 h-52 rounded-full"
          src={profileImage}
          alt="profile"
        />
        <h1 className="mt-4 text-2xl font-bold">Hi, I&apos;m Sam</h1>
        <h2 className="text-xl font-semibold">FrontEnd Engineer</h2>
        <p>꿈을 코딩하는 사람, 테커 이상민</p>
        <Link
          className="bg-amber-500 rounded-lg px-4 py-2 font-semibold hover:opacity-75"
          href={"/contact"}
        >
          Contact Me
        </Link>
      </div>
      <div className="max-w-7xl my-0 mx-auto mt-4 px-4">
        <h1 className="text-xl font-bold">Featured Posts</h1>
        <Posts />
      </div>
    </main>
  );
}
