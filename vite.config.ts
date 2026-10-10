import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

const DEFAULT_SITE_URL = "https://joshlara.vercel.app";

/** Social crawlers require absolute URLs for og:image and og:url. */
function siteUrl(): Plugin {
  const url = (process.env.SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, "");

  return {
    name: "site-url",
    transformIndexHtml: {
      order: "pre",
      handler: (html) => html.replaceAll("%SITE_URL%", url),
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrl()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
