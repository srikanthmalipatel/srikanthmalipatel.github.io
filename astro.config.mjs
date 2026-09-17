// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://srikanthmalipatel.github.io",
  integrations: [mdx(), sitemap()],
  // Disable Shiki: it injects a dark theme via inline styles on <pre>/tokens
  // (plus tabindex focus ring) that our CSS can't override. We want code to
  // render as a plain warm-paper mono block styled by `.markdown pre`.
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
