import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card', () => {
  test('is visible', () => {
    render(<Card />);
    expect(screen.getByTestId('card')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Card backgroundColor="#ff0000" />);
    expect(screen.getByTestId('card')).toHaveStyle('background-color: #ff0000');

    rerender(<Card backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('card')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<Card backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('card')).toHaveStyle('cursor: not-allowed');
  });
});
