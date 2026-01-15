export const ProductProgressBar = ({ percent }: { percent: number }) => (
  <div
    className="h-2 w-full overflow-hidden rounded-full bg-[#f3faf4]"
    aria-hidden="true"
  >
    <div
      className="h-full bg-primary transition-all duration-300 ease-in-out"
      style={{ width: `${percent}%` }}
    />
  </div>
);
