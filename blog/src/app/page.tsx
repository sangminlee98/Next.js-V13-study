import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import CarouselPosts from "@/components/CarouselPosts";
import { getAllPosts } from "@/service/posts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </>
  );
}
