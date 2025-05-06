import { Meta, StoryFn } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import A_HeaderButton from '@/components/atoms/A_HeaderButton/A_HeaderButton'
import { A_HeaderButtonProps } from '@/components/atoms/A_HeaderButton/A_HeaderButton'

const meta: Meta<A_HeaderButtonProps> = {
  title: 'Atoms/A_HeaderButton',
  component: A_HeaderButton,
}

export default meta

const Template: StoryFn<A_HeaderButtonProps> = (args: A_HeaderButtonProps) => (
  <MemoryRouter>
    <A_HeaderButton {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  to: '/',
}

export const Hover = Template.bind({})
Hover.args = { ...Default.args }
Hover.parameters = { pseudo: { hover: true } }

export const Active = Template.bind({})
Active.args = { ...Default.args }
Active.parameters = { pseudo: { active: true } }
