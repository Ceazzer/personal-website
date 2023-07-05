import type { Meta, StoryObj } from '@storybook/react';
import FlatButton from "."
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FlatButton> = {
  title: 'Shared/Components/Atoms/Buttons/FlatButton',
  component: FlatButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FlatButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
