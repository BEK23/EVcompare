import { ClassValue } from "clsx";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

interface PaginationProps {
  total: number;
  skip: number;
  limit: number;
  onChange: (index: number) => void;
  className?: ClassValue;
}

export const Pagination = ({
  total,
  skip,
  limit,
  onChange,
  className,
}: PaginationProps) => {
  const count = Math.ceil(total / limit);
  const current = Math.trunc(skip / limit);

  const right = Math.min(current + 3, count - 1);
  const left = Math.max(current - (right === count - 1 ? 2 : 1), 1);

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
      <div
        onClick={() => onChange(0)}
        className={cn(
          "cursor-pointer",
          current === 0 && "font-bold text-[#E1242D]",
        )}
      >
        1
      </div>

      {left > 1 && "..."}

      {range.map((index) => (
        <div
          key={index}
          className={cn(
            "cursor-pointer",
            current === index && "font-bold text-[#E1242D]",
          )}
          onClick={() => onChange(index)}
        >
          {index + 1}
        </div>
      ))}

      {right < count - 1 && "..."}

      <div
        onClick={() => onChange(count - 1)}
        className={cn(
          "cursor-pointer",
          current === count - 1 && "font-bold text-[#E1242D]",
        )}
      >
        {count}
      </div>
    </div>
  );
};
