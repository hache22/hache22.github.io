import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"


export default defineConfig({
  integrations: [tailwind()],
  site: "https://hache22.github.io",
  base: ''
})
