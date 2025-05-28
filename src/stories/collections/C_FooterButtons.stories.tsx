import { MemoryRouter } from 'react-router-dom'

import C_FooterButtons from '@/components/collections/C_FooterButtons/C_FooterIcons'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof C_FooterButtons> = {
  title: 'Collections/C_FooterButtons',
  component: C_FooterButtons,
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

type Story = StoryObj<typeof C_FooterButtons>

export const Default: Story = {
  render: () => <C_FooterButtons />,
}
