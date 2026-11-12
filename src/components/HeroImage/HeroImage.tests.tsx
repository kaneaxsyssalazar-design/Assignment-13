import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  test('is visible', () => {
    render(<HeroImage />);
    expect(screen.getByTestId('hero-image')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<HeroImage backgroundColor="#ff0000" />);
    expect(screen.getByTestId('hero-image')).toHaveStyle('background-color: #ff0000');

    rerender(<HeroImage backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('hero-image')).toHaveStyle('background-color: #cccccc');
  });

  test('uses not-allowed cursor when disabled', () => {
    render(<HeroImage backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('hero-image')).toHaveStyle('cursor: not-allowed');
  });
});
