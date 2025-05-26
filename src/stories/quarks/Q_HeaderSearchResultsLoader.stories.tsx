import { MemoryRouter } from 'react-router-dom'

import Q_HeaderSearchResultsLoader from '@/components/quarks/Q_HeaderSearchResultsLoader/Q_HeaderSearchResultsLoader'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Q_HeaderSearchResultsLoader> = {
  title: 'Quarks/Q_HeaderSearchResultsLoader',
  component: Q_HeaderSearchResultsLoader,
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

type Story = StoryObj<typeof Q_HeaderSearchResultsLoader>

export const Default: Story = {
  render: () => <Q_HeaderSearchResultsLoader />,
}
