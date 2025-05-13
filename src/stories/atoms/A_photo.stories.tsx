import { Meta, StoryFn } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import A_Photo, {A_PhotoProps} from '@/components/atoms/A_Photo/A_Photo'
import Photo_01 from '@/assets/images/A_Photo/A_Photo_01.webp'
import Photo_02 from '@/assets/images/A_Photo/A_Photo_02.webp'
import Photo_03 from '@/assets/images/A_Photo/A_Photo_03.webp'

const meta: Meta<A_PhotoProps> = {
  title: 'Atoms/A_Photo',
  component: A_Photo,
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
}

export default meta

const Template: StoryFn<A_PhotoProps> = (args: A_PhotoProps) => (
  <MemoryRouter>
    <A_Photo {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  src: Photo_01,
  alt: 'Avatar',
}
