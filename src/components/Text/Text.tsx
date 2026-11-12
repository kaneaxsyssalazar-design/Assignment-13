import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps } from './Text.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const StyledText = styled.p<{ $bg: string; $color: string; $disabled: boolean }>`
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const Text: React.FC<TextProps> = ({
  text = 'Some text',
  backgroundColor = colors.white,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledText
    data-testid="text"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    {children ?? text}
  </StyledText>
);

export default Text;
