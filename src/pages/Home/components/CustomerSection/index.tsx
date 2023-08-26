import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import CustomerDesktop from './CustomerDesktop';
import CustomerMobile from './CustomerMobile';

const CustomerSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <CustomerDesktop></CustomerDesktop>,
    [DEVICES.TABLET]: <CustomerMobile></CustomerMobile>,
    [DEVICES.MOBILE]: <CustomerMobile></CustomerMobile>,
  };

  return renderElement[appDevice.device];
};

export default CustomerSection;
