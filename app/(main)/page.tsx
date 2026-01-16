import { ProductContainer } from "./components/ProductContainer";
import { fetchApi } from "@/app/lib/fetchApi";
import { ProductProps } from "@/app/types";

type ApiResponse<T> = {
  content: T;
};
const getData = async () => {
  const data = await fetchApi<ApiResponse<ProductProps[]>>(
    "https://api.zeri.pics/",
    {
      cache: "no-store",
    },
  );
  return Array.isArray(data?.content) ? data!.content : [];
};

export default async function MainPage() {
  const content = await getData();

  return <ProductContainer initialContent={content} />;
}
