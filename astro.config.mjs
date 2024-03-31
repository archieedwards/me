import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import cloudflare from "@astrojs/cloudflare";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // so we can have custom base.css
    }),
    db(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  prefetch: {
    prefetchAll: true,
  },
  output: "hybrid",
  adapter: cloudflare(),
});
