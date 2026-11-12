import { HTMLAttributes } from 'react';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string;
  content?: string;
  imageSrc?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
