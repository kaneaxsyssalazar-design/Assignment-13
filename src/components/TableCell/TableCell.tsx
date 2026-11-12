import React from 'react';
import styled, { css } from 'styled-components';
import { TableCellProps } from './TableCell.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const StyledTableCell = styled.td<{ $bg: string; $color: string; $disabled: boolean }>`
  padding: 0.6rem 0.8rem;
  border: 1px solid ${colors.border};
  text-align: left;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.4rem;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  as = 'td',
  backgroundColor = colors.white,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledTableCell
    as={as}
    data-testid="table-cell"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    {children}
  </StyledTableCell>
);

export default TableCell;
