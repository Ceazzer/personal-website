import type { Meta, StoryObj } from '@storybook/react';
import { ProfileSummarySection } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfileSummarySection> = {
  title: 'Cor/Feature/Sections/ProfileSummarySection',
  component: ProfileSummarySection,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileSummarySection>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};