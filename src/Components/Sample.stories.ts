import type { Meta, StoryObj } from '@storybook/react';

import Sample from './Sample';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Sample',
  component: Sample,
} satisfies Meta<typeof Sample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
