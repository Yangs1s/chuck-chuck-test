import { ImageIcon } from "lucide-react"; // Shadcn 설치 시 기본 포함됨
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

export default function ImagePlaceholder({
  className,
  text = "No Image",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-full bg-muted text-muted-foreground rounded-md",
        className,
      )}
    >
      {/* 1. 시인성을 위해 아이콘을 중앙에 배치
         2. strokeWidth를 1.5로 얇게 주어 세련된 느낌 
      */}
      <ImageIcon className="w-10 h-10 mb-2 opacity-50" strokeWidth={1.5} />
      <span className="text-xs font-medium opacity-70">{text}</span>
    </div>
  );
}
