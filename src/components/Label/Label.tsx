import React from 'react';
import styled, { css } from 'styled-components';
import { LabelProps } from './Label.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const StyledLabel = styled.label<{ $bg: string; $color: string; $disabled: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
          cursor: pointer;
        `}
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    font-size: 0.9rem;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text = 'Label',
  backgroundColor = colors.light,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledLabel
    data-testid="label"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    {children ?? text}
  </StyledLabel>
);

export default Label;
