import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ExpertDesktop from './ExpertDesktop';
import ExpertMobile from './ExpertMobile';

const ExpertSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <ExpertDesktop></ExpertDesktop>,
    [DEVICES.TABLET]: <ExpertMobile></ExpertMobile>,
    [DEVICES.MOBILE]: <ExpertMobile></ExpertMobile>,
  };

  return renderElement[appDevice.device];
};

export default ExpertSection;
