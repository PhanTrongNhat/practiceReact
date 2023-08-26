import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import FeatureDesktop from './FeatureDesktop';
import FeatureMobile from './FeatureMobile';

const FeatureSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <FeatureDesktop></FeatureDesktop>,
    [DEVICES.TABLET]: <FeatureMobile></FeatureMobile>,
    [DEVICES.MOBILE]: <FeatureMobile></FeatureMobile>,
  };

  return renderElement[appDevice.device];
};

export default FeatureSection;
