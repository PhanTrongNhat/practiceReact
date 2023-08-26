import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import CarouselDesktop from './CarouselDesktop';
import CarouselMobile from './CarouselMobile';

const CarouselSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <CarouselDesktop></CarouselDesktop>,
    [DEVICES.TABLET]: <CarouselMobile></CarouselMobile>,
    [DEVICES.MOBILE]: <CarouselMobile></CarouselMobile>,
  };
  return renderElement[appDevice.device];
};

export default CarouselSection;
