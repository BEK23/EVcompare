import ChargerIcon from "@assets/charger";
import LawIcon from "@assets/law";
import MenuIcon from "@assets/menu";
import PersonIcon from "@assets/person";

export const Actions = () => {
  return (
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
  );
};
