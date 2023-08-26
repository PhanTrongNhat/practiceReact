import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const ArrowRightIcon = ({
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
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke={color || DEFAULT_COLOR}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
