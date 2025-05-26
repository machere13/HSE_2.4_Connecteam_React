import React from 'react'

import { fn } from '@storybook/test'
import { MemoryRouter } from 'react-router-dom'

import A_SearchButton from '@/components/atoms/A_SearchButton/A_SearchButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof A_SearchButton> = {
  title: 'Atoms/A_SearchButton',
  component: A_SearchButton,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    pseudo: {
      hover: ['#hover-state'],
      active: ['#active-state'],
    },
  },
  args: {
    onClick: fn(),
    isActive: false,
  },
  argTypes: {
    isActive: {
      control: 'boolean',
      description: 'Активное состояние кнопки',
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика',
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof A_SearchButton>

export const Default: Story = {
  args: {},
}

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {},
}

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
  args: {},
}

export const Clicked: Story = {
  args: {
    isActive: true,
  },
}

export const InteractiveExample: Story = {
  render: args => {
    const [isActive, setIsActive] = React.useState(false)

    return (
      <A_SearchButton
        isActive={isActive}
        onClick={() => {
          setIsActive(!isActive)
          args.onClick()
        }}
      />
    )
  },
}
