import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import SearchProvider from "@/app/_context/search-provider";
import Layout from "@/app/layout";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Layout />
      </SearchProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
