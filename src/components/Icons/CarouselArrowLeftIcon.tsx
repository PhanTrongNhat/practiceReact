import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const CarouselArrowLeftIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = '#f1f1f1';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color || DEFAULT_COLOR}
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      viewBox="0 0 33 33"
    >
      <g filter="url(#filter0_d_10_1111)">
        <path
          d="M26.635 10.4393H11.455L18.055 3.85934C18.4317 3.48273 18.6432 2.97194 18.6432 2.43934C18.6432 1.90673 18.4317 1.39594 18.055 1.01934C17.6784 0.642728 17.1677 0.431152 16.635 0.431152C16.1024 0.431152 15.5917 0.642728 15.215 1.01934L5.21505 11.0193C5.03297 11.2095 4.89024 11.4338 4.79505 11.6793C4.59501 12.1663 4.59501 12.7124 4.79505 13.1993C4.89024 13.4448 5.03297 13.6691 5.21505 13.8593L15.215 23.8593C15.401 24.0468 15.6222 24.1956 15.8659 24.2971C16.1096 24.3987 16.371 24.4509 16.635 24.4509C16.8991 24.4509 17.1605 24.3987 17.4042 24.2971C17.6479 24.1956 17.8691 24.0468 18.055 23.8593C18.2425 23.6734 18.3913 23.4522 18.4928 23.2085C18.5944 22.9648 18.6466 22.7034 18.6466 22.4393C18.6466 22.1753 18.5944 21.9139 18.4928 21.6702C18.3913 21.4265 18.2425 21.2053 18.055 21.0193L11.455 14.4393H26.635C27.1655 14.4393 27.6742 14.2286 28.0493 13.8535C28.4243 13.4785 28.635 12.9698 28.635 12.4393C28.635 11.9089 28.4243 11.4002 28.0493 11.0251C27.6742 10.6501 27.1655 10.4393 26.635 10.4393Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_10_1111"
          x="0.64502"
          y="0.431152"
          width="31.99"
          height="32.0198"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10_1111"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10_1111"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
