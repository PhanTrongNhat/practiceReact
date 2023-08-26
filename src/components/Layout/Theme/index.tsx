import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ThemeDesktop from './ThemeDesktop';
import ThemeMobile from './ThemeMobile';

const Theme = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <ThemeDesktop></ThemeDesktop>,
    [DEVICES.TABLET]: <ThemeMobile></ThemeMobile>,
    [DEVICES.MOBILE]: <ThemeMobile></ThemeMobile>,
  };
  return renderElement[appDevice.device];
};

export default Theme;
