export const PRODUCT_FILTERS = [
  { label: "전체 상품", value: "all" },
  { label: "인기순", value: "popular" },
  { label: "마감임박", value: "closing" },
] as const;

//필터 추가시 타입 자동으로 추론함.
export type FilterType = (typeof PRODUCT_FILTERS)[number]["value"];
