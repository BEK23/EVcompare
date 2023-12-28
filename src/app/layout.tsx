import { Header } from "@/_components/header";
import { NewsPage } from "@/news/page";

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
