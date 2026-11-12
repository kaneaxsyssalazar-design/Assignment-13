import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './TableFooter';

describe('TableFooter', () => {
  test('is visible', () => {
    render(<table><TableFooter><tr><td>F</td></tr></TableFooter></table>);
    expect(screen.getByTestId('table-footer')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<table><TableFooter backgroundColor="#ff0000"><tr><td>F</td></tr></TableFooter></table>);
    expect(screen.getByTestId('table-footer')).toHaveStyle('background-color: #ff0000');

    rerender(<table><TableFooter backgroundColor="#ff0000" disabled><tr><td>F</td></tr></TableFooter></table>);
    expect(screen.getByTestId('table-footer')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<table><TableFooter backgroundColor="#ff0000" disabled><tr><td>F</td></tr></TableFooter></table>);
    expect(screen.getByTestId('table-footer')).toHaveStyle('cursor: not-allowed');
  });
});
