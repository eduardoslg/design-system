import type { Meta, StoryObj } from '@storybook/react'
// import { Button, ButtonProps } from '@eduardoslg/react'
import { Button } from '@eduardoslg/button'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    colorScheme: 'green',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta

export const Primary: StoryObj = {}

// export const Secondary: StoryObj<ButtonProps> = {
//   args: {
//     variant: 'secondary',
//     children: 'Create new',
//   },
// }

// export const Tertiary: StoryObj<ButtonProps> = {
//   args: {
//     variant: 'tertiary',
//     children: 'Cancel',
//   },
// }

// export const Small: StoryObj<ButtonProps> = {
//   args: {
//     size: 'sm',
//   },
// }

// export const WithIcon: StoryObj<ButtonProps> = {
//   args: {
//     children: (
//       <>
//         Próximo passo
//         <ArrowRight weight="bold" />
//       </>
//     ),
//   },
// }

// export const Disabled: StoryObj<ButtonProps> = {
//   args: {
//     disabled: true,
//   },
// }
