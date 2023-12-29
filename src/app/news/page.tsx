import ChevronRight from "@assets/chevron-right";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";

import { News } from "./_components/news";

export const NewsPage = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ title: "Новости и анонсы" }]} />

      <div className="flex items-center">
        <div className="mr-5 flex h-10 w-10 rotate-180 items-center justify-center rounded-full border sm:hidden">
          <ChevronRight />
        </div>
        <h1 className="py-5 text-lg font-bold md:text-2xl lg:text-3xl xl:text-[2.5rem]">
          Новости и анонсы
        </h1>
      </div>

      <News />
    </>
  );
};
