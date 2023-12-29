import { useQuery } from "react-query";

import { getNews } from "@/api/news.api";
import { Pagination } from "@/app/_components/pagination";
import { NewsItem } from "@/app/news/_components/news.item";

export const News = () => {
  const newsQuery = useQuery(["news", { limit: 8, skip: 0, q: "" }], getNews, {
    select: (response) => response.data,
  });

  return (
    <>
      <div className="mb-20 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {newsQuery.data?.products.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </div>
      {newsQuery.data && <Pagination {...newsQuery.data} className="mb-10" />}
    </>
  );
};
