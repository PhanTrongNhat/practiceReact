import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

const Header = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <HeaderDesktop></HeaderDesktop>,
    [DEVICES.TABLET]: <HeaderMobile></HeaderMobile>,
    [DEVICES.MOBILE]: <HeaderMobile></HeaderMobile>,
  };
  return renderElement[appDevice.device];
};

export default Header;
