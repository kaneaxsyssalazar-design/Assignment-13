import { HTMLAttributes } from 'react';

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
