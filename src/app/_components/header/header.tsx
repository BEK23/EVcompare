import FindIcon from "@assets/find";
import Logo from "@assets/logo";
import { useContext } from "react";

import {
  SearchContext,
  SearchContextProps,
} from "@/app/_context/search-provider";
import { cn } from "@/lib/utils";

import { Actions } from "./actions";
import { Search } from "./search";

export const Header = () => {
  const { open } = useContext<SearchContextProps>(SearchContext);

  return (
    <div className="relative flex items-center py-5 md:py-7.5">
      <div className="mr-auto h-7 sm:h-10 md:h-auto xl:mr-0">
        <Logo className="h-full w-full" />
      </div>

      <div className="mr-2.5 block md:mr-5 lg:mr-7.5 xl:hidden" onClick={open}>
        <div className="relative box-content h-10 w-10 rounded-full border border-muted md:h-15 md:w-15 lg:p-1">
          <FindIcon
            className={cn(
              "absolute left-1/2 top-1/2 w-3.5 -translate-y-1/2 -translate-x-1/2",
              "md:w-5",
              "lg:scale-150",
            )}
          />
        </div>
      </div>

      <div className="hidden xl:mr-auto xl:block">
        <div className="relative ml-15 box-content h-auto w-auto rounded-full border border-none border-muted">
          <Search />
          <FindIcon className="absolute left-6 top-1/2 -translate-y-1/2 scale-100" />
        </div>
      </div>

      <Actions />

      <hr className="absolute bottom-0 w-full rounded-full border-2 border-muted" />
    </div>
  );
};
