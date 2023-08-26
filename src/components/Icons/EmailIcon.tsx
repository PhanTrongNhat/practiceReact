import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const EmailIcon = ({
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
      className="icon icon-picto-envelope"
      viewBox="0 0 24 24"
    >
      <path
        d="M1.77 18.063a3.586 3.586 0 0 0 3.174 3.11c2.278.24 4.637.49 7.056.49 2.417 0 4.778-.252 7.056-.49a3.584 3.584 0 0 0 3.175-3.11c.243-1.96.483-3.987.483-6.063 0-2.074-.24-4.102-.483-6.063a3.586 3.586 0 0 0-3.175-3.112c-2.278-.236-4.639-.487-7.056-.487s-4.778.252-7.056.49a3.583 3.583 0 0 0-3.175 3.11c-.243 1.96-.483 3.988-.483 6.062 0 2.074.24 4.102.483 6.063Z"
        fill={color || DEFAULT_COLOR}
        fill-opacity=".12"
        stroke="currentColor"
        stroke-linejoin="round"
      ></path>
      <path
        d="m1.817 5.493 8.06 6.356a3.428 3.428 0 0 0 4.245 0l8.06-6.356"
        stroke="currentColor"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
