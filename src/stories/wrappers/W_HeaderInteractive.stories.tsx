import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import W_HeaderInteractive from '@/components/wrappers/W_HeaderInteractive/W_HeaderInteractive'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof W_HeaderInteractive> = {
  title: 'Wrappers/W_HeaderInteractive',
  component: W_HeaderInteractive,
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

type Story = StoryObj<typeof W_HeaderInteractive>

export const Default: Story = {
  render: () => {
    return <W_HeaderInteractive />
  },
}
