import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import MarqueeDesktop from './MarqueeDesktop';
import MarqueeMobile from './MarqueeMobile';

const MarqueeSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <MarqueeDesktop></MarqueeDesktop>,
    [DEVICES.TABLET]: <MarqueeMobile></MarqueeMobile>,
    [DEVICES.MOBILE]: <MarqueeMobile></MarqueeMobile>,
  };
  return renderElement[appDevice.device];
};

export default MarqueeSection;
