import A_HeaderButton from '@/components/atoms/A_HeaderButton/A_HeaderButton'

import type { A_HeaderButtonProps } from '@/components/atoms/A_HeaderButton/A_HeaderButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<A_HeaderButtonProps> = {
  title: 'Atoms/A_HeaderButton',
  component: A_HeaderButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<A_HeaderButtonProps>

export const Default: Story = {
  args: {
    label: 'Button',
    to: '/',
  },
}

export const Hover: Story = {
  args: { ...Default.args },
  parameters: {
    pseudo: { hover: true },
  },
}

export const Active: Story = {
  args: { ...Default.args },
  parameters: {
    pseudo: { active: true },
  },
}

export const OnPage: Story = {
  args: {
    ...Default.args,
    to: '/path',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/path',
      },
    },
  },
}
