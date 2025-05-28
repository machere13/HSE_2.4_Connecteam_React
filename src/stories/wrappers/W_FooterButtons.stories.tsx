import { MemoryRouter } from 'react-router-dom'

import W_FooterButtons from '@/components/wrappers/W_FooterButtons/W_FooterButtons'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof W_FooterButtons> = {
  title: 'Wrappers/W_FooterButtons',
  component: W_FooterButtons,
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

type Story = StoryObj<typeof W_FooterButtons>

export const Default: Story = {
  render: () => <W_FooterButtons />,
}
