import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import O_Search from '@/components/organisms/O_Search/O_Search'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof O_Search> = {
  title: 'Organisms/O_Search',
  component: O_Search,
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

type Story = StoryObj<typeof O_Search>

export const Default: Story = {
  render: () => {
    return <O_Search />
  },
}

export const Opened: Story = {
  render: () => {
    return <O_Search isOpen={true} />
  },
}

export const Closed: Story = {
  render: () => {
    return <O_Search isOpen={false} />
  },
}
