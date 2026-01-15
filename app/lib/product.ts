import { ProductProps } from "../types";
interface ClassifiedProducts {
  available: ProductProps[];
  soldOut: ProductProps[];
}

export function classifyProducts(products: ProductProps[]): ClassifiedProducts {
  return products.reduce<ClassifiedProducts>(
    (acc, product) => {
      const isSoldOut = product.current >= product.limit;
      // 품절 상품과 판매중 상품 분리
      if (isSoldOut) {
        acc.soldOut.push(product);
      } else {
        acc.available.push(product);
      }
      return acc;
    },
    { available: [], soldOut: [] }, // 초기값
  );
}
