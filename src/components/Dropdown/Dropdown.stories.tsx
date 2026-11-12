import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';


const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { placeholder: { control: 'text' }, options: { control: 'object' }, backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { placeholder: 'Select an option', backgroundColor: '#ffffff', textColor: '#222222', disabled: false },
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
