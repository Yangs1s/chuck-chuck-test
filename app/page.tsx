import { ProductCard } from "./components/ProductCard";
interface ProductProps {
  current: number;
  image: null | string;
  limit: number;
  name: string;
  price: number;
  index: number;
}

const getData = async () => {
  const res = await fetch("https://api.zeri.pics/");
  const data = await res.json();

  return data.content;
};

export default async function Home() {
  const { content } = await getData();

  return (
    <div>
      <h1>진행중인 상품</h1>
      <div className="grid grid-cols-4 gap-4">
        {content?.map((product: ProductProps) => {
          const key = `${product.name}-${product.index}`;
          return <ProductCard key={key} product={product} />;
        })}
      </div>
    </div>
  );
}
