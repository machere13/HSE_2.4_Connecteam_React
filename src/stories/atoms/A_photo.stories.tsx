import { MemoryRouter } from 'react-router-dom'

import Photo_01 from '@/assets/images/A_Photo/A_Photo_01.webp'
import Photo_02 from '@/assets/images/A_Photo/A_Photo_02.webp'
import Photo_03 from '@/assets/images/A_Photo/A_Photo_03.webp'
import A_Photo from '@/components/atoms/A_Photo_temp/A_Photo_temp'

import type { A_PhotoProps } from '@/components/atoms/A_Photo_temp/A_Photo_temp'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<A_PhotoProps> = {
  title: 'Atoms/A_Photo',
  component: A_Photo,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    src: {
      options: ['photo_01', 'photo_02', 'photo_03'],
      mapping: {
        photo_01: Photo_01,
        photo_02: Photo_02,
        photo_03: Photo_03,
      },
      control: {
        type: 'select',
        labels: {
          photo_01: 'machere13',
          photo_02: 'Vasilisa',
          photo_03: 'Veronika',
        },
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<A_PhotoProps>

export const Default: Story = {
  args: {
    src: Photo_01,
    alt: 'Avatar',
  },
}
