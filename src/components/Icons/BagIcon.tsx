import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const BagIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = 'none';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color || DEFAULT_COLOR}
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      viewBox="0 0 18 19"
    >
      <path
        d="M4.99988 9.01V9M12.9999 9.01V9M4.99988 6V5C4.99988 3.93913 5.42131 2.92172 6.17145 2.17157C6.9216 1.42143 7.93901 1 8.99988 1C10.0607 1 11.0782 1.42143 11.8283 2.17157C12.5784 2.92172 12.9999 3.93913 12.9999 5V6M4.99988 6H3.84014C2.79997 6 1.93344 6.79732 1.84705 7.83391L1.18039 15.8339C1.08322 16.9999 2.0034 18 3.17348 18H14.8263C15.9964 18 16.9165 16.9999 16.8194 15.8339L16.1527 7.83391C16.0663 6.79732 15.1998 6 14.1596 6H12.9999M4.99988 6H12.9999"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
