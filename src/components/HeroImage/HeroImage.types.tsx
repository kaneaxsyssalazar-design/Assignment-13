import { HTMLAttributes } from 'react';

export interface HeroImageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
