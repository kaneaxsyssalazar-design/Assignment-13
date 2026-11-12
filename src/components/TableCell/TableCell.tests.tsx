import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('is visible', () => {
    render(<table><tbody><tr><TableCell>c</TableCell></tr></tbody></table>);
    expect(screen.getByTestId('table-cell')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<table><tbody><tr><TableCell backgroundColor="#ff0000">c</TableCell></tr></tbody></table>);
    expect(screen.getByTestId('table-cell')).toHaveStyle('background-color: #ff0000');

    rerender(<table><tbody><tr><TableCell backgroundColor="#ff0000" disabled>c</TableCell></tr></tbody></table>);
    expect(screen.getByTestId('table-cell')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<table><tbody><tr><TableCell backgroundColor="#ff0000" disabled>c</TableCell></tr></tbody></table>);
    expect(screen.getByTestId('table-cell')).toHaveStyle('cursor: not-allowed');
  });
});
