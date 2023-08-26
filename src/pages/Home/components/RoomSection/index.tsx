import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import RoomDesktop from './RoomDesktop';
import RoomMobile from './RoomMobile';

const RoomSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <RoomDesktop></RoomDesktop>,
    [DEVICES.TABLET]: <RoomMobile></RoomMobile>,
    [DEVICES.MOBILE]: <RoomMobile></RoomMobile>,
  };

  return renderElement[appDevice.device];
};

export default RoomSection;
