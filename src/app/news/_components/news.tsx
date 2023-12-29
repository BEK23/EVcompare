import { useQuery } from "react-query";

import { getNews } from "@/api/news.api";

export const News = () => {
  const newsQuery = useQuery(["news", { limit: 8, skip: 0, q: "" }], getNews, {
    select: (response) => response.data,
  });

  return <pre>{JSON.stringify(newsQuery.data, null, 2)}</pre>;
};
