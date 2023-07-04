import type { Meta, StoryObj } from '@storybook/react';
import { Summary } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Summary> = {
  title: 'Cor/Feature/Sections/ProfileSummarySection/summary',
  component: Summary,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Summary>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};