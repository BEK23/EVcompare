import { Header } from "@/app/_components/header";
import { NewsPage } from "@/app/news/page";

export default function Layout() {
  return (
    <div className="mx-4 sm:mx-7 md:mx-10 xl:mx-15">
      <Header />

      <div className="py-7.5">
        <NewsPage />
      </div>
    </div>
  );
}
