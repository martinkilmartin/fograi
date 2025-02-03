import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": process.env, // Ensure env vars are available
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 👈 Adds `@` as an alias for `src`
    },
  },
});
