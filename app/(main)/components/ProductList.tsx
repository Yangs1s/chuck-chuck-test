// app/(main)/components/main/ProductList.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProductProps } from "@/app/types";
import { useProductDisplay } from "@/app/hooks/useProductDisplay"; // 커스텀 훅
import { ProductGrid } from "./ProductGrid"; // 분리된 컴포넌트

export function ProductList({ content }: { content: ProductProps[] }) {
  // 1. 로직은 훅에게 위임 (관심사 분리)
  const {
    available,
    soldOut,
    isExpanded,
    remainingCount,
    toggleExpansion,
    hasMore,
  } = useProductDisplay(content);

  return (
    <div className="flex flex-col gap-10">
      {/* 2. 판매 중 섹션 */}
      <section>
        <ProductGrid products={available} />

        {/* 더보기/접기 버튼 UI */}
        {(hasMore || isExpanded) && (
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer w-full md:w-auto min-w-[200px] text-primary gap-2 font-medium border-primary"
              onClick={toggleExpansion}
            >
              {isExpanded
                ? "상품 접기"
                : `상품 전체보기 (+${remainingCount}개)`}
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </div>
        )}
      </section>

      {/* 3. 품절 섹션 */}
      {soldOut.length > 0 && (
        <section className="relative pt-4">
          <SoldOutDivider count={soldOut.length} />
          <ProductGrid products={soldOut} opacity />
        </section>
      )}
    </div>
  );
}

// 품절 섹션 구분선
// 재사용성이 없다고 생각해서 하단에 따로 만들었습니다.
function SoldOutDivider({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px bg-slate-200 flex-1" />
      <span className="text-slate-400 text-sm font-medium px-2">
        품절된 상품 ({count})
      </span>
      <div className="h-px bg-slate-200 flex-1" />
    </div>
  );
}
