import { InputHTMLAttributes } from 'react';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
