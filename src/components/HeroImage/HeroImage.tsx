import React from 'react';
import styled, { css } from 'styled-components';
import { HeroImageProps } from './HeroImage.types';
import { breakpoints, colors, disabledCss, placeholderImage } from '../../theme';

const Hero = styled.div<{ $bg: string; $color: string; $image: string; $disabled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 320px;
  padding: 2rem;
  box-sizing: border-box;
  background-image: url(${(p) => JSON.stringify(p.$image)});
  background-size: cover;
  background-position: center;
  ${(p) =>
    p.$disabled
      ? css`
          ${disabledCss}
          background-blend-mode: luminosity;
        `
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
  h1 {
    margin: 0 0 0.5rem;
    font-size: 2.5rem;
  }
  p {
    margin: 0;
    font-size: 1.2rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    min-height: 200px;
    padding: 1rem;
    h1 { font-size: 1.6rem; }
    p { font-size: 1rem; }
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  title = 'Welcome to the UI Garden',
  subtitle = 'A React + Storybook component library',
  imageUrl = placeholderImage,
  backgroundColor = colors.primary,
  textColor = colors.white,
  disabled = false,
  ...rest
}) => (
  <Hero
    data-testid="hero-image"
    $bg={backgroundColor}
    $color={textColor}
    $image={imageUrl && imageUrl.trim() ? imageUrl.trim() : placeholderImage}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </Hero>
);

export default HeroImage;
