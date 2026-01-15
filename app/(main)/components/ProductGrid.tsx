// app/(main)/components/main/ProductGrid.tsx
import { ProductCard } from "@/app/components/feature/ProductCard";
import { ProductProps } from "@/app/types";

// 스타일(ClassName)과 렌더링 책임만 가짐
export function ProductGrid({
  products,
  opacity = false,
}: {
  products: ProductProps[];
  opacity?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-6 ${opacity ? "opacity-75 grayscale-[0.5]" : ""}`}
    >
      {products.map((product, index) => (
        <ProductCard
          priority={index < 4}
          key={`${product.name}-${product.index}`}
          product={product}
        />
      ))}
    </div>
  );
}
