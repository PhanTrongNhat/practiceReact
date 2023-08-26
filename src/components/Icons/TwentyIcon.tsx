import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const TwentyIcon = ({
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
      focusable="false"
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      viewBox="0 0 32 40"
    >
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V24C32 32.8366 24.8366 40 16 40C7.16344 40 0 32.8366 0 24V16Z"
        fill="#ffffff"
      ></path>
      <path
        fill={color || DEFAULT_COLOR}
        d="M11 14H13V26H11zM15 14H17V26H15zM19 14H21V26H19z"
      ></path>
    </svg>
  );
};
