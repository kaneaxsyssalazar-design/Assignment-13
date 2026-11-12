import { HTMLAttributes } from 'react';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
