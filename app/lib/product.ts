import { ProductProps } from "../types";
interface ClassifiedProducts {
  available: ProductProps[];
  soldOut: ProductProps[];
}
// 솔드아웃 여부 확인
export const isSoldOut = (product: ProductProps) =>
  product.current >= product.limit;

export function classifyProducts(products: ProductProps[]): ClassifiedProducts {
  return products.reduce<ClassifiedProducts>(
    (acc, product) => {
      // 품절 상품과 판매중 상품 분리
      if (isSoldOut(product)) {
        acc.soldOut.push(product);
      } else {
        acc.available.push(product);
      }
      return acc;
    },
    { available: [], soldOut: [] }, // 초기값
  );
}
