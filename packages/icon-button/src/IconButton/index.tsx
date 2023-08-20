import { Color, useTheme } from '@eduardoslg/core'
import { ComponentProps, forwardRef } from 'react'

import { IconButtonContainer } from './styles'

type IconButtonProps = {
  colorScheme?: Color
  variant?: 'primary' | 'secondary' | 'ghost'
} & ComponentProps<typeof IconButtonContainer>

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ colorScheme, variant, children, css, ...props }, ref) => {
    const { color } = useTheme()

    function neutralColor(): string {
      const currentColor = colorScheme ?? color ?? ''

      if (['sky', 'mint', 'lime', 'yellow', 'amber'].includes(currentColor)) {
        return '$black'
      }

      return '$white'
    }

    function getColor(scale: number): string {
      if (colorScheme) {
        return `$${colorScheme}${scale}`
      }

      return `$primary${scale}`
    }

    return (
      <IconButtonContainer
        ref={ref}
        css={
          variant === 'ghost'
            ? {
                ...css,
                backgroundColor: 'transparent',
                color: getColor(11),

                '&:hover:not([disabled])': {
                  backgroundColor: getColor(4),
                },
              }
            : variant === 'secondary'
            ? {
                ...css,
                backgroundColor: getColor(4),
                color: getColor(11),

                '&:hover:not([disabled])': {
                  backgroundColor: getColor(5),
                },
              }
            : {
                ...css,
                backgroundColor: getColor(9),
                color: neutralColor(),

                '&:hover:not([disabled])': {
                  backgroundColor: getColor(10),
                },
              }
        }
        {...props}
      >
        {children}
      </IconButtonContainer>
    )
  },
)

IconButton.displayName = 'IconButton'
