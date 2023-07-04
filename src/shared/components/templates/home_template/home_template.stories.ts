import type { Meta, StoryObj } from '@storybook/react';
import { HomeTemplate } from "."
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof HomeTemplate> = {
  title: 'Page/Components/Templates/HomeTemplate',
  component: HomeTemplate,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};