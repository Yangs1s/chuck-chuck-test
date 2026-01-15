// app/hooks/useProductDisplay.ts
import { useState, useMemo, useCallback } from "react";
import { ProductProps } from "@/app/types";
import { classifyProducts } from "@/app/lib/product";
import { INITIAL_PRODUCT_LIMIT } from "@/app/constants";

export function useProductDisplay(content: ProductProps[]) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 데이터 가공 로직 응집
  const { available, soldOut } = useMemo(
    () => classifyProducts(content),
    [content],
  );

  // 화면에 보여줄 데이터 계산
  const visibleAvailableProducts = isExpanded
    ? available
    : available.slice(0, INITIAL_PRODUCT_LIMIT);
  // 남은 상품 갯수
  const remainingCount = available.length - visibleAvailableProducts.length;
  // 상품 전체보기/접기 버튼 클릭 시 상태 변경
  const toggleExpansion = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);
  return {
    available: visibleAvailableProducts, // 렌더링될 최종 데이터
    soldOut,
    isExpanded,
    remainingCount,
    toggleExpansion,
    hasMore: remainingCount > 0,
  };
}
