import type { Meta, StoryObj } from '@storybook/react';
import RaisedButton from "."
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RaisedButton> = {
  title: 'Shared/Components/Atoms/Buttons/RaisedButton',
  component: RaisedButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RaisedButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

