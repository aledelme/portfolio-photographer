import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://your-portfolio-site.com",
  integrations: [],
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  vite: {
    css: {
      transformer: "postcss",
    },
  },
});
