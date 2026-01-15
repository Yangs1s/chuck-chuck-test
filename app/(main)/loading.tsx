import { ProductSkeleton } from "@/app/components/feature";
import { PRODUCT_SKELETON_LIMIT } from "@/app/constants";
import { Separator } from "@/app/components/common";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <Skeleton className="w-[calc(100%-100px)] h-10" />
        <Skeleton className="w-[100px] h-10" />
      </div>
      <Separator />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: PRODUCT_SKELETON_LIMIT }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
