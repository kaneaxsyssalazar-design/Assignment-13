import { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
