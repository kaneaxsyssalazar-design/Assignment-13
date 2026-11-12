import React from 'react';
import styled, { css } from 'styled-components';
import { TableProps } from './Table.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* responsive: scroll horizontally on small screens */
`;

const StyledTable = styled.table<{ $bg: string; $color: string; $disabled: boolean }>`
  width: 100%;
  border-collapse: collapse;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
        `}
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

export const Table: React.FC<TableProps> = ({
  backgroundColor = colors.white,
  textColor = colors.text,
  disabled = false,
  children,
  ...rest
}) => (
  <Wrapper>
    <StyledTable
      data-testid="table"
      $bg={backgroundColor}
      $color={textColor}
      $disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </StyledTable>
  </Wrapper>
);

export default Table;
