import React from 'react';
import styled, { css } from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const StyledSelect = styled.select<{ $bg: string; $color: string; $disabled: boolean }>`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  min-width: 200px;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
          cursor: pointer;
        `}
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    min-width: 0;
  }
`;

const defaultOptions = [
  { value: 'one', label: 'Option One' },
  { value: 'two', label: 'Option Two' },
  { value: 'three', label: 'Option Three' },
];

export const Dropdown: React.FC<DropdownProps> = ({
  options = defaultOptions,
  placeholder = 'Select an option',
  backgroundColor = colors.white,
  textColor = colors.text,
  disabled = false,
  ...rest
}) => (
  <StyledSelect
    data-testid="dropdown"
    defaultValue=""
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    disabled={disabled}
    {...rest}
  >
    <option value="" disabled>
      {placeholder}
    </option>
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
