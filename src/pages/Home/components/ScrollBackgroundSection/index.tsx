import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ScrollBackgroundDesktop from './ScrollBackgroundDesktop';
import ScrollBackgroundMobile from './ScrollBackroundMobile';

const ScrollBackgroundSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <ScrollBackgroundDesktop></ScrollBackgroundDesktop>,
    [DEVICES.TABLET]: <ScrollBackgroundMobile></ScrollBackgroundMobile>,
    [DEVICES.MOBILE]: <ScrollBackgroundMobile></ScrollBackgroundMobile>,
  };

  return renderElement[appDevice.device];
};

export default ScrollBackgroundSection;
