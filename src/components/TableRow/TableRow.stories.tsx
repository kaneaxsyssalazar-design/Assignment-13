import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';


const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof TableRow>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { backgroundColor: '#ffffff', textColor: '#222222', disabled: false },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <tbody>
        <TableRow {...args}>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </TableRow>
      </tbody>
    </table>
  ),
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <tbody>
        <TableRow {...args}>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </TableRow>
      </tbody>
    </table>
  ),
};
