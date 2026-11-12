import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableFooter } from '../TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { backgroundColor: { control: 'color' }, textColor: { control: 'color' }, disabled: { control: 'boolean' } },
};
export default meta;

type Story = StoryObj<typeof Table>;

/** Default (enabled) state. Use the Controls panel to change text and colours. */
export const Default: Story = {
  args: { backgroundColor: '#ffffff', textColor: '#222222', disabled: false },
  render: (args) => (
    <Table {...args}>
      <TableHeader disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell as="th" disabled={args.disabled}>Name</TableCell>
          <TableCell as="th" disabled={args.disabled}>Role</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow disabled={args.disabled}>
          <TableCell disabled={args.disabled}>Ada</TableCell>
          <TableCell disabled={args.disabled}>Engineer</TableCell>
        </TableRow>
      </tbody>
      <TableFooter disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell colSpan={2} disabled={args.disabled}>1 row</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

/** Disabled state: greyed out and the cursor shows "not-allowed". */
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  render: (args) => (
    <Table {...args}>
      <TableHeader disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell as="th" disabled={args.disabled}>Name</TableCell>
          <TableCell as="th" disabled={args.disabled}>Role</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow disabled={args.disabled}>
          <TableCell disabled={args.disabled}>Ada</TableCell>
          <TableCell disabled={args.disabled}>Engineer</TableCell>
        </TableRow>
      </tbody>
      <TableFooter disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell colSpan={2} disabled={args.disabled}>1 row</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
