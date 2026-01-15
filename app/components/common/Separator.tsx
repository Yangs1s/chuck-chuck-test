import { cn } from "@/lib/utils";
import { memo } from "react";

// memo 처리
export const Separator = memo(function Separator({
  className,
}: {
  className?: string;
}) {
  return <div className={cn("w-full h-0.5 bg-black/10", className)}></div>;
});
