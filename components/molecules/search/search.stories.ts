import type { Meta, StoryObj } from '@storybook/react';

import { Search } from './search';

const meta: Meta<typeof Search> = {
  title: 'Component/Molecules/Search',
  component: Search,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};
