import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import CollectionDesktop from './CollectionDesktop';
import CollectionMobile from './CollectionMobile';

const CollectionSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <CollectionDesktop></CollectionDesktop>,
    [DEVICES.TABLET]: <CollectionMobile></CollectionMobile>,
    [DEVICES.MOBILE]: <CollectionMobile></CollectionMobile>,
  };
  return renderElement[appDevice.device];
};

export default CollectionSection;
