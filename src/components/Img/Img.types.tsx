import { ImgHTMLAttributes } from 'react';

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  backgroundColor?: string;
  disabled?: boolean;
}
