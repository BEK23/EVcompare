import { create } from "zustand";

import { INews } from "@/types/news.interface";

type NewsStoreStateType = {
  news?: INews[];
  total: number;
  skip: number;
  limit: number;
  search: string;
};

type NewsStoreActionType = {
  setState: (data: Partial<NewsStoreStateType>) => void;
};

const initialState: NewsStoreStateType = {
  total: 0,
  skip: 0,
  limit: 8,
  search: "",
};

export const useNewsStore = create<NewsStoreStateType & NewsStoreActionType>()(
  (set) => ({
    ...initialState,
    setState: (data) => {
      set(data);
    },
  }),
);
