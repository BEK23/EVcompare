import Logo from "@assets/logo";

import { Actions } from "./actions";
import { Search } from "./search";

export const Header = () => {
  return (
    <div className="relative flex items-center py-5 md:py-7.5">
      <div className="mr-auto h-7 sm:h-10 md:h-auto xl:mr-0">
        <Logo className="h-full w-full" />
      </div>

      <Search />

      <Actions />

      <hr className="absolute bottom-0 w-full rounded-full border-2 border-muted" />
    </div>
  );
};
