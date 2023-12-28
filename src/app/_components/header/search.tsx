import FindIcon from "@assets/find";

export const Search = () => {
  return (
    <div className="relative ml-15 mr-auto">
      <input
        placeholder="Найдите ваш электромобиль"
        className="h-15 w-[460px] rounded-full border-2 bg-background pl-[70px] pr-6 placeholder:text-muted"
      />
      <FindIcon className="absolute left-6 top-1/2 -translate-y-1/2" />
    </div>
  );
};
