import { LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
