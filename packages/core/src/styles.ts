import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  shadows,
} from '@eduardoslg/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

import { light } from './themes/light'

export const {
  styled,
  globalCss,
  keyframes,
  createTheme,
  theme: themeKeys,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: light,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
    shadows,
  },
})
