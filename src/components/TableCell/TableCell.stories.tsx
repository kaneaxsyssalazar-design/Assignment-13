import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';


const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { children: { control: 'text' }, backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof TableCell>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { children: 'Cell content', backgroundColor: '#ffffff', textColor: '#222222', disabled: false },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
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
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
};
