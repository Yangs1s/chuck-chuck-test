import { Home, List, ShoppingCart, User } from "lucide-react";
export default function MobileFooter() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl px-6 py-3 flex items-center justify-between z-20">
      <button className="flex flex-col items-center text-primary">
        <Home className="text-2xl" />
        <span className="text-[10px] font-bold mt-1">홈</span>
      </button>
      <button className="flex flex-col items-center text-gray-400 dark:text-gray-500">
        <List className="text-2xl" />
        <span className="text-[10px] font-medium mt-1">카테고리</span>
      </button>
      <button className="flex flex-col items-center text-gray-400 dark:text-gray-500">
        <ShoppingCart className="text-2xl" />
        <span className="text-[10px] font-medium mt-1">장바구니</span>
      </button>
      <button className="flex flex-col items-center text-gray-400 dark:text-gray-500">
        <User className="text-2xl" />
        <span className="text-[10px] font-medium mt-1">마이페이지</span>
      </button>
    </nav>
  );
}
