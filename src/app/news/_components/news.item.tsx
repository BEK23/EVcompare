import { INews } from "@/types/news.interface";

export const NewsItem = (news: INews) => {
  return (
    <div className="relative h-[330px] animate-fade-up overflow-hidden rounded-[1.25rem] border bg-background transition duration-500 hover:scale-105 group-hover/disabled:scale-100 sm:h-[400px] md:h-[490px]">
      <div
        style={{ backgroundImage: `url(${news.images[0]})` }}
        className="h-[180px] w-full bg-cover bg-center bg-no-repeat shadow-[inset_0px_-30px_18px_-10px_var(--background)] sm:h-[220px] md:h-[300px]"
      />
      <div className="absolute bottom-0 w-full space-y-4 px-5 pb-5">
        <h3 className="text-center font-bold md:text-xl lg:text-2xl">
          {news.title}
        </h3>
        <p className="line-clamp-4 text-xs md:text-sm lg:text-base">
          {news.description}
        </p>
        <div className="flex justify-between font-bold">
          <div>{news.brand}</div>
          <div>${news.price}</div>
        </div>
      </div>
    </div>
  );
};
