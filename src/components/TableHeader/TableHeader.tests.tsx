import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  test('is visible', () => {
    render(<table><TableHeader><tr><th>H</th></tr></TableHeader></table>);
    expect(screen.getByTestId('table-header')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<table><TableHeader backgroundColor="#ff0000"><tr><th>H</th></tr></TableHeader></table>);
    expect(screen.getByTestId('table-header')).toHaveStyle('background-color: #ff0000');

    rerender(<table><TableHeader backgroundColor="#ff0000" disabled><tr><th>H</th></tr></TableHeader></table>);
    expect(screen.getByTestId('table-header')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<table><TableHeader backgroundColor="#ff0000" disabled><tr><th>H</th></tr></TableHeader></table>);
    expect(screen.getByTestId('table-header')).toHaveStyle('cursor: not-allowed');
  });
});
