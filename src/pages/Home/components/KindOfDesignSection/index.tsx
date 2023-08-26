import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import KindOfDesignDesktop from './KindOfDesignDesktop';
import KindOfDesignMobile from './KindOfDesignMobile';

const KindOfDesignSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <KindOfDesignDesktop></KindOfDesignDesktop>,
    [DEVICES.TABLET]: <KindOfDesignMobile></KindOfDesignMobile>,
    [DEVICES.MOBILE]: <KindOfDesignMobile></KindOfDesignMobile>,
  };

  return renderElement[appDevice.device];
};

export default KindOfDesignSection;
