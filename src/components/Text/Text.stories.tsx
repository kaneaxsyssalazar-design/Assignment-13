import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';


const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { text: { control: 'text' }, backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof Text>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { text: 'Hello, component library!', backgroundColor: '#ffffff', textColor: '#222222', disabled: false },
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
