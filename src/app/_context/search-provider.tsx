import FindIcon from "@assets/find";
import { createContext, ReactNode, useState } from "react";

import { Search } from "@/app/_components/header/search";

export type SearchContextProps = {
  open?: () => void;
};

export const SearchContext = createContext<SearchContextProps>({});

export default function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        open: () => setOpen(true),
      }}
    >
      {children}
      {open && (
        <div className="fixed left-0 top-0 h-screen w-screen animate-fade-down bg-black/40">
          <div className="flex h-60 w-full flex-col items-center justify-between rounded-b-[1.25rem] bg-background p-4 shadow-2xl sm:p-7 md:p-10">
            <div className="relative w-[90%]">
              <Search autoFocus className="w-full" />
              <FindIcon className="absolute left-6 top-1/2 w-3.5 -translate-y-1/2" />
            </div>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </SearchContext.Provider>
  );
}
