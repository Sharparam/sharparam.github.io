import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import ctpLatte from "@catppuccin/vscode/themes/latte.json";
import ctpFrappe from "@catppuccin/vscode/themes/frappe.json";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

const integrations = [mdx(), sitemap()];

if (process.env.NODE_ENV !== "production") {
  integrations.push(sentry());
  integrations.push(spotlightjs());
}

// https://astro.build/config
export default defineConfig({
  site: "https://sharparam.com",
  integrations: integrations,
  build: {
    inlineStylesheets: "never"
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      // theme: ctpFrappe
      experimentalThemes: {
        light: ctpLatte,
        dark: ctpFrappe
      }
      // themes: [ctpLatte, ctpFrappe]
    }
  }
});
