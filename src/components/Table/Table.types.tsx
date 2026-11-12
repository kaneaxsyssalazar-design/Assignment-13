import { TableHTMLAttributes } from 'react';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
