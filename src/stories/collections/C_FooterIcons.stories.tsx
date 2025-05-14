import { MemoryRouter } from 'react-router-dom'

import C_FooterIcons from '@/components/collections/C_FooterIcons/C_FooterIcons'

import type { Meta, StoryFn } from '@storybook/react'

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

const Template: StoryFn<typeof C_FooterIcons> = () => <C_FooterIcons />

export const Default = Template.bind({})
