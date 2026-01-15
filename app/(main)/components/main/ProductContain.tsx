"use client";
import { useMemo, useState } from "react";
import { FilterType } from "@/app/constants/product";
import { ProductProps } from "@/app/types";
import { FilterBar } from "./FilterBar";
import { ProductList } from "./ProductList";

export function ProductContainer({
  initialContent,
}: {
  initialContent: ProductProps[];
}) {
  const [filter, setFilter] = useState<FilterType>("all");

  const sortedData = useMemo(() => {
    const data = [...initialContent];

    switch (filter) {
      case "popular":
        // 인기순 : 판매량 많은순
        return data.sort((a, b) => b.current - a.current);
      case "closing":
        // 마감임박: 남은 수량(limit - current) 적은 순서
        // (단, 품절된 건 어차피 뒤로 가니까 신경 안 써도 됨)
        return data.sort((a, b) => {
          const remainA = a.limit - a.current;
          const remainB = b.limit - b.current;
          return remainA - remainB; // 오름차순 (0개 남은게 제일 위로)
        });
      case "all":
      default:
        return data.sort((a, b) => a.index - b.index);
    }
  }, [initialContent, filter]);
  return (
    <div>
      <div className="flex justify-start bg-secondary border-primary/10 rounded-lg p-4 mb-4">
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      </div>
      <ProductList content={sortedData} />
    </div>
  );
}
