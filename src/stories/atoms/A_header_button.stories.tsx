import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import A_header_button from "@/components/atoms/A_header_button/A_header_button";
import { A_header_button_Props } from "@/components/atoms/A_header_button/A_header_button";

const meta: Meta<A_header_button_Props> = {
    title: 'Atoms/A_header_button',
    component: A_header_button
};

export default meta;

const Template: StoryFn<A_header_button_Props> = (args: A_header_button_Props) => (
  <MemoryRouter>
    <A_header_button {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  to: "/",
};

export const Hover = Template.bind({});
Hover.args = { ...Default.args };
Hover.parameters = { pseudo: { hover: true } };

export const Active = Template.bind({});
Active.args = { ...Default.args };
Active.parameters = { pseudo: { active: true } };