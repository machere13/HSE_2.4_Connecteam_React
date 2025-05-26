import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import W_SearchBarWithResults from '@/components/wrappers/W_SearchBarWithResults/W_SearchBarWithResults'

import W_SearchBarWithResults_StoryWrapper from './W_SearchBarWithResults.story-wrapper'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof W_SearchBarWithResults> = {
  title: 'Wrappers/W_SearchBarWithResults',
  component: W_SearchBarWithResults,
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

type Story = StoryObj

export const Default: Story = {
  render: () => <W_SearchBarWithResults />,
}

export const Loading: Story = {
  render: () => <W_SearchBarWithResults_StoryWrapper forcedState='loading' />,
}

export const Empty: Story = {
  render: () => <W_SearchBarWithResults_StoryWrapper forcedState='empty' />,
}
