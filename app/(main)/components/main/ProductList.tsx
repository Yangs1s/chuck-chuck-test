"use client";

import { ProductCard } from "@/app/components/feature/ProductCard";
import { ProductProps } from "@/app/types";
import { classifyProducts } from "@/app/lib/product";
import { useState } from "react";
import { INITIAL_PRODUCT_LIMIT } from "@/app/constants";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
export function ProductList({ content }: { content: ProductProps[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // data 분류
  const { available, soldOut } = classifyProducts(content);

  const visibleAvailableProducts = isExpanded
    ? available
    : available.slice(0, INITIAL_PRODUCT_LIMIT);

  // 갯수펴ㅛ시용
  const remainingCount = available.length - visibleAvailableProducts.length;
  return (
    <div className="flex flex-col gap-10">
      {/* 1. 판매 중 섹션 (available 배열 사용) */}
      <section>
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            진행중인 공동 구매
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleAvailableProducts.map((product) => (
            <ProductCard
              key={`${product.name}-${product.index}`}
              product={product}
            />
          ))}
        </div>

        {!isExpanded && remainingCount > 0 ? (
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto min-w-[200px] gap-2 font-medium"
              onClick={() => setIsExpanded(true)}
            >
              상품 전체보기 (+{remainingCount}개)
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto min-w-[200px] gap-2 font-medium"
              onClick={() => setIsExpanded(false)}
            >
              상품 접기
              <ChevronUp className="w-4 h-4" />
            </Button>
          </div>
        )}
      </section>

      {/* 2. 품절 섹션 (soldOut 배열 사용) - 데이터 있을 때만 렌더링 */}
      {soldOut.length > 0 && (
        <section className="relative pt-4">
          {/* 구분선 및 헤더 */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-slate-200 flex-1" />
            <span className="text-slate-400 text-sm font-medium px-2">
              품절된 상품 ({soldOut.length})
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          {/* 품절 상품 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 opacity-75 grayscale-[0.5]">
            {soldOut.map((product) => (
              <ProductCard
                key={`${product.name}-${product.index}`}
                product={product}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
