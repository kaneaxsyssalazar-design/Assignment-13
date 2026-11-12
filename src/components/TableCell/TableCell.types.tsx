import { TdHTMLAttributes } from 'react';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Render as another element, e.g. "th" for header cells */
  as?: 'td' | 'th';
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
