import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('Table', () => {
  test('is visible', () => {
    render(<Table><tbody><tr><td>x</td></tr></tbody></Table>);
    expect(screen.getByTestId('table')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Table backgroundColor="#ff0000"><tbody><tr><td>x</td></tr></tbody></Table>);
    expect(screen.getByTestId('table')).toHaveStyle('background-color: #ff0000');

    rerender(<Table backgroundColor="#ff0000" disabled><tbody><tr><td>x</td></tr></tbody></Table>);
    expect(screen.getByTestId('table')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<Table backgroundColor="#ff0000" disabled><tbody><tr><td>x</td></tr></tbody></Table>);
    expect(screen.getByTestId('table')).toHaveStyle('cursor: not-allowed');
  });
});
