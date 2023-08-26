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
      xmlns="http://www.w3.org/2000/svg"
      fill={color || DEFAULT_COLOR}
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      viewBox="0 0 24 24"
    >
      <path
        d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
