import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ServiceDesktop from './ServiceDesktop';
import StoriesMobile from './ServiceMobile';

const StoriesSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <ServiceDesktop></ServiceDesktop>,
    [DEVICES.TABLET]: <StoriesMobile></StoriesMobile>,
    [DEVICES.MOBILE]: <StoriesMobile></StoriesMobile>,
  };

  return renderElement[appDevice.device];
};

export default StoriesSection;
