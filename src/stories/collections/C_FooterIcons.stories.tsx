import { MemoryRouter } from 'react-router-dom'

import C_FooterIcons from '@/components/collections/C_FooterIcons/C_FooterIcons'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof C_FooterIcons> = {
  title: 'Collections/C_FooterIcons',
  component: C_FooterIcons,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof C_FooterIcons>

export const Default: Story = {
  render: () => <C_FooterIcons />,
}
