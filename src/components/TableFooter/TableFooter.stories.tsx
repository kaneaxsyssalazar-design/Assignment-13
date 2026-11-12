import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';


const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof TableFooter>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { backgroundColor: '#f5f5f5', textColor: '#222222', disabled: false },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <TableFooter {...args}>
        <tr><td>Total</td><td>42</td></tr>
      </TableFooter>
    </table>
  ),
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <TableFooter {...args}>
        <tr><td>Total</td><td>42</td></tr>
      </TableFooter>
    </table>
  ),
};
