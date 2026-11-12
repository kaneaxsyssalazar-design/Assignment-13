import React from 'react';
import styled, { css } from 'styled-components';
import { TableFooterProps } from './TableFooter.types';
import { colors, disabledCss } from '../../theme';

const StyledTableFooter = styled.tfoot<{ $bg: string; $color: string; $disabled: boolean }>`
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  backgroundColor = colors.light,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledTableFooter
    data-testid="table-footer"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    {children}
  </StyledTableFooter>
);

export default TableFooter;
