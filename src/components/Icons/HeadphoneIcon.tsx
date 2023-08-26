import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const HeadphoneIcon = ({
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
      className="hidden sm:block icon icon-picto-customer-support"
      viewBox="0 0 24 24"
    >
      <path
        d="M1.714 14.143c0-3.919 2.613-4.898 3.92-4.898 2.35 0 2.938 1.96 2.938 2.938v3.92c0 2.35-1.96 2.938-2.939 2.938-1.306 0-3.919-.98-3.919-4.898ZM22.286 14.143c0-3.919-2.613-4.898-3.92-4.898-2.35 0-2.937 1.96-2.937 2.938v3.92c0 2.35 1.96 2.938 2.938 2.938 1.306 0 3.919-.98 3.919-4.898Z"
        fill={color || DEFAULT_COLOR}
        fill-opacity=".12"
      ></path>
      <path
        d="M1.714 14.143c0-3.919 2.613-4.898 3.92-4.898 2.35 0 2.938 1.96 2.938 2.938v3.92c0 2.35-1.96 2.938-2.939 2.938-1.306 0-3.919-.98-3.919-4.898ZM22.286 14.143c0-3.919-2.613-4.898-3.92-4.898-2.35 0-2.937 1.96-2.937 2.938v3.92c0 2.35 1.96 2.938 2.938 2.938 1.306 0 3.919-.98 3.919-4.898Z"
        stroke={color || DEFAULT_COLOR}
      ></path>
      <path
        d="M2.38 11.263C2.524 6.537 4.929 1.286 12 1.286c7.06 0 9.468 5.232 9.617 9.951m.106 5.666s.134 3.079-1.447 4.42c-1.58 1.336-5.57 1.31-5.57 1.31"
        stroke={color || DEFAULT_COLOR}
        stroke-linecap="round"
      ></path>
    </svg>
  );
};
