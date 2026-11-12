import React from 'react';
import styled, { css } from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const Wrapper = styled.label<{ $bg: string; $color: string; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
          cursor: pointer;
        `}
  input {
    cursor: inherit;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    width: 100%;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Radio option',
  backgroundColor = colors.light,
  textColor = colors.text,
  disabled = false,
  ...rest
}) => (
  <Wrapper
    data-testid="radio-button"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
  >
    <input type="radio" disabled={disabled} {...rest} />
    {label}
  </Wrapper>
);

export default RadioButton;
