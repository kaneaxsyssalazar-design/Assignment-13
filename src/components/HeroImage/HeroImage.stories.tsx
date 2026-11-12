import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';


const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { title: { control: 'text' }, subtitle: { control: 'text' }, imageUrl: { control: 'text' }, backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { title: 'Welcome to the UI Garden', subtitle: 'A React + Storybook component library', backgroundColor: '#1976d2', textColor: '#ffffff', disabled: false },
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
