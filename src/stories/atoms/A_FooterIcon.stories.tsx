import { MemoryRouter } from 'react-router-dom'

import A_FooterIcon from '@/components/atoms/A_FooterIcon/A_FooterIcon'

import type { A_FooterIconProps } from '@/components/atoms/A_FooterIcon/A_FooterIcon'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<A_FooterIconProps> = {
  title: 'Atoms/A_FooterIcon',
  component: A_FooterIcon,
}

export default meta

const Template: StoryFn<A_FooterIconProps> = (args: A_FooterIconProps) => (
  <MemoryRouter>
    <A_FooterIcon {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  iconName: 'telegramIcon',
  to: '/',
}

export const Hover = Template.bind({})
Hover.args = { ...Default.args }
Hover.parameters = { pseudo: { hover: true } }

export const Active = Template.bind({})
Active.args = { ...Default.args }
Active.parameters = { pseudo: { active: true } }
