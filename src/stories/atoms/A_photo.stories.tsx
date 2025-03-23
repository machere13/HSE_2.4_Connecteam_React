import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import A_photo, { A_photo_Props } from "@/components/atoms/A_photo/A_photo";
import Photo from '@/assets/images/Author01.jpg';

const meta: Meta<A_photo_Props> = {
    title: 'Atoms/A_photo',
    component: A_photo
};

export default meta;

const Template: StoryFn<A_photo_Props> = (args: A_photo_Props) => (
  <MemoryRouter>
    <A_photo {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
    src: Photo,
    alt: "Avatar",
};