import axios, { AxiosResponse } from "axios";
import { QueryFunction } from "react-query";

import { INewsRequestParams, INewsResponse } from "@/types/news.interface";

export const getNews: QueryFunction<
  AxiosResponse<INewsResponse>,
  [string, INewsRequestParams]
> = async ({ queryKey }) => {
  const [, params] = queryKey;

  return await axios.get("https://dummyjson.com/products/search", { params });
};
