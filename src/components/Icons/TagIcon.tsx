import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const TagIcon = ({
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
      fill="none"
      focusable="false"
      stroke-width="2"
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      className="hidden sm:block icon icon-picto-coupon"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.89 21.975c-1.325.974-3.176.9-4.391-.209a131.923 131.923 0 0 1-9.792-9.94 3.17 3.17 0 0 1-.753-1.5C1.56 8.293.727 3.222 1.976 1.972c1.25-1.25 6.32-.416 8.352-.022.56.111 1.078.371 1.502.752a131.922 131.922 0 0 1 9.94 9.792c1.109 1.214 1.18 3.067.209 4.392-.701.955-1.442 1.914-2.31 2.78-.865.865-1.823 1.607-2.778 2.308ZM9.458 6.523a2.073 2.073 0 1 1-2.93 2.931 2.073 2.073 0 0 1 2.93-2.931Z"
        fill="currentColor"
        fill-opacity=".12"
        stroke={color || DEFAULT_COLOR}
      ></path>
    </svg>
  );
};
//  fill={color || DEFAULT_COLOR}
