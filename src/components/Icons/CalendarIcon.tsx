import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const CalendarIcon = ({
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
      stroke-width="1.5"
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      className="icon icon-blog-date"
      viewBox="0 0 16 16"
    >
      <path
        d="M5.372 1v2.877M10.455 1v2.877"
        stroke={color || DEFAULT_COLOR}
        stroke-linecap="round"
      ></path>
      <path
        d="M14.338 7.632H1.497l.179-4.57 6.164-.448 6.497.448v4.57Z"
        fill={color || DEFAULT_COLOR}
        fill-opacity=".12"
      ></path>
      <path
        d="M1.224 12.073c.183 1.631 1.508 2.925 3.147 3.004a73.18 73.18 0 0 0 3.546.083c1.256 0 2.413-.028 3.546-.083 1.639-.079 2.964-1.374 3.146-3.004.124-1.099.225-2.224.225-3.37 0-1.147-.102-2.273-.225-3.371-.182-1.631-1.507-2.925-3.146-3.004a73.22 73.22 0 0 0-3.546-.083 73.22 73.22 0 0 0-3.546.083c-1.639.079-2.964 1.374-3.147 3.004C1.101 6.43 1 7.556 1 8.703c0 1.146.102 2.272.224 3.37ZM1.331 7.202h13.24"
        stroke={color || DEFAULT_COLOR}
      ></path>
    </svg>
  );
};
