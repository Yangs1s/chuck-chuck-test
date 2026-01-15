import { ChLogo } from "@/app/icons/ch-logo";
export default function Header() {
  return (
    <header className="fixed w-full left-0 top-0 bg-white border-b z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center gap-2">
        <ChLogo />
        <h1 className="text-lg md:text-xl font-bold text-primary">척척밥상</h1>
      </div>
    </header>
  );
}
