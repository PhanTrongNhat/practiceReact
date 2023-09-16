import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const HambergerIcon = ({
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
      className="icon icon-hamburger"
      viewBox="0 0 22 22"
    >
      <path
        d="M1 5h20M1 11h20M1 17h20"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
    </svg>
  );
};
