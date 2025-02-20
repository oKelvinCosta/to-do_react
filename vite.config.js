import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./", // Base path of project. To wok locally or SCORM
  base: "/to-do_react/", // Base path of project. To deploy on GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs", // Output directory
  },
});
