import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';


const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { title: { control: 'text' }, content: { control: 'text' }, imageSrc: { control: 'text' }, backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof Card>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { title: 'Card title', content: 'Card content goes here.', backgroundColor: '#ffffff', textColor: '#222222', disabled: false },
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
