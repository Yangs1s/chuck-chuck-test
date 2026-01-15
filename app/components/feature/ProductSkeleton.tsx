import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <Card className="overflow-hidden border-none shadow-sm h-full">
      {/* 1. 이미지 영역 (Aspect Square) */}
      <div className="relative w-full aspect-square bg-slate-100">
        <Skeleton className="w-full h-full" />
      </div>

      {/* 2. 컨텐츠 영역 */}
      <CardContent className="flex flex-col gap-2 p-5 pt-5">
        <Skeleton className="h-3 w-1/3" /> {/* 상품번호 */}
        <Skeleton className="h-5 w-3/4" /> {/* 상품명 */}
        <Skeleton className="h-6 w-1/2 mt-1" /> {/* 가격 */}
      </CardContent>

      {/* 3. 푸터 영역 */}
      <CardFooter className="flex flex-col gap-2 p-5 pt-0">
        <div className="flex justify-between w-full">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-10" />
        </div>
        <Skeleton className="h-2 w-full" /> {/* 프로그래스 바 */}
      </CardFooter>
    </Card>
  );
};
