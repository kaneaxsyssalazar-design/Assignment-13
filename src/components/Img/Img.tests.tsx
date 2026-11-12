import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img', () => {
  test('is visible', () => {
    render(<Img />);
    expect(screen.getByTestId('img')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Img backgroundColor="#ff0000" />);
    expect(screen.getByTestId('img')).toHaveStyle('background-color: #ff0000');

    rerender(<Img backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('img')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<Img backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('img')).toHaveStyle('cursor: not-allowed');
  });
});
