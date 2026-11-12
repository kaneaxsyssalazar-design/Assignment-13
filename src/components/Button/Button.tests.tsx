import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  test('is visible', () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Button backgroundColor="#ff0000" />);
    expect(screen.getByTestId('button')).toHaveStyle('background-color: #ff0000');

    rerender(<Button backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('button')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<Button backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('button')).toHaveStyle('cursor: not-allowed');
  });
});
