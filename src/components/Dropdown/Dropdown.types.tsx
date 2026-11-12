import { SelectHTMLAttributes } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: DropdownOption[];
  placeholder?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
