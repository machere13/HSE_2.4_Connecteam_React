import { MemoryRouter } from 'react-router-dom'

import W_FooterIcons from '@/components/wrappers/W_FooterIcons/W_FooterIcons'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof W_FooterIcons> = {
  title: 'Wrappers/W_FooterIcons',
  component: W_FooterIcons,
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

type Story = StoryObj<typeof W_FooterIcons>

export const Default: Story = {
  render: () => <W_FooterIcons />,
}
