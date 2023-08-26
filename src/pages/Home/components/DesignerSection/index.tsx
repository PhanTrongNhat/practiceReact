import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import DesignerDesktop from './DesignerDesktop';
import DesignerMobile from './DesignerMobile';

const DesignerSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <DesignerDesktop></DesignerDesktop>,
    [DEVICES.TABLET]: <DesignerMobile></DesignerMobile>,
    [DEVICES.MOBILE]: <DesignerMobile></DesignerMobile>,
  };

  return renderElement[appDevice.device];
};

export default DesignerSection;
