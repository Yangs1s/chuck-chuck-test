import { PRODUCT_FILTERS, FilterType } from "@/app/constants/product";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ currentFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {PRODUCT_FILTERS.map((f) => (
          <Button
            key={f.value}
            variant={currentFilter === f.value ? "default" : "outline"}
            onClick={() => onFilterChange(f.value)}
            size="sm"
            className="rounded-full"
          >
            {f.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
