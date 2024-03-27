import type { Meta, StoryObj } from '@storybook/react';
import { IndexPage } from './';

const meta = {
  title: 'app/components/pages',
  component: IndexPage,
} satisfies Meta<typeof IndexPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _default: Story = {
};
