import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import A_Photo, { A_PhotoProps } from "@/components/atoms/A_Photo/A_Photo";
import Photo from '@/assets/images/A_Photo/A_Photo_01.webp'

const meta: Meta<A_PhotoProps> = {
  title: 'Atoms/A_Photo',
  component: A_Photo
};

export default meta;

const Template: StoryFn<A_PhotoProps> = (args: A_PhotoProps) => (
  <MemoryRouter>
    <A_Photo {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
    src: Photo,
    alt: "Avatar",
};