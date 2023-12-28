import * as path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react()],
});
