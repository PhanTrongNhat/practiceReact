import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import StoriesDesktop from './StoriesDesktop';
import StoriesMobile from './StoriesMobile';

const StoriesSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <StoriesDesktop></StoriesDesktop>,
    [DEVICES.TABLET]: <StoriesMobile></StoriesMobile>,
    [DEVICES.MOBILE]: <StoriesMobile></StoriesMobile>,
  };

  return renderElement[appDevice.device];
};

export default StoriesSection;
