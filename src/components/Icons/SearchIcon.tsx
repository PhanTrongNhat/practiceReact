import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const SearchIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = '#f1f1f1';

  return (
    <svg
      role="presentation"
      stroke-width="2"
      focusable="false"
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      className="icon icon-search"
      viewBox="0 0 22 22"
    >
      <circle cx="11" cy="10" r="7" fill="none" stroke="currentColor"></circle>
      <path
        d="m16 15 3 3"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
