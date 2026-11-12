import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text', () => {
  test('is visible', () => {
    render(<Text />);
    expect(screen.getByTestId('text')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Text backgroundColor="#ff0000" />);
    expect(screen.getByTestId('text')).toHaveStyle('background-color: #ff0000');

    rerender(<Text backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('text')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<Text backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('text')).toHaveStyle('cursor: not-allowed');
  });
});
