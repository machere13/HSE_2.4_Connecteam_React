import { MemoryRouter } from 'react-router-dom'

import M_SearchResult from '@/components/molecules/M_SearchResult/M_SearchResult'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof M_SearchResult> = {
  title: 'Molecules/M_SearchResult',
  component: M_SearchResult,
  decorators: [
    Story => (
      <MemoryRouter>
        <div style={{ width: '206px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof M_SearchResult>

export const Defalut: Story = {
  args: {
    href: '',
    title: 'Mocked default title',
    description: 'Standart medium description for mocked default result',
  },
}

export const WithLongText: Story = {
  args: {
    href: '',
    title: 'Mocked big title very big title so big as I can',
    description: 'Very big huge description for mocked big result very big result so big as I can',
  },
}

export const WithShortText: Story = {
  args: {
    href: '',
    title: 'Mocked short',
    description: 'Mocked description',
  },
}
