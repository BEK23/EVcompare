import { INews } from "@/types/news.interface";

export const NewsItem = (news: INews) => {
  return (
    <div className="relative h-[490px] overflow-hidden rounded-[1.25rem] border bg-background transition duration-500 hover:scale-105 group-hover/disabled:scale-100">
      <div
        style={{ backgroundImage: `url(${news.images[0]})` }}
        className="h-[300px] w-full bg-cover bg-center bg-no-repeat shadow-[inset_0px_-30px_18px_-10px_var(--background)]"
      />
      <div className="absolute bottom-0 w-full space-y-4 px-5 pb-5">
        <h3 className="text-center text-2xl font-bold">{news.title}</h3>
        <p className="line-clamp-4">{news.description}</p>
        <div className="flex justify-between font-bold">
          <div>{news.brand}</div>
          <div>${news.price}</div>
        </div>
      </div>
    </div>
  );
};
