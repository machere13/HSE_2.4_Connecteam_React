import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SO_Header> = {
  title: 'SuperOrganisms/SO_Header',
  component: SO_Header,
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

type Story = StoryObj<typeof SO_Header>

export const Default: Story = {
  render: () => {
    return <SO_Header />
  },
}
