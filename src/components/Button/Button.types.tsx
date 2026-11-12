import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Text shown inside the button */
  label?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
