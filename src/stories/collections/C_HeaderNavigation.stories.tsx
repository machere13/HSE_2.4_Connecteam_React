import { Meta, StoryFn } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import C_HeaderNavigation from '@/components/collections/C_HeaderNavigation/C_HeaderNavigation';

const meta: Meta<typeof C_HeaderNavigation> = {
  title: 'Collections/C_HeaderNavigation',
  component: C_HeaderNavigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

const Template: StoryFn<typeof C_HeaderNavigation> = () => <C_HeaderNavigation />;

export const Default = Template.bind({});