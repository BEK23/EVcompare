import FindIcon from "@assets/find";
import { ChangeEvent, useEffect, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import { useNewsStore } from "@/store/news.store";

export const Search = () => {
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
    <div className="mr-2.5 block md:mr-5 lg:mr-7.5 xl:mr-auto">
      <div className="relative box-content h-10 w-10 rounded-full border border-muted md:h-15 md:w-15 lg:ml-15 lg:p-1 xl:h-auto xl:w-auto xl:border-none">
        <div className="hidden xl:flex">
          <input
            onChange={handleSearchChange}
            placeholder="Найдите ваш электромобиль"
            className="h-15 w-[460px] rounded-full border-2 bg-background pl-[70px] pr-6 placeholder:text-muted"
          />
        </div>
        <FindIcon
          className={cn(
            "absolute left-1/2 top-1/2 w-3.5 -translate-y-1/2 -translate-x-1/2",
            "md:w-5",
            "lg:scale-150",
            "xl:left-6 xl:w-auto xl:-translate-x-0 xl:scale-100",
          )}
        />
      </div>
    </div>
  );
};
