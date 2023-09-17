import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ArrivalsDesktop from './ArrivalsDesktop';
import ArrivalsMobile from './ArrivalsMobile';
import React from 'react';

export type ArrivalsType = {
  percent: number;
  percentInit: number;
  handleChangeLeft: () => void;
  handleChangeRight: () => void;
  handleScrollProduct: () => void;
};

const ArrivalsSection = () => {
  const [percent, setPercent] = React.useState(0);
  const [percentInit, setPercentInit] = React.useState(0);
  const appDevice = useAppSelector(selectAppDevice);

  const handleScrollProduct = () => {
    const productsWrapper = window.document.getElementById('product-wrapper');

    if (productsWrapper) {
      setPercent(
        ((productsWrapper.scrollLeft + productsWrapper.offsetWidth) * 100) /
          productsWrapper.scrollWidth
      );
    }
  };

  const handleChangeLeft = () => {
    const productsWrapper = window.document.getElementById('product-wrapper');

    if (productsWrapper && productsWrapper.scrollLeft > 0) {
      productsWrapper.scrollLeft -= 500;

      setPercent(
        ((productsWrapper.scrollLeft + productsWrapper.offsetWidth) * 100) /
          productsWrapper.scrollWidth
      );
    }
  };

  const handleChangeRight = () => {
    const productsWrapper = window.document.getElementById('product-wrapper');

    if (productsWrapper) {
      productsWrapper.scrollLeft += 500;

      setPercent(
        ((productsWrapper.scrollLeft + productsWrapper.offsetWidth) * 100) /
          productsWrapper.scrollWidth
      );
    }
  };

  React.useEffect(() => {
    const productsWrapper = window.document.getElementById('product-wrapper');

    if (productsWrapper) {
      setPercentInit(
        (productsWrapper.offsetWidth * 100) / productsWrapper.scrollWidth
      );
      setPercent(
        (productsWrapper.offsetWidth * 100) / productsWrapper.scrollWidth
      );
    }
  }, []);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <ArrivalsDesktop
        percent={percent}
        percentInit={percentInit}
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        handleScrollProduct={handleScrollProduct}
      ></ArrivalsDesktop>
    ),
    [DEVICES.TABLET]: (
      <ArrivalsMobile
        percent={percent}
        percentInit={percentInit}
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        handleScrollProduct={handleScrollProduct}
      ></ArrivalsMobile>
    ),
    [DEVICES.MOBILE]: (
      <ArrivalsMobile
        percent={percent}
        percentInit={percentInit}
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        handleScrollProduct={handleScrollProduct}
      ></ArrivalsMobile>
    ),
  };
  return renderElement[appDevice.device];
};

export default ArrivalsSection;
