import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import PromotionDesktop from './PromotionDesktop';
import PromotionMobile from './PromotionMobile';

const PromotionSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <PromotionDesktop></PromotionDesktop>,
    [DEVICES.TABLET]: <PromotionMobile></PromotionMobile>,
    [DEVICES.MOBILE]: <PromotionMobile></PromotionMobile>,
  };
  return renderElement[appDevice.device];
};

export default PromotionSection;
