import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  test('is visible', () => {
    render(<RadioButton />);
    expect(screen.getByTestId('radio-button')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<RadioButton backgroundColor="#ff0000" />);
    expect(screen.getByTestId('radio-button')).toHaveStyle('background-color: #ff0000');

    rerender(<RadioButton backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('radio-button')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<RadioButton backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('radio-button')).toHaveStyle('cursor: not-allowed');
  });
});
