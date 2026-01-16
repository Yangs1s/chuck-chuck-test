import { ProductContainer } from "./components/ProductContainer";
import { fetchApi } from "@/app/lib/fetchApi";
import { ProductProps } from "@/app/types";

interface ApiResponse {
  content: ProductProps[];
}

const getData = async () => {
  const data = await fetchApi<ApiResponse>("https://api.zeri.pics/", {
    cache: "no-store",
  });
  return Array.isArray(data?.content) ? data!.content : [];
};

export default async function MainPage() {
  const content = await getData();

  return <ProductContainer initialContent={content} />;
}
