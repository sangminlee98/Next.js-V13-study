import Hero from "@/components/Hero";
import Posts from "@/components/Posts";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <h1 className="text-xl font-bold">Featured Posts</h1>
      <Posts />
    </div>
  );
}
