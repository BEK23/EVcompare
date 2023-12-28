import { Breadcrumbs } from "@/app/_components/breadcrumbs";

export const NewsPage = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ title: "Новости и анонсы" }]} />

      <h1 className="py-5 text-[2.5rem] font-bold">Новости и анонсы</h1>
    </>
  );
};
