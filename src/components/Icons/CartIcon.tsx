import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const CartIcon = ({
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
      className="icon icon-cart"
      viewBox="0 0 22 22"
    >
      <path
        d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
