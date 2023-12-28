import Logo from "@assets/logo";

import { Actions } from "./actions";
import { Search } from "./search";

export const Header = () => {
  return (
    <div className="relative mx-15 flex items-center py-7.5">
      <Logo />

      <Search />

      <Actions />

      <hr className="absolute bottom-0 w-full rounded-full border-2 border-muted" />
    </div>
  );
};
