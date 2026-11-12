import { HTMLAttributes } from 'react';

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
