import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label', () => {
  test('is visible', () => {
    render(<Label />);
    expect(screen.getByTestId('label')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Label backgroundColor="#ff0000" />);
    expect(screen.getByTestId('label')).toHaveStyle('background-color: #ff0000');

    rerender(<Label backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('label')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<Label backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('label')).toHaveStyle('cursor: not-allowed');
  });
});
