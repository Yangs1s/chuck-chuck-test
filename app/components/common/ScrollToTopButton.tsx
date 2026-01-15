"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // 아이콘
import { Button } from "@/components/ui/button"; // shadcn 버튼 재사용
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false; // 플래그

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed bottom-6 sm:block lg:hidden right-6 z-50 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
        // 모바일에서는 조금 더 크게(h-12 w-12), PC에서는 적당히(h-10 w-10)
        "h-12 w-12 md:h-10 md:w-10",
        isVisible
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-10 pointer-events-none invisible",
      )}
      aria-label="맨 위로 스크롤"
    >
      <ArrowUp className="h-6 w-6 md:h-5 md:w-5" />
    </Button>
  );
}
