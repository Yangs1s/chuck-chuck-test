import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ImagePlaceholder from "../common/ImagePlaceholder";
import { cn } from "@/lib/utils";

interface ProductProps {
  current: number;
  image: null | string;
  limit: number;
  name: string;
  price: number;
  index: number;
}
export function ProductCard({ product }: { product: ProductProps }) {
  const isSoldOut = product.current >= product.limit;
  const progressPercent = Math.min(
    (product.current / product.limit) * 100,
    100,
  );
  return (
    <Card
      className={cn(
        "overflow-hidden border-none shadow-sm p-0 gap-0",
        isSoldOut && "opacity-60 grayscale",
      )}
    >
      {" "}
      {/* 1. 이미지 공간 확보 (Aspect Ratio) */}
      <div className="relative w-full aspect-square">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full"
          />
        ) : (
          <ImagePlaceholder />
        )}
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Badge variant="secondary" className="px-4 py-1 text-lg font-bold">
              품절
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="px-5 py-5 flex flex-col gap-1">
        {/* Index는 스크린 리더용이나 디버깅용으로 숨겨두거나 작게 표시 */}
        <p className="text-xs text-slate-400">
          상품번호: #{String(product.index).padStart(3, "0")}
        </p>
        <h3 className="text-lg font-bold truncate leading-tight">
          {product.name}
        </h3>
        <p className="text-xl font-extrabold text-[#147a46]">
          {product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col p-4 pt-0 gap-2">
        <div className="flex justify-between w-full text-sm font-medium">
          <span className="text-[#147a46]">
            {Math.floor(progressPercent)}% 달성
          </span>
          <span className="text-slate-500">
            {product.current}/{product.limit}개
          </span>
        </div>
        <Progress
          value={progressPercent}
          className="h-2 bg-[#f3faf4] [$>div]:bg-primary"
          style={{ "--value": progressPercent } as React.CSSProperties}
        />
      </CardFooter>
    </Card>
  );
}
