import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import CarouselDesktop from './CarouselDesktop';
import CarouselMobile from './CarouselMobile';
import React from 'react';
import { CarouselData } from '../../data';

export type CarouselType = {
  handleChangeLeft: () => void;
  handleChangeRight: () => void;
  activeCount: number;
};

const CarouselSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [activeCount, setActiveCount] = React.useState(0);

  const handleChangeLeft = () => {
    if (activeCount == 0) {
      setActiveCount(CarouselData.length - 1);
    } else {
      setActiveCount(activeCount - 1);
    }
  };

  const handleChangeRight = () => {
    if (CarouselData.length - 1 == activeCount) {
      setActiveCount(0);
    } else {
      setActiveCount(prevState => prevState + 1);
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleChangeRight();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeCount]);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <CarouselDesktop
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        activeCount={activeCount}
      ></CarouselDesktop>
    ),
    [DEVICES.TABLET]: (
      <CarouselMobile
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        activeCount={activeCount}
      ></CarouselMobile>
    ),
    [DEVICES.MOBILE]: (
      <CarouselMobile
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        activeCount={activeCount}
      ></CarouselMobile>
    ),
  };
  return renderElement[appDevice.device];
};

export default CarouselSection;
