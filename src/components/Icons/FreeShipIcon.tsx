import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const FreeShipIcon = ({
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
      className="hidden sm:block icon icon-picto-box"
      viewBox="0 0 24 24"
    >
      <path
        d="M2.22 5.472a.742.742 0 0 0-.33.194.773.773 0 0 0-.175.48c-.47 4.515-.48 7.225 0 11.707a.792.792 0 0 0 .505.737l9.494 3.696.285.079.286-.08 9.494-3.694a.806.806 0 0 0 .505-.737c.5-4.537.506-7.153 0-11.648a.765.765 0 0 0-.175-.542.739.739 0 0 0-.33-.257v.002"
        stroke={color || DEFAULT_COLOR}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M22.269 5.997a.771.771 0 0 0-.16-.335.744.744 0 0 0-.33-.257l-9.494-3.629a.706.706 0 0 0-.571 0L6.967 3.623 2.22 5.47a.742.742 0 0 0-.33.192.771.771 0 0 0-.16.336.806.806 0 0 0 .49.592l9.494 3.696h.57l5.216-2.03L21.78 6.59a.794.794 0 0 0 .492-.593h-.002Z"
        fill={color || DEFAULT_COLOR}
        fill-opacity=".12"
      ></path>
      <path
        d="m17.5 8.255-5.215 2.03h-.571L2.22 6.59a.806.806 0 0 1-.49-.592.771.771 0 0 1 .16-.336.742.742 0 0 1 .33-.192l4.747-1.847M17.5 8.255 21.78 6.59a.794.794 0 0 0 .492-.593h-.002a.771.771 0 0 0-.16-.335.744.744 0 0 0-.33-.257l-9.494-3.629a.706.706 0 0 0-.571 0L6.967 3.623M17.5 8.255 6.967 3.623M12 22.365v-12.08M15.5 17l4-1.5"
        stroke={color || DEFAULT_COLOR}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
