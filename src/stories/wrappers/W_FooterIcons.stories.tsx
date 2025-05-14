import { MemoryRouter } from 'react-router-dom'

import W_FooterIcons from '@/components/wrappers/W_FooterIcons/W_FooterIcons'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof W_FooterIcons> = {
  title: 'Wrappers/W_FooterIcons',
  component: W_FooterIcons,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta

const Template: StoryFn<typeof W_FooterIcons> = () => <W_FooterIcons />

export const Default = Template.bind({})
