import { MemoryRouter } from 'react-router-dom'

import C_HeaderNavigation from '@/components/collections/C_HeaderNavigation/C_HeaderNavigation'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof C_HeaderNavigation> = {
  title: 'Collections/C_HeaderNavigation',
  component: C_HeaderNavigation,
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

type Story = StoryObj<typeof C_HeaderNavigation>

export const Default: Story = {
  render: () => <C_HeaderNavigation />,
}
