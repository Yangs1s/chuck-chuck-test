import { ProductSkeleton } from "@/app/components/feature/ProductSkeleton";
import { PRODUCT_SKELETON_LIMIT } from "@/app/constants";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: PRODUCT_SKELETON_LIMIT }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
