import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const LockIcon = ({
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
      className="hidden sm:block icon icon-picto-lock"
      viewBox="0 0 24 24"
    >
      <path
        d="M3.236 18.182a5.071 5.071 0 0 0 4.831 4.465 114.098 114.098 0 0 0 7.865-.001 5.07 5.07 0 0 0 4.831-4.464 23.03 23.03 0 0 0 .165-2.611c0-.881-.067-1.752-.165-2.61a5.07 5.07 0 0 0-4.83-4.465c-1.311-.046-2.622-.07-3.933-.069a109.9 109.9 0 0 0-3.933.069 5.07 5.07 0 0 0-4.83 4.466 23.158 23.158 0 0 0-.165 2.609c0 .883.067 1.754.164 2.61Z"
        fill="currentColor"
        fill-opacity=".12"
        stroke="currentColor"
      ></path>
      <path
        d="M17 8.43V6.285A5 5 0 0 0 7 6.286V8.43"
        stroke={color || DEFAULT_COLOR}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 17.714a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286Z"
        stroke={color || DEFAULT_COLOR}
      ></path>
    </svg>
  );
};
//  fill={color || DEFAULT_COLOR}
