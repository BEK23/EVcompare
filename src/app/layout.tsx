import { Header } from "@/app/_components/header";
import { NewsPage } from "@/app/news/page";

export default function Layout() {
  return (
    <>
      <Header />

      <div className="mx-15 py-7.5">
        <NewsPage />
      </div>
    </>
  );
}
