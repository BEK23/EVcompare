import ChargerIcon from "@assets/charger";
import LawIcon from "@assets/law";
import MenuIcon from "@assets/menu";
import PersonIcon from "@assets/person";

export const Actions = () => {
  return (
    <div className="flex gap-2.5 md:gap-5 lg:gap-7.5 xl:ml-5">
      <div className="box-content hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-muted sm:flex md:h-15 md:w-15 lg:p-1">
        <PersonIcon className="w-3.5 md:w-5 lg:w-auto" />
      </div>
      <div className="box-content hidden h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-muted md:flex md:h-15 md:w-15 lg:p-1">
        <ChargerIcon className="md:w-5 lg:w-auto" />
      </div>
      <div className="box-content flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-muted md:h-15 md:w-15 lg:p-1">
        <LawIcon className="w-3.5 md:w-5 lg:w-auto" />
      </div>
      <div className="box-content flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-muted md:h-15 md:w-15 lg:p-1">
        <MenuIcon className="w-3.5 md:w-5 lg:w-auto" />
      </div>
    </div>
  );
};
