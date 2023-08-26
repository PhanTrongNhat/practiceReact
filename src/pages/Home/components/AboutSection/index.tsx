import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';

const AboutSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <AboutDesktop></AboutDesktop>,
    [DEVICES.TABLET]: <AboutMobile></AboutMobile>,
    [DEVICES.MOBILE]: <AboutMobile></AboutMobile>,
  };

  return renderElement[appDevice.device];
};

export default AboutSection;
