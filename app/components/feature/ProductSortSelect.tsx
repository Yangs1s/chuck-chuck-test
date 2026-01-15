"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRODUCT_FILTERS, FilterType } from "@/app/constants/product";
// ▲ 지난번에 constants/product.ts 혹은 lib/constants.ts에 만드신 경로로 import 하세요.

interface Props {
  value: FilterType;
  onChange: (value: FilterType) => void;
}

export function ProductSortSelect({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={(val) => onChange(val as FilterType)}>
      <SelectTrigger
        aria-label="정렬 트리거버튼"
        className="md:w-[100px] outline-none bg-inherit shadow-none border-none h-9 text-sm"
      >
        {/* 너비와 높이 조절 */}
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        {PRODUCT_FILTERS.map((filter) => (
          <SelectItem
            key={filter.value}
            value={filter.value}
            className="cursor-pointer"
          >
            {filter.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
