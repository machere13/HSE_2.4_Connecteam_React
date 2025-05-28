import { MemoryRouter } from 'react-router-dom'

import A_FooterButton from '@/components/atoms/A_FooterButton/A_FooterButton'

import type { A_FooterButtonProps } from '@/components/atoms/A_FooterButton/A_FooterButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<A_FooterButtonProps> = {
  title: 'Atoms/A_FooterButton',
  component: A_FooterButton,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<A_FooterButtonProps>

export const Default: Story = {
  args: {
    iconName: 'telegramIcon',
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
