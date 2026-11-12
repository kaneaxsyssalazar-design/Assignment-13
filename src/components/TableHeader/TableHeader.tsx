import React from 'react';
import styled, { css } from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';
import { colors, disabledCss } from '../../theme';

const StyledTableHeader = styled.thead<{ $bg: string; $color: string; $disabled: boolean }>`
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  backgroundColor = colors.light,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledTableHeader
    data-testid="table-header"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    {children}
  </StyledTableHeader>
);

export default TableHeader;
