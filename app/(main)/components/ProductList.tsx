import { ProductCard } from "@/app/components/feature/ProductCard";

interface ProductProps {
  current: number;
  image: null | string;
  limit: number;
  name: string;
  price: number;
  index: number;
}

export function ProductList({ content }: { content: ProductProps[] }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {content?.map((product: ProductProps) => {
          const key = `${product.name}-${product.index}`;
          return <ProductCard key={key} product={product} />;
        })}
      </div>
    </div>
  );
}
