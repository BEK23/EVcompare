import { useQuery } from "react-query";

import { getNews } from "@/api/news.api";
import { Pagination } from "@/app/_components/pagination";
import { NewsItem } from "@/app/news/_components/news.item";
import { useNewsStore } from "@/store/news.store";

export const News = () => {
  const news = useNewsStore((state) => state.news);
  const pagination = useNewsStore((state) => ({
    total: state.total,
    skip: state.skip,
    limit: state.limit,
  }));

  const setNews = useNewsStore((state) => state.setState);

  useQuery(
    ["news", { limit: pagination.limit, skip: pagination.skip, q: "" }],
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
      <div className="mb-20 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {news?.map((item) => <NewsItem key={item.id} {...item} />)}
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
