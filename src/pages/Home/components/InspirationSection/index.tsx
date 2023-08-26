import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import InspirationDesktop from './InspirationDesktop';
import InspirationMobile from './InspirationMobile';

const InspirationSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <InspirationDesktop></InspirationDesktop>,
    [DEVICES.TABLET]: <InspirationMobile></InspirationMobile>,
    [DEVICES.MOBILE]: <InspirationMobile></InspirationMobile>,
  };

  return renderElement[appDevice.device];
};

export default InspirationSection;
