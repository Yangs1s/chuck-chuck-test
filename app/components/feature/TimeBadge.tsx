import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
export function TimeBadge() {
  return (
    <Badge className="absolute top-3 left-3 z-10 gap-1.5 px-2 py-1 bg-red-600  text-white border-none shadow-md animate-pulse">
      <Clock className="w-3.5 h-3.5" />
      <span className="text-[12px] font-medium tracking-wider">
        01:32:12 남음
      </span>
    </Badge>
  );
}
