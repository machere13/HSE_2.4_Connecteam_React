import { Meta, StoryFn } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import C_header_navigation from '@/components/collections/C_header_navigation/C_header_navigation';

const meta: Meta<typeof C_header_navigation> = {
  title: 'Collections/C_header_navigation',
  component: C_header_navigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

const Template: StoryFn<typeof C_header_navigation> = () => <C_header_navigation />;

export const Default = Template.bind({});