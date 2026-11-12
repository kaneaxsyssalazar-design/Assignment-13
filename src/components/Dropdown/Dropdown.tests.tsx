import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('is visible', () => {
    render(<Dropdown />);
    expect(screen.getByTestId('dropdown')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Dropdown backgroundColor="#ff0000" />);
    expect(screen.getByTestId('dropdown')).toHaveStyle('background-color: #ff0000');

    rerender(<Dropdown backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('dropdown')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<Dropdown backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('dropdown')).toHaveStyle('cursor: not-allowed');
  });
});
