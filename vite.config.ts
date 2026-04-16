import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), mode === "development" && screenGraphPlugin()],
  publicDir: "./public",
  base: "./",
}));
