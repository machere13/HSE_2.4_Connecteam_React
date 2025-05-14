import Q_Icon from '@/components/quarks/Q_Icon'

import type { Q_IconProps } from '@/components/quarks/Q_Icon'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<Q_IconProps> = {
  title: 'Quarks/Q_Icon',
  component: Q_Icon,
  argTypes: {
    name: {
      options: [
        'logoFull',
        'searchIcon',
        'linkIcon',
        'telegramIcon',
        'vkIcon',
        'youtubeIcon',
        'thunderIcon',
        'cursorIcon',
      ],
      control: { type: 'select' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    fill: {
      control: { type: 'color' },
    },
    className: {
      control: { type: 'text' },
    },
  },
  args: {
    name: 'thunderIcon',
    width: '24',
    height: '24',
    fill: 'none',
  },
}

export default meta

type Story = StoryObj<typeof Q_Icon>

export const Default: Story = {}

export const Logo: Story = {
  args: {
    name: 'logoFull',
    width: '200',
    height: '24',
  },
}

export const CustomSize: Story = {
  args: {
    name: 'thunderIcon',
    width: '48',
    height: '48',
    fill: 'none',
  },
}
