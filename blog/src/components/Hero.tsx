import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center gap-1">
      <Image
        className="w-52 h-52 rounded-full"
        src={ProfileImage}
        alt="profile image"
        priority
      />
      <h2 className="mt-4 text-3xl font-bold">Hi, I&apos;m Sam</h2>
      <h3 className="text-xl font-semibold">FrontEnd Engineer</h3>
      <p>꿈을 코딩하는 사람, 테커 이상민</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 rounded-xl px-4 py-1 font-semibold hover:opacity-75">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
