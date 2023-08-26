import { Wrapper } from './styled';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons';
import React from 'react';

interface ArrowButtonType {
  handleClick: () => void;
  noneEvent: boolean;
  color: string;
  borderColor: string;
  width: string;
  iconWidth: number;
  isArrowRight: boolean;
}

const ArrowButton = ({
  handleClick,
  noneEvent,
  color,
  width,
  isArrowRight,
  borderColor,
  iconWidth,
}: ArrowButtonType) => {
  return (
    <Wrapper
      noneEvent={noneEvent}
      onClick={() => handleClick && handleClick()}
      className={'carousel-button'}
      isArrowRight={isArrowRight}
      borderColor={borderColor}
      width={width}
      color={color}
    >
      <MobileChevronMajor
        width={iconWidth}
        height={iconWidth}
        color={color}
      ></MobileChevronMajor>
      {isArrowRight ? (
        <ArrowRightIcon
          width={iconWidth}
          height={iconWidth}
          color={color}
        ></ArrowRightIcon>
      ) : (
        <ArrowLeftIcon
          width={iconWidth}
          height={iconWidth}
          color={color}
        ></ArrowLeftIcon>
      )}
    </Wrapper>
  );
};

export default ArrowButton;
