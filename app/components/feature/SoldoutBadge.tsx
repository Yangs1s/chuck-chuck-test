import { Badge } from "@/components/ui/badge";

export default function SoldoutBadge() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <Badge variant="secondary" className="px-4 py-1 text-lg font-bold">
        품절
      </Badge>
    </div>
  );
}
