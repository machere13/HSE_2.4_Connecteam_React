import { MemoryRouter } from 'react-router-dom'

import C_SearchResults from '@/components/collections/C_SearchResults/C_SearchResults'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof C_SearchResults> = {
  title: 'Collections/C_SearchResults',
  component: C_SearchResults,
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

type Story = StoryObj<typeof C_SearchResults>

const mockResults = [
  {
    id: 1,
    url: '/mock-search-1',
    title: 'Мок результата поиска №1',
    description: 'Описание мок результата поиска №1',
  },
  {
    id: 2,
    url: '/mock-search-2',
    title: 'Мок результата поиска №2',
    description: 'Описание мок результата поиска №2',
  },
  {
    id: 3,
    url: '/mock-search-3',
    title: 'Мок результата поиска №3',
    description: 'Описание мок результата поиска №3',
  },
]

export const Default: Story = {
  args: {
    results: [],
    isLoading: false,
    emptyMessage: 'Ничего не найдено',
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}

export const WithResults: Story = {
  args: {
    ...Default.args,
    results: mockResults,
  },
}
