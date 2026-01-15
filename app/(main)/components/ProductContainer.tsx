"use client";
import { useMemo, useState } from "react";
import { FilterType } from "@/app/constants/product";
import { ProductProps } from "@/app/types";

import { ProductList } from "./ProductList";
import { ProductSortSelect } from "@/app/components/feature/ProductSortSelect";

export function ProductContainer({
  initialContent,
}: {
  initialContent: ProductProps[];
}) {
  const [filter, setFilter] = useState<FilterType>("recent");

  // 데이터 정렬
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
      case "recent":
      default:
        return data.sort((a, b) => a.index - b.index);
    }
  }, [initialContent, filter]);

  return (
    <div>
      <div className="flex justify-between items-center  border-primary/10 rounded-lg py-4 ">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-foreground">
            진행중인 공동 구매
          </h1>
        </div>
        {/* <FilterBar currentFilter={filter} onFilterChange={setFilter} /> */}
        <ProductSortSelect value={filter} onChange={setFilter} />
      </div>
      {/* seperator */}
      <div className="w-full md:h-0.5 mt-2 mb-4 bg-black/10"></div>
      <ProductList content={sortedData} />
    </div>
  );
}
