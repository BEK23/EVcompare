import Loader from "@assets/loader";
import { useQuery } from "react-query";

import { getNews } from "@/api/news.api";
import { Pagination } from "@/app/_components/pagination";
import { NewsItem } from "@/app/news/_components/news.item";
import { cn } from "@/lib/utils";
import { useNewsStore } from "@/store/news.store";

export const News = () => {
  const news = useNewsStore((state) => state.news);
  const search = useNewsStore((state) => state.search);
  const pagination = useNewsStore((state) => ({
    total: state.total,
    skip: state.skip,
    limit: state.limit,
  }));

  const setNews = useNewsStore((state) => state.setState);

  const { isLoading } = useQuery(
    ["news", { limit: pagination.limit, skip: pagination.skip, q: search }],
    getNews,
    {
      select: (response) => response.data,
      onSuccess: (data) => {
        setNews({ news: data.products, total: data.total });
      },
    },
  );

  return (
    <>
      <div
        className={cn(
          "min-h-[490px] relative mb-20 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 transition",
          isLoading && "animate-pulse opacity-70 group/disabled",
        )}
      >
        {news?.map((item) => <NewsItem key={item.id} {...item} />)}
        {isLoading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150">
            <Loader />
          </div>
        )}
      </div>
      {news && (
        <Pagination
          {...pagination}
          onChange={(index) => setNews({ skip: index * pagination.limit })}
          className="mb-10"
        />
      )}
    </>
  );
};
