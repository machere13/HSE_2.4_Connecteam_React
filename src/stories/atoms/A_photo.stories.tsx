import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import A_Photo, { A_PhotoProps } from "@/components/atoms/A_Photo/A_Photo";
import Photo1 from '@/assets/images/A_Photo/A_Photo_01.webp';
import Photo2 from '@/assets/images/A_Photo/A_Photo_02.webp';
import Photo3 from '@/assets/images/A_Photo/A_Photo_03.webp';

const meta: Meta<A_PhotoProps> = {
  title: 'Atoms/A_Photo',
  component: A_Photo,
  argTypes: {
    src: {
      options: ['photo1', 'photo2', 'photo3'],
      mapping: {
        photo1: Photo1,
        photo2: Photo2,
        photo3: Photo3,
      },
      control: {
        type: 'select',
        labels: {
          photo1: 'machere13',
          photo2: 'Vasilisa',
          photo3: 'Veronika',
        },
      },
    },
  },
};

export default meta;

const Template: StoryFn<A_PhotoProps> = (args: A_PhotoProps) => (
  <MemoryRouter>
    <A_Photo {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  src: Photo1,
  alt: "Avatar",
};