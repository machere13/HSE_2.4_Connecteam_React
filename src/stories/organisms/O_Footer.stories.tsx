import O_Footer from '@/components/organisms/O_Footer/O_Footer'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof O_Footer> = {
  title: 'Organisms/O_Footer',
  component: O_Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof O_Footer>

export const Desktop: Story = {
  render: () => <O_Footer />,
}
