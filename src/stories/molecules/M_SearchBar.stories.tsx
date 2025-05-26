import React from 'react'

import { fn } from '@storybook/test'

import M_SearchBar from '@/components/molecules/M_SearchBar/M_SearchBar'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof M_SearchBar> = {
  title: 'Molecules/M_SearchBar',
  component: M_SearchBar,
  decorators: [
    Story => (
      <div style={{ width: '206px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onSearchChange: fn(),
    onClear: fn(),
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof M_SearchBar>

export const Default: Story = {
  args: {},
}
