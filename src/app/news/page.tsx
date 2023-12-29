import { Breadcrumbs } from "@/app/_components/breadcrumbs";

import { News } from "./_components/news";

export const NewsPage = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ title: "Новости и анонсы" }]} />

      <h1 className="py-5 text-[2.5rem] font-bold">Новости и анонсы</h1>

      <News />
    </>
  );
};
