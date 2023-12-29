import FindIcon from "@assets/find";
import { ChangeEvent, useEffect, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
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
    <div className="relative ml-15 mr-auto">
      <input
        onChange={handleSearchChange}
        placeholder="Найдите ваш электромобиль"
        className="h-15 w-[460px] rounded-full border-2 bg-background pl-[70px] pr-6 placeholder:text-muted"
      />
      <FindIcon className="absolute left-6 top-1/2 -translate-y-1/2" />
    </div>
  );
};
