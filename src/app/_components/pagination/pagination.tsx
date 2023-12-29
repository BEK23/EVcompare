import { ClassValue } from "clsx";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

interface PaginationProps {
  total: number;
  skip: number;
  limit: number;
  className?: ClassValue;
}

export const Pagination = ({
  total,
  skip,
  limit,
  className,
}: PaginationProps) => {
  const count = Math.ceil(total / limit);
  const current = Math.trunc(skip / limit);

  const left = Math.max(current - 1, 1);
  const right = Math.min(current + 3, count - 1);

  const range = useMemo(
    () =>
      Array(right - left)
        .fill(left)
        .map((x, y) => x + y),
    [left, right],
  );

  return (
    <div
      className={cn("flex justify-center gap-5 text-lg font-medium", className)}
    >
      <div className={cn(current === 0 && "font-bold text-[#E1242D]")}>1</div>

      {left > 1 && "..."}

      {range.map((index) => (
        <div key={index}>{index + 1}</div>
      ))}

      {right < count - 1 && "..."}

      <div className={cn(current === count - 1 && "font-bold text-[#E1242D]")}>
        {count}
      </div>
    </div>
  );
};
