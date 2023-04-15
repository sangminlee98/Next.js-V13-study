import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/services/products";
import Link from "next/link";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
}
