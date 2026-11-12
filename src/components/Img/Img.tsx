import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ImgProps } from './Img.types';
import { colors, disabledCss, placeholderImage } from '../../theme';

const StyledImg = styled.img<{ $bg: string; $disabled: boolean }>`
  display: block;
  max-width: 100%; /* responsive */
  height: auto;
  ${(p) =>
    p.$disabled
      ? css`
          ${disabledCss}
          filter: grayscale(100%);
          opacity: 0.6;
        `
      : css`
          background-color: ${p.$bg};
        `}
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt = 'Placeholder image',
  backgroundColor = colors.light,
  disabled = false,
  ...rest
}) => {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  const finalSrc = !src || failed ? placeholderImage : src.trim();

  return (
    <StyledImg
      data-testid="img"
      src={finalSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      $bg={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    />
  );
};

export default Img;
