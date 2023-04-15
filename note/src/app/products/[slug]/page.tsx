import { getProduct, getProducts } from "@/services/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

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
  return <div>이곳은 {product.name} 입니다.</div>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
