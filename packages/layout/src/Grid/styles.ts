import { styled } from '@eduardoslg/core'

export const GridContainer = styled('div', {
  display: 'grid',

  variants: {
    overflow: {
      true: {
        overflow: 'auto',
      },
    },
  },
})
