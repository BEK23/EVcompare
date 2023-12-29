import { ClassValue } from "clsx";
import { ChangeEvent, useEffect, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import { useNewsStore } from "@/store/news.store";

export const Search = ({ className }: { className?: ClassValue }) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const setParams = useNewsStore((state) => state.setState);

  useEffect(() => {
    setParams({
      search: debouncedSearch.length > 2 ? debouncedSearch : "",
      skip: 0,
    });
  }, [debouncedSearch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      onChange={handleSearchChange}
      placeholder="Найдите ваш электромобиль"
      className={cn(
        "h-15 w-[460px] rounded-full border-2 bg-background pl-[70px] pr-6 placeholder:text-muted",
        className,
      )}
    />
  );
};
