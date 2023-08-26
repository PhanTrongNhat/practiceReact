import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ArrivalsDesktop from './ArrivalsDesktop';
import ArrivalsMobile from './ArrivalsMobile';

const ArrivalsSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <ArrivalsDesktop></ArrivalsDesktop>,
    [DEVICES.TABLET]: <ArrivalsMobile></ArrivalsMobile>,
    [DEVICES.MOBILE]: <ArrivalsMobile></ArrivalsMobile>,
  };
  return renderElement[appDevice.device];
};

export default ArrivalsSection;
