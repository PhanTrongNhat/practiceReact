import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const FacebookIcon = ({
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
      height={height || DEFAULT_WIDTH}
      className="icon icon-facebook"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z"
        fill={color || DEFAULT_COLOR}
      ></path>
    </svg>
  );
};

//{color || DEFAULT_COLOR}
