import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind3(),

  ],
  shortcuts: [
    {
      row: 'flex flex-row',
      col: 'flex flex-col',
    },
  ],
})
