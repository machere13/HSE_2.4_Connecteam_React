import { MemoryRouter } from 'react-router-dom'

import A_FooterIcon from '@/components/atoms/A_FooterIcon/A_FooterIcon'

import type { A_FooterIconProps } from '@/components/atoms/A_FooterIcon/A_FooterIcon'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<A_FooterIconProps> = {
  title: 'Atoms/A_FooterIcon',
  component: A_FooterIcon,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta

type Story = StoryObj<A_FooterIconProps>

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
