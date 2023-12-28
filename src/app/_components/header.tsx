import ChargerIcon from "@assets/charger.tsx";
import FindIcon from "@assets/find.tsx";
import LawIcon from "@assets/law.tsx";
import Logo from "@assets/logo.tsx";
import MenuIcon from "@assets/menu.tsx";
import PersonIcon from "@assets/person.tsx";

export const Header = () => {
  return (
    <div className="relative mx-15 flex items-center py-7.5">
      <Logo />
      <div className="relative ml-15">
        <input
          placeholder="Найдите ваш электромобиль"
          className="h-15 w-[460px] rounded-full border-2 bg-background pl-[70px] pr-6 placeholder:text-muted"
        />
        <FindIcon className="absolute left-6 top-1/2 -translate-y-1/2" />
      </div>

      <div className="grow" />

      <div className="flex gap-7.5">
        <div className="box-content flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-muted p-1">
          <PersonIcon />
        </div>
        <div className="box-content flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-muted p-1">
          <ChargerIcon />
        </div>
        <div className="box-content flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-muted p-1">
          <LawIcon />
        </div>
        <div className="box-content flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-muted p-1">
          <MenuIcon />
        </div>
      </div>

      <hr className="absolute bottom-0 w-full rounded-full border-2 border-muted" />
    </div>
  );
};
