import { ProductList } from "./components/ProductList";

const getData = async () => {
  const res = await fetch("https://api.zeri.pics/");
  const data = await res.json();

  return data.content;
};

export default async function MainPage() {
  const content = await getData();

  return <ProductList content={content} />;
}
