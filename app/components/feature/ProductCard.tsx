import { memo } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import { ImagePlaceholder, ProductProgressBar } from "../common";
import { cn } from "@/lib/utils";
import { ProductProps } from "@/app/types";
import { TimeBadge } from "./TimeBadge";
import { SoldoutBadge } from "./SoldoutBadge";
import { isSoldOut } from "@/app/lib/product";

// 리렌더링 방지를 위해 memo사용.
export const ProductCard = memo(function ProductCard({
  product,
  priority = false,
}: {
  priority?: boolean;
  product: ProductProps;
}) {
  const progressPercent = Math.min(
    (product.current / product.limit) * 100,
    100,
  );
  // 공동구매지만 마감이 필요할거 같아서, ui만 달아봤습니다.
  const isTimeAttack = product.limit - product.current < 10;
  return (
    <Card
      className={cn(
        "overflow-hidden border-none shadow-sm p-0 gap-0 transition-transform duration-300 hover:scale-105 cursor-pointer",
        isSoldOut(product) && "opacity-60 grayscale",
      )}
    >
      {/* 1. 이미지 공간 확보 (Aspect Ratio) */}
      <div className="relative w-full aspect-square">
        {product.image ? (
          <Image
            priority={priority}
            src={product.image}
            alt={product.name}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        ) : (
          <ImagePlaceholder />
        )}
        {/* 타임어택 배지 */}
        {!isSoldOut(product) && isTimeAttack && <TimeBadge />}
        {/* 품절 배지 */}
        {isSoldOut(product) && <SoldoutBadge />}
      </div>
      <CardContent className="px-4 py-4 md:px-5 md:py-5 flex flex-col gap-1">
        {/* Index는 스크린 리더용이나 디버깅용으로 숨겨두거나 작게 표시 */}
        <p className="text-xs text-slate-500">
          상품번호: #{String(product.index).padStart(3, "0")}
        </p>
        <div className="h-9 sm:h-10 flex items-center">
          <h2 className="font-bold text-base md:text-[18px] leading-tight text-slate-900 line-clamp-2 ">
            {product.name}
          </h2>
        </div>
        <p className="text-lg md:text-xl font-extrabold text-[#147a46]">
          {product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col px-4 pb-4 md:px-5 md:pb-5 pt-0 gap-2">
        <div className="flex justify-between w-full text-xs md:text-sm font-medium">
          <span className="text-[#147a46]">
            {Math.floor(progressPercent)}% 달성
          </span>
          <span className="text-slate-500">
            {product.current}/{product.limit}개
          </span>
        </div>
        <div className="flex mt-2 flex-col gap-2 w-full">
          <div className="flex mt-2 flex-col gap-2 w-full">
            <ProductProgressBar percent={progressPercent} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
});
