import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'

import type { CursorConfig } from '@/types/cursor'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof A_Cursor> = {
  title: 'Atoms/A_Cursor',
  component: A_Cursor,
  argTypes: {
    cursors: {
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof A_Cursor>

const baseCursors: CursorConfig[] = [
  {
    style: 'orbital',
    icon: 'cursorIcon',
    speed: 1,
    color: '#F64704',
    label: 'Name 1',
  },
  {
    style: 'orbital',
    icon: 'cursorIcon',
    speed: 0.7,
    color: '#421DFF',
    label: 'Name 2',
  },
]

export const Default: Story = {
  args: {
    cursors: baseCursors,
  },
}

export const OrbitalEffect: Story = {
  args: {
    cursors: [
      {
        style: 'orbital',
        icon: 'cursorIcon',
        speed: 0.5,
        color: '#F64704',
        label: 'Name 1',
      },
    ],
  },
}

export const WaveEffect: Story = {
  args: {
    cursors: [
      {
        style: 'wave',
        icon: 'cursorIcon',
        speed: 2,
        color: '#952AFF',
        label: 'Name 3',
      },
    ],
  },
}

export const MixedEffects: Story = {
  args: {
    cursors: [
      ...baseCursors,
      {
        style: 'wave',
        icon: 'cursorIcon',
        speed: 1.5,
        color: '#952AFF',
        label: 'Name 3',
      },
    ],
  },
}

export const CustomConfig: Story = {
  args: {
    cursors: baseCursors,
  },
  argTypes: {
    cursors: {
      control: {
        type: 'object',
        labels: {
          style: 'Тип анимации',
          speed: 'Скорость',
          color: 'Цвет',
          label: 'Подпись',
        },
      },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
}
