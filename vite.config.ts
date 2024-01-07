import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7777,
  },
  resolve: {
    alias: {
      // src
      src: path.resolve(__dirname, "src"),

      // assets
      assets: path.resolve(__dirname, "src/assets"),

      // helpers
      helpers: path.resolve(__dirname, "src/helpers"),

      // utils
      utils: path.resolve(__dirname, "src/utils"),

      // views
      views: path.resolve(__dirname, "src/views"),
    },
  },
  plugins: [react()],
});
