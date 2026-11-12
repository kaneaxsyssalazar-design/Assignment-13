import { css } from 'styled-components';

export const colors = {
  primary: '#1976d2',
  white: '#ffffff',
  text: '#222222',
  light: '#f5f5f5',
  border: '#d0d0d0',
  disabledBg: '#cccccc',
  disabledText: '#666666',
};

export const breakpoints = { mobile: '600px' };

/** Shared "disabled" look: greyed out + not-allowed cursor. */
export const disabledCss = css`
  background-color: ${colors.disabledBg};
  color: ${colors.disabledText};
  cursor: not-allowed;
`;

/** Inline SVG placeholder so images work offline. */
export const placeholderImage =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#1976d2"/><stop offset="1" stop-color="#9c27b0"/>' +
      '</linearGradient></defs><rect width="600" height="300" fill="url(#g)"/>' +
      '<text x="300" y="160" font-size="32" fill="#fff" text-anchor="middle" font-family="sans-serif">Placeholder</text></svg>'
  );
