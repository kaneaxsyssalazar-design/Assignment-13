import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const StyledCard = styled.div<{ $bg: string; $color: string; $disabled: boolean }>`
  width: 100%;
  max-width: 320px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
  img {
    display: block;
    width: 100%;
    height: auto;
    ${(p) => (p.$disabled ? 'filter: grayscale(100%);' : '')}
  }
  .card-body {
    padding: 1rem;
  }
  h3 {
    margin: 0 0 0.5rem;
  }
  p {
    margin: 0;
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const Card: React.FC<CardProps> = ({
  title = 'Card title',
  content = 'Card content goes here.',
  imageSrc,
  backgroundColor = colors.white,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledCard
    data-testid="card"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    {imageSrc && <img src={imageSrc.trim()} alt={title} referrerPolicy="no-referrer" />}
    <div className="card-body">
      <h3>{title}</h3>
      <p>{children ?? content}</p>
    </div>
  </StyledCard>
);

export default Card;
