import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import SignUpDesktop from './SignUpDesktop';
import SignUpMobile from './SignUpMobile';

const SignUpSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <SignUpDesktop></SignUpDesktop>,
    [DEVICES.TABLET]: <SignUpMobile></SignUpMobile>,
    [DEVICES.MOBILE]: <SignUpMobile></SignUpMobile>,
  };

  return renderElement[appDevice.device];
};

export default SignUpSection;
