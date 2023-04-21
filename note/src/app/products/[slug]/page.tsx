import GoProductsButton from "@/components/GoProductsButton";
import { getProduct, getProducts } from "@/services/products";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function PantsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return (
    <div>
      <h1>이곳은 {product.name} 입니다.</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
      <GoProductsButton />
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
