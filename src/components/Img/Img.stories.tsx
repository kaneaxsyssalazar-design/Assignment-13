import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';


const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { src: { control: 'text' }, alt: { control: 'text' }, backgroundColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof Img>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { alt: 'Placeholder image', backgroundColor: '#f5f5f5', disabled: false },
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
