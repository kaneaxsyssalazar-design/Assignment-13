import React from 'react';
import styled, { css } from 'styled-components';
import { TableRowProps } from './TableRow.types';
import { colors, disabledCss } from '../../theme';

const StyledTableRow = styled.tr<{ $bg: string; $color: string; $disabled: boolean }>`
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
`;

export const TableRow: React.FC<TableRowProps> = ({
  backgroundColor = colors.white,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledTableRow
    data-testid="table-row"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    {children}
  </StyledTableRow>
);

export default TableRow;
