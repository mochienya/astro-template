// @ts-check
import { defineConfig } from 'astro/config'

import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  base: '/',
  trailingSlash: 'never',
  integrations: [unocss()],
  scopedStyleStrategy: 'class',
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: 'responsive',
  },
})
