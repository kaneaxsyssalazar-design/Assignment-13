import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  test('is visible', () => {
    render(<table><tbody><TableRow><td>R</td></TableRow></tbody></table>);
    expect(screen.getByTestId('table-row')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<table><tbody><TableRow backgroundColor="#ff0000"><td>R</td></TableRow></tbody></table>);
    expect(screen.getByTestId('table-row')).toHaveStyle('background-color: #ff0000');

    rerender(<table><tbody><TableRow backgroundColor="#ff0000" disabled><td>R</td></TableRow></tbody></table>);
    expect(screen.getByTestId('table-row')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<table><tbody><TableRow backgroundColor="#ff0000" disabled><td>R</td></TableRow></tbody></table>);
    expect(screen.getByTestId('table-row')).toHaveStyle('cursor: not-allowed');
  });
});
